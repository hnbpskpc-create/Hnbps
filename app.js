/**
 * Core Logic & State Management for Primary School Grading App
 */

// Emergency reset (available immediately)
window.emergencyResetAndReload = function() { localStorage.removeItem('primary_school_grading_state'); location.reload(); };

// Application Default State (seeded if localStorage is empty)
const DEFAULT_STATE = {
    classes: [
        {
            id: "class-1",
            name: "ថ្នាក់ទី១ក",
            teacherName: "អ្នកគ្រូ គង់ សុម៉ាលី",
            subjectIds: ["sub-1", "sub-2", "sub-3", "sub-4"],
            students: [
                { id: "STU001", name: "មុន្នី រតនា", gender: "ស្រី", contact: "012345678" },
                { id: "STU002", name: "ចាន់ សុភ័ក្ត្រ", gender: "ប្រុស", contact: "098765432" },
                { id: "STU003", name: "សុខ ជា", gender: "ប្រុស", contact: "088123456" }
            ]
        },
        {
            id: "class-2",
            name: "ថ្នាក់ទី២ខ",
            teacherName: "លោកគ្រូ ហ៊ឹម សុភ័ក្ត្រ",
            subjectIds: ["sub-1", "sub-2", "sub-3", "sub-4"],
            students: [
                { id: "STU004", name: "គង់ ស្រីលីន", gender: "ស្រី", contact: "099887766" },
                { id: "STU005", name: "លី ម៉េងហុង", gender: "ប្រុស", contact: "077665544" }
            ]
        },
        {
            id: "class-3",
            name: "ថ្នាក់ទី៣ក",
            teacherName: "",
            subjectIds: ["sub-1", "sub-2", "sub-3", "sub-4"],
            students: []
        },
        {
            id: "class-4",
            name: "ថ្នាក់ទី៤ខ",
            teacherName: "",
            subjectIds: ["sub-1", "sub-2", "sub-3", "sub-4"],
            students: []
        }
    ],
    subjects: [
        { id: "sub-1", name: "ភាសាខ្មែរ", nameEn: "Khmer Literature" },
        { id: "sub-2", name: "គណិតវិទ្យា", nameEn: "Mathematics" },
        { id: "sub-3", name: "វិទ្យាសាស្ត្រ", nameEn: "Science" },
        { id: "sub-4", name: "សិក្សាសង្គម", nameEn: "Social Studies" }
    ],
    scores: {
        // Format: studentId: { period: { subjectId: score } }
        "STU001": {
            "oct": { "sub-1": 8.5, "sub-2": 9.0, "sub-3": 8.0, "sub-4": 8.5 },
            "nov": { "sub-1": 9.0, "sub-2": 9.5, "sub-3": 8.5, "sub-4": 9.0 },
            "sem1_exam": { "sub-1": 8.0, "sub-2": 9.0, "sub-3": 8.0, "sub-4": 8.5 },
            "sem2_exam": { "sub-1": 9.0, "sub-2": 9.5, "sub-3": 9.0, "sub-4": 9.0 }
        },
        "STU002": {
            "oct": { "sub-1": 5.5, "sub-2": 6.0, "sub-3": 6.5, "sub-4": 5.0 },
            "nov": { "sub-1": 6.0, "sub-2": 5.5, "sub-3": 7.0, "sub-4": 6.0 },
            "sem1_exam": { "sub-1": 6.0, "sub-2": 6.0, "sub-3": 6.5, "sub-4": 5.5 },
            "sem2_exam": { "sub-1": 6.5, "sub-2": 7.0, "sub-3": 7.0, "sub-4": 6.0 }
        },
        "STU003": {
            "oct": { "sub-1": 4.0, "sub-2": 4.5, "sub-3": 5.0, "sub-4": 4.0 },
            "nov": { "sub-1": 4.5, "sub-2": 4.0, "sub-3": 5.5, "sub-4": 4.5 },
            "sem1_exam": { "sub-1": 4.0, "sub-2": 4.0, "sub-3": 5.0, "sub-4": 4.5 },
            "sem2_exam": { "sub-1": 5.0, "sub-2": 4.5, "sub-3": 5.5, "sub-4": 5.0 }
        },
        "STU004": {
            "oct": { "sub-1": 7.5, "sub-2": 8.0, "sub-3": 7.5, "sub-4": 8.0 },
            "nov": { "sub-1": 8.0, "sub-2": 8.5, "sub-3": 8.0, "sub-4": 8.0 },
            "sem1_exam": { "sub-1": 8.0, "sub-2": 8.0, "sub-3": 7.5, "sub-4": 8.5 }
        },
        "STU005": {
            "oct": { "sub-1": 6.0, "sub-2": 7.0, "sub-3": 6.5, "sub-4": 6.0 },
            "nov": { "sub-1": 6.5, "sub-2": 6.5, "sub-3": 7.0, "sub-4": 6.5 },
            "sem1_exam": { "sub-1": 6.0, "sub-2": 6.5, "sub-3": 6.5, "sub-4": 6.0 }
        }
    },
    language: "km",
    theme: "light",
    currentUser: null,
    messages: [],
    pendingUsers: [],
    teachers: [
        { name: "គ្រូបន្ទុកថ្នាក់", passcode: "teacher123" }
    ]
};

// Global App State
let appState = {};

// Translation dictionary
const translations = {
    km: {
        dashboard: "ផ្ទាំងគ្រប់គ្រង",
        classes: "គ្រប់គ្រងថ្នាក់រៀន",
        subjects: "កំណត់មុខវិជ្ជា",
        scores: "បញ្ចូលពិន្ទុ",
        reports: "របាយការណ៍ពិន្ទុ",
        "academic-reports": "របាយការណ៍សិក្សា",
        settings: "ទិន្នន័យ & ការកំណត់",
        messages: "សារស្នើសុំ",
        users: "គ្រប់គ្រងគណនី",
        total_classes: "ថ្នាក់រៀនសរុប",
        total_students: "សិស្សសរុប",
        total_subjects: "មុខវិជ្ជាសរុប",
        passing_rate: "អត្រាជាប់សរុប",
        top_students: "សិស្សឆ្នើមប្រចាំឆ្នាំ",
        grade_overview: "ទិដ្ឋភាពទូទៅនៃពិន្ទុតាមថ្នាក់",
        pass: "ជាប់",
        fail: "ធ្លាក់",
        female: "ស្រី",
        male: "ប្រុស",
        rank: "ចំណាត់ថ្នាក់",
        average: "មធ្យមភាគ",
        total: "សរុប",
        month_oct: "ខែតុលា",
        month_nov: "ខែវិច្ឆិកា",
        month_dec: "ខែធ្នូ",
        month_jan: "ខែមករា",
        month_feb: "ខែកុម្ភៈ",
        month_mar: "ខែមីនា",
        month_apr: "ខែមេសា",
        month_may: "ខែឧសភា",
        month_jun: "ខែមិថុនា",
        month_jul: "ខែកក្កដា",
        sem1_exam: "ប្រឡងឆមាសទី១",
        sem2_exam: "ប្រឡងឆមាសទី២",
        sem1: "ឆមាសទី១",
        sem2: "ឆមាសទី២",
        yearly: "ប្រចាំឆ្នាំ",
        save_success: "រក្សាទុកពិន្ទុបានជោគជ័យ!",
        invalid_score: "សូមបញ្ចូលពិន្ទុចន្លោះពី ០ ដល់ ១០",
        confirm_delete_class: "តើអ្នកពិតជាចង់លុបថ្នាក់នេះមែនទេ? សិស្ស និងពិន្ទុទាំងអស់ក្នុងថ្នាក់នេះនឹងត្រូវលុបចោល។",
        confirm_reset: "តើអ្នកពិតជាចង់លុបទិន្នន័យទាំងអស់មែនទេ? សកម្មភាពនេះមិនអាចត្រឡប់ថយក្រោយបានទេ។",
        data_reset_success: "បានលុបទិន្នន័យទាំងអស់រួចរាល់!",
        backup_success: "បានទាញយកទិន្នន័យជោគជ័យ!",
        restore_success: "បានស្ដារទិន្នន័យឡើងវិញជោគជ័យ!",
        restore_fail: "ឯកសារមិនត្រឹមត្រូវទេ!"
    },
    en: {
        dashboard: "Dashboard",
        classes: "Manage Classes",
        subjects: "Subjects Config",
        scores: "Enter Scores",
        reports: "Score Reports",
        "academic-reports": "Academic Reports",
        settings: "Data & Settings",
        messages: "Messages Requests",
        users: "User Accounts",
        total_classes: "Total Classes",
        total_students: "Total Students",
        total_subjects: "Total Subjects",
        passing_rate: "Passing Rate",
        top_students: "Top Students of the Year",
        grade_overview: "Class Grade Overview",
        pass: "Pass",
        fail: "Fail",
        female: "Female",
        male: "Male",
        rank: "Rank",
        average: "Average",
        total: "Total",
        month_oct: "October",
        month_nov: "November",
        month_dec: "December",
        month_jan: "January",
        month_feb: "February",
        month_mar: "March",
        month_apr: "April",
        month_may: "May",
        month_jun: "June",
        month_jul: "July",
        sem1_exam: "Semester 1 Exam",
        sem2_exam: "Semester 2 Exam",
        sem1: "Semester 1",
        sem2: "Semester 2",
        yearly: "Yearly",
        save_success: "Scores saved successfully!",
        invalid_score: "Please enter scores between 0 and 10",
        confirm_delete_class: "Are you sure you want to delete this class? All students and scores will be deleted.",
        confirm_reset: "Are you sure you want to erase all data? This action cannot be undone.",
        data_reset_success: "Database wiped successfully!",
        backup_success: "Database backed up successfully!",
        restore_success: "Database restored successfully!",
        restore_fail: "Invalid backup file format!"
    }
};

// ----------------------------------------------------
// STATE MANAGEMENT & LOCALSTORAGE
// ----------------------------------------------------

function loadState() {
    const saved = localStorage.getItem("primary_school_grading_state");
    if (saved) {
        try {
            appState = JSON.parse(saved);
            // Data integrity guards
            if (!Array.isArray(appState.classes)) appState.classes = JSON.parse(JSON.stringify(DEFAULT_STATE.classes));
            if (!Array.isArray(appState.subjects)) appState.subjects = JSON.parse(JSON.stringify(DEFAULT_STATE.subjects));
            if (typeof appState.scores !== 'object' || appState.scores === null) appState.scores = JSON.parse(JSON.stringify(DEFAULT_STATE.scores));
            if (!appState.messages) appState.messages = [];
            if (!appState.pendingUsers) appState.pendingUsers = [];
            if (!appState.teachers) appState.teachers = [{ name: "គ្រូបន្ទុកថ្នាក់", passcode: "teacher123" }];
            if (appState.currentUser === undefined) appState.currentUser = null;
            if (!appState.language) appState.language = 'km';
            if (!appState.theme) appState.theme = 'light';
        } catch (e) {
            console.error("Failed to parse state, resetting to defaults", e);
            localStorage.removeItem("primary_school_grading_state");
            appState = JSON.parse(JSON.stringify(DEFAULT_STATE));
            saveState();
        }
    } else {
        appState = JSON.parse(JSON.stringify(DEFAULT_STATE));
        saveState();
    }
    applyFontFromConfig();
    
    // Set up Google Translate callback check
    if (appState.selectedLanguageCode && appState.selectedLanguageCode !== 'km') {
        window.addEventListener("load", () => {
            setTimeout(() => {
                triggerGoogleTranslate(appState.selectedLanguageCode);
                updateLanguageButtonsUI(appState.selectedLanguageLabel || appState.selectedLanguageCode);
            }, 600);
        });
    }
}

// Emergency reset function
window.emergencyResetAndReload = function() {
    localStorage.removeItem("primary_school_grading_state");
    location.reload();
};

let isSyncing = false;

function saveState() {
    localStorage.setItem("primary_school_grading_state", JSON.stringify(appState));
    
    // Sync data to Firestore if logged in
    if (auth && auth.currentUser && !isSyncing) {
        const dataToSave = {
            classes: appState.classes,
            subjects: appState.subjects,
            scores: appState.scores,
            messages: appState.messages,
            pendingUsers: appState.pendingUsers,
            teachers: appState.teachers
        };
        db.collection('school').doc('appData').set(dataToSave).catch(e => console.error("Firestore sync error:", e));
    }
}

// Global Auth State Listener
auth.onAuthStateChanged(async (user) => {
    if (user) {
        try {
            const userDoc = await db.collection("users").doc(user.uid).get();
            if (userDoc.exists) {
                const userData = userDoc.data();
                if (userData.status === 'pending') {
                    alert(appState.language === 'km' ? 'គណនីរបស់អ្នកកំពុងរង់ចាំការអនុម័ត!' : 'Your account is pending approval!');
                    auth.signOut();
                    return;
                }
                
                appState.currentUser = {
                    uid: user.uid,
                    role: userData.role,
                    name: userData.name,
                    id: userData.role === 'student' ? user.uid : userData.email, // using UID as student ID, or email for teachers
                    classId: userData.classId
                };
                
                // Start real-time sync for global app data
                db.collection('school').doc('appData').onSnapshot(doc => {
                    if (doc.exists) {
                        isSyncing = true;
                        const data = doc.data();
                        appState.classes = data.classes || [];
                        appState.subjects = data.subjects || [];
                        appState.scores = data.scores || {};
                        appState.messages = data.messages || [];
                        appState.pendingUsers = data.pendingUsers || [];
                        appState.teachers = data.teachers || [];
                        localStorage.setItem("primary_school_grading_state", JSON.stringify(appState));
                        isSyncing = false;
                        
                        // Re-render UI if already logged in and visible
                        if (document.getElementById('portalAdmin')?.style.display === 'block') initAdminPortal();
                        if (document.getElementById('portalTeacher')?.style.display === 'block') initTeacherPortal();
                        if (document.getElementById('portalStudent')?.style.display === 'block') initStudentPortal();
                    } else {
                        // If it doesn't exist (first time), save the initial DEFAULT_STATE to Firestore
                        saveState();
                    }
                });
                
                saveState();
                showPortal();
            } else {
                console.warn("No user document found for UID:", user.uid);
                // Assume it's a manually created admin from console
                appState.currentUser = { role: 'admin', uid: user.uid, name: 'Super Admin' };
                saveState();
                showPortal();
            }
        } catch (e) {
            console.error("Auth fetch error:", e);
        }
    } else {
        appState.currentUser = null;
        saveState();
        showPortal(); // Returns to login screen
    }
});

// Helper: Find a student's class
function getStudentClass(studentId) {
    for (let c of appState.classes) {
        if (c.students.some(s => s.id === studentId)) {
            return c;
        }
    }
    return null;
}

// ----------------------------------------------------
// CALCULATIONS & FORMULAS (Standard Cambodian Grading)
// ----------------------------------------------------

/**
 * Calculates a student's average for a specific month
 */
function getStudentMonthlyAverage(studentId, month) {
    const studentScores = appState.scores[studentId]?.[month];
    if (!studentScores) return 0;
    
    const studentClass = getStudentClass(studentId);
    const activeSubjectIds = studentClass && studentClass.subjectIds ? studentClass.subjectIds : appState.subjects.map(s => s.id);
    
    if (activeSubjectIds.length === 0) return 0;
    
    let sum = 0;
    let count = 0;
    
    activeSubjectIds.forEach(subId => {
        const val = studentScores[subId];
        if (val !== undefined && val !== null) {
            sum += parseFloat(val);
            count++;
        }
    });
    
    return count > 0 ? sum / activeSubjectIds.length : 0;
}

/**
 * Calculates average of monthly averages for a student in a range of months
 */
function getMonthlyAverageRange(studentId, months) {
    let sum = 0;
    let count = 0;
    
    months.forEach(m => {
        const avg = getStudentMonthlyAverage(studentId, m);
        if (avg > 0) {
            sum += avg;
            count++;
        }
    });
    
    return count > 0 ? sum / count : 0;
}

/**
 * Semester 1 Average = (Average(Oct-Feb Monthly) + Semester 1 Exam) / 2
 */
function getStudentSem1Average(studentId) {
    const sem1Months = ["oct", "nov", "dec", "jan", "feb"];
    const monthlyAvg = getMonthlyAverageRange(studentId, sem1Months);
    const examScoreObj = appState.scores[studentId]?.["sem1_exam"];
    
    const studentClass = getStudentClass(studentId);
    const activeSubjectIds = studentClass && studentClass.subjectIds ? studentClass.subjectIds : appState.subjects.map(s => s.id);
    
    // Calculate average of exam scores
    let examSum = 0;
    let examCount = 0;
    if (examScoreObj && activeSubjectIds.length > 0) {
        activeSubjectIds.forEach(subId => {
            const val = examScoreObj[subId];
            if (val !== undefined && val !== null) {
                examSum += parseFloat(val);
                examCount++;
            }
        });
    }
    const examAvg = examCount > 0 ? examSum / activeSubjectIds.length : 0;
    
    if (examCount > 0) {
        return monthlyAvg > 0 ? (monthlyAvg + examAvg) / 2 : examAvg;
    }
    return monthlyAvg; // fallback to monthly average if exam is not yet conducted
}

/**
 * Semester 2 Average = (Average(Mar-Jul Monthly) + Semester 2 Exam) / 2
 */
function getStudentSem2Average(studentId) {
    const sem2Months = ["mar", "apr", "may", "jun", "jul"];
    const monthlyAvg = getMonthlyAverageRange(studentId, sem2Months);
    const examScoreObj = appState.scores[studentId]?.["sem2_exam"];
    
    const studentClass = getStudentClass(studentId);
    const activeSubjectIds = studentClass && studentClass.subjectIds ? studentClass.subjectIds : appState.subjects.map(s => s.id);
    
    // Calculate average of exam scores
    let examSum = 0;
    let examCount = 0;
    if (examScoreObj && activeSubjectIds.length > 0) {
        activeSubjectIds.forEach(subId => {
            const val = examScoreObj[subId];
            if (val !== undefined && val !== null) {
                examSum += parseFloat(val);
                examCount++;
            }
        });
    }
    const examAvg = examCount > 0 ? examSum / activeSubjectIds.length : 0;
    
    if (examCount > 0) {
        return monthlyAvg > 0 ? (monthlyAvg + examAvg) / 2 : examAvg;
    }
    return monthlyAvg;
}

/**
 * Yearly Average = (Semester 1 Average + Semester 2 Average) / 2
 */
function getStudentYearlyAverage(studentId) {
    const sem1 = getStudentSem1Average(studentId);
    const sem2 = getStudentSem2Average(studentId);
    
    if (sem1 > 0 && sem2 > 0) {
        return (sem1 + sem2) / 2;
    } else if (sem1 > 0) {
        return sem1; // fallback to sem 1 if sem 2 hasn't occurred yet
    }
    return 0;
}

/**
 * Assigns competition ranks based on sorted scores
 */
function calculateRanks(studentList) {
    // Sort descending by average
    studentList.sort((a, b) => b.average - a.average);
    
    let currentRank = 1;
    for (let i = 0; i < studentList.length; i++) {
        if (i > 0 && studentList[i].average === studentList[i - 1].average) {
            studentList[i].rank = studentList[i - 1].rank;
        } else {
            studentList[i].rank = i + 1;
        }
    }
    return studentList;
}

/**
 * Ranks all students in a class for a specific period
 * period can be: 'oct', 'nov', ..., 'sem1_exam', 'sem2_exam', 'sem1', 'sem2', 'yearly'
 */
