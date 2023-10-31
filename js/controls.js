import * as equations from "/Kinematic-Equation-Calculator/js/kinematicEquations.js";
// import { notTime } from "./kinematicEquations";
var displacement = document.getElementById("displacement");
var initialVelocity = document.getElementById("initial-velocity");
var finalVelocity = document.getElementById("final-velocity");
var acceleration = document.getElementById("acceleration");
var time = document.getElementById("time");
var submitButton = document.getElementById("submit-btn");
var out1 = document.getElementById("output-1");
var out2 = document.getElementById("results");

var isValid = false;

function displayInputs() {
out1.innerHTML = "";
out1.innerHTML += displacement.value + " ";
out1.innerHTML += initialVelocity.value + " ";
out1.innerHTML += finalVelocity.value + " ";
out1.innerHTML += acceleration.value + " ";
out1.innerHTML += time.value + " ";
}

function getValues() {
const nodelist = document.querySelectorAll(".container input");
var arrayOfValues = [];
Array.from(nodelist).forEach((el) => arrayOfValues.push(el.value));
return arrayOfValues;
}

function countValues(array) {
var valueCount = 0;
for (let i = 0; i < array.length; i++) {
    if (array[i].toString().trim() != "") {
    valueCount++;
    }
}
console.log(array);
return valueCount;
}

function resetValues() {
displacement.value = "";
initialVelocity.value = "";
finalVelocity.value = "";
acceleration.value = "";
time.value = "";
}

function findTargets(valuesArray) {
var targets = [];
for (let i = 0; i < valuesArray.length; i++) {
    if (valuesArray[i].toString().trim() == "") {
    targets.push(i);
    }
}
console.log(targets);
return targets;
}

function calculate(valuesArray, target, avoid) {
var displacement;
var v_0;
var v_f;
var acceleration;
var time;
if (target == 0) {
    if (avoid == 1) {
    v_f = valuesArray[2];
    acceleration = valuesArray[3];
    time = valuesArray[4];
    displacement =  equations.notInitialVelocity(0, v_f, time, acceleration, target)
    } else if (avoid == 2) {
    v_0 = valuesArray[1];
    acceleration = valuesArray[3];
    time = valuesArray[4];
    displacement = equations.notFinalVelocity(0, v_0, time, acceleration, target);
    } else if (avoid == 3) {
    v_0 = valuesArray[1];
    v_f = valuesArray[2];
    time = valuesArray[4];
    displacement = equations.notAcceleration(0, v_0, v_f, time, target);
    } else if (avoid == 4) {
    v_0 = valuesArray[1];
    v_f = valuesArray[2];
    acceleration = valuesArray[3];
    displacement = equations.notTime(v_f, v_0, acceleration, 0, target);
    } else {
    System.out.println("Value to avoid was unexpected");
    }
    return displacement;
}
}

function displayOutputs(resultsArray) {
    out2.innerHTML = "";
    for (let i = 0; i < resultsArray.length; i++) {
        out2.innerHTML += resultsArray[i] + " ";
        }
}

function validateForm() {
var valuesArray = getValues();
var valueCount = countValues(valuesArray);
var results = [];

//valuecount is now the number of the fields that is filled in.
console.log(valueCount);
//checking arguments based on valueCount
if (valueCount == 4 || valueCount == 3) {
    isValid = true;
} else if (valueCount == 5) {
    isValid = false;
    alert("you cannot enter all 5 values");
    resetValues();
} else {
    isValid = false;
    alert("not enough values entered!");
    resetValues();
}
// this is only valid when there are 2 and 1 target(s)
    if (isValid) {
        var targets = findTargets(valuesArray);
        if (targets.length == 2) {
        results.push(calculate(valuesArray, targets[0], targets[1]));
        results.push(calculate(valuesArray, targets[1], targets[0]));
        } else {
        //four elements entered, choose one other element that is not target to avoid:
        if (targets[0] == 0) {
            results.push(calculate(valuesArray, targets[0], 1));
        } else if (targets[0] == 4) {
            results.push(calculate(valuesArray, targets[0], 3));
        } else {
            results.push(calculate(valuesArray, targets[0], targets[0] - 1));
        }
        displayOutputs(results);
        }
    }
}

submitButton.addEventListener("click", validateForm);
submitButton.addEventListener("click", displayInputs);
submitButton.addEventListener("click", calculate);
submitButton.addEventListener("click", displayOutputs);