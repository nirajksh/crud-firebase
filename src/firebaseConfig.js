
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"



const firebaseConfig = {
  apiKey: "AIzaSyCFJdWU_-QxZQetLw2YHLECkUdFJwUptEI",
  authDomain: "my-crud-app-6645d.firebaseapp.com",
  projectId: "my-crud-app-6645d",
  storageBucket: "my-crud-app-6645d.appspot.com",
  messagingSenderId: "34682846660",
  appId: "1:34682846660:web:d46dfd8990754ffd5ab891",
  measurementId: "G-48B71ZM2PB"
};


export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