function rankStudentsInClass(classId, period) {
    const targetClass = appState.classes.find(c => c.id === classId);
    if (!targetClass) return [];
    
    const studentsData = targetClass.students.map(student => {
        let avg = 0;
        if (["oct","nov","dec","jan","feb","mar","apr","may","jun","jul"].includes(period)) {
            avg = getStudentMonthlyAverage(student.id, period);
        } else if (period === "sem1_exam") {
            const examObj = appState.scores[student.id]?.["sem1_exam"];
            let sum = 0;
            let count = 0;
            if (examObj) {
                appState.subjects.forEach(sub => {
                    if (examObj[sub.id] !== undefined) {
                        sum += parseFloat(examObj[sub.id]);
                        count++;
                    }
                });
            }
            avg = count > 0 ? sum / appState.subjects.length : 0;
        } else if (period === "sem2_exam") {
            const examObj = appState.scores[student.id]?.["sem2_exam"];
            let sum = 0;
            let count = 0;
            if (examObj) {
                appState.subjects.forEach(sub => {
                    if (examObj[sub.id] !== undefined) {
                        sum += parseFloat(examObj[sub.id]);
                        count++;
                    }
                });
            }
            avg = count > 0 ? sum / appState.subjects.length : 0;
        } else if (period === "sem1") {
            avg = getStudentSem1Average(student.id);
        } else if (period === "sem2") {
            avg = getStudentSem2Average(student.id);
        } else if (period === "yearly") {
            avg = getStudentYearlyAverage(student.id);
        }
        
        return {
            student,
            average: parseFloat(avg.toFixed(2)),
            status: avg >= 5.0 ? (appState.language === 'km' ? 'ជាប់' : 'Pass') : (appState.language === 'km' ? 'ធ្លាក់' : 'Fail')
        };
    });
    
    return calculateRanks(studentsData);
}

// ----------------------------------------------------
// UI PRESENTATION & DOM INTERACTIONS
// ----------------------------------------------------

let activeClassId = null;
let loadedScorePeriod = null;
let loadedScoreSubjectId = null;

// Helper: Convert digits to Khmer script digits
function toKhDigits(num) {
    const digitsKh = ["០", "១", "២", "៣", "៤", "៥", "៦", "៧", "៨", "៩"];
    return num.toString().split("").map(digit => digitsKh[parseInt(digit)] || digit).join("");
}

// Initialize dynamic elements and listeners
document.addEventListener("DOMContentLoaded", () => {
    let initFailed = false;
    
    const showEmergencyReset = (label, e) => {
        console.error('[INIT] ' + label + ' failed:', e);
        initFailed = true;
        const banner = document.getElementById('jsErrorBanner');
        if (banner) {
            banner.style.display = 'block';
            banner.textContent = 'Error in ' + label + ': ' + (e && e.message ? e.message : String(e));
        }
        const resetSection = document.getElementById('emergencyResetSection');
        if (resetSection) resetSection.style.display = 'block';
    };
    
    try { loadState(); } catch(e) {
        showEmergencyReset('loadState', e);
        localStorage.removeItem("primary_school_grading_state");
        appState = JSON.parse(JSON.stringify(DEFAULT_STATE));
    }
    try { initDateTime(); } catch(e) { showEmergencyReset('initDateTime', e); }
    try { applyTheme(); } catch(e) { showEmergencyReset('applyTheme', e); }
    try { applyLanguage(); } catch(e) { showEmergencyReset('applyLanguage', e); }
    try { setupNavigation(); } catch(e) { showEmergencyReset('setupNavigation', e); }
    try { setupEventListeners(); } catch(e) { showEmergencyReset('setupEventListeners', e); }
    try { setupLoginEvents(); } catch(e) { showEmergencyReset('setupLoginEvents', e); }
    
    // Show correct portal on startup
    try { showPortal(); } catch(e) { showEmergencyReset('showPortal', e); }
});

function initDateTime() {
    const updateTime = () => {
        const d = new Date();
        const dateEl = document.getElementById("dateTimeString");
        const dashDateEl = document.getElementById("dashDateBanner");
        const dashTimeEl = document.getElementById("dashTimeBanner");
        
        const timeStr = d.toLocaleTimeString('en-US', { hour12: false });
        if (dashTimeEl) dashTimeEl.textContent = timeStr;
        
        let dateStr = "";
        if (appState.language !== 'km') {
            const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
            dateStr = d.toLocaleDateString('en-US', options);
        } else {
            const weekdaysKh = ["ថ្ងៃអាទិត្យ", "ថ្ងៃច័ន្ទ", "ថ្ងៃអង្គារ", "ថ្ងៃពុធ", "ថ្ងៃព្រហស្បតិ៍", "ថ្ងៃសុក្រ", "ថ្ងៃសៅរ៍"];
            const monthsKh = ["មករា", "កុម្ភៈ", "មីនា", "មេសា", "ឧសភា", "មិថុនា", "កក្កដា", "សីហា", "កញ្ញា", "តុលា", "វិច្ឆិកា", "ធ្នូ"];
            
            const weekday = weekdaysKh[d.getDay()];
            const date = toKhDigits(d.getDate());
            const month = monthsKh[d.getMonth()];
            const year = toKhDigits(d.getFullYear());
            
            dateStr = `${weekday} ទី${date} ខែ${month} ឆ្នាំ${year}`;
        }
        
        if (dateEl) dateEl.textContent = dateStr;
        if (dashDateEl) dashDateEl.textContent = dateStr;
    };
    
    updateTime();
    setInterval(updateTime, 1000);
}

// Role Portal Routing & Selection Handling
function selectLoginRole(role) {
    document.getElementById("loginRole").value = role;
    document.getElementById("loginStepRoles").classList.add("hidden");
    
    if (role === 'student') {
        // Seed student class select list
        const classSel = document.getElementById("loginStudentClass");
        classSel.innerHTML = "";
        appState.classes.forEach(c => {
            classSel.innerHTML += `<option value="${c.id}">${c.name}</option>`;
        });
        document.getElementById("loginStepStudent").classList.remove("hidden");
    } else {
        document.getElementById("loginPasscode").value = "";
        document.getElementById("loginStepPasscode").classList.remove("hidden");
    }
}

function goBackToRoles() {
    document.getElementById("loginStepPasscode").classList.add("hidden");
    document.getElementById("loginStepStudent").classList.add("hidden");
    document.getElementById("loginStepRoles").classList.remove("hidden");
    
    const input = document.getElementById("loginPasscode");
    const icon = document.getElementById("togglePasscodeIcon");
    if (input && icon) {
        input.type = "password";
        icon.className = "fa-solid fa-eye";
    }
}

function showPortal() {
    const user = appState.currentUser;
    const loginScreen = document.getElementById("loginScreen");
    const adminTeacherLayout = document.getElementById("adminTeacherLayout");
    const studentPortalLayout = document.getElementById("studentPortalLayout");
    
    if (!user) {
        loginScreen.classList.add("active");
        adminTeacherLayout.style.display = "none";
        studentPortalLayout.style.display = "none";
        return;
    }
    
    loginScreen.classList.remove("active");
    
    if (user.role === 'admin' || user.role === 'teacher') {
        adminTeacherLayout.style.display = "flex";
        studentPortalLayout.style.display = "none";
        
        applyRolePermissions();
        
        renderDashboard();
        renderClassesPanel();
        renderSubjectsPanel();
        initSelectors();
        renderMessagesPanel();
    } else if (user.role === 'student') {
        adminTeacherLayout.style.display = "none";
        studentPortalLayout.style.display = "block";
        
        renderStudentPortal();
    }
}

function applyRolePermissions() {
    const role = appState.currentUser?.role;
    const isTeacher = role === 'teacher';
    
    // Hide delete class button in details view
    const deleteClassBtn = document.getElementById("btnDeleteClass");
    if (deleteClassBtn) {
        deleteClassBtn.style.display = isTeacher ? "none" : "block";
    }
    
    // Hide reset database card in settings
    const resetCard = document.getElementById("btnResetDatabase")?.closest('.card-style');
    if (resetCard) {
        resetCard.style.display = isTeacher ? "none" : "block";
    }
    
    // User Accounts nav controls
    const usersNav = document.getElementById("navItemUsers");
    if (usersNav) {
        usersNav.style.display = isTeacher ? "none" : "flex";
    }
    
    updatePendingUsersBadge();
}

// Sidebar Navigation Toggles
function setupNavigation() {
    const navItems = document.querySelectorAll(".nav-item");
    const tabPanels = document.querySelectorAll(".tab-panel");
    const pageTitle = document.getElementById("pageTitle");

    navItems.forEach(item => {
        item.addEventListener("click", (e) => {
            e.preventDefault();
            const tabId = item.getAttribute("data-tab");
            
            navItems.forEach(nav => nav.classList.remove("active"));
            item.classList.add("active");
            
            tabPanels.forEach(panel => panel.classList.remove("active"));
            const targetPanel = document.getElementById(`${tabId}Panel`);
            if (targetPanel) {
                targetPanel.classList.add("active");
            }
            
            // Update Header Title
            const translationKey = tabId;
            pageTitle.textContent = translations[appState.language][translationKey] || tabId;
            pageTitle.setAttribute("data-km", translations.km[translationKey]);
            pageTitle.setAttribute("data-en", translations.en[translationKey]);

            // Render fresh data on tab open
            if (tabId === "dashboard") renderDashboard();
            if (tabId === "classes") {
                // close class details view first
                document.getElementById("classDetailView").style.display = "none";
                document.getElementById("classesContainer").style.display = "grid";
                renderClassesPanel();
            }
            if (tabId === "subjects") renderSubjectsPanel();
            if (tabId === "scores") initSelectors();
            if (tabId === "reports") {
                initSelectors();
                if (window.goBackToReportDashboard) window.goBackToReportDashboard();
            }
            if (tabId === "academic-reports") {
                initAcadSelectors();
                document.getElementById("acadReportContainer").style.display = "none";
                document.getElementById("acadPlaceholder").style.display = "block";
            }
            if (tabId === "messages") renderMessagesPanel();
            if (tabId === "users") initUserPanel();
        });
    });
}

// Apply theme toggle styles
function applyTheme() {
    document.documentElement.setAttribute("data-theme", appState.theme);
    const themeText = document.querySelector(".toggle-text");
    if (themeText) {
        themeText.textContent = appState.theme === "dark" 
            ? (appState.language === "km" ? "របៀបពន្លឺ" : "Light Mode")
            : (appState.language === "km" ? "របៀបងងឹត" : "Dark Mode");
    }
}

// Translate labels using HTML attributes
function applyLanguage() {
    const translatableElements = document.querySelectorAll("[data-km][data-en]");
    translatableElements.forEach(el => {
        const text = appState.language === "km" ? el.getAttribute("data-km") : el.getAttribute("data-en");
        if (el.tagName === "INPUT" && el.hasAttribute("placeholder")) {
            el.setAttribute("placeholder", text);
        } else {
            // Keep icon inside if any
            const icon = el.querySelector("i");
            if (icon) {
                el.innerHTML = "";
                el.appendChild(icon);
                el.appendChild(document.createTextNode(" " + text));
            } else {
                el.textContent = text;
            }
        }
    });

    const langText = document.querySelector(".lang-text");
    if (langText) {
        langText.textContent = appState.language === "km" ? "English" : "ភាសាខ្មែរ";
    }

    initDateTime();
    
    if (appState.selectedLanguageLabel) {
        updateLanguageButtonsUI(appState.selectedLanguageLabel);
    }
}

// Toast Notifications Helper
function showToast(messageKey, type = "success") {
    const container = document.getElementById("toastContainer");
    const toast = document.createElement("div");
    toast.className = `toast toast-${type}`;
    
    const message = translations[appState.language][messageKey] || messageKey;
    
    let iconClass = "fa-circle-check";
    if (type === "error") iconClass = "fa-circle-xmark";
    if (type === "warning") iconClass = "fa-triangle-exclamation";
    
    toast.innerHTML = `<i class="fa-solid ${iconClass}"></i> <span>${message}</span>`;
    container.appendChild(toast);
    
    setTimeout(() => {
        toast.style.transform = "translateX(120%)";
        toast.style.transition = "transform 0.4s ease";
        setTimeout(() => toast.remove(), 400);
    }, 3000);
}

// ----------------------------------------------------
// DASHBOARD VIEW RENDERING
// ----------------------------------------------------
function renderDashboard() {
    // 1. Update Role Banner
    const roleBanner = document.getElementById("dashRoleBanner");
    if (roleBanner) {
        if (appState.role === "admin") roleBanner.textContent = "ADMIN";
        else if (appState.role === "teacher") roleBanner.textContent = "TEACHER";
        else roleBanner.textContent = "STUDENT";
    }

    // Handle Quick Action Buttons visibility based on role
    const usersBtn = document.getElementById("qaBtnUsers");
    if (usersBtn) {
        usersBtn.style.display = (appState.role === "admin") ? "flex" : "none";
    }

    // 2. Calculate Overall Stats
    let totalStudents = 0;
    appState.classes.forEach(c => totalStudents += c.students.length);
    
    let passingCount = 0;
    let failingCount = 0;
    let totalRanked = 0;
    
    // Arrays for advanced stats
    let allStudentAverages = [];
    let classPassingRates = [];
    
    // Performance Tiers Count
    let excCount = 0; // >= 9.0
    let goodCount = 0; // 7.0 - 8.99
    let avgCount = 0; // 5.0 - 6.99
    let failCount = 0; // < 5.0

    appState.classes.forEach(c => {
        let classPass = 0;
        let classTotal = 0;
        
        if (c.students.length > 0) {
            const ranked = rankStudentsInClass(c.id, "yearly");
            ranked.forEach(r => {
                if (r.average > 0) {
                    totalRanked++;
                    classTotal++;
                    
                    allStudentAverages.push({
                        name: r.student.name,
                        className: c.name,
                        average: r.average
                    });
                    
                    if (r.average >= 5.0) {
                        passingCount++;
                        classPass++;
                    } else {
                        failingCount++;
                    }
                    
                    if (r.average >= 9.0) excCount++;
                    else if (r.average >= 7.0) goodCount++;
                    else if (r.average >= 5.0) avgCount++;
                    else failCount++;
                }
            });
        }
        
        if (classTotal > 0) {
            classPassingRates.push({
                name: c.name,
                rate: (classPass / classTotal) * 100
            });
        }
    });
    
    const passingRate = totalRanked > 0 ? Math.round((passingCount / totalRanked) * 100) : 0;
    
    // 3. Update Banner Circular Chart & Stats
    const dashTotalStus = document.getElementById("dashTotalStus");
    const dashTotalPassed = document.getElementById("dashTotalPassed");
    const dashTotalFailed = document.getElementById("dashTotalFailed");
    const dashPassingText = document.getElementById("dashPassingText");
    const dashPassingCircle = document.getElementById("dashPassingCircle");
    
    if (dashTotalStus) dashTotalStus.textContent = totalStudents;
    if (dashTotalPassed) dashTotalPassed.textContent = passingCount;
    if (dashTotalFailed) dashTotalFailed.textContent = failingCount;
    if (dashPassingText) dashPassingText.textContent = `${passingRate}%`;
    if (dashPassingCircle) dashPassingCircle.style.strokeDasharray = `${passingRate}, 100`;
    
    // 4. Update Summary Cards
    // Top Students (Count of students with avg >= 9.0)
    const sumTopStudentsCount = document.getElementById("sumTopStudentsCount");
    if (sumTopStudentsCount) sumTopStudentsCount.textContent = excCount;
    
    // Best Class (Class with highest passing rate)
    classPassingRates.sort((a, b) => b.rate - a.rate);
    const sumBestClass = document.getElementById("sumBestClass");
    if (sumBestClass) {
        sumBestClass.textContent = classPassingRates.length > 0 ? classPassingRates[0].name : "N/A";
    }
    
    // New Messages (Pending approvals count)
    const sumNewMessages = document.getElementById("sumNewMessages");
    if (sumNewMessages) {
        sumNewMessages.textContent = appState.pendingUsers ? appState.pendingUsers.length : 0;
    }
    
    // Needs Attention (Count of students failing)
    const sumNeedsAttention = document.getElementById("sumNeedsAttention");
    if (sumNeedsAttention) {
        sumNeedsAttention.textContent = failingCount;
    }
    
    // 5. Update Performance Summary Bars
    const perfTotalStudents = document.getElementById("perfTotalStudents");
    if (perfTotalStudents) {
        perfTotalStudents.textContent = `${appState.language === 'km' ? 'សិស្សមានពិន្ទុសរុប៖' : 'Total graded students:'} ${totalRanked}`;
    }
    
    const updatePerfBar = (idSuffix, count, total) => {
        const pct = total > 0 ? Math.round((count / total) * 100) : 0;
        const valEl = document.getElementById(`perfVal${idSuffix}`);
        const circleEl = document.getElementById(`perfCircle${idSuffix}`);
        const totalEl = document.getElementById(`perfTotal${idSuffix}`);
        
        if (valEl) valEl.textContent = count;
        if (totalEl) totalEl.textContent = total;
        if (circleEl) circleEl.textContent = `${pct}%`;
    };
    
    updatePerfBar('Exc', excCount, totalRanked);
    updatePerfBar('Good', goodCount, totalRanked);
    updatePerfBar('Avg', avgCount, totalRanked);
    updatePerfBar('Fail', failCount, totalRanked);
}

// ----------------------------------------------------
// CLASS MANAGEMENT VIEW RENDERING
// ----------------------------------------------------
function renderClassesPanel() {
    const container = document.getElementById("classesContainer");
    container.innerHTML = "";
    
    appState.classes.forEach(c => {
        const studentCount = c.students.length;
        const teacherLabel = appState.language === 'km' ? 'គ្រូ៖' : 'Teacher:';
        const teacherText = c.teacherName || (appState.language === 'km' ? 'មិនទាន់ចាត់តាំង' : 'Not Assigned');
        const card = document.createElement("div");
        card.className = "card-style class-card animate-card";
        card.innerHTML = `
            <div class="class-card-header">
                <h3>${c.name}</h3>
                <span class="class-badge" data-km="${studentCount} នាក់" data-en="${studentCount} Students">${studentCount} នាក់</span>
            </div>
            <div style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 1.25rem; margin-top: -0.5rem;">
                ${teacherLabel} <strong>${teacherText}</strong>
            </div>
            <div class="class-card-stats">
                <div class="class-stat-item">
                    <p data-km="ស្រី" data-en="Female">ស្រី</p>
                    <span>${c.students.filter(s => s.gender === 'ស្រី').length}</span>
                </div>
                <div class="class-stat-item">
                    <p data-km="ប្រុស" data-en="Male">ប្រុស</p>
                    <span>${c.students.filter(s => s.gender === 'ប្រុស').length}</span>
                </div>
                <div class="class-stat-item">
                    <p data-km="ព្រះសង្ឃ" data-en="Monk">ព្រះសង្ឃ</p>
                    <span>${c.students.filter(s => s.gender === 'ព្រះសង្ឃ').length}</span>
                </div>
            </div>
        `;
        
        card.addEventListener("click", () => showClassDetail(c.id));
        container.appendChild(card);
    });
    
    applyLanguage();
}

function showClassDetail(classId) {
    activeClassId = classId;
    const targetClass = appState.classes.find(c => c.id === classId);
    if (!targetClass) return;
    
    document.getElementById("classesContainer").style.display = "none";
    document.getElementById("classDetailView").style.display = "block";
    document.getElementById("currentClassName").textContent = targetClass.name;
    
    const teacherLabel = appState.language === 'km' ? 'គ្រូបន្ទុកថ្នាក់៖' : 'Class Teacher:';
    const teacherVal = targetClass.teacherName || (appState.language === 'km' ? 'មិនទាន់ចាត់តាំង' : 'Not Assigned');
    document.getElementById("currentClassTeacher").textContent = `${teacherLabel} ${teacherVal}`;
    
    renderStudentsList();
}

