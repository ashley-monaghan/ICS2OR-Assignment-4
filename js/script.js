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
    let sizePrice = 1.0
    document.getElementById("pizzaSize").innerHTML =
      "You want to order a small pizza with cheese."
  } else if (userSize == "Medium") {
    let sizePrice = 1.5
    document.getElementById("pizzaSize").innerHTML =
      "You want to order a medium pizza with cheese."
  } else if (userSize == "Large") {
    let sizePrice = 2.0
    document.getElementById("pizzaSize").innerHTML =
      "You want to order a large pizza with cheese."
  } else if (userSize == "Extra-Large") {
    let sizePrice = 2.5
    document.getElementById("pizzaSize").innerHTML =
      "You want to order a extra large pizza with cheese."
  } else {
    document.getElementById("pizzaSize").innerHTML = "Error"
  }

  if (userTopings == "Extra-Cheese") {
    let topingPrice = 0.5
    document.getElementById("pizzaTopings").innerHTML =
      "You want to add extra eheese."
  } else if (userTopings == "Pepperoni") {
    let topingPrice = 1.0
    document.getElementById("pizzaTopings").innerHTML =
      "You want to add pepperoni."
  } else if (userTopings == "Pineapple") {
    let topingPrice = 1.5
    document.getElementById("pizzaTopings").innerHTML =
      "You want to add pinnaple."
  } else {
    document.getElementById("pizzaTopings").innerHTML = "Error"
  }

  function calculatee() {
    document.getElementById("total").innerHTML =
      "Your total will be $ ! Please call 737-1111 to order!"
  }
}
