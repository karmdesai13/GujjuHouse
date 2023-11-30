// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
 
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDKdxGYok1-nSBX2bWCkcUezXMi9-TZkZA",
  authDomain: "gujjuhouse-af2af.firebaseapp.com",
  projectId: "gujjuhouse-af2af",
  storageBucket: "gujjuhouse-af2af.appspot.com",
  messagingSenderId: "512452466406",
  appId: "1:512452466406:web:99d59644a03a532281cd27"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export const db = getFirestore(app);
export { auth };
const provider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    // Google Access Token can be used to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    return user;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

 
