// Copyright (c) 2022 Ashley Monaghan All rights reserved
//
// Created by: Ashley Monaghan
// Created on: Oct 2022
// This file contains the JS functions for index.html

"use strict"

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2OR-Assignment-4/sw.js", {
    scope: "/ICS2OR-Assignment-4/",
  })
}
// Copyright (c) 2022 Ashley Monaghan All rights reserved
//
// Created by: Ashley Monaghan
// Created on: Oct 2022
// This file contains the JS functions for index.html

;("use strict")

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2OR-Assignment-4/sw.js", {
    scope: "/ICS2OR-Assignment-4/",
  })
}

/**
 * This function displays an alert.
 * Words
 */
function calculate() {
  let userSize = document.getElementById("size").value
  let userTopings = document.getElementById("topings").value

  if (userSize == "Small") {
    let sizePrice = 1.50
    document.getElementById("pizzaSize").innerHTML =
    "It will be" + sizePrice
  } else if (userSize == "Medium") {
    let sizePrice = 2.00
    document.getElementById("pizzaSize").innerHTML =
    "It will be" + sizePrice
  } else if (userSize == "Large") {
    let sizePrice = 2.50
    document.getElementById("pizzaSize").innerHTML =
    "It will be" + sizePrice
  } else if (userSize == "Extra-Large") {
    let sizePrice = 2.50
    document.getElementById("pizzaSize").innerHTML =
    "It will be" + sizePrice
  } else {
    document.getElementById("pizzaSize").innerHTML =
    "Error"
  }
}
