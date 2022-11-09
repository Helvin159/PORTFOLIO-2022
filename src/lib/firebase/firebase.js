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
	// collection,
	// writeBatch,
	// query,
	// getDocs,
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
console.log(firebaseApp)

const googleProvider = new GoogleAuthProvider()

googleProvider.setCustomParameters({
	prompt: 'select_account',
})

export const auth = getAuth()
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider)
export const signInWithGoogleRedirect = () =>
	signInWithRedirect(auth, googleProvider)

export const db = getFirestore()

export const createUserDocumentFromAuth = async (userAuth) => {
	const userDocumentRef = doc(db, 'users', userAuth.uid)
	console.log(userDocumentRef)

	const userSnapshot = await getDoc(userDocumentRef)

	console.log(userSnapshot)
	console.log(userSnapshot.exists(), 'exists')

	if (!userSnapshot.exists()) {
		const { displayName, email } = userAuth
		const createdAt = new Date()

		try {
			await setDoc(userDocumentRef, {
				displayName,
				email,
				createdAt,
			})
		} catch (err) {
			console.log(err, 'error')
		}
	}

	return userDocumentRef
}

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

