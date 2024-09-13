import firebase from "firebase/compat/app";

export const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

// Inserindo um documento com um ID específico
db.collection('Users').doc('user').set({
  name: 'Kiwi',
  age: 10,
  email: 'kiwi@example.com'
})
.then(() => {
  console.log('Documento criado com sucesso!');
})
.catch((error) => {
  console.error('Erro ao criar documento: ', error);
});

db.collection('Users').doc('user').set({
  name: 'thigas',
  age: 40,
  email: 'thigas@example.com'
})
.then(() => {
  console.log('Documento criado com sucesso!');
})
.catch((error) => {
  console.error('Erro ao criar documento: ', error);
});

db.collection('Users').doc('user').set({
  name: 'Big',
  age: 20,
  email: 'big@example.com'
})
.then(() => {
  console.log('Documento criado com sucesso!');
})
.catch((error) => {
  console.error('Erro ao criar documento: ', error);
});