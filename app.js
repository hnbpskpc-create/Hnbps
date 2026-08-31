let currentType = 'video';
let videoInfo = null;
let socket = null;

// DOM Elements
const videoUrlInput = document.getElementById('video-url');
const analyzeBtn = document.getElementById('analyze-btn');
const loadingSection = document.getElementById('loading');
const resultSection = document.getElementById('result');
const progressSection = document.getElementById('progress-section');
const successSection = document.getElementById('success-section');

const videoThumbnail = document.getElementById('video-thumbnail');
const videoDuration = document.getElementById('video-duration');
const videoTitle = document.getElementById('video-title');
const videoFormatSelect = document.getElementById('video-format');
const audioQualitySelect = document.getElementById('audio-quality');
const videoOptions = document.getElementById('video-options');
const audioOptions = document.getElementById('audio-options');
const downloadBtn = document.getElementById('download-btn');

const tabVideo = document.getElementById('tab-video');
const tabAudio = document.getElementById('tab-audio');

// Progress DOM Elements
const progressStatusTitle = document.getElementById('progress-status-title');
const progressPercent = document.getElementById('progress-percent');
const progressBar = document.getElementById('progress-bar');
const statSpeed = document.getElementById('stat-speed');
const statEta = document.getElementById('stat-eta');
const fileNameSpan = document.getElementById('file-name');

// Success DOM Elements
const successPath = document.getElementById('success-path');
const appSavePath = document.getElementById('app-save-path');

// Analyze Button Click
analyzeBtn.addEventListener('click', async () => {
    const url = videoUrlInput.value.trim();
    if (!url) {
        alert('សូមបញ្ចូល Link វីដេអូជាមុនសិន!');
        return;
    }

    // Reset UI
    hideElement(resultSection);
    hideElement(progressSection);
    hideElement(successSection);
    showElement(loadingSection);
    analyzeBtn.disabled = true;

    try {
        const response = await fetch('/api/info', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ url }),
        });

        const data = await response.json();
        
        if (data.success) {
            videoInfo = data;
            
            // Populate Video Data
            if (videoThumbnail) videoThumbnail.src = data.thumbnail || 'placeholder.jpg';
            if (videoDuration) videoDuration.textContent = data.duration;
            if (videoTitle) videoTitle.textContent = data.title;
            
            // Display save path
            if (appSavePath) appSavePath.textContent = data.download_path;
            if (successPath) successPath.textContent = data.download_path;
            
            // Populate Resolutions
            videoFormatSelect.innerHTML = '';
            data.formats.forEach(f => {
                const option = document.createElement('option');
                option.value = f.format_id;
                option.textContent = `${f.resolution} (${f.ext}) ${f.note ? ' - ' + f.note : ''}`;
                videoFormatSelect.appendChild(option);
            });

            // Show Result Card
            hideElement(loadingSection);
            showElement(resultSection);
            switchType('video'); // default tab
        } else {
            alert(`កំហុស៖ ${data.error}`);
            hideElement(loadingSection);
        }
    } catch (error) {
        console.error(error);
        alert(`មានបញ្ហាក្នុងការភ្ជាប់ទៅកាន់ Server (${error.message || 'សូមសាកល្បងម្ដងទៀត'})!`);
        hideElement(loadingSection);
    } finally {
        analyzeBtn.disabled = false;
    }
});

// Switch between Video and Audio Tabs
function switchType(type) {
    currentType = type;
    if (type === 'video') {
        tabVideo.classList.add('active');
        tabAudio.classList.remove('active');
        showElement(videoOptions);
        hideElement(audioOptions);
    } else {
        tabVideo.classList.remove('active');
        tabAudio.classList.add('active');
        hideElement(videoOptions);
        showElement(audioOptions);
    }
}