// Helper: Render subject checkboxes in class modal
function renderSubjectsChecklist(selectedSubjectIds = []) {
    const container = document.getElementById("classSubjectsChecklist");
    if (!container) return;
    
    container.innerHTML = "";
    if (appState.subjects.length === 0) {
        container.innerHTML = `<span style="font-size:0.85rem; color:var(--text-muted);">${appState.language === 'km' ? 'គ្មានមុខវិជ្ជាកំណត់ឡើយ' : 'No subjects configured'}</span>`;
        return;
    }
    
    appState.subjects.forEach(sub => {
        const label = appState.language === 'km' ? sub.name : sub.nameEn;
        const isChecked = selectedSubjectIds.length === 0 || selectedSubjectIds.includes(sub.id);
        
        const labelEl = document.createElement("label");
        labelEl.className = "subject-checkbox-item";
        labelEl.innerHTML = `
            <input type="checkbox" value="${sub.id}" ${isChecked ? "checked" : ""}>
            <span>${label}</span>
        `;
        container.appendChild(labelEl);
    });
}

function renderStudentsList() {
    const targetClass = appState.classes.find(c => c.id === activeClassId);
    const tbody = document.getElementById("studentsTableBody");
    tbody.innerHTML = "";
    
    if (targetClass.students.length === 0) {
        tbody.innerHTML = `<tr><td colspan="6" class="text-center" style="color: var(--text-muted);" data-km="មិនទាន់មានសិស្សក្នុងថ្នាក់នេះទេ" data-en="No students added to this class yet.">មិនទាន់មានសិស្សក្នុងថ្នាក់នេះទេ</td></tr>`;
    } else {
        targetClass.students.forEach((stu, index) => {
            const tr = document.createElement("tr");
            const genText = stu.generation ? stu.generation : "-";
            
            let genderText = "-";
            if (stu.gender === 'ស្រី') {
                genderText = appState.language === 'km' ? 'ស្រី' : 'Female';
            } else if (stu.gender === 'ប្រុស') {
                genderText = appState.language === 'km' ? 'ប្រុស' : 'Male';
            } else if (stu.gender === 'ព្រះសង្ឃ') {
                genderText = appState.language === 'km' ? 'ព្រះសង្ឃ' : 'Monk';
            }
            
            tr.innerHTML = `
                <td>${index + 1}</td>
                <td>${stu.id}</td>
                <td><strong>${stu.name}</strong></td>
                <td>${genderText}</td>
                <td>${stu.contact || "-"}</td>
                <td>${genText}</td>
                <td>
                    <button class="btn btn-icon btn-sm" onclick="editStudent('${stu.id}')" title="Edit"><i class="fa-solid fa-pen"></i></button>
                    ${appState.currentUser?.role === 'teacher' ? '' : `
                    <button class="btn btn-icon btn-sm btn-danger-action" onclick="deleteStudent('${stu.id}')" title="Delete" style="background: rgba(244,63,94,0.1); color: var(--crimson-red);"><i class="fa-solid fa-trash"></i></button>
                    `}
                </td>
            `;
            tbody.appendChild(tr);
        });
    }
    
    applyLanguage();
}

// ----------------------------------------------------
// SUBJECT CONFIGURATION VIEW RENDERING
// ----------------------------------------------------
function renderSubjectsPanel() {
    const tbody = document.getElementById("subjectsTableBody");
    tbody.innerHTML = "";
    
    if (appState.subjects.length === 0) {
        tbody.innerHTML = `<tr><td colspan="4" class="text-center" style="color: var(--text-muted);" data-km="មិនទាន់មានមុខវិជ្ជាបញ្ចូលនៅឡើយ" data-en="No subjects configured yet.">មិនទាន់មានមុខវិជ្ជាបញ្ចូលនៅឡើយ</td></tr>`;
    } else {
        appState.subjects.forEach((sub, index) => {
            const tr = document.createElement("tr");
            tr.innerHTML = `
                <td>${index + 1}</td>
                <td><strong>${sub.name}</strong></td>
                <td>${sub.nameEn}</td>
                <td>
                    <button class="btn btn-icon btn-sm" onclick="editSubject('${sub.id}')" title="Edit"><i class="fa-solid fa-pen"></i></button>
                    ${appState.currentUser?.role === 'teacher' ? '' : `
                    <button class="btn btn-icon btn-sm btn-danger-action" onclick="deleteSubject('${sub.id}')" title="Delete" style="background: rgba(244,63,94,0.1); color: var(--crimson-red);"><i class="fa-solid fa-trash"></i></button>
                    `}
                </td>
            `;
            tbody.appendChild(tr);
        });
    }
    
    applyLanguage();
}

// ----------------------------------------------------
// SELECTORS SEEDING FOR SCORES & REPORTS
// ----------------------------------------------------
function initSelectors() {
    // Score Selectors
    const scoreClassSel = document.getElementById("scoreFilterClass");
    const scoreSubSel = document.getElementById("scoreFilterSubject");
    const scorePeriodSel = document.getElementById("scoreFilterPeriod");
    
    // Report Selectors
    const reportClassSel = document.getElementById("reportFilterClass");
    
    // Preserve current selections
    const currentScoreClass = scoreClassSel ? scoreClassSel.value : null;
    const currentScoreSub = scoreSubSel ? scoreSubSel.value : null;
    const currentScorePeriod = scorePeriodSel ? scorePeriodSel.value : null;
    const currentReportClass = reportClassSel ? reportClassSel.value : null;
    
    // Seed Classes
    if (scoreClassSel) scoreClassSel.innerHTML = "";
    if (reportClassSel) reportClassSel.innerHTML = "";
    
    if (appState.classes.length === 0) {
        const opt = `<option value="" data-km="-- គ្មានថ្នាក់រៀន --" data-en="-- No Classes Available --">-- គ្មានថ្នាក់រៀន --</option>`;
        if (scoreClassSel) scoreClassSel.innerHTML = opt;
        if (reportClassSel) reportClassSel.innerHTML = opt;
    } else {
        appState.classes.forEach(c => {
            const opt = `<option value="${c.id}">${c.name}</option>`;
            if (scoreClassSel) scoreClassSel.innerHTML += opt;
            if (reportClassSel) reportClassSel.innerHTML += opt;
        });
        
        // Restore selections if valid
        if (scoreClassSel && currentScoreClass && appState.classes.find(c => c.id === currentScoreClass)) {
            scoreClassSel.value = currentScoreClass;
        }
        if (reportClassSel && currentReportClass && appState.classes.find(c => c.id === currentReportClass)) {
            reportClassSel.value = currentReportClass;
        }
    }
    
    // Seed Subjects by calling the updater helper
    updateScoreSubjectSelector();
    
    // Try to restore subject selection
    if (scoreSubSel && currentScoreSub) {
        const optionExists = Array.from(scoreSubSel.options).some(opt => opt.value === currentScoreSub);
        if (optionExists) {
            scoreSubSel.value = currentScoreSub;
        }
    }

    if (scorePeriodSel && currentScorePeriod) {
        scorePeriodSel.value = currentScorePeriod;
    }
    
    applyLanguage();
    
    // Auto-fetch data without clicking button if in Score tab
    if (document.getElementById("scoreViewContainer") && document.getElementById("scoreViewContainer").style.display !== "none") {
        if (typeof loadScoreSheet === 'function') loadScoreSheet();
    }
}

// Helper: Filter score entry subjects selector based on selected class
function updateScoreSubjectSelector() {
    const classId = document.getElementById("scoreFilterClass").value;
    const scoreSubSel = document.getElementById("scoreFilterSubject");
    if (!scoreSubSel) return;
    
    scoreSubSel.innerHTML = "";
    
    const targetClass = appState.classes.find(c => c.id === classId);
    const activeSubjects = targetClass && targetClass.subjectIds 
        ? appState.subjects.filter(s => targetClass.subjectIds.includes(s.id))
        : appState.subjects;
        
    if (activeSubjects.length === 0) {
        scoreSubSel.innerHTML = `<option value="" data-km="-- គ្មានមុខវិជ្ជា --" data-en="-- No Subjects Allowed --">-- គ្មានមុខវិជ្ជា --</option>`;
    } else {
        activeSubjects.forEach(sub => {
            const name = appState.language === 'km' ? sub.name : `${sub.name} (${sub.nameEn})`;
            scoreSubSel.innerHTML += `<option value="${sub.id}">${name}</option>`;
        });
    }
}

// ----------------------------------------------------
// SCORE ENTRY ACTIONS
// ----------------------------------------------------
function loadScoreSheet() {
    const classId = document.getElementById("scoreFilterClass").value;
    const period = document.getElementById("scoreFilterPeriod").value;
    const subjectId = document.getElementById("scoreFilterSubject").value;
    
    if (!classId || !period || !subjectId) {
        showToast("invalid_score", "warning");
        return;
    }
    
    loadedScorePeriod = period;
    loadedScoreSubjectId = subjectId;
    
    const targetClass = appState.classes.find(c => c.id === classId);
    const targetSub = appState.subjects.find(s => s.id === subjectId);
    
    if (!targetClass || !targetSub) return;
    
    document.getElementById("scoreSheetPlaceholder").style.display = "none";
    const container = document.getElementById("scoreEntryContainer");
    container.style.display = "block";
    
    // Update titles
    const subName = appState.language === 'km' ? targetSub.name : targetSub.nameEn;
    const periodText = document.getElementById("scoreFilterPeriod").options[document.getElementById("scoreFilterPeriod").selectedIndex].textContent;
    document.getElementById("scoreSheetTitle").textContent = `${appState.language === 'km' ? 'បញ្ចូលពិន្ទុ' : 'Enter Scores'} - ${targetClass.name} [${subName}] (${periodText})`;
    
    const tbody = document.getElementById("scoreSheetTableBody");
    tbody.innerHTML = "";
    
    if (targetClass.students.length === 0) {
        tbody.innerHTML = `<tr><td colspan="5" class="text-center" style="color: var(--text-muted);" data-km="គ្មានសិស្សក្នុងថ្នាក់នេះទេ" data-en="No students in this class.">គ្មានសិស្សក្នុងថ្នាក់នេះទេ</td></tr>`;
        document.getElementById("btnSaveScores").style.display = "none";
    } else {
        document.getElementById("btnSaveScores").style.display = "inline-flex";
        
        targetClass.students.forEach((stu, index) => {
            // Load existing score if any
            const existingVal = appState.scores[stu.id]?.[period]?.[subjectId] ?? "";
            
            let genderText = "-";
            if (stu.gender === 'ស្រី') {
                genderText = appState.language === 'km' ? 'ស្រី' : 'Female';
            } else if (stu.gender === 'ប្រុស') {
                genderText = appState.language === 'km' ? 'ប្រុស' : 'Male';
            } else if (stu.gender === 'ព្រះសង្ឃ') {
                genderText = appState.language === 'km' ? 'ព្រះសង្ឃ' : 'Monk';
            }
            
            const tr = document.createElement("tr");
            tr.innerHTML = `
                <td>${index + 1}</td>
                <td>${stu.id}</td>
                <td><strong>${stu.name}</strong></td>
                <td>${genderText}</td>
                <td>
                    <input type="text" 
                           class="score-input-cell" 
                           data-student-id="${stu.id}" 
                           value="${existingVal}" 
                           placeholder="0.0">
                </td>
            `;
            tbody.appendChild(tr);
        });
        
        // Setup input validation listener
        const inputs = tbody.querySelectorAll(".score-input-cell");
        inputs.forEach(input => {
            input.addEventListener("input", () => {
                // Automatically convert commas to dots for convenience
                let valStr = input.value.replace(",", ".");
                input.value = valStr;
                
                const val = parseFloat(valStr);
                if (valStr !== "" && (isNaN(val) || val < 0 || val > 10 || !/^\d+(\.\d+)?$/.test(valStr))) {
                    input.classList.add("invalid");
                } else {
                    input.classList.remove("invalid");
                }
            });
        });
    }
    
    applyLanguage();
}

function saveScores() {
    if (!loadedScorePeriod || !loadedScoreSubjectId) return;
    const period = loadedScorePeriod;
    const subjectId = loadedScoreSubjectId;
    const inputs = document.querySelectorAll(".score-input-cell");
    
    let hasError = false;
    inputs.forEach(input => {
        let valStr = input.value.trim().replace(",", ".");
        const val = parseFloat(valStr);
        if (valStr !== "" && (isNaN(val) || val < 0 || val > 10 || !/^\d+(\.\d+)?$/.test(valStr))) {
            input.classList.add("invalid");
            hasError = true;
        }
    });
    
    if (hasError) {
        showToast("invalid_score", "error");
        return;
    }
    
    // Save scores into state
    inputs.forEach(input => {
        const studentId = input.getAttribute("data-student-id");
        let valStr = input.value.trim().replace(",", ".");
        
        if (!appState.scores[studentId]) {
            appState.scores[studentId] = {};
        }
        if (!appState.scores[studentId][period]) {
            appState.scores[studentId][period] = {};
        }
        
        if (valStr === "") {
            delete appState.scores[studentId][period][subjectId];
        } else {
            appState.scores[studentId][period][subjectId] = parseFloat(valStr);
        }
    });
    
    saveState();
    showToast("save_success", "success");
}

// ----------------------------------------------------
// SCORE REPORT GENERATION & RENDERING
// ----------------------------------------------------
// Helper functions for Grade Distributions
function getGradeLetter(avg) {
    if (avg >= 9.0) return 'A';
    if (avg >= 8.0) return 'B';
    if (avg >= 7.0) return 'C';
    if (avg >= 6.0) return 'D';
    if (avg >= 5.0) return 'E';
    if (avg >= 4.0) return 'F';
    return 'G';
}

function getGradeLabel(grade, lang = 'km') {
    const labels = {
        'A': { km: 'ល្អប្រសើរ (Excellent)', en: 'Excellent (A)' },
        'B': { km: 'ល្អណាស់ (Very Good)', en: 'Very Good (B)' },
        'C': { km: 'ល្អ (Good)', en: 'Good (C)' },
        'D': { km: 'បង្គួរ (Fair)', en: 'Fair (D)' },
        'E': { km: 'មធ្យម (Average)', en: 'Average (E)' },
        'F': { km: 'ខ្សោយ (Weak)', en: 'Weak (F)' },
        'G': { km: 'ធ្លាក់ (Fail)', en: 'Fail (G)' }
    };
    return labels[grade]?.[lang] || grade;
}

function getGradeColorClass(grade) {
    const classes = {
        'A': 'bg-purple',
        'B': 'bg-blue',
        'C': 'bg-green',
        'D': 'bg-yellow',
        'E': 'bg-orange',
        'F': 'bg-red',
        'G': 'bg-red'
    };
    return classes[grade] || '';
}

window.selectReportType = function(type) {
    const dashboard = document.getElementById("reportDashboardView");
    const filters = document.getElementById("reportFilterView");
    const container = document.getElementById("reportViewContainer");
    
    if (dashboard) dashboard.style.display = "none";
    if (filters) filters.style.display = "block";
    if (container) container.style.display = "none";
    
    // Hide all dynamic filter groups first
    const periodGroup = document.getElementById("reportFilterPeriodGroup");
    const dateGroup = document.getElementById("reportFilterDateGroup");
    const weekGroup = document.getElementById("reportFilterWeekGroup");
    
    if (periodGroup) periodGroup.style.display = "none";
    if (dateGroup) dateGroup.style.display = "none";
    if (weekGroup) weekGroup.style.display = "none";
    
    const periodSelect = document.getElementById("reportFilterPeriod");
    
    if (type === 'daily') {
        if (dateGroup) dateGroup.style.display = "block";
        const today = new Date().toISOString().split('T')[0];
        const dateInput = document.getElementById("reportFilterDate");
        if (dateInput) dateInput.value = today;
        if (periodSelect) periodSelect.value = "daily";
    } else if (type === 'weekly') {
        if (weekGroup) weekGroup.style.display = "block";
        if (periodSelect) periodSelect.value = "weekly";
    } else {
        if (periodGroup) periodGroup.style.display = "block";
        if (periodSelect) {
            if (type === 'monthly') {
                periodSelect.value = "oct";
            } else {
                periodSelect.value = type;
            }
        }
    }
};

window.goBackToReportDashboard = function() {
    const dashboard = document.getElementById("reportDashboardView");
    const filters = document.getElementById("reportFilterView");
    const container = document.getElementById("reportViewContainer");
    
    if (dashboard) dashboard.style.display = "block";
    if (filters) filters.style.display = "none";
    if (container) container.style.display = "none";
};

function renderVisualSummary(rankedData, period, classId) {
    const container = document.getElementById("reportVisualSummary");
    if (!container) return;
    
    container.innerHTML = "";
    
    const isDaily = period === 'daily';
    const isWeekly = period === 'weekly';
    const isKm = appState.language === 'km';
    
    // Daily/Weekly will now use the standard Grade Distribution below.
    const total = rankedData.length;
    if (total === 0) return;
    
    let grades = { A: 0, B: 0, C: 0, D: 0, E: 0, F: 0, G: 0 };
    let passed = 0;
    let sumAvg = 0;
    
    rankedData.forEach(row => {
        sumAvg += row.average;
        if (row.average >= 5.0) passed++;
        
        const g = getGradeLetter(row.average);
        grades[g]++;
    });
    
    const passRate = ((passed / total) * 100).toFixed(0);
    const classAvg = (sumAvg / total).toFixed(2);
    
    // Build distribution bars HTML
    let distHTML = "";
    ['A', 'B', 'C', 'D', 'E', 'F', 'G'].forEach(g => {
        const count = grades[g];
        const pct = ((count / total) * 100).toFixed(0);
        const color = getGradeColorClass(g);
        const label = getGradeLabel(g, appState.language);
        
        distHTML += `
            <div class="distribution-row">
                <div class="distribution-label">${label}</div>
                <div class="distribution-bar-wrapper">
                    <div class="distribution-bar ${color}" style="width: ${pct}%"></div>
                </div>
                <div class="distribution-value">${count} ${isKm ? 'នាក់' : 'students'} (${pct}%)</div>
            </div>
        `;
    });
    
    // Class trend progress HTML
    let progressTrendHTML = "";
    if (period !== 'yearly') {
        const monthsList = ["oct", "nov", "dec", "jan", "feb", "mar", "apr", "may", "jun", "jul"];
        const currentIndex = monthsList.indexOf(period);
        
        if (currentIndex > 0) {
            const prevPeriod = monthsList[currentIndex - 1];
            const prevRanked = rankStudentsInClass(classId, prevPeriod);
            if (prevRanked.length > 0) {
                let prevSum = 0;
                prevRanked.forEach(r => prevSum += r.average);
                const prevClassAvg = (prevSum / prevRanked.length).toFixed(2);
                const diff = (classAvg - prevClassAvg).toFixed(2);
                const sign = diff >= 0 ? "+" : "";
                const colorClass = diff >= 0 ? "text-green" : "text-red";
                progressTrendHTML = `
                    <div class="progress-stat-row">
                        <span class="progress-stat-label">${isKm ? 'មធ្យមភាគថ្នាក់ខែមុន' : 'Previous Month Class Avg'}</span>
                        <span class="progress-stat-value">${prevClassAvg} / 10</span>
                    </div>
                    <div class="progress-stat-row">
                        <span class="progress-stat-label">${isKm ? 'ការប្រៀបធៀបធៀបនឹងខែមុន' : 'Comparison to Prev Month'}</span>
                        <span class="progress-stat-value ${colorClass}" style="font-weight:700;">${sign}${diff}</span>
                    </div>
                `;
            }
        }
    } else {
        let s1Sum = 0, s2Sum = 0;
        rankedData.forEach(row => {
            s1Sum += getStudentSem1Average(row.student.id);
            s2Sum += getStudentSem2Average(row.student.id);
        });
        const s1Avg = (s1Sum / total).toFixed(2);
        const s2Avg = (s2Sum / total).toFixed(2);
        const diff = (s2Avg - s1Avg).toFixed(2);
        const sign = diff >= 0 ? "+" : "";
        const colorClass = diff >= 0 ? "text-green" : "text-red";
        
        progressTrendHTML = `
            <div class="progress-stat-row">
                <span class="progress-stat-label">${isKm ? 'មធ្យមភាគថ្នាក់ ឆមាសទី១' : 'Semester 1 Class Avg'}</span>
                <span class="progress-stat-value">${s1Avg} / 10</span>
            </div>
            <div class="progress-stat-row">
                <span class="progress-stat-label">${isKm ? 'មធ្យមភាគថ្នាក់ ឆមាសទី២' : 'Semester 2 Class Avg'}</span>
                <span class="progress-stat-value">${s2Avg} / 10</span>
            </div>
            <div class="progress-stat-row">
                <span class="progress-stat-label">${isKm ? 'ការរីកចម្រើន (ឆមាសទី២ ធៀបនឹង ឆមាសទី១)' : 'Progress (Sem 2 vs Sem 1)'}</span>
                <span class="progress-stat-value ${colorClass}" style="font-weight:700;">${sign}${diff}</span>
            </div>
        `;
    }
    
    container.innerHTML = `
        <div class="visual-summary-grid">
            <!-- Grade Distribution -->
            <div class="visual-card">
                <div class="visual-card-title">
                    <i class="fa-solid fa-chart-column"></i>
                    <span>${isKm ? 'សង្ខេបពិន្ទុសិស្ស' : 'Class Grade Distribution'}</span>
                </div>
                ${distHTML}
            </div>
            
            <!-- Statistics and Progress -->
            <div class="visual-card">
                <div class="visual-card-title">
                    <i class="fa-solid fa-square-poll-vertical"></i>
                    <span>${isKm ? 'ស្ថិតិលទ្ធផល និងការរីកចម្រើន' : 'Class Stats & Progress'}</span>
                </div>
                <div class="progress-stat-row">
                    <span class="progress-stat-label">${isKm ? 'មធ្យមភាគថ្នាក់សរុប' : 'Class Average Score'}</span>
                    <span class="progress-stat-value" style="color:var(--primary-blue); font-size:1.15rem;">${classAvg} / 10</span>
                </div>
                <div class="progress-stat-row">
                    <span class="progress-stat-label">${isKm ? 'អត្រាប្រឡងជាប់សរុប' : 'Passing Rate'}</span>
                    <span class="progress-stat-value text-green" style="font-size:1.15rem;">${passRate}%</span>
                </div>
                ${progressTrendHTML}
            </div>
        </div>
    `;
}

