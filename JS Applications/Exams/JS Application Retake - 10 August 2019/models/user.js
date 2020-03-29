export default {
    register(username, password) {
        // console.log(data);
        return firebase.auth().createUserWithEmailAndPassword(username, password);
    },
    login(username, password) {
        return firebase.auth().signInWithEmailAndPassword(username, password);
    },
    logout(username, password) {
        // return firebase.auth().signInWithEmailAndPassword(email, password);
    }
};