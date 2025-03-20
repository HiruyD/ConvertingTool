const convBtn = document.getElementById("conBttn");
const clrBtn = document.getElementById("clrBttn");
let totalLen = 0;
let totalVol = 0;
let totalMass = 0;

convBtn.addEventListener("click", function () {
  convertLength();
  convertVolume();
  convertMass();
});

clrBtn.addEventListener("click", function () {
  document.getElementById("inPut").value = "";
  document.getElementById("LenOut").innerText = "";
  document.getElementById("VolOut").innerText = "";
  document.getElementById("MassOut").innerText = "";
});

// write functions for each conversion that take in the input when button is clicked

function convertLength() {
  input1 = parseFloat(document.getElementById("inPut").value);
  totalLen = (input1 * 3.281).toFixed(2);
  let totalLen2 = (input1 * 0.3048).toFixed(2);

  document.getElementById(
    "LenOut"
  ).innerText = `${input1} meters = ${totalLen} feet | ${input1} feet = ${totalLen2} meters`;
}

function convertVolume() {
  input2 = parseFloat(document.getElementById("inPut").value);
  totalVol = (input1 * 0.264).toFixed(2);
  let totalVol2 = (input1 * 3.78541).toFixed(2);
  document.getElementById(
    "VolOut"
  ).innerText = `${input1} liters = ${totalVol} gallons | ${input1} gallons = ${totalVol2} liters`;
}

function convertMass() {
  input3 = parseFloat(document.getElementById("inPut").value);
  totalMass = (input1 * 2.2042).toFixed(2);
  let totalMass2 = (input1 * 0.453592).toFixed(2);
  document.getElementById(
    "MassOut"
  ).innerText = `${input1} kilos = ${totalMass} pounds | ${input1} pounds = ${totalMass2} kilos`;
}

function futureMsg() {
  alert(
    "This feature is coming soon! , Give me a break, I'm trying my best here"
  );
}