function generateReport() {
    const classId = document.getElementById("reportFilterClass").value;
    const period = document.getElementById("reportFilterPeriod").value;
    
    if (!classId || !period) return;
    
    const targetClass = appState.classes.find(c => c.id === classId);
    if (!targetClass) return;
    
    document.getElementById("reportPlaceholder").style.display = "none";
    const reportView = document.getElementById("reportViewContainer");
    reportView.style.display = "block";
    
    // Meta values
    const classText = targetClass.name;
    let periodLabel = document.getElementById("reportFilterPeriod").options[document.getElementById("reportFilterPeriod").selectedIndex]?.textContent || period;
    
    const isDaily = period === 'daily';
    const isWeekly = period === 'weekly';
    
    if (isDaily) {
        const dateVal = document.getElementById("reportFilterDate").value;
        periodLabel = appState.language === 'km' ? `ប្រចាំថ្ងៃ៖ ${dateVal}` : `Daily: ${dateVal}`;
    } else if (isWeekly) {
        const weekVal = document.getElementById("reportFilterWeek").options[document.getElementById("reportFilterWeek").selectedIndex]?.textContent || period;
        periodLabel = appState.language === 'km' ? `ប្រចាំសប្តាហ៍៖ ${weekVal}` : `Weekly: ${weekVal}`;
    }
    
    document.getElementById("reportMetaClass").textContent = classText;
    document.getElementById("reportMetaPeriod").textContent = periodLabel;
    
    const teacherNameText = targetClass.teacherName || (appState.language === 'km' ? 'មិនទាន់ចាត់តាំង' : 'Not Assigned');
    document.getElementById("reportMetaTeacher").textContent = teacherNameText;
    document.getElementById("reportPrintTeacherName").textContent = targetClass.teacherName ? (appState.language === 'km' ? `អ្នកគ្រូ/លោកគ្រូ៖ ${targetClass.teacherName}` : `Teacher: ${targetClass.teacherName}`) : "";
    
    const today = new Date();
    document.getElementById("reportMetaDate").textContent = today.toLocaleDateString(appState.language === 'km' ? 'km-KH' : 'en-US');
    
    // Header Label for print
    document.getElementById("reportPrintTitle").textContent = `${appState.language === 'km' ? 'របាយការណ៍លទ្ធផលសិក្សាសិស្ស' : 'Student Grade & Performance Report'}`;
    
    // Removed attendance logic for Daily/Weekly. Reports will now default to score sheets.
    
    // Get Ranks
    const rankedData = rankStudentsInClass(classId, period);
    
    const activeSubjects = targetClass.subjectIds 
        ? appState.subjects.filter(s => targetClass.subjectIds.includes(s.id))
        : appState.subjects;
        
    // Generate Table Header depending on Report type
    const headerRow = document.getElementById("reportTableHeaderRow");
    headerRow.innerHTML = "";
    
    const isMonthlyOrExam = ["oct","nov","dec","jan","feb","mar","apr","may","jun","jul", "sem1_exam", "sem2_exam", "daily", "weekly"].includes(period);
    const isSemester = ["sem1", "sem2"].includes(period);
    const isYearly = period === "yearly";
    
    // Base headers
    let headersHTML = `
        <th style="width: 50px;" data-km="ល.រ" data-en="No.">ល.រ</th>
        <th style="width: 110px;" data-km="លេខសម្គាល់ ឬ ID" data-en="Student ID">លេខសម្គាល់ ឬ ID</th>
        <th data-km="ឈ្មោះសិស្ស" data-en="Name">ឈ្មោះសិស្ស</th>
        <th style="width: 60px; white-space: nowrap;" data-km="ភេទ" data-en="Gender">ភេទ</th>
    `;
    
    if (isMonthlyOrExam) {
        activeSubjects.forEach(sub => {
            const name = sub.name;
            headersHTML += `<th>${name}</th>`;
        });
    } else if (isSemester) {
        const months = period === "sem1" ? ["oct", "nov", "dec", "jan", "feb"] : ["mar", "apr", "may", "jun", "jul"];
        months.forEach(m => {
            const key = `month_${m}`;
            const label = translations[appState.language][key];
            headersHTML += `<th>${label}</th>`;
        });
        headersHTML += `<th data-km="ប្រឡងឆមាស" data-en="Exam Score">ប្រឡងឆមាស</th>`;
    } else if (isYearly) {
        headersHTML += `
            <th data-km="ឆមាសទី១" data-en="Semester 1">ឆមាសទី១</th>
            <th data-km="ឆមាសទី២" data-en="Semester 2">ឆមាសទី២</th>
        `;
    }
    
    // Common endings
    headersHTML += `
        <th style="width: 80px;" data-km="សរុប" data-en="Total">សរុប</th>
        <th style="width: 80px;" data-km="មធ្យមភាគ" data-en="Average">មធ្យមភាគ</th>
        <th style="width: 80px;" data-km="ចំណាត់ថ្នាក់" data-en="Rank">ចំណាត់ថ្នាក់</th>
        <th style="width: 85px;" data-km="លទ្ធផល" data-en="Result">លទ្ធផល</th>
    `;
    
    headerRow.innerHTML = headersHTML;
    
    // Render rows
    const tbody = document.getElementById("reportTableBody");
    tbody.innerHTML = "";
    
    if (rankedData.length === 0) {
        const colSpan = isMonthlyOrExam ? 8 + appState.subjects.length : (isSemester ? 14 : 10);
        tbody.innerHTML = `<tr><td colspan="${colSpan}" class="text-center" data-km="គ្មានទិន្នន័យដើម្បីបង្ហាញ" data-en="No records available to display.">គ្មានទិន្នន័យដើម្បីបង្ហាញ</td></tr>`;
    } else {
        rankedData.forEach(row => {
            const stu = row.student;
            let genderText = stu.gender || "";
            if (appState.language === 'en') {
                if (stu.gender === 'ស្រី') genderText = 'Female';
                else if (stu.gender === 'ប្រុស') genderText = 'Male';
                else if (stu.gender === 'ព្រះសង្ឃ') genderText = 'Monk';
            }
            let cellsHTML = `
                <td>${row.rank}</td>
                <td>${stu.id}</td>
                <td class="text-left"><strong>${stu.name}</strong></td>
                <td style="white-space: nowrap;">${genderText}</td>
            `;
            
            let total = 0;
            
            if (isMonthlyOrExam) {
                const studentScores = appState.scores[stu.id]?.[period] || {};
                activeSubjects.forEach(sub => {
                    const val = studentScores[sub.id];
                    const printVal = (val !== undefined && val !== null) ? val.toFixed(1) : "-";
                    if (val !== undefined) total += parseFloat(val);
                    cellsHTML += `<td>${printVal}</td>`;
                });
            } else if (isSemester) {
                const months = period === "sem1" ? ["oct", "nov", "dec", "jan", "feb"] : ["mar", "apr", "may", "jun", "jul"];
                let mAvgSum = 0;
                let activeMonths = 0;
                
                months.forEach(m => {
                    const mAvg = getStudentMonthlyAverage(stu.id, m);
                    cellsHTML += `<td>${mAvg > 0 ? mAvg.toFixed(2) : "-"}</td>`;
                    if (mAvg > 0) {
                        mAvgSum += mAvg;
                        activeMonths++;
                    }
                });
                
                const examKey = period === "sem1" ? "sem1_exam" : "sem2_exam";
                const examScoreObj = appState.scores[stu.id]?.[examKey];
                let examSum = 0;
                let examCount = 0;
                if (examScoreObj && activeSubjects.length > 0) {
                    activeSubjects.forEach(sub => {
                        const val = examScoreObj[sub.id];
                        if (val !== undefined) {
                            examSum += parseFloat(val);
                            examCount++;
                        }
                    });
                }
                const examAvg = examCount > 0 ? examSum / activeSubjects.length : 0;
                cellsHTML += `<td>${examCount > 0 ? examAvg.toFixed(2) : "-"}</td>`;
                
                const monthlyAvgAvg = activeMonths > 0 ? mAvgSum / activeMonths : 0;
                total = monthlyAvgAvg + examAvg;
            } else if (isYearly) {
                const s1 = getStudentSem1Average(stu.id);
                const s2 = getStudentSem2Average(stu.id);
                cellsHTML += `<td>${s1 > 0 ? s1.toFixed(2) : "-"}</td>`;
                cellsHTML += `<td>${s2 > 0 ? s2.toFixed(2) : "-"}</td>`;
                total = s1 + s2;
            }
            
            const displayTotal = total.toFixed(2);
            const displayAvg = row.average.toFixed(2);
            const statusClass = row.average >= 5.0 ? "badge-pass" : "badge-fail";
            
            cellsHTML += `
                <td><strong>${displayTotal}</strong></td>
                <td><span style="color: var(--primary-blue); font-weight:700;">${displayAvg}</span></td>
                <td><strong>${row.rank}</strong></td>
                <td><span class="badge ${statusClass}">${row.status}</span></td>
            `;
            
            const tr = document.createElement("tr");
            tr.innerHTML = cellsHTML;
            tbody.appendChild(tr);
        });
    }
    
    // Render visual summary
    renderVisualSummary(rankedData, period, classId);
    
    applyLanguage();
}

