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

  let sizePrice = 0.00
  let topingPrice = 0.00
  const totalPrice = new Intl.NumberFormat('en-US')
  
  if (userSize == "Small") {
    sizePrice = 1.0
  } else if (userSize == "Medium") {
    sizePrice = 1.5
  } else if (userSize == "Large") {
    sizePrice = 2.0
  } else if (userSize == "Extra-Large") {
    sizePrice = 2.5
  } else {
    document.getElementById("pizzaSize").innerHTML = "Error"
  }

  if (userTopings == "Extra-Cheese") {
    topingPrice = 0.5
  } else if (userTopings == "Pepperoni") {
    topingPrice = 1.0
  } else if (userTopings == "Pineapple") {
    topingPrice = 1.5
  } else {
    document.getElementById("pizzaTopings").innerHTML = "Error"
  }

  totalPrice = sizePrice + topingPrice

  document.getElementById("total").innerHTML =
<<<<<<< HEAD
    "Your total will be $" + totalPrice + "! Please call 737-1111 to order!"

=======
    "Your total will be $" +
    totalPrice.format(2) +
    "! Please call 737-1111 to order!"
>>>>>>> 0b5d37f50dd229c4ce01cfe37c3ea2ce15f02e08
}
