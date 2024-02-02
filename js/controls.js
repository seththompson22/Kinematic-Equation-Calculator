import * as equations from "./kinematicEquations.js";
var displacement = document.getElementById("displacement");
var initialVelocity = document.getElementById("initial-velocity");
var finalVelocity = document.getElementById("final-velocity");
var acceleration = document.getElementById("acceleration");
var time = document.getElementById("time");
var submitButton = document.getElementById("submit");
var disOut = document.getElementById("displacement-out");
var ivOut = document.getElementById("initial-velocity-out");
var fvOut = document.getElementById("final-velocity-out");
var accOut = document.getElementById("acceleration-out");
var tOut = document.getElementById("time-out");

var isValid = false;

function displayInputs() {
    disOut.innerHTML = "Displacement: " + displacement.value;
    ivOut.innerHTML = "Initial Velocity: " + initialVelocity.value;
    fvOut.innerHTML = "Final Velocity: " + finalVelocity.value;
    accOut.innerHTML = "Acceleration: " + acceleration.value;
    tOut.innerHTML = "Time: " + time.value;
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
    var dis;
    var v_0;
    var v_f;
    var acc;
    var time_;
    if (target == 0) {
        if (avoid == 1) {
            v_f = valuesArray[2];
            acc = valuesArray[3];
            time_ = valuesArray[4];
            dis =  equations.notInitialVelocity(dis, v_f, time_, acc, target)
        } else if (avoid == 2) {
            v_0 = valuesArray[1];
            acc = valuesArray[3];
            time_ = valuesArray[4];
            dis = equations.notFinalVelocity(dis, v_0, time_, acc, target);
        } else if (avoid == 3) {
            v_0 = valuesArray[1];
            v_f = valuesArray[2];
            time_ = valuesArray[4];
            dis = equations.notAcceleration(dis, v_0, v_f, time_, target);
        } else if (avoid == 4) {
            v_0 = valuesArray[1];
            v_f = valuesArray[2];
            acc = valuesArray[3];
            dis = equations.notTime(v_f, v_0, acc, dis, target);
        } else {
            System.out.println("Value to avoid was unexpected");
        }
        return dis;
    } else if (target == 1) {
        if (avoid == 0) {
            v_f = valuesArray[2];
            acc = valuesArray[3];
            time_ = valuesArray[4];
            v_0 =  equations.notDisplacement(v_f, v_0, acc, time_, target);
        } else if (avoid == 2) {
            dis = valuesArray[0];
            acc = valuesArray[3];
            time_ = valuesArray[4];
            v_0 = equations.notFinalVelocity(dis, v_0, time_, acc, target);
        } else if (avoid == 3) {
            dis = valuesArray[0];
            v_f = valuesArray[2];
            time_ = valuesArray[4];
            v_0 = equations.notAcceleration(dis, v_0, v_f, time_, target);
        } else if (avoid == 4) {
            dis = valuesArray[0];
            v_f = valuesArray[2];
            acc = valuesArray[3];
            v_0 = equations.notTime(v_f, v_0, acc, dis, target);
        } else {
            System.out.println("Value to avoid was unexpected");
        }
        return v_0;
    } if (target == 2) {
        if (avoid == 0) {
            v_0 = valuesArray[1];
            acc = valuesArray[3];
            time_ = valuesArray[4];
            v_f =  equations.notDisplacement(v_f, v_0, acc, time_, target);
        } else if (avoid == 1) {
            dis = valuesArray[0];
            acc = valuesArray[3];
            time_ = valuesArray[4];
            v_f = equations.notInitialVelocity(dis, v_f, time_, acc, target);
        } else if (avoid == 3) {
            v_0 = valuesArray[1];
            dis = valuesArray[0];
            time_ = valuesArray[4];
            v_f = equations.notAcceleration(dis, v_0, v_f, time_, target);
        } else if (avoid == 4) {
            v_0 = valuesArray[1];
            dis = valuesArray[0];
            acc = valuesArray[3];
            v_f = equations.notTime(v_f, v_0, acc, dis, target);
        } else {
            System.out.println("Value to avoid was unexpected");
        }
        return v_f;
    } if (target == 3) {
        if (avoid == 0) {
            v_0 = valuesArray[1];
            v_f = valuesArray[2];
            time_ = valuesArray[4];
            acc =  equations.notDisplacement(v_f, v_0, acc, time_, target);
        } else if (avoid == 1) {
            dis = valuesArray[0];
            v_f = valuesArray[2];
            time_ = valuesArray[4];
            acc = equations.notInitialVelocity(dis, v_f, time_, acc, target);
        } else if (avoid == 2) {
            v_0 = valuesArray[1];
            dis = valuesArray[0];
            time_ = valuesArray[4];
            acc = equations.notFinalVelocity(dis, v_0, time_, acc, target);
        } else if (avoid == 4) {
            v_0 = valuesArray[1];
            dis = valuesArray[0];
            v_f = valuesArray[2];
            acc = equations.notTime(v_f, v_0, acc, dis, target);
        } else {
            System.out.println("Value to avoid was unexpected");
        }
        return acc;
    } if (target == 4) {
        if (avoid == 0) {
            v_0 = valuesArray[1];
            acc = valuesArray[3];
            v_f = valuesArray[2];
            time_ =  equations.notDisplacement(v_f, v_0, acc, time_, target);
        } else if (avoid == 1) {
            dis = valuesArray[0];
            acc = valuesArray[3];
            v_f = valuesArray[2];
            time_ = equations.notInitialVelocity(dis, v_f, titime_me, acc, target);
        } else if (avoid == 2) {
            v_0 = valuesArray[1];
            dis = valuesArray[0];
            acc = valuesArray[3];
            time_ = equations.notFinalVelocity(dis, v_0, time_, acc, target);
        } else if (avoid == 3) {
            v_0 = valuesArray[1];
            dis = valuesArray[0];
            v_f = valuesArray[2];
            time_ = equations.notAcceleration(dis, v_0, v_f, time_, target);
        } else {
            System.out.println("Value to avoid was unexpected");
        }
        return time_;
    }
}

