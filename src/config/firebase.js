import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import constant from './constant'

let dbInit = null
let firebaseAppInit = null
let authInit = null

if (process.env.VUE_APP_FIREBASE === 'true') {
  // Firebase'i başlat
  firebaseAppInit = initializeApp(constant.firebaseConfig)
  
  // Firestore ve Auth modüllerini başlat
  dbInit = getFirestore(firebaseAppInit)
  authInit = getAuth(firebaseAppInit)
}

export const db = dbInit
export const firebaseApp = firebaseAppInit
export const auth = authInit
