// data.js - Firebase version

// Firebase Config - Replace with your Firebase project configuration
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  databaseURL: "https://YOUR_PROJECT_ID.firebaseio.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const database = firebase.database();

// Save song to Firebase
function saveSongToFirebase(song) {
  const songRef = database.ref("songs");
  songRef.push(song);
}

// Load all songs from Firebase
function loadSongsFromFirebase(callback) {
  const songRef = database.ref("songs");
  songRef.once("value", snapshot => {
    const songs = [];
    snapshot.forEach(childSnapshot => {
      const data = childSnapshot.val();
      songs.push({ ...data, key: childSnapshot.key });
    });
    callback(songs);
  });
}

// Delete song from Firebase
function deleteSongFromFirebase(songKey, callback) {
  const songRef = database.ref("songs/" + songKey);
  songRef.remove()
    .then(() => {
      console.log("Song deleted");
      if (callback) callback();
    })
    .catch(error => console.error("Delete error:", error));
}
