import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBPrj6zxmD3F3BjmMNGpl990P6ix4TGh_U',
  authDomain: 'zoayongproduct.firebaseapp.com',
  projectId: 'zoayongproduct',
  storageBucket: 'zoayongproduct.firebasestorage.app',
  messagingSenderId: '704106604683',
  appId: '1: 704106604683:web: 669c922bba92ac35b04c8e',
  measurementId: 'G-9T9ZB751WW',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider, signInWithPopup };