// Download Button Click
downloadBtn.addEventListener('click', () => {
    if (!videoInfo) return;

    const url = videoUrlInput.value.trim();
    const format_id = videoFormatSelect.value;
    const quality = audioQualitySelect.value;

    // Reset Progress Bar
    progressBar.style.width = '0%';
    progressPercent.textContent = '0%';
    statSpeed.textContent = '0 MB/s';
    statEta.textContent = '0s';
    fileNameSpan.textContent = 'កំពុងរៀបចំឯកសារ...';
    progressStatusTitle.innerHTML = '<i class="fa-solid fa-circle-notch fa-spin"></i> កំពុងភ្ជាប់ទៅកាន់ Downloader...';

    // Show Progress Section
    showElement(progressSection);
    downloadBtn.disabled = true;

    // Establish WebSocket Connection
    const protocol = window.location.protocol === 'https:' ? 'wss:' : 'ws:';
    const wsUrl = `${protocol}//${window.location.host}/ws/download`;
    
    if (socket) {
        socket.close();
    }

    socket = new WebSocket(wsUrl);

    socket.onopen = () => {
        // Send download config
        const payload = {
            url: url,
            format_id: format_id,
            type: currentType,
            quality: quality
        };
        socket.send(JSON.stringify(payload));
        progressStatusTitle.innerHTML = '<i class="fa-solid fa-cloud-arrow-down fa-bounce"></i> កំពុងចាប់ផ្តើមទាញយក...';
    };

    socket.onmessage = (event) => {
        const data = JSON.parse(event.data);

        if (data.status === 'downloading') {
            progressStatusTitle.innerHTML = '<i class="fa-solid fa-circle-notch fa-spin"></i> កំពុងដោនឡូត...';
            progressBar.style.width = `${data.percent}%`;
            progressPercent.textContent = `${data.percent}%`;
            statSpeed.textContent = data.speed;
            statEta.textContent = data.eta;
            fileNameSpan.textContent = data.filename;
        } 
        else if (data.status === 'processing') {
            progressStatusTitle.innerHTML = '<i class="fa-solid fa-arrows-spin fa-spin"></i> កំពុងភ្ជាប់រូបភាព និងសំឡេង (FFmpeg)...';
            progressBar.style.width = '100%';
            progressPercent.textContent = '99%';
            statSpeed.textContent = 'រង់ចាំការភ្ជាប់...';
            statEta.textContent = 'កំពុងបញ្ចប់...';
            fileNameSpan.textContent = data.filename;
        } 
        else if (data.status === 'success') {
            hideElement(progressSection);
            hideElement(resultSection);
            showElement(successSection);
            downloadBtn.disabled = false;
            socket.close();

            if (data.download_url) {
                const directLink = document.getElementById('direct-download-link');
                if (directLink) {
                    directLink.href = data.download_url;
                    directLink.target = '_blank';
                }
            }
        } 
        else if (data.status === 'error') {
            alert(`ការដោនឡូតបរាជ័យ៖ ${data.message}`);
            hideElement(progressSection);
            downloadBtn.disabled = false;
            socket.close();
        }
    };

    socket.onerror = (error) => {
        console.error(error);
        alert('កំហុស៖ ការតភ្ជាប់ WebSocket ត្រូវបានកាត់ផ្តាច់!');
        hideElement(progressSection);
        downloadBtn.disabled = false;
    };

    socket.onclose = () => {
        console.log('WebSocket closed');
    };
});

// Helper Functions
function showElement(el) {
    el.classList.remove('hidden');
}

function hideElement(el) {
    el.classList.add('hidden');
}

function resetApp() {
    videoUrlInput.value = '';
    hideElement(resultSection);
    hideElement(progressSection);
    hideElement(successSection);
    videoInfo = null;
}

// Cancel Download Event
const cancelDownloadBtn = document.getElementById('cancel-download-btn');
if (cancelDownloadBtn) {
    cancelDownloadBtn.addEventListener('click', () => {
        if (socket) {
            try {
                socket.send(JSON.stringify({ action: 'cancel' }));
            } catch (e) {}
            socket.close();
            socket = null;
        }
        hideElement(progressSection);
        showElement(resultSection);
        downloadBtn.disabled = false;
    });
}
