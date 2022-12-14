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

<<<<<<< HEAD
  let sizePrice = 0.00
  let topingPrice = 0.00
  let totalPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
});

  
=======
  let sizePrice = 0.0
  let topingPrice = 0.0
  const totalPrice = new Intl.NumberFormat("en-US")

>>>>>>> 2b61ed2ac5e33329308167bc3d86b72d6af40376
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
    "Your total will be $" + USDollar.format(totalPrice) + "! Please call 737-1111 to order!"

}
