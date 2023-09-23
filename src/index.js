import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBZdOQM8v2AlZ3vO_5B9kX85qsAJhBIdns",
  authDomain: "yoccodylan.firebaseapp.com",
  projectId: "yoccodylan",
  storageBucket: "yoccodylan.appspot.com",
  messagingSenderId: "397333595877",
  appId: "1:397333595877:web:d8340a981d59befd7bf60c"
};

// Initialize Firebase
initializeApp(firebaseConfig);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