// Export CSV Function
function exportReportCSV() {
    const table = document.getElementById("reportResultTable");
    if (!table) return;
    
    let csv = [];
    // Get headers
    const headers = [];
    const ths = table.querySelectorAll("thead th");
    ths.forEach(th => headers.push(th.textContent.trim()));
    csv.push(headers.join(","));
    
    // Get rows
    const trs = table.querySelectorAll("tbody tr");
    trs.forEach(tr => {
        const row = [];
        const tds = tr.querySelectorAll("td");
        tds.forEach(td => {
            let val = td.textContent.trim().replace(/"/g, '""');
            row.push(`"${val}"`);
        });
        csv.push(row.join(","));
    });
    
    // Download File using Blob
    const csvContent = "\uFEFF" + csv.join("\r\n");
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    
    const className = document.getElementById("reportFilterClass").options[document.getElementById("reportFilterClass").selectedIndex]?.textContent || "Class";
    const periodName = document.getElementById("reportFilterPeriod").options[document.getElementById("reportFilterPeriod").selectedIndex]?.textContent || "Period";
    
    link.setAttribute("download", `Grade_Report_${className.replace(/\s+/g, '_')}_${periodName.replace(/\s+/g, '_')}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
}

// ----------------------------------------------------
// ACADEMIC REPORTS & GOOGLE SHEETS INTEGRATION
// ----------------------------------------------------
function initAcadSelectors() {
    const acadClassSel = document.getElementById("acadFilterClass");
    if (!acadClassSel) return;
    
    const currentAcadClass = acadClassSel.value;
    const acadPeriodSel = document.getElementById("acadFilterPeriod");
    const currentAcadPeriod = acadPeriodSel ? acadPeriodSel.value : null;
    
    acadClassSel.innerHTML = "";
    if (appState.classes.length === 0) {
        const opt = `<option value="" data-km="-- គ្មានថ្នាក់រៀន --" data-en="-- No Classes Available --">-- គ្មានថ្នាក់រៀន --</option>`;
        acadClassSel.innerHTML = opt;
    } else {
        appState.classes.forEach(c => {
            const opt = `<option value="${c.id}">${c.name}</option>`;
            acadClassSel.innerHTML += opt;
        });
        
        if (currentAcadClass && appState.classes.find(c => c.id === currentAcadClass)) {
            acadClassSel.value = currentAcadClass;
        }
    }
    
    if (acadPeriodSel && currentAcadPeriod) {
        acadPeriodSel.value = currentAcadPeriod;
    }
    
    if (document.getElementById("acadReportContainer") && document.getElementById("acadReportContainer").style.display !== "none") {
        if (typeof generateAcademicReport === 'function') generateAcademicReport();
    }
    
    // Also load Google Sheets URL
    const urlInput = document.getElementById("googleSheetsUrlInput");
    if (urlInput) {
        urlInput.value = appState.googleSheetsUrl || "";
    }
    
    // Seed Google Apps Script code template
    const templateTextarea = document.getElementById("appsScriptTemplateCode");
    if (templateTextarea) {
        templateTextarea.value = `/* 
Google Apps Script to integrate primary school grading app with Google Sheets.
Paste this script in Extensions > Apps Script of your spreadsheet and click Deploy > New Deployment (Web App).
*/
function doPost(e) {
  try {
    var data = JSON.parse(e.postData.contents);
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // Clear and build headers
    sheet.clear();
    sheet.appendRow(["ល.រ (No.)", "លេខសម្គាល់ (Student ID)", "ឈ្មោះសិស្ស (Name)", "ភេទ (Gender)", "ថ្នាក់ (Class)", "មធ្យមភាគ (Average)", "និទ្ទេស (Grade)", "លទ្ធផល (Result)"]);
    
    var rowIndex = 1;
    data.classes.forEach(function(c) {
      c.students.forEach(function(stu) {
        // Calculate average
        var scores = data.scores[stu.id] || {};
        var sum = 0;
        var count = 0;
        
        // Loop over months and subjects to write a simple average
        Object.keys(scores).forEach(function(p) {
          Object.keys(scores[p]).forEach(function(subId) {
            sum += parseFloat(scores[p][subId]);
            count++;
          });
        });
        
        var avg = count > 0 ? (sum / count) : 0;
        var grade = "F";
        if (avg >= 9.0) grade = "A";
        else if (avg >= 8.0) grade = "B";
        else if (avg >= 6.5) grade = "C";
        else if (avg >= 5.0) grade = "D";
        else if (avg >= 3.5) grade = "E";
        
        var result = avg >= 5.0 ? "ជាប់ (Pass)" : "ធ្លាក់ (Fail)";
        
        sheet.appendRow([rowIndex++, stu.id, stu.name, stu.gender, c.name, avg.toFixed(2), grade, result]);
      });
    });
    
    return ContentService.createTextOutput(JSON.stringify({status: "success", message: "Data synced successfully!"}))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({status: "error", message: error.toString()}))
      .setMimeType(ContentService.MimeType.JSON);
  }
}`;
    }
}

function generateAcademicReport() {
    const classId = document.getElementById("acadFilterClass").value;
    const period = document.getElementById("acadFilterPeriod").value;
    
    if (!classId || !period) return;
    
    const targetClass = appState.classes.find(c => c.id === classId);
    if (!targetClass) return;
    
    document.getElementById("acadPlaceholder").style.display = "none";
    document.getElementById("acadReportContainer").style.display = "block";
    
    // Meta values
    const classText = targetClass.name;
    const periodLabel = document.getElementById("acadFilterPeriod").options[document.getElementById("acadFilterPeriod").selectedIndex]?.textContent || period;
    
    document.getElementById("acadMetaClass").textContent = classText;
    document.getElementById("acadMetaPeriod").textContent = periodLabel;
    
    const teacherNameText = targetClass.teacherName || (appState.language === 'km' ? 'មិនទាន់ចាត់តាំង' : 'Not Assigned');
    document.getElementById("acadMetaTeacher").textContent = teacherNameText;
    document.getElementById("acadPrintTeacherName").textContent = targetClass.teacherName ? (appState.language === 'km' ? `អ្នកគ្រូ/លោកគ្រូ៖ ${targetClass.teacherName}` : `Teacher: ${targetClass.teacherName}`) : "";
    
    const today = new Date();
    document.getElementById("acadMetaDate").textContent = today.toLocaleDateString(appState.language === 'km' ? 'km-KH' : 'en-US');
    
    // Get Ranks
    const rankedData = rankStudentsInClass(classId, period);
    
    // Render rows
    const tbody = document.getElementById("acadTableBody");
    tbody.innerHTML = "";
    
    if (rankedData.length === 0) {
        tbody.innerHTML = `<tr><td colspan="8" class="text-center" data-km="គ្មានទិន្នន័យដើម្បីបង្ហាញ" data-en="No records available to display.">គ្មានទិន្នន័យដើម្បីបង្ហាញ</td></tr>`;
    } else {
        rankedData.forEach(row => {
            const stu = row.student;
            let genderText = stu.gender || "";
            if (appState.language === 'en') {
                if (stu.gender === 'ស្រី') genderText = 'Female';
                else if (stu.gender === 'ប្រុស') genderText = 'Male';
            }
            
            const displayAvg = row.average.toFixed(2);
            const statusClass = row.average >= 5.0 ? "badge-pass" : "badge-fail";
            const gradeLetter = getGradeLetter(row.average);
            const gradeLabelText = getGradeLabel(gradeLetter, appState.language);
            
            const tr = document.createElement("tr");
            tr.innerHTML = `
                <td>${row.rank}</td>
                <td>${stu.id}</td>
                <td class="text-left"><strong>${stu.name}</strong></td>
                <td style="white-space: nowrap;">${genderText}</td>
                <td><span style="color: var(--primary-blue); font-weight:700;">${displayAvg}</span></td>
                <td><span class="badge ${getGradeColorClass(gradeLetter)}">${gradeLabelText}</span></td>
                <td><span class="badge ${statusClass}">${row.status}</span></td>
                <td><strong>${row.rank}</strong></td>
            `;
            tbody.appendChild(tr);
        });
    }
    
    applyLanguage();
}

function saveSheetsUrl() {
    const url = document.getElementById("googleSheetsUrlInput").value.trim();
    appState.googleSheetsUrl = url;
    saveState();
    showToast(appState.language === 'km' ? 'រក្សាទុក URL ជោគជ័យ!' : 'URL saved successfully!', 'success');
}

async function syncToGoogleSheets() {
    const url = document.getElementById("googleSheetsUrlInput").value.trim();
    if (!url) {
        showToast(appState.language === 'km' ? 'សូមបញ្ចូល Web App URL ជាមុនសិន' : 'Please input Web App URL first', 'error');
        return;
    }
    
    showToast(appState.language === 'km' ? 'កំពុង Sync ទៅកាន់ Google Sheets...' : 'Syncing to Google Sheets...', 'info');
    
    try {
        const response = await fetch(url, {
            method: 'POST',
            mode: 'no-cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(appState)
        });
        
        showToast(appState.language === 'km' ? 'Sync ទៅកាន់ Google Sheets បានជោគជ័យ!' : 'Sync to Google Sheets successful!', 'success');
    } catch (e) {
        console.error("Sheets Sync Error: ", e);
        showToast(appState.language === 'km' ? 'ការ Sync បានបរាជ័យ៖ ' + e.message : 'Sync failed: ' + e.message, 'error');
    }
}

// ----------------------------------------------------
// DATABASE & FILE UTILITIES
// ----------------------------------------------------
function exportDatabase() {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(appState, null, 2));
    const dlAnchorElem = document.createElement('a');
    dlAnchorElem.setAttribute("href", dataStr);
    dlAnchorElem.setAttribute("download", `Primary_School_Grading_Backup_${new Date().toISOString().slice(0,10)}.json`);
    dlAnchorElem.click();
    showToast("backup_success", "success");
}

function importDatabase(event) {
    const file = event.target.files[0];
    if (!file) return;
    
    const reader = new FileReader();
    reader.onload = function(e) {
        try {
            const parsed = JSON.parse(e.target.result);
            // Basic structures check
            if (parsed.classes && parsed.subjects && parsed.scores) {
                appState = parsed;
                saveState();
                showToast("restore_success", "success");
                setTimeout(() => location.reload(), 1000);
            } else {
                showToast("restore_fail", "error");
            }
        } catch (err) {
            showToast("restore_fail", "error");
        }
    };
    reader.readAsText(file);
}

function resetDatabase() {
    if (confirm(translations[appState.language].confirm_reset)) {
        appState = {
            classes: [],
            subjects: [],
            scores: {},
            messages: [],
            currentUser: null,
            language: 'km',
            theme: 'light',
            selectedLanguageCode: null,
            selectedLanguageLabel: null,
            fontConfig: null
        };
        saveState();
        showToast("data_reset_success", "success");
        setTimeout(() => location.reload(), 1000);
    }
}

// ----------------------------------------------------
// COMPONENT CRUD ACTIONS (CLASSES, STUDENTS, SUBJECTS)
// ----------------------------------------------------

// Class Actions
function addNewClass(name, teacherName, subjectIds) {
    const id = `class-${Date.now()}`;
    appState.classes.push({
        id,
        name,
        teacherName: teacherName || "",
        subjectIds: subjectIds || appState.subjects.map(s => s.id),
        students: []
    });
    saveState();
    renderClassesPanel();
    initSelectors();
}

function deleteActiveClass() {
    if (appState.currentUser?.role === 'teacher') return;
    if (confirm(translations[appState.language].confirm_delete_class)) {
        appState.classes = appState.classes.filter(c => c.id !== activeClassId);
        saveState();
        
        // Back to classes panel
        document.getElementById("classDetailView").style.display = "none";
        document.getElementById("classesContainer").style.display = "grid";
        renderClassesPanel();
        initSelectors();
    }
}

// Student Actions
function saveStudent(id, name, gender, contact, generation) {
    const targetClass = appState.classes.find(c => c.id === activeClassId);
    if (!targetClass) return;
    
    const studentEditId = document.getElementById("studentEditId").value;
    
    if (studentEditId) {
        // Edit mode
        const student = targetClass.students.find(s => s.id === studentEditId);
        if (student) {
            student.name = name;
            student.gender = gender;
            student.contact = contact;
            student.generation = generation || "";
        }
    } else {
        // Create mode
        const studentId = id || `STU${Math.floor(1000 + Math.random() * 9000)}`;
        targetClass.students.push({
            id: studentId,
            name,
            gender,
            contact,
            generation: generation || ""
        });
    }
    
    saveState();
    renderStudentsList();
}

function editStudent(studentId) {
    const targetClass = appState.classes.find(c => c.id === activeClassId);
    const stu = targetClass.students.find(s => s.id === studentId);
    if (!stu) return;
    
    document.getElementById("studentEditId").value = stu.id;
    document.getElementById("studentIdInput").value = stu.id;
    document.getElementById("studentIdInput").disabled = true;
    document.getElementById("studentNameInput").value = stu.name;
    document.getElementById("studentGenderInput").value = stu.gender;
    document.getElementById("studentContactInput").value = stu.contact || "";
    document.getElementById("studentGenerationInput").value = stu.generation || "";
    
    // Open Modal
    document.getElementById("addStudentModal").classList.add("active");
}

function deleteStudent(studentId) {
    if (appState.currentUser?.role === 'teacher') return;
    if (confirm(appState.language === 'km' ? "តើអ្នកចង់លុបសិស្សនេះមែនទេ?" : "Are you sure you want to delete this student?")) {
        const targetClass = appState.classes.find(c => c.id === activeClassId);
        if (targetClass) {
            targetClass.students = targetClass.students.filter(s => s.id !== studentId);
            
            // Also delete their scores to keep state clean
            delete appState.scores[studentId];
            
            saveState();
            renderStudentsList();
        }
    }
}

// Subject Actions
function saveSubject(name, nameEn) {
    const editId = document.getElementById("editSubjectId").value;
    
    if (editId) {
        const sub = appState.subjects.find(s => s.id === editId);
        if (sub) {
            sub.name = name;
            sub.nameEn = nameEn;
        }
    } else {
        const id = `sub-${Date.now()}`;
        appState.subjects.push({ id, name, nameEn });
    }
    
    saveState();
    renderSubjectsPanel();
    initSelectors();
}

function editSubject(subjectId) {
    const sub = appState.subjects.find(s => s.id === subjectId);
    if (!sub) return;
    
    document.getElementById("editSubjectId").value = sub.id;
    document.getElementById("subjectName").value = sub.name;
    document.getElementById("subjectNameEn").value = sub.nameEn;
    
    document.getElementById("subjectFormTitle").textContent = appState.language === 'km' ? 'កែសម្រួលមុខវិជ្ជា' : 'Edit Subject';
    document.getElementById("btnCancelSubjectEdit").classList.remove("hidden");
    
    applyLanguage();
}

function deleteSubject(subjectId) {
    if (appState.currentUser?.role === 'teacher') return;
    if (confirm(appState.language === 'km' ? "តើអ្នកចង់លុបមុខវិជ្ជានេះមែនទេ? ពិន្ទុដែលពាក់ព័ន្ធទាំងអស់នឹងត្រូវលុប។" : "Are you sure you want to delete this subject? All associated scores will be lost.")) {
        appState.subjects = appState.subjects.filter(s => s.id !== subjectId);
        
        // Clean scores of this subject
        Object.keys(appState.scores).forEach(stuId => {
            Object.keys(appState.scores[stuId]).forEach(period => {
                delete appState.scores[stuId][period][subjectId];
            });
        });
        
        saveState();
        renderSubjectsPanel();
        initSelectors();
    }
}

// ----------------------------------------------------
// UI EVENT LISTENERS
// ----------------------------------------------------
function setupEventListeners() {
    const safeBind = (id, event, callback) => {
        const el = document.getElementById(id);
        if (el) el.addEventListener(event, callback);
        else console.warn("safeBind: Element not found ->", id);
    };
    
    // Theme Toggle
    document.getElementById("themeToggleBtn").addEventListener("click", () => {
        appState.theme = appState.theme === "light" ? "dark" : "light";
        saveState();
        applyTheme();
    });

    // Language Toggle (Searchable Modal)
    document.getElementById("langToggleBtn").addEventListener("click", () => {
        document.getElementById("languageSearchInput").value = "";
        initLanguageSelector();
        document.getElementById("languageSelectModal").classList.add("active");
    });

    // Modal Control: Close buttons
    const closeBtns = document.querySelectorAll(".close-btn, .close-btn-action");
    closeBtns.forEach(btn => {
        btn.addEventListener("click", (e) => {
            e.preventDefault();
            document.querySelectorAll(".modal").forEach(m => m.classList.remove("active"));
        });
    });

    // Create Class Modal Open
    document.getElementById("btnOpenAddClassModal").addEventListener("click", () => {
        document.getElementById("addClassForm").reset();
        document.getElementById("editClassId").value = "";
        renderSubjectsChecklist([]); // check all by default
        document.getElementById("addClassModalTitle").textContent = appState.language === 'km' ? 'បង្កើតថ្នាក់ថ្មី' : 'Create New Class';
        document.getElementById("btnSubmitClassForm").textContent = appState.language === 'km' ? 'បង្កើតថ្នាក់' : 'Create Class';
        document.getElementById("addClassModal").classList.add("active");
    });

    // Edit Class Modal Open
    document.getElementById("btnEditClass").addEventListener("click", () => {
        const targetClass = appState.classes.find(c => c.id === activeClassId);
        if (!targetClass) return;
        
        document.getElementById("editClassId").value = targetClass.id;
        document.getElementById("newClassName").value = targetClass.name;
        document.getElementById("newClassTeacherName").value = targetClass.teacherName || "";
        renderSubjectsChecklist(targetClass.subjectIds || []);
        
        document.getElementById("addClassModalTitle").textContent = appState.language === 'km' ? 'កែសម្រួលថ្នាក់រៀន' : 'Edit Class';
        document.getElementById("btnSubmitClassForm").textContent = appState.language === 'km' ? 'រក្សាទុក' : 'Save Changes';
        
        document.getElementById("addClassModal").classList.add("active");
    });
    
    document.getElementById("addClassForm").addEventListener("submit", (e) => {
        e.preventDefault();
        const id = document.getElementById("editClassId").value;
        const name = document.getElementById("newClassName").value.trim();
        const teacherName = document.getElementById("newClassTeacherName").value.trim();
        
        const checkedCheckboxes = document.querySelectorAll("#classSubjectsChecklist input[type='checkbox']:checked");
        const subjectIds = Array.from(checkedCheckboxes).map(cb => cb.value);
        
        if (name) {
            if (id) {
                // Edit mode
                const targetClass = appState.classes.find(c => c.id === id);
                if (targetClass) {
                    targetClass.name = name;
                    targetClass.teacherName = teacherName;
                    targetClass.subjectIds = subjectIds;
                }
            } else {
                // Create mode
                addNewClass(name, teacherName, subjectIds);
            }
            saveState();
            renderClassesPanel();
            initSelectors();
            
            if (id && activeClassId === id) {
                showClassDetail(id);
            }
            
            document.getElementById("addClassModal").classList.remove("active");
        }
    });

    // Back to Classes List
    document.getElementById("btnBackToClasses").addEventListener("click", () => {
        activeClassId = null;
        document.getElementById("classDetailView").style.display = "none";
        document.getElementById("classesContainer").style.display = "grid";
        renderClassesPanel();
    });

    // Delete Class
    document.getElementById("btnDeleteClass").addEventListener("click", deleteActiveClass);

    // Create Student Modal
    const openStudentModal = () => {
        document.getElementById("addStudentForm").reset();
        document.getElementById("studentEditId").value = "";
        document.getElementById("studentIdInput").disabled = false;
        document.getElementById("addStudentModal").classList.add("active");
    };
    
    document.getElementById("btnOpenAddStudentModal").addEventListener("click", openStudentModal);
    const btnDashAddUser = document.getElementById("btnDashAddUser");
    if (btnDashAddUser) btnDashAddUser.addEventListener("click", () => {
        if (typeof window.openRegisterUserModal === 'function') window.openRegisterUserModal();
    });

    document.getElementById("addStudentForm").addEventListener("submit", (e) => {
        e.preventDefault();
        const id = document.getElementById("studentIdInput").value.trim();
        const name = document.getElementById("studentNameInput").value.trim();
        const gender = document.getElementById("studentGenderInput").value;
        const contact = document.getElementById("studentContactInput").value.trim();
        const generation = document.getElementById("studentGenerationInput").value.trim();
        
        if (name) {
            saveStudent(id, name, gender, contact, generation);
            document.getElementById("addStudentModal").classList.remove("active");
        }
    });

    // Save Subject Form
    document.getElementById("subjectForm").addEventListener("submit", (e) => {
        e.preventDefault();
        const name = document.getElementById("subjectName").value.trim();
        const nameEn = document.getElementById("subjectNameEn").value.trim();
        
        if (name && nameEn) {
            saveSubject(name, nameEn);
            document.getElementById("subjectForm").reset();
            document.getElementById("editSubjectId").value = "";
            document.getElementById("subjectFormTitle").textContent = appState.language === 'km' ? 'បន្ថែមមុខវិជ្ជាថ្មី' : 'Add New Subject';
            document.getElementById("btnCancelSubjectEdit").classList.add("hidden");
            applyLanguage();
        }
    });

    // Cancel Subject Edit
    document.getElementById("btnCancelSubjectEdit").addEventListener("click", () => {
        document.getElementById("subjectForm").reset();
        document.getElementById("editSubjectId").value = "";
        document.getElementById("subjectFormTitle").textContent = appState.language === 'km' ? 'បន្ថែមមុខវិជ្ជាថ្មី' : 'Add New Subject';
        document.getElementById("btnCancelSubjectEdit").classList.add("hidden");
        applyLanguage();
    });

    // Load Score Sheet
    document.getElementById("scoreFilterClass").addEventListener("change", () => {
        updateScoreSubjectSelector();
        loadScoreSheet();
    });
    document.getElementById("scoreFilterPeriod").addEventListener("change", loadScoreSheet);
    document.getElementById("scoreFilterSubject").addEventListener("change", loadScoreSheet);
    document.getElementById("btnLoadScoreSheet").addEventListener("click", loadScoreSheet);
    
    // Save Scores
    document.getElementById("btnSaveScores").addEventListener("click", saveScores);

    // Generate Report
    document.getElementById("btnGenerateReport").addEventListener("click", generateReport);
    
    // Back to Reports Dashboard
    const btnBack = document.getElementById("btnBackToReportDashboard");
    if (btnBack) {
        btnBack.addEventListener("click", window.goBackToReportDashboard);
    }

    // Print Report
    safeBind("btnPrintReport", "click", () => {
        window.print();
    });

    // Export Report CSV
    safeBind("btnExportReportCSV", "click", exportReportCSV);

    // Academic Reports Events
    safeBind("acadFilterClass", "change", generateAcademicReport);
    safeBind("acadFilterPeriod", "change", generateAcademicReport);
    safeBind("btnSaveSheetsUrl", "click", saveSheetsUrl);
    safeBind("btnSyncToSheets", "click", syncToGoogleSheets);
    safeBind("btnGenerateAcadReport", "click", generateAcademicReport);
    
    safeBind("btnPrintAcadReport", "click", () => {
        window.print();
    });
    
    safeBind("btnExportAcadPDF", "click", () => {
        window.print();
    });

    // Export / Import Settings
    document.getElementById("btnExportData").addEventListener("click", exportDatabase);
    
    document.getElementById("importFile").addEventListener("change", importDatabase);
    
    document.getElementById("btnResetDatabase").addEventListener("click", resetDatabase);

    // Preset Font selector change
    const fontPreset = document.getElementById("fontSelectPreset");
    if (fontPreset) {
        fontPreset.addEventListener("change", () => {
            const font = fontPreset.value;
            if (font === "system") {
                appState.fontConfig = null;
                const style = document.getElementById("dynamicLocalFontFace");
                if (style) style.remove();
                
                const googleLink = document.getElementById("dynamicGoogleFontLink");
                if (googleLink) googleLink.remove();
                
                document.documentElement.style.removeProperty("--font-main");
                saveState();
                showToast(appState.language === 'km' ? 'save_success' : 'Font reset successful!');
            } else {
                applyGoogleFont(font);
                appState.fontConfig = { type: 'google', name: font };
                saveState();
                showToast(appState.language === 'km' ? 'save_success' : 'Font loaded successfully!');
            }
        });
    }

    // Google Font loader button
    const btnLoadGoogleFont = document.getElementById("btnLoadGoogleFont");
    if (btnLoadGoogleFont) {
        btnLoadGoogleFont.addEventListener("click", () => {
            const val = document.getElementById("googleFontInput").value.trim();
            if (!val) {
                alert(appState.language === 'km' ? 'សូមបញ្ចូលឈ្មោះហ្វុន Google Font មុននឹងទាញយក!' : 'Please enter a Google Font name!');
                return;
            }
            applyGoogleFont(val);
            appState.fontConfig = { type: 'google', name: val };
            saveState();
            showToast(appState.language === 'km' ? 'save_success' : 'Font loaded successfully!');
        });
    }

    // Upload Font file uploader
    const fontFile = document.getElementById("uploadFontFile");
    if (fontFile) {
        fontFile.addEventListener("change", (e) => {
            const file = e.target.files[0];
            if (!file) return;
            
            const reader = new FileReader();
            reader.onload = () => {
                const fontName = "CustomFont-" + file.name.split('.')[0].replace(/[^a-zA-Z0-9-]/g, "");
                
                // Write styles
                const styleId = "dynamicLocalFontFace";
                let style = document.getElementById(styleId);
                if (style) style.remove();
                
                style = document.createElement("style");
                style.id = styleId;
                style.textContent = `
                    @font-face {
                        font-family: '${fontName}';
                        src: url('${reader.result}');
                    }
                `;
                document.head.appendChild(style);
                
                applyFontStyle(fontName);
                
                appState.fontConfig = {
                    type: 'file',
                    name: fontName,
                    fontDataUrl: reader.result,
                    fileName: file.name
                };
                saveState();
                
                const status = document.getElementById("fontUploadStatus");
                if (status) {
                    status.textContent = `${appState.language === 'km' ? 'បានបញ្ចូល៖' : 'Loaded:'} ${file.name}`;
                    status.style.display = "block";
                }
                
                showToast(appState.language === 'km' ? 'save_success' : 'Custom font loaded!');
            };
            reader.readAsDataURL(file);
        });
    }

    // Reset Font button
    const btnResetFont = document.getElementById("btnResetFont");
    if (btnResetFont) {
        btnResetFont.addEventListener("click", () => {
            appState.fontConfig = null;
            const style = document.getElementById("dynamicLocalFontFace");
            if (style) style.remove();
            
            const googleLink = document.getElementById("dynamicGoogleFontLink");
            if (googleLink) googleLink.remove();
            
            document.documentElement.style.removeProperty("--font-main");
            
            const status = document.getElementById("fontUploadStatus");
            if (status) {
                status.style.display = "none";
                status.textContent = "";
            }
            if (fontPreset) fontPreset.value = "system";
            document.getElementById("googleFontInput").value = "";
            document.getElementById("uploadFontFile").value = "";
            
            saveState();
            showToast(appState.language === 'km' ? 'save_success' : 'Typography reset!');
        });
    }

    // Mobile Sidebar Drawer togglers
    const mobileMenuBtn = document.getElementById("btnToggleMobileMenu");
    const sidebarOverlay = document.getElementById("sidebarOverlay");
    const sidebar = document.querySelector(".sidebar");

    if (mobileMenuBtn && sidebarOverlay && sidebar) {
        const toggleMobileMenu = () => {
            sidebar.classList.toggle("active");
            sidebarOverlay.classList.toggle("active");
        };

        const closeMobileMenu = () => {
            sidebar.classList.remove("active");
            sidebarOverlay.classList.remove("active");
        };

        mobileMenuBtn.addEventListener("click", toggleMobileMenu);
        sidebarOverlay.addEventListener("click", closeMobileMenu);
        
        // Desktop/Tablet Sidebar Toggle
        const sidebarToggleBtn = document.getElementById("sidebarToggleBtn");
        const mainContent = document.querySelector(".main-content");
        if (sidebarToggleBtn && mainContent) {
            sidebarToggleBtn.addEventListener("click", () => {
                if (window.innerWidth > 1024) {
                    // Desktop: Toggle collapse
                    sidebar.classList.toggle("collapsed");
                    mainContent.classList.toggle("sidebar-collapsed");
                } else {
                    // Tablet: Toggle expand
                    sidebar.classList.toggle("expanded");
                }
            });
        }

        // Auto-close drawer on navigating on mobile
        const navLinks = document.querySelectorAll(".sidebar-nav a, .sidebar-footer div, .logout-btn-action");
        navLinks.forEach(link => {
            link.addEventListener("click", () => {
                if (sidebar.classList.contains("active")) {
                    closeMobileMenu();
                }
            });
        });
    }
}

// ----------------------------------------------------
// STUDENT PORTAL VIEW RENDERING & CONTROLLER
// ----------------------------------------------------
function renderStudentPortal() {
    const user = appState.currentUser;
    if (!user || user.role !== 'student') return;
    
    const targetClass = appState.classes.find(c => c.id === user.classId);
    if (!targetClass) return;
    
    const student = targetClass.students.find(s => s.id === user.id);
    if (!student) return;
    
    const isKm = appState.language === 'km';
    
    // Header Info
    document.getElementById("studentHeaderProfile").innerHTML = `
        <span style="font-weight:700; color:var(--primary-blue);">${isKm ? 'សិស្ស៖' : 'Student:'} ${student.name} (${student.id})</span> | 
        <span>${isKm ? 'ថ្នាក់៖' : 'Class:'} ${targetClass.name}</span>
    `;
    
    // Overview Cards
    document.getElementById("studentStatClass").textContent = targetClass.name;
    document.getElementById("studentStatTeacher").textContent = targetClass.teacherName || (isKm ? 'មិនទាន់ចាត់តាំង' : 'Not Assigned');
    
    // Fetch Yearly stats
    const yearlyRanked = rankStudentsInClass(user.classId, "yearly");
    const yearlyRow = yearlyRanked.find(r => r.student.id === student.id);
    if (yearlyRow && yearlyRow.average > 0) {
        document.getElementById("studentStatYearlyAvg").textContent = yearlyRow.average.toFixed(2);
        document.getElementById("studentStatYearlyRank").textContent = isKm ? toKhDigits(yearlyRow.rank) : yearlyRow.rank;
    } else {
        document.getElementById("studentStatYearlyAvg").textContent = "0.00";
        document.getElementById("studentStatYearlyRank").textContent = "-";
    }
    
    // Dynamic Table Columns
    const activeSubjects = targetClass.subjectIds 
        ? appState.subjects.filter(s => targetClass.subjectIds.includes(s.id))
        : appState.subjects;
        
    const headerRow = document.getElementById("studentReportHeaderRow");
    headerRow.innerHTML = `
        <th style="width: 150px;">${isKm ? 'ខែ / វគ្គសិក្សា' : 'Month / Period'}</th>
    `;
    activeSubjects.forEach(sub => {
        headerRow.innerHTML += `<th>${sub.name}</th>`;
    });
    headerRow.innerHTML += `
        <th style="width: 80px;">${isKm ? 'មធ្យម' : 'Avg'}</th>
        <th style="width: 80px;">${isKm ? 'ចំណាត់ថ្នាក់' : 'Rank'}</th>
        <th style="width: 100px;">${isKm ? 'លទ្ធផល' : 'Result'}</th>
    `;
    
    // Rows mapping
    const tbody = document.getElementById("studentReportTableBody");
    tbody.innerHTML = "";
    
    const periods = [
        { key: "oct", label: isKm ? "ខែតុលា" : "October", isSummary: false },
        { key: "nov", label: isKm ? "ខែវិច្ឆិកា" : "November", isSummary: false },
        { key: "dec", label: isKm ? "ខែធ្នូ" : "December", isSummary: false },
        { key: "jan", label: isKm ? "ខែមករា" : "January", isSummary: false },
        { key: "feb", label: isKm ? "ខែកុម្ភៈ" : "February", isSummary: false },
        { key: "sem1_exam", label: isKm ? "ប្រឡងឆមាសទី១" : "Semester 1 Exam", isSummary: false },
        { key: "sem1", label: isKm ? "ឆមាសទី១" : "Semester 1", isSummary: true },
        { key: "mar", label: isKm ? "ខែមីនា" : "March", isSummary: false },
        { key: "apr", label: isKm ? "ខែមេសា" : "April", isSummary: false },
        { key: "may", label: isKm ? "ខែឧសភា" : "May", isSummary: false },
        { key: "jun", label: isKm ? "ខែមិថុនា" : "June", isSummary: false },
        { key: "jul", label: isKm ? "ខែកក្កដា" : "July", isSummary: false },
        { key: "sem2_exam", label: isKm ? "ប្រឡងឆមាសទី២" : "Semester 2 Exam", isSummary: false },
        { key: "sem2", label: isKm ? "ឆមាសទី២" : "Semester 2", isSummary: true },
        { key: "yearly", label: isKm ? "ប្រចាំឆ្នាំ" : "Yearly", isSummary: true }
    ];
    
    periods.forEach(p => {
        let rowHTML = `<td><strong>${p.label}</strong></td>`;
        
        // Subject scores
        activeSubjects.forEach(sub => {
            if (p.isSummary) {
                rowHTML += `<td style="background: rgba(0,0,0,0.02);">-</td>`;
            } else {
                const score = appState.scores[student.id]?.[p.key]?.[sub.id];
                const printScore = (score !== undefined && score !== null) ? score.toFixed(1) : "-";
                rowHTML += `<td>${printScore}</td>`;
            }
        });
        
        // Calculate average, rank, status for this specific row
        let avgVal = 0;
        let showRank = "-";
        let showStatus = "";
        
        if (p.key === "sem1") {
            avgVal = getStudentSem1Average(student.id);
        } else if (p.key === "sem2") {
            avgVal = getStudentSem2Average(student.id);
        } else if (p.key === "yearly") {
            avgVal = getStudentYearlyAverage(student.id);
        } else if (p.key === "sem1_exam" || p.key === "sem2_exam") {
            const scoreObj = appState.scores[student.id]?.[p.key];
            let sum = 0, count = 0;
            if (scoreObj) {
                activeSubjects.forEach(sub => {
                    const val = scoreObj[sub.id];
                    if (val !== undefined) {
                        sum += parseFloat(val);
                        count++;
                    }
                });
            }
            avgVal = count > 0 ? sum / activeSubjects.length : 0;
        } else {
            avgVal = getStudentMonthlyAverage(student.id, p.key);
        }
        
        // Fetch rank from ranks calculations
        if (avgVal > 0) {
            const periodRanks = rankStudentsInClass(user.classId, p.key);
            const rRow = periodRanks.find(r => r.student.id === student.id);
            if (rRow) {
                showRank = isKm ? toKhDigits(rRow.rank) : rRow.rank;
                if (p.isSummary) {
                    showStatus = rRow.status;
                }
            }
        }
        
        const printAvg = avgVal > 0 ? avgVal.toFixed(2) : "-";
        const statusBadge = showStatus ? `<span class="badge ${avgVal >= 5.0 ? 'badge-pass' : 'badge-fail'}">${showStatus}</span>` : "-";
        
        rowHTML += `
            <td><strong style="color:var(--primary-blue);">${printAvg}</strong></td>
            <td><strong>${showRank}</strong></td>
            <td>${statusBadge}</td>
        `;
        
        const tr = document.createElement("tr");
        if (p.isSummary) {
            tr.style.background = "rgba(59, 130, 246, 0.05)";
            tr.style.fontWeight = "bold";
        }
        tr.innerHTML = rowHTML;
        tbody.appendChild(tr);
    });
    
    // Render Message correction history
    const historyContainer = document.getElementById("studentMessageHistory");
    historyContainer.innerHTML = "";
    
    const studentMessages = (appState.messages || []).filter(m => m.studentId === student.id);
    
    if (studentMessages.length === 0) {
        historyContainer.innerHTML = `<p style="font-size:0.8rem; color:var(--text-muted); text-align:center; margin-top: 1rem;">${isKm ? 'គ្មានប្រវត្តិកែតម្រូវទិន្នន័យឡើយ' : 'No correction history available.'}</p>`;
    } else {
        studentMessages.forEach(msg => {
            const statusLabel = msg.status === 'resolved' ? (isKm ? 'ដោះស្រាយរួច' : 'Resolved') : (isKm ? 'កំពុងរង់ចាំ' : 'Pending');
            historyContainer.innerHTML += `
                <div class="student-msg-item">
                    <div class="student-msg-meta">
                        <span>${msg.timestamp}</span>
                        <span class="student-msg-status ${msg.status === 'resolved' ? 'status-resolved' : 'status-pending'}">${statusLabel}</span>
                    </div>
                    <div class="student-msg-text">${msg.messageText}</div>
                    ${msg.replyText ? `
                        <div class="student-msg-reply">
                            <strong>${isKm ? 'ចម្លើយតប៖' : 'Reply:'}</strong> ${msg.replyText}
                            <div style="font-size: 0.7rem; color: var(--text-muted); margin-top: 2px;">
                                ${isKm ? 'ឆ្លើយដោយ៖' : 'By:'} ${msg.repliedBy}
                            </div>
                        </div>
                    ` : ''}
                </div>
            `;
        });
    }
}

// ----------------------------------------------------
// INBOX MESSAGE PANEL FOR ADMIN/TEACHER
// ----------------------------------------------------
function renderMessagesPanel() {
    const tbody = document.getElementById("messagesTableBody");
    if (!tbody) return;
    
    tbody.innerHTML = "";
    const isKm = appState.language === 'km';
    
    const messages = appState.messages || [];
    
    // Update navigation badge count
    const pendingCount = messages.filter(m => m.status === 'pending').length;
    const badge = document.getElementById("msgCountBadge");
    if (badge) {
        if (pendingCount > 0) {
            badge.textContent = pendingCount;
            badge.style.display = "inline-block";
        } else {
            badge.style.display = "none";
        }
    }
    
    if (messages.length === 0) {
        tbody.innerHTML = `<tr><td colspan="6" class="text-center" style="color:var(--text-muted);">${isKm ? 'គ្មានសារស្នើសុំកែប្រែពិន្ទុឡើយ' : 'No grade correction requests.'}</td></tr>`;
        return;
    }
    
    // Sort messages: pending first, then newest timestamp first
    const sortedMessages = [...messages].sort((a, b) => {
        if (a.status === 'pending' && b.status !== 'pending') return -1;
        if (a.status !== 'pending' && b.status === 'pending') return 1;
        return new Date(b.timestamp) - new Date(a.timestamp);
    });
    
    sortedMessages.forEach(msg => {
        const studentClass = appState.classes.find(c => c.id === msg.classId);
        const className = studentClass ? studentClass.name : "-";
        
        const statusLabel = msg.status === 'resolved' ? (isKm ? 'ដោះស្រាយរួច' : 'Resolved') : (isKm ? 'កំពុងរង់ចាំ' : 'Pending');
        const statusClass = msg.status === 'resolved' ? 'status-resolved' : 'status-pending';
        
        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td><span style="font-size:0.8rem; color:var(--text-muted);">${msg.timestamp}</span></td>
            <td><strong>${msg.studentName}</strong> <br><span style="font-size:0.75rem; color:var(--text-muted);">${msg.studentId}</span></td>
            <td>${className}</td>
            <td class="text-left" style="max-width:300px; word-break:break-word;">
                <div>${msg.messageText}</div>
                ${msg.replyText ? `
                    <div style="margin-top: 0.5rem; padding: 0.4rem; background:rgba(0,0,0,0.02); border-left: 2px solid var(--primary-blue); font-size:0.8rem;">
                        <strong>${isKm ? 'ចម្លើយតប៖' : 'Reply:'}</strong> ${msg.replyText}
                    </div>
                ` : ''}
            </td>
            <td><span class="student-msg-status ${statusClass}">${statusLabel}</span></td>
            <td>
                <div style="display: flex; gap: 0.5rem; justify-content: center;">
                    <button class="btn btn-primary btn-sm" onclick="openReplyModal('${msg.id}')">
                        <i class="fa-solid fa-reply"></i> ${msg.status === 'resolved' ? (isKm ? 'កែប្រែ' : 'Edit') : (isKm ? 'ឆ្លើយតប' : 'Reply')}
                    </button>
                    <button class="btn btn-danger btn-sm" onclick="deleteMessage('${msg.id}')">
                        <i class="fa-solid fa-trash"></i> ${isKm ? 'លុប' : 'Delete'}
                    </button>
                </div>
            </td>
        `;
        tbody.appendChild(tr);
    });
}

