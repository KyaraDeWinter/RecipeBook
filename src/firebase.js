import {initializeApp} from "firebase/app";
import {getFirestore} from "@firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyB0XW6h9lcdrH_ioF-zHhQM5rZiyVSTGJA",
    authDomain: "project01-bca27.firebaseapp.com",
    databaseURL: "https://project01-bca27-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "project01-bca27",
    storageBucket: "project01-bca27.appspot.com",
    messagingSenderId: "516519654619",
    appId: "1:516519654619:web:8445cc49e1fc808d4688fe"
  };

  const app = initializeApp(firebaseConfig);
  export const db = getFirestore(app);
