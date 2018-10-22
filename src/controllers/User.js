import firebase from '../models/db';
import App from '../App';

const user = () => firebase.auth().currentUser;
const auth_change_listener = [];

firebase.auth().onAuthStateChanged((current_user) => {
  auth_change_listener.forEach((f) => { f(); });
});


export default user;
export { auth_change_listener };
