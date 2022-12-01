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
    document.getElementById("pizzaSize").innerHTML =
    "You want to order a small pizze with cheese."
    } else if (userSize == "Medium") {
    document.getElementById("pizzaSize").innerHTML =
    "You want to order a Medium pizze with cheese."    
    } else if (userSize == "Large") {
    document.getElementById("pizzaSize").innerHTML =
    "You want to order a Large pizze with cheese."
    } else if (userSize == "Extra-Large") {
    document.getElementById("pizzaSize").innerHTML =
    "You want to order a Extra Large pizze with cheese."  
    } else {
      document.getElementById("pizzaSize").innerHTML = 
      "Error"
    }
    
    if (userTopings == "Extra-Cheese") {
    document.getElementById("pizzaSize").innerHTML =
    "You want to add Extra Cheese."     
    } else if (userTopings == "Pepperoni") {
    document.getElementById("pizzaSize").innerHTML =
    "You want to add Pepperoni."       
    } else if (userTopings == "Pineapple") {
    document.getElementById("pizzaSize").innerHTML =
    "You want to add Pinnaple."    
    } else {
      document.getElementById("pizzaSize").innerHTML = "Error"
    }
}
