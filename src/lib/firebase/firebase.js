import { initializeApp } from 'firebase/app';
import {
	getAuth,
	signInWithRedirect,
	signInWithPopup,
	GoogleAuthProvider,
} from 'firebase/auth';
import {
	getFirestore,
	doc,
	collection,
	writeBatch,
	query,
	getDocs,
} from 'firebase/firestore';

// Config
const firebaseConfig = {
	apiKey: 'AIzaSyDKGdbUkrQDCxnHKp-UqYHPzAonGcbKo5s',
	authDomain: 'portfolio-db-b6a63.firebaseapp.com',
	projectId: 'portfolio-db-b6a63',
	storageBucket: 'portfolio-db-b6a63.appspot.com',
	messagingSenderId: '111183607612',
	appId: '1:111183607612:web:cb965927f9a9c1cfd65039',
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
	prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () =>
	signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () =>
	signInWithRedirect(auth, googleProvider);

// Gets reference of firesotre db
export const db = getFirestore();

// Add data to Firestroe Database
export const addCollectionAndDocs = async (collectionKey, objectsToAdd) => {
	const collectionRef = collection(db, collectionKey);
	const batch = writeBatch(db);

	objectsToAdd.forEach((obj) => {
		const docRef = doc(collectionRef, obj.name.toLowerCase());
		batch.set(docRef, obj);
	});

	await batch.commit();
};

export const getPortfolioData = async () => {
	const collectionRef = collection(db, 'portfolio-info');
	const q = query(collectionRef);

	const querySnapshot = await getDocs(q);

	const portfolioMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
		const snap = docSnapshot.data();

		return snap;
	}, {});

	return portfolioMap;
};

export const getProjectsData = async () => {
	const collectionRef = collection(db, 'projects');
	const q = query(collectionRef);

	const querySnapshot = await getDocs(q);
	const arr = [];
	const projectMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
		const { projectName } = docSnapshot.data();
		const slug = projectName.replace(/\s/g, '').replace('.', '').toLowerCase();
		acc = {
			...docSnapshot.data(),
			slug,
		};
		arr.push(acc);
		return arr;
	}, {});
	return projectMap;
};
