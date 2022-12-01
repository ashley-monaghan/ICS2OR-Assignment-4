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

  let totalPrice = sizePrice + topingPrice

  if (userSize == "Small") {
    let sizePrice = 1.5
    document.getElementById("pizzaSize").innerHTML =
      "Your total will be " + totalPrice
  } else if (userSize == "Medium") {
    let sizePrice = 2.0
    document.getElementById("pizzaSize").innerHTML =
      "Your total will be" + totalPrice
  } else if (userSize == "Large") {
    let sizePrice = 2.5
    document.getElementById("pizzaSize").innerHTML =
      "Your total will be" + totalPrice
  } else if (userSize == "Extra-Large") {
    let sizePrice = 2.5
    document.getElementById("pizzaSize").innerHTML =
      "Your total will be" + totalPrice
  } else {
    document.getElementById("pizzaSize").innerHTML = "Error"
  }

  if (userTopings == "Extra-Cheese") {
    let topingPrice = 50
    document.getElementById("pizzaSize").innerHTML =
      "Your total will be " + totalPrice
  } else if (userTopings == "Pepperoni") {
    let topingPrice = 1
    document.getElementById("pizzaSize").innerHTML =
      "Your total will be" + totalPrice
  } else if (userTopings == "Pineapple") {
    let topingPrice = 1.5
    document.getElementById("pizzaSize").innerHTML =
      "Your total will be" + totalPrice
  } else {
    document.getElementById("pizzaSize").innerHTML = "Error"
  }
}
