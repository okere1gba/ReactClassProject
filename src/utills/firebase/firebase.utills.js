import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  getDocFromCache,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBmKmNo2tmgQKHnYnTg16SFQClI47YyWdI",
  authDomain: "my-first-react-project-a84c4.firebaseapp.com",
  projectId: "my-first-react-project-a84c4",
  storageBucket: "my-first-react-project-a84c4.appspot.com",
  messagingSenderId: "769301143111",
  appId: "1:769301143111:web:6f59693c73748fbf881b62",
};

// Initialize Firebase
const firebaseapp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompts: "select_account",
});

export const auth = getAuth();
export const signInWithGooglepopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "user", userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createAt,
      });
    } catch (error) {
      console.log("error creating the user", error.message);
    }
  }

  return userDocRef;
};
