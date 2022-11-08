import { initializeApp } from 'firebase/app'
import {
	getAuth,
	signInWithRedirect,
	signInWithPopup,
	GoogleAuthProvider,
} from 'firebase/auth'
import {
	getFirestore,
	doc,
	getDoc,
	setDoc,
	collection,
	writeBatch,
	query,
	getDocs,
} from 'firebase/firestore'

// Config
const firebaseConfig = {
	apiKey: 'AIzaSyDKGdbUkrQDCxnHKp-UqYHPzAonGcbKo5s',
	authDomain: 'portfolio-db-b6a63.firebaseapp.com',
	projectId: 'portfolio-db-b6a63',
	storageBucket: 'portfolio-db-b6a63.appspot.com',
	messagingSenderId: '111183607612',
	appId: '1:111183607612:web:cb965927f9a9c1cfd65039',
}

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig)

const provider = new GoogleAuthProvider()

provider.setCustomParameters({
	prompt: 'select_account',
})

export const auth = getAuth()
export const signInWithGooglePopup = () => signInWithPopup(auth, provider)

// export const db = getFirestore()

// export const getPortfolio = async () => {
// 	const collectionRef = collection(db, 'portfolio')
// 	const q = query(collectionRef)

// 	const querySnapshot = await getDocs(q)
// 	const portfolioMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
// 		const { name, first_name } = docSnapshot.data()
// 		acc[name.toLowerCase()] = first_name
// 		return acc
// 	}, {})

// 	return portfolioMap
// }

