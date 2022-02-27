import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCMgA2I-hS0Ch6-Rn1qLc4y54FX2nwtY6w",
  authDomain: "cult-fit-4350d.firebaseapp.com",
  projectId: "cult-fit-4350d",
  storageBucket: "cult-fit-4350d.appspot.com",
  messagingSenderId: "531206728037",
  appId: "1:531206728037:web:2ce6157fb34a5a1e2c598c",
};
// const firebaseConfig = {
//   apiKey: "AIzaSyAcTybL8GCP0k8Tx13zp1RvOo_ef_8BDeg",
//   authDomain: "cultfit-f1d9b.firebaseapp.com",
//   projectId: "cultfit-f1d9b",
//   storageBucket: "cultfit-f1d9b.appspot.com",
//   messagingSenderId: "912618004165",
//   appId: "1:912618004165:web:c5944d3dbf1a25e3599aac",
// };
export const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const auth = getAuth(app);

export const googleProvider = new GoogleAuthProvider();