function openReplyModal(msgId) {
    const msg = appState.messages.find(m => m.id === msgId);
    if (!msg) return;
    
    document.getElementById("replyMessageId").value = msg.id;
    document.getElementById("studentMessageQuote").textContent = `"${msg.messageText}"`;
    document.getElementById("replyMessageInput").value = msg.replyText || "";
    
    document.getElementById("replyMessageModal").classList.add("active");
}

function deleteMessage(msgId) {
    const isKm = appState.language === 'km';
    if (confirm(isKm ? 'តើអ្នកពិតជាចង់លុបសារនេះមែនទេ?' : 'Are you sure you want to delete this message?')) {
        appState.messages = appState.messages.filter(m => m.id !== msgId);
        saveData();
        renderMessagesPanel();
    }
}

// Register Login events & form hooks
function setupLoginEvents() {
    // Toggle Password Visibility
    const btnTogglePassword = document.getElementById("btnTogglePassword");
    if (btnTogglePassword) {
        btnTogglePassword.addEventListener("click", () => {
            const input = document.getElementById("loginPassword");
            const icon = document.getElementById("togglePasswordIcon");
            if (input && icon) {
                if (input.type === "password") {
                    input.type = "text";
                    icon.classList.remove("fa-eye");
                    icon.classList.add("fa-eye-slash");
                } else {
                    input.type = "password";
                    icon.classList.remove("fa-eye-slash");
                    icon.classList.add("fa-eye");
                }
            }
        });
    }
    
    // Language switcher login screen
    document.getElementById("langToggleBtnLogin")?.addEventListener("click", () => {
        document.getElementById("languageSearchInput").value = "";
        initLanguageSelector();
        document.getElementById("languageSelectModal").classList.add("active");
    });
    
    // Firebase Email Login Handler
    const emailLoginForm = document.getElementById("emailLoginForm");
    if (emailLoginForm) {
        emailLoginForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const email = document.getElementById("loginEmail").value.trim();
            const password = document.getElementById("loginPassword").value;
            
            auth.signInWithEmailAndPassword(email, password)
                .then((userCredential) => {
                    // Successful login, onAuthStateChanged will handle the rest
                    showToast(appState.language === 'km' ? 'ចូលប្រើប្រាស់ជោគជ័យ!' : 'Logged in successfully!');
                })
                .catch((error) => {
                    console.error("Login error:", error);
                    alert(appState.language === 'km' ? `ការចូលបរាជ័យ៖ ${error.message}` : `Login Failed: ${error.message}`);
                });
        });
    }
    
    // Registration form bindings
    const regModal = document.getElementById("registerUserModal");
    const regRoleSelect = document.getElementById("regRole");
    const regClassGroup = document.getElementById("regClassGroup");
    const regClassSelect = document.getElementById("regClass");

    const btnRegOpen = document.getElementById("btnRegisterUserOpen");
    
    window.openRegisterUserModal = () => {
        document.getElementById("registerUserForm").reset();
        
        // Populate class select
        regClassSelect.innerHTML = "";
        appState.classes.forEach(c => {
            const opt = document.createElement("option");
            opt.value = c.id;
            opt.textContent = c.name;
            regClassSelect.appendChild(opt);
        });
        
        // Show class dropdown by default since Student is selected
        regClassGroup.style.display = "block";
        
        regModal.classList.add("active");
    };

    if (btnRegOpen) {
        btnRegOpen.addEventListener("click", window.openRegisterUserModal);
    }

    if (regRoleSelect) {
        regRoleSelect.addEventListener("change", () => {
            if (regRoleSelect.value === 'student') {
                regClassGroup.style.display = "block";
            } else {
                regClassGroup.style.display = "none";
            }
        });
    }

    const regForm = document.getElementById("registerUserForm");
    if (regForm) {
        regForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const role = regRoleSelect.value;
            const email = document.getElementById("regEmail").value.trim();
            const password = document.getElementById("regPassword").value;
            
            // Auto-generate name from email prefix
            const name = email.split('@')[0];
            const contact = "";
            
            const classId = role === 'student' ? regClassSelect.value : null;

            auth.createUserWithEmailAndPassword(email, password)
                .then((userCredential) => {
                    const user = userCredential.user;
                    // Save additional data to Firestore
                    return db.collection("users").doc(user.uid).set({
                        name: name,
                        role: role,
                        email: email,
                        contact: contact,
                        classId: classId,
                        status: role === 'admin' ? 'active' : 'pending', // Admins are active automatically (for first setup)
                        timestamp: firebase.firestore.FieldValue.serverTimestamp()
                    });
                })
                .then(() => {
                    regModal.classList.remove("active");
                    alert(appState.language === 'km' ? 'ចុះឈ្មោះរួចរាល់!' : 'Registration successful!');
                })
                .catch((error) => {
                    console.error("Registration error:", error);
                    alert(appState.language === 'km' ? `ការចុះឈ្មោះបរាជ័យ៖ ${error.message}` : `Registration Failed: ${error.message}`);
                });
        });
    }

    // Logouts
    document.getElementById("btnAdminTeacherLogout").addEventListener("click", handleLogout);
    document.getElementById("btnStudentLogout").addEventListener("click", handleLogout);
    
    // Theme and Language bindings for student portal header
    document.getElementById("themeToggleBtnStudent").addEventListener("click", () => {
        appState.theme = appState.theme === "light" ? "dark" : "light";
        saveState();
        applyTheme();
    });
    
    document.getElementById("langToggleBtnStudent").addEventListener("click", () => {
        document.getElementById("languageSearchInput").value = "";
        initLanguageSelector();
        document.getElementById("languageSelectModal").classList.add("active");
    });
    
    // Student send message handler
    document.getElementById("studentMessageForm").addEventListener("submit", (e) => {
        e.preventDefault();
        const msgText = document.getElementById("studentMessageText").value.trim();
        const studentUser = appState.currentUser;
        if (!studentUser || studentUser.role !== 'student') return;
        
        const targetClass = appState.classes.find(c => c.id === studentUser.classId);
        const student = targetClass?.students.find(s => s.id === studentUser.id);
        if (!student) return;
        
        const newMsg = {
            id: `msg-${Date.now()}`,
            studentId: student.id,
            studentName: student.name,
            classId: studentUser.classId,
            messageText: msgText,
            timestamp: new Date().toLocaleString(appState.language === 'km' ? 'km-KH' : 'en-US'),
            status: 'pending'
        };
        
        if (!appState.messages) appState.messages = [];
        appState.messages.push(newMsg);
        saveState();
        
        document.getElementById("studentMessageText").value = "";
        showToast(appState.language === 'km' ? 'save_success' : 'Request sent successfully!');
        renderStudentPortal();
    });
    
    // Reply Form handler
    document.getElementById("replyMessageForm").addEventListener("submit", (e) => {
        e.preventDefault();
        const msgId = document.getElementById("replyMessageId").value;
        const replyText = document.getElementById("replyMessageInput").value.trim();
        
        const msg = appState.messages.find(m => m.id === msgId);
        if (msg) {
            msg.replyText = replyText;
            msg.repliedBy = appState.currentUser.role === 'admin' ? (appState.language === 'km' ? 'អ្នកគ្រប់គ្រង' : 'Admin') : (appState.language === 'km' ? 'គ្រូបន្ទុកថ្នាក់' : 'Teacher');
            msg.status = 'resolved';
            saveState();
            
            document.getElementById("replyMessageModal").classList.remove("active");
            showToast(appState.language === 'km' ? 'save_success' : 'Reply sent successfully!');
            renderMessagesPanel();
        }
    });
}

