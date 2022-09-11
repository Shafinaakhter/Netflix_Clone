import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyAQ59Q71_CMvRxLuYhLc0kIyCLXyP4y6PM",
  authDomain: "netflix-clone-bca06.firebaseapp.com",
  projectId: "netflix-clone-bca06",
  storageBucket: "netflix-clone-bca06.appspot.com",
  messagingSenderId: "727022309229",
  appId: "1:727022309229:web:291c4f40ebbf0818d91464",
  measurementId: "G-XBF5HPBZRC"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const firebaseAuth = getAuth(app) 