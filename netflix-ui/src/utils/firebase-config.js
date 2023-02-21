import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCxYSXQXOIV4FPVHx3WFvrZoOqokN3qtIA",
  authDomain: "netflix-clone-ba798.firebaseapp.com",
  projectId: "netflix-clone-ba798",
  storageBucket: "netflix-clone-ba798.appspot.com",
  messagingSenderId: "391402183035",
  appId: "1:391402183035:web:66c84d27b1e86542b105de"
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