function handleLogout() {
    auth.signOut().then(() => {
        appState.currentUser = null;
        saveState();
        showPortal();
    }).catch((error) => {
        console.error("Logout error", error);
    });
}

function updateLoginLanguage() {
    const isKm = appState.language === "km";
    document.getElementById("loginLangText").textContent = isKm ? "English" : "ភាសាខ្មែរ";
}

// Global scope bindings for window click events
window.openReplyModal = openReplyModal;
window.selectLoginRole = selectLoginRole;
window.goBackToRoles = goBackToRoles;

// ----------------------------------------------------
// DYNAMIC FONT LOADER ROUTINES
// ----------------------------------------------------
function applyGoogleFont(fontName) {
    const existingLink = document.getElementById("dynamicGoogleFontLink");
    if (existingLink) existingLink.remove();
    
    const formattedName = fontName.replace(/\s+/g, "+");
    const link = document.createElement("link");
    link.id = "dynamicGoogleFontLink";
    link.rel = "stylesheet";
    link.href = `https://fonts.googleapis.com/css2?family=${formattedName}:wght@400;500;600;700&display=swap`;
    document.head.appendChild(link);
    
    applyFontStyle(fontName);
}

function applyFontStyle(fontName) {
    document.documentElement.style.setProperty("--font-main", `'${fontName}', 'Outfit', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif`);
}

function applyFontFromConfig() {
    if (!appState || !appState.fontConfig) return;
    const config = appState.fontConfig;
    
    if (config.type === 'google') {
        applyGoogleFont(config.name);
        
        // Sync Preset dropdown value if it matches
        const fontPreset = document.getElementById("fontSelectPreset");
        if (fontPreset) {
            const exists = Array.from(fontPreset.options).some(opt => opt.value === config.name);
            if (exists) fontPreset.value = config.name;
        }
    } else if (config.type === 'file' && config.fontDataUrl) {
        const styleId = "dynamicLocalFontFace";
        let style = document.getElementById(styleId);
        if (style) style.remove();
        
        style = document.createElement("style");
        style.id = styleId;
        style.textContent = `
            @font-face {
                font-family: '${config.name}';
                src: url('${config.fontDataUrl}');
            }
        `;
        document.head.appendChild(style);
        
        applyFontStyle(config.name);
        
        // Sync Status label
        const status = document.getElementById("fontUploadStatus");
        if (status && config.fileName) {
            status.textContent = `${appState.language === 'km' ? 'បានបញ្ចូល៖' : 'Loaded:'} ${config.fileName}`;
            status.style.display = "block";
        }
    }
}

// ----------------------------------------------------
// 160+ SUPPORTED LANGUAGES LIST AND REGISTRATION
// ----------------------------------------------------
const SUPPORTED_LANGUAGES = [
    { code: "km", name: "Khmer", localName: "ភាសាខ្មែរ", flag: "🇰🇭" },
    { code: "en", name: "English", localName: "English", flag: "🇬🇧" },
    { code: "fr", name: "French", localName: "Français", flag: "🇫🇷" },
    { code: "th", name: "Thai", localName: "ไทย", flag: "🇹🇭" },
    { code: "vi", name: "Vietnamese", localName: "Tiếng Việt", flag: "🇻🇳" },
    { code: "lo", name: "Lao", localName: "ພາສາລາវ", flag: "🇱🇦" },
    { code: "ja", name: "Japanese", localName: "日本語", flag: "🇯🇵" },
    { code: "ko", name: "Korean", localName: "한국어", flag: "🇰🇷" },
    { code: "zh-CN", name: "Chinese (Simplified)", localName: "简体中文", flag: "🇨🇳" },
    { code: "zh-TW", name: "Chinese (Traditional)", localName: "繁體中文", flag: "🇹🇼" },
    { code: "es", name: "Spanish", localName: "Español", flag: "🇪🇸" },
    { code: "de", name: "German", localName: "Deutsch", flag: "🇩🇪" },
    { code: "ru", name: "Russian", localName: "Русский", flag: "🇷🇺" },
    { code: "ar", name: "Arabic", localName: "العربية", flag: "🇸🇦" },
    { code: "hi", name: "Hindi", localName: "हिन्दी", flag: "🇮🇳" },
    { code: "it", name: "Italian", localName: "Italiano", flag: "🇮🇹" },
    { code: "pt", name: "Portuguese", localName: "Português", flag: "🇵🇹" },
    { code: "my", name: "Burmese", localName: "မြန်မာ", flag: "🇲🇲" },
    { code: "id", name: "Indonesian", localName: "Bahasa Indonesia", flag: "🇮🇩" },
    { code: "ms", name: "Malay", localName: "Bahasa Melayu", flag: "🇲🇾" },
    { code: "tl", name: "Tagalog", localName: "Tagalog", flag: "🇵🇭" },
    { code: "tr", name: "Turkish", localName: "Türkçe", flag: "🇹🇷" },
    { code: "nl", name: "Dutch", localName: "Nederlands", flag: "🇳🇱" },
    { code: "sv", name: "Swedish", localName: "Svenska", flag: "🇸🇪" },
    { code: "da", name: "Danish", localName: "Dansk", flag: "🇩🇰" },
    { code: "fi", name: "Finnish", localName: "Suomi", flag: "🇫🇮" },
    { code: "no", name: "Norwegian", localName: "Norsk", flag: "🇳🇴" },
    { code: "pl", name: "Polish", localName: "Polski", flag: "🇵🇱" },
    { code: "ro", name: "Romanian", localName: "Română", flag: "🇷🇴" },
    { code: "hu", name: "Hungarian", localName: "Magyar", flag: "🇭🇺" },
    { code: "cs", name: "Czech", localName: "Čeština", flag: "🇨🇿" },
    { code: "sk", name: "Slovak", localName: "Slovenčina", flag: "🇸🇰" },
    { code: "bg", name: "Bulgarian", localName: "Български", flag: "🇧🇬" },
    { code: "hr", name: "Croatian", localName: "Hrvatski", flag: "🇭🇷" },
    { code: "sr", name: "Serbian", localName: "Српски", flag: "🇷🇸" },
    { code: "sl", name: "Slovenian", localName: "Slovenščina", flag: "🇸🇮" },
    { code: "uk", name: "Ukrainian", localName: "Українська", flag: "🇺🇦" },
    { code: "et", name: "Estonian", localName: "Eesti", flag: "🇪🇪" },
    { code: "lv", name: "Latvian", localName: "Latviešu", flag: "🇱🇻" },
    { code: "lt", name: "Lithuanian", localName: "Lietuvių", flag: "🇱🇹" },
    { code: "sw", name: "Swahili", localName: "Kiswahili", flag: "🇰🇪" },
    { code: "af", name: "Afrikaans", localName: "Afrikaans", flag: "🇿🇦" },
    { code: "el", name: "Greek", localName: "Ελληνικά", flag: "🇬🇷" },
    { code: "he", name: "Hebrew", localName: "עברית", flag: "🇮🇱" },
    { code: "fa", name: "Persian", localName: "فارسی", flag: "🇮🇷" },
    { code: "ur", name: "Urdu", localName: "اردو", flag: "🇵🇰" },
    { code: "bn", name: "Bengali", localName: "বাংলা", flag: "🇧🇩" },
    { code: "pa", name: "Punjabi", localName: "ਪੰਜਾਬੀ", flag: "🇮🇳" },
    { code: "gu", name: "Gujarati", localName: "ગુજરાતી", flag: "🇮🇳" },
    { code: "ta", name: "Tamil", localName: "தமிழ்", flag: "🇮🇳" },
    { code: "te", name: "Telugu", localName: "తెలుగు", flag: "🇮🇳" },
    { code: "kn", name: "Kannada", localName: "ಕನ್ನಡ", flag: "🇮🇳" },
    { code: "ml", name: "Malayalam", localName: "മലയാളം", flag: "🇮🇳" },
    { code: "si", name: "Sinhala", localName: "සිංහල", flag: "🇱🇰" },
    { code: "ne", name: "Nepali", localName: "नेपाली", flag: "🇳🇵" },
    { code: "am", name: "Amharic", localName: "አማርኛ", flag: "🇪🇹" },
    { code: "so", name: "Somali", localName: "Soomaali", flag: "🇸🇴" },
    { code: "yo", name: "Yoruba", localName: "Yorùbá", flag: "🇳🇬" },
    { code: "ig", name: "Igbo", localName: "Asụsụ Igbo", flag: "🇳🇬" },
    { code: "ha", name: "Hausa", localName: "Hausa", flag: "🇳🇬" },
    { code: "az", name: "Azerbaijani", localName: "Azərbaycanca", flag: "🇦🇿" },
    { code: "ka", name: "Georgian", localName: "ქართული", flag: "🇬🇪" },
    { code: "hy", name: "Armenian", localName: "Հայերեն", flag: "🇦🇲" },
    { code: "uz", name: "Uzbek", localName: "Oʻzbekcha", flag: "🇺🇿" },
    { code: "kk", name: "Kazakh", localName: "Қазақша", flag: "🇰🇿" },
    { code: "ky", name: "Kyrgyz", localName: "Кыргызча", flag: "🇰🇬" },
    { code: "tg", name: "Tajik", localName: "Тоҷикӣ", flag: "🇹🇯" },
    { code: "tk", name: "Turkmen", localName: "Türkmençe", flag: "🇹🇲" },
    { code: "mn", name: "Mongolian", localName: "Монгол", flag: "🇲🇳" },
    { code: "ug", name: "Uyghur", localName: "ئۇيغۇرچە", flag: "🇨🇳" },
    { code: "yi", name: "Yiddish", localName: "ייִديש", flag: "🇮🇱" },
    { code: "eo", name: "Esperanto", localName: "Esperanto", flag: "🇪🇺" },
    { code: "la", name: "Latin", localName: "Latina", flag: "🇻🇦" },
    { code: "cy", name: "Welsh", localName: "Cymraeg", flag: "🇬🇧" },
    { code: "gd", name: "Scots Gaelic", localName: "Gàidhlig", flag: "🇬🇧" },
    { code: "ga", name: "Irish", localName: "Gaeilge", flag: "🇮🇪" },
    { code: "is", name: "Icelandic", localName: "Íslenska", flag: "🇮🇸" },
    { code: "eu", name: "Basque", localName: "Euskara", flag: "🇪🇸" },
    { code: "ca", name: "Catalan", localName: "Català", flag: "🇪🇸" },
    { code: "gl", name: "Galician", localName: "Galego", flag: "🇪🇸" },
    { code: "co", name: "Corsican", localName: "Corsu", flag: "🇫🇷" },
    { code: "fy", name: "Frisian", localName: "Frysk", flag: "🇳🇱" },
    { code: "haw", name: "Hawaiian", localName: "ʻŌlelo Hawaiʻi", flag: "🇺🇸" },
    { code: "mi", name: "Maori", localName: "Māori", flag: "🇳🇿" },
    { code: "sm", name: "Samoan", localName: "Gagana Samoa", flag: "🇼🇸" },
    { code: "jw", name: "Javanese", localName: "Jawa", flag: "🇮🇩" },
    { code: "su", name: "Sundanese", localName: "Sunda", flag: "🇮🇩" },
    { code: "mg", name: "Malagasy", localName: "Malagasy", flag: "🇲🇬" },
    { code: "hmn", name: "Hmong", localName: "Hmoob", flag: "🇨🇳" },
    { code: "ku", name: "Kurdish (Kurmanji)", localName: "Kurdî", flag: "🇮🇶" },
    { code: "ps", name: "Pashto", localName: "پښتو", flag: "🇦🇫" },
    { code: "sd", name: "Sindhi", localName: "سنڌي", flag: "🇵🇰" },
    { code: "sq", name: "Albanian", localName: "Shqip", flag: "🇦🇱" },
    { code: "be", name: "Belarusian", localName: "Беларуская", flag: "🇧🇾" },
    { code: "bs", name: "Bosnian", localName: "Bosanski", flag: "🇧🇦" },
    { code: "ceb", name: "Cebuano", localName: "Cebuano", flag: "🇵🇭" },
    { code: "ny", name: "Chichewa", localName: "Chichewa", flag: "🇲🇼" },
    { code: "ht", name: "Haitian Creole", localName: "Kreyòl Ayisyen", flag: "🇭🇹" },
    { code: "rw", name: "Kinyarwanda", localName: "Ikinyarwanda", flag: "🇷🇼" },
    { code: "lb", name: "Luxembourgish", localName: "Lëtzebuergesch", flag: "🇱🇺" },
    { code: "mk", name: "Macedonian", localName: "Македонски", flag: "🇲🇰" },
    { code: "mt", name: "Maltese", localName: "Malti", flag: "🇲🇹" },
    { code: "mr", name: "Marathi", localName: "मराठी", flag: "🇮🇳" },
    { code: "om", name: "Oromo", localName: "Oromoo", flag: "🇪🇹" },
    { code: "sa", name: "Sanskrit", localName: "संस्कृतम्", flag: "🇮🇳" },
    { code: "st", name: "Sesotho", localName: "Sesotho", flag: "🇿🇦" },
    { code: "sn", name: "Shona", localName: "chiShona", flag: "🇿🇼" },
    { code: "tt", name: "Tatar", localName: "Татарча", flag: "🇷🇺" },
    { code: "ti", name: "Tigrinya", localName: "ትግርኛ", flag: "🇪🇷" },
    { code: "ts", name: "Tsonga", localName: "Xitsonga", flag: "🇿🇦" },
    { code: "ak", name: "Twi (Akan)", localName: "Twi", flag: "🇬🇭" },
    { code: "xh", name: "Xhosa", localName: "isiXhosa", flag: "🇿🇦" },
    { code: "zu", name: "Zulu", localName: "isiZulu", flag: "🇿🇦" },
    { code: "as", name: "Assamese", localName: "অসমীয়া", flag: "🇮🇳" },
    { code: "ay", name: "Aymara", localName: "Aymar aru", flag: "🇧🇴" },
    { code: "bm", name: "Bambara", localName: "Bamanankan", flag: "🇲🇱" },
    { code: "bho", name: "Bhojpuri", localName: "भोजपुरी", flag: "🇮🇳" },
    { code: "doi", name: "Dogri", localName: "डोगरी", flag: "🇮🇳" },
    { code: "dv", name: "Dhivehi", localName: "ދިވެހិބަސް", flag: "🇲🇻" },
    { code: "ee", name: "Ewe", localName: "Eʋegbe", flag: "🇬🇭" },
    { code: "gn", name: "Guarani", localName: "Avañe'ẽ", flag: "🇵🇾" },
    { code: "ilo", name: "Iloko", localName: "Ilokano", flag: "🇵🇭" },
    { code: "gom", name: "Konkani", localName: "कोंकणी", flag: "🇮🇳" },
    { code: "kri", name: "Krio", localName: "Krio", flag: "🇸🇱" },
    { code: "ln", name: "Lingala", localName: "Lingála", flag: "🇨🇩" },
    { code: "lg", name: "Luganda", localName: "Oluganda", flag: "🇺🇬" },
    { code: "mai", name: "Maithili", localName: "मैथिली", flag: "🇮🇳" },
    { code: "mni-Mtei", name: "Meitei (Manipuri)", localName: "ꯃꯩꯇꯩꯂꯣꯟ", flag: "🇮🇳" },
    { code: "lus", name: "Mizo", localName: "Mizo ṭawng", flag: "🇮🇳" },
    { code: "nso", name: "Sepedi", localName: "Sesotho sa Leboa", flag: "🇿🇦" },
    { code: "qu", name: "Quechua", localName: "Runasimi", flag: "🇵🇪" },
    { code: "ve", name: "Venda", localName: "Tshivenḓa", flag: "🇿🇦" },
    { code: "wol", name: "Wolof", localName: "Wolof", flag: "🇸🇳" },
    { code: "aa", name: "Afar", localName: "Afaraf", flag: "🇪🇹" },
    { code: "ab", name: "Abkhazian", localName: "Аԥсшәа", flag: "🇬🇪" },
    { code: "av", name: "Avaric", localName: "Авар мацӀ", flag: "🇷🇺" },
    { code: "awa", name: "Awadhi", localName: "अवधी", flag: "🇮🇳" },
    { code: "ba", name: "Bashkir", localName: "Башҡорт теле", flag: "🇷🇺" },
    { code: "bal", name: "Balochi", localName: "بلوچی", flag: "🇵🇰" },
    { code: "btb", name: "Beti", localName: "Beti", flag: "🇨🇲" },
    { code: "bua", name: "Buryat", localName: "Буряад хэлэн", flag: "🇷🇺" },
    { code: "yue", name: "Cantonese", localName: "粵語", flag: "🇭🇰" },
    { code: "ch", name: "Chamorro", localName: "Fino' Chamoru", flag: "🇬🇺" },
    { code: "ce", name: "Chechen", localName: "Нохчийн мотт", flag: "🇷🇺" },
    { code: "cv", name: "Chuvash", localName: "Чăваш чĕлхи", flag: "🇷🇺" },
    { code: "crh", name: "Crimean Tatar", localName: "Qırımtatarca", flag: "🇺🇦" },
    { code: "prs", name: "Dari", localName: "دری", flag: "🇦🇫" },
    { code: "din", name: "Dinka", localName: "Thuɔŋjäŋ", flag: "🇸🇩" },
    { code: "dyu", name: "Dyula", localName: "Julakan", flag: "🇨🇮" },
    { code: "dz", name: "Dzongkha", localName: "རྫོང་ཁ", flag: "🇧🇹" },
    { code: "fo", name: "Faroese", localName: "Føroyskt", flag: "🇫🇴" },
    { code: "fj", name: "Fijian", localName: "Na Vosa Vakaviti", flag: "🇫🇯" },
    { code: "fon", name: "Fon", localName: "Fongbe", flag: "🇧🇯" },
    { code: "fur", name: "Friulian", localName: "Furlan", flag: "🇮🇹" },
    { code: "ff", name: "Fulah", localName: "Pulaar", flag: "🇸🇳" },
    { code: "gag", name: "Gagauz", localName: "Gagauz dili", flag: "🇲🇩" },
    { code: "hil", name: "Hiligaynon", localName: "Ilonggo", flag: "🇵🇭" },
    { code: "iu", name: "Inuktitut", localName: "ᐃᓄᒃᑎᑐᑦ", flag: "🇨🇦" },
    { code: "kab", name: "Kabyle", localName: "Taqbaylit", flag: "🇩🇿" },
    { code: "kl", name: "Kalaallisut", localName: "Kalaallisut", flag: "🇬🇱" },
    { code: "ks", name: "Kashmiri", localName: "کٲشُر", flag: "🇮🇳" },
    { code: "lij", name: "Ligurian", localName: "Ligure", flag: "🇮🇹" },
    { code: "lmo", name: "Lombard", localName: "Lombard", flag: "🇮🇹" },
    { code: "mad", name: "Madurese", localName: "Basa Madura", flag: "🇮🇩" },
    { code: "mak", name: "Makassar", localName: "Mangkasara'", flag: "🇮🇩" },
    { code: "gv", name: "Manx", localName: "Gaelg", flag: "🇮🇲" },
    { code: "mh", name: "Marshallese", localName: "Kajin M̧ajeļ", flag: "🇲🇭" },
    { code: "mwr", name: "Marwari", localName: "মারওয়ারী", flag: "🇮🇳" },
    { code: "min", name: "Minangkabau", localName: "Baso Minang", flag: "🇮🇩" },
    { code: "nah", name: "Nahuatl", localName: "Nāhuatl", flag: "🇲🇽" },
    { code: "new", name: "Newari", localName: "नेपाल भाषा", flag: "🇳🇵" },
    { code: "nqo", name: "N'Ko", localName: "ߗߐߺߗߐߺ", flag: "🇬🇳" },
    { code: "nus", name: "Nuer", localName: "Thok Naath", flag: "🇸🇩" },
    { code: "oc", name: "Occitan", localName: "Occitan", flag: "🇫🇷" },
    { code: "os", name: "Ossetian", localName: "Ирон", flag: "🇷🇺" },
    { code: "pag", name: "Pangasinan", localName: "Salitan Pangasinan", flag: "🇵🇭" },
    { code: "pap", name: "Papiamento", localName: "Papiamentu", flag: "🇦🇼" },
    { code: "rom", name: "Romani", localName: "Romanes", flag: "🇷🇴" },
    { code: "se", name: "Northern Sami", localName: "Davvisámegiella", flag: "🇳🇴" },
    { code: "sg", name: "Sango", localName: "Yângâ tî Sängö", flag: "🇨🇫" },
    { code: "sc", name: "Sardinian", localName: "Sardu", flag: "🇮🇹" },
    { code: "szl", name: "Silesian", localName: "Ślōnskŏ gŏdka", flag: "🇵🇱" },
    { code: "srn", name: "Sranan Tongo", localName: "Sranantongo", flag: "🇸🇷" },
    { code: "ss", name: "Swati", localName: "SiSwati", flag: "🇸🇿" },
    { code: "ty", name: "Tahitian", localName: "Reo Tahiti", flag: "🇵🇫" },
    { code: "bo", name: "Tibetan", localName: "བོད་སྐད", flag: "🇨🇳" },
    { code: "war", name: "Waray", localName: "Winaray", flag: "🇵🇭" },
    { code: "sah", name: "Yakut", localName: "Саха тыла", flag: "🇷🇺" }
];

