const firebaseConfig = {
  apiKey: "AIzaSyBZu-KIQSqIhywFQMHf4IuwQb1q0hX8bRo",
  authDomain: "primary-school-grading-system.firebaseapp.com",
  projectId: "primary-school-grading-system",
  storageBucket: "primary-school-grading-system.firebasestorage.app",
  messagingSenderId: "356657446468",
  appId: "1:356657446468:web:b3cd0dcb08f331ee15c611",
  measurementId: "G-NE78R13BQP"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize Firebase services
window.auth = firebase.auth();
window.db = firebase.firestore();

// Optional: Enable offline persistence for Firestore
window.db.enablePersistence().catch((err) => {
    console.error("Firestore persistence error:", err.code);
});
