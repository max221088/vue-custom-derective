import Vue from 'vue'
import Vuex from 'vuex'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {  
  getDocs, 
  collection, 
  //doc, 
  //setDoc, 
  //getDoc, 
  getFirestore,
   //deleteDoc
  } from "firebase/firestore";
// import {  
//   getAuth, 
//   signOut, 
//   signInWithEmailAndPassword
// } from "firebase/auth";
// Your web app's Firebase configuration
const app = initializeApp({
  apiKey: "AIzaSyAVJlSbSBMLK3lFnFLNsPIxE5C0ZFrJoFU",
  authDomain: "internet-shop-37493.firebaseapp.com",
  databaseURL: "https://internet-shop-37493-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "internet-shop-37493",
  storageBucket: "internet-shop-37493.appspot.com",
  messagingSenderId: "486324770247",
  appId: "1:486324770247:web:7263ac3ac6daeded2b75e2"
});

// Initialize Firebase
const DB = getFirestore(app);
//const AUTH = getAuth(app);

// function getDocFromDB (deskID, colID) {
//   return getDoc(doc(DB, deskID, colID));
// }

function getDataFromDB (colID) {
  return getDocs(collection(DB, colID))
}

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: []
  },
  getters: {
    getProducts (state) {
      return state.products;
    },
  },
  mutations: {
  },
  actions: {
    fetchProducts(context) {
      getDataFromDB('Products')
        .then(data => {
          context.state.products = [];
          data.forEach(list => {
            context.state.products.push(list.data());
        });
        console.log(context.state.products)
      })
    },
  },
  modules: {
  }
})
