var firebaseConfig = {
  apiKey: "AIzaSyAdQK9LZn7_AAXo1Cu9-v0AbZVcSh4FEA0",
  authDomain: "csc225-9aadf.firebaseapp.com",
  projectId: "csc225-9aadf",
  storageBucket: "csc225-9aadf.appspot.com",
  messagingSenderId: "583854877860",
  appId: "1:583854877860:web:1b51a06f357c7f0cefca31",
  measurementId: "G-EBKL03K9XW"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
/* object examples */
var testJson = {};
testJson["lastname"] = "zhang";
testJson["location"] = "aiken";
console.log(testJson);

// enter data in
$("input[type='button']").click(function(e) {
  //get the value of form
  const inputdata = $('form').serializeArray();
  console.log(inputdata);
  
  /* save the data to database */
  var inputJson = {};
  for(var i = 0 ; i < inputdata.length; i++){
    var n = inputdata[i]["name"];
    var v = inputdata[i]["value"];

    console.log(n + ' ' + v);
    inputJson[n] = v;
  }
  inputJson['name']='Austin';
  inputJson['checkin']='2021-11-15';
  inputJson['checkout']='2021-11-17';

  firebase.firestore().collection("hotelreservation").add(inputJson);
  /* clear the entry */
  $("form")[0].reset();
});

/* array example
const array1 = ['a', 'b', 'c'];
array1.forEach(element => console.log(element));
*/

/* read the data from the database */

firebase
  .firestore()
  .collection("hoteldata")
  .onSnapshot(querySnapshot => {
    console.log(querySnapshot.size);
    querySnapshot.forEach(doc => {
      console.log(doc.data());
      console.log(doc.data().room);
      console.log(doc.data().checkout);
    });
  });
