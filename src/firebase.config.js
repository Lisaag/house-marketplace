// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyCctXyiIMejEXty_oBqURnDHbHHSUo28U8',
	authDomain: 'house-marketplace-app-4a648.firebaseapp.com',
	projectId: 'house-marketplace-app-4a648',
	storageBucket: 'house-marketplace-app-4a648.appspot.com',
	messagingSenderId: '657819655885',
	appId: '1:657819655885:web:c8612458b7db393d0a1384',
}

// Initialize Firebase
initializeApp(firebaseConfig)
export const db = getFirestore()
