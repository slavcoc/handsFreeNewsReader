import Firebase from 'firebase';  
let config = {  
  apiKey: "AIzaSyAmOFTiR4ygUsFY1VUC2yzmN1bJcZQ8EAI",
  authDomain: "handsfreenewsapp.firebaseapp.com",
  databaseURL: "https://handsfreenewsapp.firebaseio.com",
  projectId: "handsfreenewsapp",
  storageBucket: "handsfreenewsapp.appspot.com",
  messagingSenderId: "965113324340"
};
let app = Firebase.initializeApp(config);  
export const db = app.database(); 
export const provider = new Firebase.auth.FacebookAuthProvider();