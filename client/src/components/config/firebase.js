import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import 'firebase/analytics';


var firebaseConfig = {
    apiKey: "AIzaSyAtVu0kYqPxytXxBkzt_JUZGvRQpe_FM7k",
    authDomain: "u-room.firebaseapp.com",
    projectId: "u-room",
    storageBucket: "u-room.appspot.com",
    messagingSenderId: "567130453370",
    appId: "1:567130453370:web:8bf8505d7ddac89390d2c3",
    measurementId: "G-37CM4RX79C"
};



export const generateUserDocument = async (user, additionalData) => {
    if (!user) return;
    const userRef = firestore.doc(`users/${user.uid}`);
    const snapshot = await userRef.get();
    if (!snapshot.exists) {
      const { email, name, url } = user;
      try {
        await userRef.set({
          name,
          email,
          url,
          ...additionalData
        });
      } catch (error) {
        console.error("Error creating user document", error);
      }
    }
    return getUserDocument(user.uid);
  };
  const getUserDocument = async uid => {
    if (!uid) return null;
    try {
      const userDocument = await firestore.doc(`users/${uid}`).get();
      return {
        uid,
        ...userDocument.data()
      };
    } catch (error) {
      console.error("Error fetching user", error);
    }
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
export const auth = firebase.auth();
export const firestore = firebase.firestore();
export default firebaseConfig;