// Google Translate Element Init callback
window.googleTranslateElementInit = function() {
    if (typeof google === 'undefined' || !google.translate) return;
    new google.translate.TranslateElement({
        pageLanguage: 'km',
        layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
        autoDisplay: false
    }, 'google_translate_element');
};

function selectLanguage(code, labelText) {
    appState.selectedLanguageCode = code;
    appState.selectedLanguageLabel = labelText;
    saveState();
    
    updateLanguageButtonsUI(labelText);
    
    // Set googtrans cookie for Google Translate
    document.cookie = "googtrans=/km/" + code;
    document.cookie = "googtrans=/km/" + code + "; path=/";
    
    triggerGoogleTranslate(code);
    
    // Also toggle appState.language between 'km' and 'en' for English compatibility
    appState.language = (code === 'en') ? 'en' : 'km';
    saveState();
    applyLanguage();
}

function updateLanguageButtonsUI(labelText) {
    const ids = ["langToggleBtn", "langToggleBtnStudent", "langToggleBtnLogin"];
    ids.forEach(id => {
        const el = document.getElementById(id);
        if (el) {
            const textEl = el.querySelector(".lang-text") || el.querySelector(".lang-toggle-login span") || el.querySelector("span:not(.fa-globe)");
            if (textEl) {
                textEl.textContent = labelText;
            }
        }
    });
}

function triggerGoogleTranslate(code) {
    // Guard: Google Translate is not available on file:// URLs
    if (window.location.protocol === 'file:') return;
    
    document.cookie = "googtrans=/km/" + code;
    document.cookie = "googtrans=/km/" + code + "; path=/";
    
    const select = document.querySelector(".goog-te-combo");
    if (select) {
        select.value = code;
        select.dispatchEvent(new Event("change", { bubbles: true }));
    } else {
        let attempts = 0;
        const interval = setInterval(() => {
            const selectPoll = document.querySelector(".goog-te-combo");
            if (selectPoll) {
                selectPoll.value = code;
                selectPoll.dispatchEvent(new Event("change", { bubbles: true }));
                clearInterval(interval);
            }
            attempts++;
            if (attempts > 40) clearInterval(interval);
        }, 100);
    }
}

function initLanguageSelector() {
    const grid = document.getElementById("languageGrid");
    if (!grid) return;
    
    const sorted = [...SUPPORTED_LANGUAGES].sort((a, b) => a.name.localeCompare(b.name));
    renderLanguageItems(sorted);
    
    const searchInput = document.getElementById("languageSearchInput");
    if (searchInput) {
        searchInput.addEventListener("input", () => {
            const query = searchInput.value.toLowerCase().trim();
            const filtered = sorted.filter(l => 
                l.name.toLowerCase().includes(query) || 
                l.localName.toLowerCase().includes(query) || 
                l.code.toLowerCase().includes(query)
            );
            renderLanguageItems(filtered);
        });
    }
}

function renderLanguageItems(langs) {
    const grid = document.getElementById("languageGrid");
    if (!grid) return;
    grid.innerHTML = "";
    
    langs.forEach(lang => {
        const activeLangCode = appState.selectedLanguageCode || 'km';
        const isActive = activeLangCode === lang.code;
        
        const item = document.createElement("div");
        item.className = `lang-item ${isActive ? 'active' : ''}`;
        item.innerHTML = `
            <span class="lang-flag">${lang.flag}</span>
            <span class="lang-name" style="flex-grow:1; text-align:left;">${lang.name} <span style="font-size:0.75rem; opacity:0.7; font-weight:400;">(${lang.localName})</span></span>
        `;
        
        item.addEventListener("click", () => {
            selectLanguage(lang.code, `${lang.flag} ${lang.name}`);
            document.getElementById("languageSelectModal").classList.remove("active");
        });
        
        grid.appendChild(item);
    });
}

// ----------------------------------------------------
// USER ACCOUNTS & PENDING REGISTRATION APPROVALS
// ----------------------------------------------------
async function updatePendingUsersBadge() {
    const badge = document.getElementById("userBadge");
    if (badge) {
        try {
            const snapshot = await db.collection('users').where('status', '==', 'pending').get();
            const count = snapshot.size;
            if (count > 0) {
                badge.textContent = count;
                badge.style.display = "inline-block";
            } else {
                badge.style.display = "none";
            }
        } catch(e) {
            console.error(e);
        }
    }
}

async function initUserPanel() {
    updatePendingUsersBadge();
    
    // 1. Generate QR Code for easy local network registration/login
    const portalUrl = window.location.href;
    const imgQr = document.getElementById("imgLoginQrCode");
    const lblUrl = document.getElementById("lblPortalUrlText");
    if (imgQr && lblUrl) {
        imgQr.src = `https://api.qrserver.com/v1/create-qr-code/?size=160x160&data=${encodeURIComponent(portalUrl)}`;
        lblUrl.textContent = portalUrl;
    }
    
    // Copy URL handler
    const btnCopy = document.getElementById("btnCopyPortalUrl");
    if (btnCopy) {
        // Remove old listeners to avoid multiple binding
        const newBtn = btnCopy.cloneNode(true);
        btnCopy.parentNode.replaceChild(newBtn, btnCopy);
        newBtn.addEventListener("click", () => {
            navigator.clipboard.writeText(portalUrl).then(() => {
                alert(appState.language === 'km' ? 'បានចម្លងតំណភ្ជាប់ជោគជ័យ!' : 'Link copied to clipboard!');
            });
        });
    }

    // 2. Populate Pending Approvals Table
    const pendingTbody = document.getElementById("pendingUsersTableBody");
    if (pendingTbody) {
        pendingTbody.innerHTML = `<tr><td colspan="4" class="text-center">Loading...</td></tr>`;
        try {
            const snapshot = await db.collection('users').where('status', '==', 'pending').get();
            pendingTbody.innerHTML = "";
            if (snapshot.empty) {
                pendingTbody.innerHTML = `<tr><td colspan="4" class="text-center" style="color: var(--text-muted);" data-km="មិនទាន់មានគណនីរង់ចាំការអនុម័តទេ" data-en="No pending approvals.">មិនទាន់មានគណនីរង់ចាំការអនុម័តទេ</td></tr>`;
            } else {
                snapshot.forEach(doc => {
                    const req = { id: doc.id, ...doc.data() };
                    const tr = document.createElement("tr");
                    const roleLabel = req.role === 'student' ? (appState.language === 'km' ? 'សិស្ស' : 'Student') : (appState.language === 'km' ? 'គ្រូ' : 'Teacher');
                    
                    let detailsText = "";
                    if (req.role === 'student') {
                        const cls = appState.classes.find(c => c.id === req.classId);
                        detailsText = `${appState.language === 'km' ? 'ថ្នាក់៖' : 'Class:'} ${cls ? cls.name : req.classId} (${appState.language === 'km' ? 'Email៖' : 'Email:'} ${req.email})`;
                    } else {
                        detailsText = `${appState.language === 'km' ? 'Email៖' : 'Email:'} ${req.email}`;
                    }
                    
                    tr.innerHTML = `
                        <td><strong>${req.name}</strong><br><span style="font-size:0.75rem; color:var(--text-muted);">${req.contact}</span></td>
                        <td><span class="badge" style="background:var(--primary-blue); color:white; font-size:0.75rem;">${roleLabel}</span></td>
                        <td>${detailsText}</td>
                        <td>
                            <button class="btn btn-sm btn-primary" onclick="approveUser('${req.id}')" style="padding:0.25rem 0.5rem; font-size:0.75rem; border-radius:6px;">
                                <i class="fa-solid fa-check"></i> <span data-km="អនុម័ត" data-en="Approve">អនុម័ត</span>
                            </button>
                            <button class="btn btn-sm btn-danger-action" onclick="rejectUser('${req.id}')" style="padding:0.25rem 0.5rem; font-size:0.75rem; border-radius:6px; background:rgba(244,63,94,0.1); color:var(--crimson-red);">
                                <i class="fa-solid fa-xmark"></i> <span data-km="លុប" data-en="Reject">លុប</span>
                            </button>
                        </td>
                    `;
                    pendingTbody.appendChild(tr);
                });
            }
        } catch(e) {
            console.error(e);
        }
    }

    // 3. Populate Active Users Table
    const activeTbody = document.getElementById("activeUsersTableBody");
    if (activeTbody) {
        activeTbody.innerHTML = "";
        
        // A. Admin accounts
        const adminTr = document.createElement("tr");
        adminTr.innerHTML = `
            <td><strong>Administrator (លោកនាយក)</strong></td>
            <td><span class="badge" style="background:#4f46e5; color:white; font-size:0.75rem;">Admin</span></td>
            <td><code>admin123</code></td>
            <td>-</td>
            <td><span style="font-size:0.75rem; color:var(--text-muted); font-style:italic;">Default</span></td>
        `;
        activeTbody.appendChild(adminTr);
        
        // B. Teacher accounts
        // Default teacher
        const defaultTeacherTr = document.createElement("tr");
        defaultTeacherTr.innerHTML = `
            <td><strong>គ្រូបន្ទុកថ្នាក់ (លំនាំដើម)</strong></td>
            <td><span class="badge" style="background:var(--primary-blue); color:white; font-size:0.75rem;">Teacher</span></td>
            <td><code>teacher123</code></td>
            <td>-</td>
            <td><span style="font-size:0.75rem; color:var(--text-muted); font-style:italic;">Default</span></td>
        `;
        activeTbody.appendChild(defaultTeacherTr);
        
        // Custom approved teachers
        (appState.teachers || []).forEach((t, index) => {
            if (t.passcode === 'teacher123') return; // skip default duplicate
            const tr = document.createElement("tr");
            tr.innerHTML = `
                <td><strong>${t.name}</strong></td>
                <td><span class="badge" style="background:var(--primary-blue); color:white; font-size:0.75rem;">Teacher</span></td>
                <td><code>${t.passcode}</code></td>
                <td>-</td>
                <td>
                    <div style="display:flex; gap:0.5rem; justify-content:center;">
                        <button class="btn btn-icon btn-sm" onclick="openEditUserModal('teacher', '${t.passcode}')" title="Edit" style="background:rgba(59,130,246,0.1); color:var(--primary-blue);">
                            <i class="fa-solid fa-pen"></i>
                        </button>
                        <button class="btn btn-icon btn-sm btn-danger-action" onclick="deleteActiveUser('teacher', '${t.passcode}')" title="Delete" style="background:rgba(244,63,94,0.1); color:var(--crimson-red);">
                            <i class="fa-solid fa-trash"></i>
                        </button>
                    </div>
                </td>
            `;
            activeTbody.appendChild(tr);
        });

        // C. Student accounts
        appState.classes.forEach(c => {
            c.students.forEach(s => {
                const tr = document.createElement("tr");
                tr.innerHTML = `
                    <td><strong>${s.name}</strong><br><span style="font-size:0.75rem; color:var(--text-muted);">${c.name}</span></td>
                    <td><span class="badge" style="background:var(--amber-orange); color:white; font-size:0.75rem;">Student</span></td>
                    <td><code>${s.id}</code></td>
                    <td>${s.contact || "-"}</td>
                    <td>
                        <div style="display:flex; gap:0.5rem; justify-content:center;">
                            <button class="btn btn-icon btn-sm" onclick="openEditUserModal('student', '${s.id}')" title="Edit" style="background:rgba(59,130,246,0.1); color:var(--primary-blue);">
                                <i class="fa-solid fa-pen"></i>
                            </button>
                            <button class="btn btn-icon btn-sm btn-danger-action" onclick="deleteActiveUser('student', '${s.id}')" title="Delete" style="background:rgba(244,63,94,0.1); color:var(--crimson-red);">
                                <i class="fa-solid fa-trash"></i>
                            </button>
                        </div>
                    </td>
                `;
                activeTbody.appendChild(tr);
            });
        });
    }
    
    applyLanguage();
}

async function approveUser(requestId) {
    try {
        const docRef = db.collection('users').doc(requestId);
        const doc = await docRef.get();
        if (!doc.exists) return;
        
        const req = doc.data();
        
        if (req.role === 'student') {
            const cls = appState.classes.find(c => c.id === req.classId);
            if (cls) {
                // Add student record to class database
                cls.students.push({
                    id: requestId, // Use UID as ID
                    name: req.name,
                    gender: "ប្រុស", // default placeholder, editable in classes panel
                    contact: req.contact,
                    generation: ""
                });
            }
        } else {
            // Add teacher record to custom teachers list
            if (!appState.teachers) appState.teachers = [];
            appState.teachers.push({
                name: req.name,
                passcode: req.email // use email as ID reference
            });
        }
        
        // Update user status in Firestore
        await docRef.update({ status: 'active' });
        
        saveState(); // Sync local appData changes
        showToast(appState.language === 'km' ? 'បានអនុម័តគណនី!' : 'Account approved successfully!');
        initUserPanel(); // Refresh UI
    } catch (e) {
        console.error("Approval error:", e);
        alert("Failed to approve user.");
    }
}

async function rejectUser(requestId) {
    if (!confirm(appState.language === 'km' ? 'តើអ្នកប្រាកដជាចង់លុបសំណើនេះទេ?' : 'Are you sure you want to reject this request?')) return;
    
    try {
        await db.collection('users').doc(requestId).delete();
        showToast(appState.language === 'km' ? 'បានលុបសំណើ' : 'Registration request deleted.', 'warning');
        initUserPanel();
    } catch (e) {
        console.error("Rejection error:", e);
    }
}

function deleteActiveUser(role, id) {
    const isKm = appState.language === 'km';
    if (!confirm(isKm ? 'តើអ្នកពិតជាចង់លុបគណនីនេះមែនទេ?' : 'Are you sure you want to delete this user?')) return;
    
    if (role === 'teacher') {
        appState.teachers = (appState.teachers || []).filter(t => t.passcode !== id);
    } else if (role === 'student') {
        appState.classes.forEach(c => {
            c.students = c.students.filter(s => s.id !== id);
        });
    }
    
    saveState();
    showToast(isKm ? 'save_success' : 'User deleted successfully!');
    initUserPanel();
}

// Window bindings for user actions callbacks
window.updatePendingUsersBadge = updatePendingUsersBadge;
window.initUserPanel = initUserPanel;
window.approveUser = approveUser;
window.rejectUser = rejectUser;
window.deleteActiveUser = deleteActiveUser;

window.openEditUserModal = function(role, id) {
    const roleInput = document.getElementById("editUserRole");
    const oldIdInput = document.getElementById("editUserOldId");
    const nameInput = document.getElementById("editUserName");
    const idPasscodeInput = document.getElementById("editUserIdPasscode");
    const contactInput = document.getElementById("editUserContact");
    const contactGroup = document.getElementById("editUserContactGroup");
    const lblIdPasscode = document.getElementById("lblEditUserIdPasscode");
    const isKm = appState.language === 'km';
    
    roleInput.value = role;
    oldIdInput.value = id;
    
    if (role === 'teacher') {
        const t = appState.teachers.find(x => x.passcode === id);
        if(!t) return;
        nameInput.value = t.name;
        idPasscodeInput.value = t.passcode;
        lblIdPasscode.textContent = isKm ? "លេខកូដ (Passcode)" : "Passcode";
        contactGroup.style.display = "none";
    } else {
        let s = null;
        for (let c of appState.classes) {
            s = c.students.find(x => x.id === id);
            if (s) break;
        }
        if(!s) return;
        nameInput.value = s.name;
        idPasscodeInput.value = s.id;
        lblIdPasscode.textContent = isKm ? "លេខសម្គាល់ (ID)" : "ID";
        contactGroup.style.display = "block";
        contactInput.value = s.contact || "";
    }
    
    document.getElementById("editUserModal").classList.add("active");
};

document.getElementById("editUserForm")?.addEventListener("submit", (e) => {
    e.preventDefault();
    const role = document.getElementById("editUserRole").value;
    const oldId = document.getElementById("editUserOldId").value;
    const newName = document.getElementById("editUserName").value.trim();
    const newIdPasscode = document.getElementById("editUserIdPasscode").value.trim();
    const newContact = document.getElementById("editUserContact").value.trim();
    
    if (!newName || !newIdPasscode) return;
    
    if (role === 'teacher') {
        if (newIdPasscode !== oldId && (newIdPasscode === 'admin123' || newIdPasscode === 'teacher123' || appState.teachers.find(x => x.passcode === newIdPasscode))) {
            alert(appState.language === 'km' ? "លេខកូដនេះមានរួចហើយ!" : "Passcode already exists!");
            return;
        }
        const t = appState.teachers.find(x => x.passcode === oldId);
        if (t) {
            t.name = newName;
            t.passcode = newIdPasscode;
        }
    } else {
        if (newIdPasscode !== oldId) {
            let exists = false;
            for (let c of appState.classes) {
                if (c.students.find(x => x.id === newIdPasscode)) {
                    exists = true; break;
                }
            }
            if (exists) {
                alert(appState.language === 'km' ? "លេខសម្គាល់នេះមានរួចហើយ!" : "Student ID already exists!");
                return;
            }
        }
        let s = null;
        for (let c of appState.classes) {
            s = c.students.find(x => x.id === oldId);
            if (s) {
                s.name = newName;
                s.id = newIdPasscode;
                s.contact = newContact;
                break;
            }
        }
    }
    
    saveState();
    document.getElementById("editUserModal").classList.remove("active");
    initUserPanel();
});
