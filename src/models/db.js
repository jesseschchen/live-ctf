import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

// Initialize Firebase
const config = {
  apiKey: 'AIzaSyATBLqJFjT5LchzDHvfBiDYZx7C-U05yMk',
  authDomain: 'live-ctf.firebaseapp.com',
  databaseURL: 'https://live-ctf.firebaseio.com',
  projectId: 'live-ctf',
  storageBucket: 'live-ctf.appspot.com',
  messagingSenderId: '378435612750',
};
firebase.initializeApp(config);

export default firebase;

export async function update_user_location(data) {
  return new Promise((resolve, reject) => {
    if (!firebase.auth().currentUser) {
      reject('user not logged in');
    }
    if (!data.coords) reject('no coords attribute');
    const validated_data = { coords: { latitude: data.coords.latitude, longitude: data.coords.longitude, accuracy: data.coords.accuracy }, timestamp: data.timestamp || Date.now() };

    const user_ref = firebase.database().ref(`user/${firebase.auth().currentUser.uid}`);
    user_ref.set(validated_data);
    resolve('user location updated');
  });
}