function displayOutputs(valuesArray) {
    disOut.innerHTML = "Displacement: " + valuesArray[0];
    ivOut.innerHTML = "Initial Velocity: " + valuesArray[1];
    fvOut.innerHTML = "Final Velocity: " + valuesArray[2];
    accOut.innerHTML = "Acceleration: " + valuesArray[3];
    tOut.innerHTML = "Time: " + valuesArray[4];
}

function validateForm() {
    var valuesArray = getValues();
    var valueCount = countValues(valuesArray);
    var results = [];

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
        displayInputs();
        var targets = findTargets(valuesArray);
        if (targets.length == 2) {
            results.push(calculate(valuesArray, targets[0], targets[1]));
            results.push(calculate(valuesArray, targets[1], targets[0]));
        } else {
            //four elements entered, choose one other element that is not target to avoid:
            // if we are trying to calculate targets[0] == 0, then we cant avoid -1 as the index,
            // but if we are trying to calculate anything other than targets[0] == 0, then the 
            // variable to avoid can just be targets[0] - 1. 
            // targets[0] == 4 -> 3
            // targets[0] == 3 -> 2
            // targets[0] == 2 -> 1
            // targets[0] == 1 -> 0
            if (targets[0] == 0) {
                results.push(calculate(valuesArray, targets[0], 1));
            } else {
                results.push(calculate(valuesArray, targets[0], (targets[0] - 1)));
            }
        }
        // fill the values array with calculated values
        for (let i = 0; i < targets.length; i++) {
            valuesArray[targets[i]] = results[i];
        }
        displayOutputs(valuesArray);
    }
}

submitButton.addEventListener("click", validateForm);