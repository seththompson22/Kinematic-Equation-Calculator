import * as equations from "./kinematicEquations.js";
var displacement = document.querySelector("#displacement");
var initialVelocity = document.querySelector("#initial-velocity");
var finalVelocity = document.querySelector("#final-velocity");
var acceleration = document.querySelector("#acceleration");
var time = document.querySelector("#time");
var submitButton = document.querySelector("#submit");
var disOut = document.querySelector("#displacement-out");
var ivOut = document.querySelector("#initial-velocity-out");
var fvOut = document.querySelector("#final-velocity-out");
var accOut = document.querySelector("#acceleration-out");
var tOut = document.querySelector("#time-out");

var isValid = false;

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
    
    // Check if there is stored content
    let storedContent = localStorage.getItem("storedContent");

    if (storedContent) {
        // If there is stored content, clear it and update the output
        localStorage.removeItem("displacement");
        localStorage.removeItem("initial-velocity");
        localStorage.removeItem("final-velocity");
        localStorage.removeItem("acceleration");
        localStorage.removeItem("time");
        disOut.innerHTML = "_";
        ivOut.innerHTML = "_";
        fvOut.innerHTML = "_";
        accOut.innerHTML = "_";
        tOut.innerHTML = "_";
    } else {
        // If there is no stored content, set it and update the output
        
        localStorage.setItem("displacement", valuesArray[0]);
        localStorage.setItem("initial-velocity", valuesArray[1]);
        localStorage.setItem("final-velocity", valuesArray[2]);
        localStorage.setItem("acceleration", valuesArray[3]);
        localStorage.setItem("time", valuesArray[4]);
        
        disOut.innerHTML = localStorage.getItem("displacement");
        ivOut.innerHTML = localStorage.getItem("initial-velocity");
        fvOut.innerHTML = localStorage.getItem("final-velocity");
        accOut.innerHTML = localStorage.getItem("acceleration");
        tOut.innerHTML = localStorage.getItem("time");
    }

    // disOut.innerHTML = "Displacement: " + valuesArray[0] + " meters";
    // ivOut.innerHTML = "Initial Velocity: " + valuesArray[1] + "m/s";
    // fvOut.innerHTML = "Final Velocity: " + valuesArray[2] + " m/s";
    // accOut.innerHTML = "Acceleration: " + valuesArray[3] + " m/s^2";
    // tOut.innerHTML = "Time: " + valuesArray[4] + " s";
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

document.addEventListener("DOMContentLoaded", () => {
    let storedContent = localStorage.getItem("storedContent");
    if (storedContent) {
        document.getElementById("output").innerHTML = storedContent;
    }
});

submitButton.addEventListener('click', validateForm);
