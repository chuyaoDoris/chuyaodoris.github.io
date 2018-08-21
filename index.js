//var mainText = document.getElementById("mainText");
//var submitBtn = document.getElementById("submitBtn");
var nameText = document.getElementById("name");
var genderChoice = document.getElementById("gender");
var ageNumber = document.getElementById("age");
var weightNumber = document.getElementById("weight");
var heightNumber = document.getElementById("height");
var moodChoice = document.getElementById("mood");
var temperatureNumber = document.getElementById("bodytemperature");
var diastolicBP = document.getElementById("diastolicbloodpressure");
var systolicBP = document.getElementById("systolicbloodpressure");
var heartRateNumber = document.getElementById("heartrate");
var dateText = document.getElementById("date");
var fileName = document.getElementById("pulsewavedatafile");
var uploader = document.getElementById("uploader");

fileName.addEventListener('change',function(f) {
	var file = f.target.files[0];
	var storageRef = firebase.storage().ref(nameText.value + "/" + file.name);
	var status = storageRef.put(file);
	status.on("state_changed", 
		function progress(snapshot) {
			var percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
			uploader.value = percentage;
		},
		function error(err) {
			
		},
		function complete() {

		}
	);
});
function submitClick() {
	//window.alert(nameText.value);
	//window.alert(genderChoice.value);
	//window.alert("hello");
	var firebaseRef = firebase.database().ref();
	var data = {
		name : nameText.value,
		gender : genderChoice.value,
		age: ageNumber.value,
		weight: weightNumber.value,
		height: heightNumber.value,
		mood: moodChoice.value,
		bodyTemperature: temperatureNumber.value,
		diastolicBloodPressure: diastolicBP.value,
		systolicBloodPressure: systolicBP.value,
		date: dateText.value,
		file: fileName.value
	};
	firebaseRef.push(data);
	//window.alert(firebaseRef);
	//var ref = database.ref("users");
	//firebaseRef.child("texwewwts").set(nameText.value);
	window.alert(firebaseRef);
}