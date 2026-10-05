import { initializeApp } from "firebase/app";
import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider
} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {
    getFirestore,
    doc,
    getDoc,
    setDoc
} from 'firebase/firestore'
import firebase from "firebase/compat/app";
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDnfjzEesH1jFC59zh2k2k0ZcXGU_QvSF8",
    authDomain: "crwn-clothing-db-56b45.firebaseapp.com",
    projectId: "crwn-clothing-db-56b45",
    storageBucket: "crwn-clothing-db-56b45.firebasestorage.app",
    messagingSenderId: "187002393227",
    appId: "1:187002393227:web:4c8dd6c3571e5eed63fa8e"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: 'select_account'
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid);
    console.log(userDocRef);

    const userSnapshot = await getDoc(userDocRef);
    console.log(userSnapshot.exists())

    if (!userAuth.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt
            });
        }
        catch (error) {
            console.log('error creating message', error.message)
        }
    }
}