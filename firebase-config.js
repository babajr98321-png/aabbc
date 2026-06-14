import { initializeApp, getApps } from 'https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js';
import { getAuth, GoogleAuthProvider } from 'https://www.gstatic.com/firebasejs/10.14.1/firebase-auth.js';
import { getFirestore } from 'https://www.gstatic.com/firebasejs/10.14.1/firebase-firestore.js';

const firebaseConfig = {
  apiKey: "AIzaSyCZGZW7n6TIpZkvnW63rgoFSXXTo2Vrv78",
  authDomain: "flutter-ai-playground-21a0c.firebaseapp.com",
  projectId: "flutter-ai-playground-21a0c",
  storageBucket: "flutter-ai-playground-21a0c.firebasestorage.app",
  messagingSenderId: "100078759421",
  appId: "1:100078759421:web:25d48e673c3a2a5059bd94"
};

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
export const auth = getAuth(app);
export const db = getFirestore(app);
export const googleProvider = new GoogleAuthProvider();
export default app;
