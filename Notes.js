// var formValidity = false;

// function removeSelectDefaults() {
//   var emptyBoxes = document.getElementsByTagName("select");
//   for (var i = 0; i < emptyBoxes.length; i++) {
//       emptyBoxes[i].selectedIndex = -1;
//   }
// }

// // function that sets up page on load event
// function setUpPage() {
//     removeSelectDefaults();
// }

// // page load handlers
// if (window.addEventListener) {
//   window.addEventListener("load", setUpPage, false);
// } else if (window.attachEvent) {
//   window.attachEvent("onload", setUpPage);
// }

// // button ===============================================================
// //  function to validate payment
// function validatePayment() {
//   var errorDiv = document.querySelectorAll("sure" + " .errorMessage")[0];
//   var fieldsetValidity = false;
//   var selectElements = document.querySelectorAll("#paymentInfo" + " select");
//   var elementCount = selectElements.length;
//   var radio = document.getElementsByName("radio")
//   var currentElement;

//   try {
//       // validate radio buttons one must be on
//       if (!radio[0].checked && !radio[1].checked) {
//           for (var i = 0; i < radio.length; i++) {
//               radio[i].style.outline = "1px solid red";
//           }
//           fieldsetValidity = false;
//       } else {
//           for (var i = 0; i < radio.length; i++) {
//               radio[i].style.outline = "";
//           }
//       }
//     } catch (msg) {
//       errorDiv.style.display = "block";
//       errorDiv.innerHTML = msg;
//       formValidity = false;
//     }
// }

// // validate ========================================================================================
 
// // function to validate entire form
//  function validateForm(evt) {
//   // prevent form default behavior - submit
//   if (evt.preventDefault) {
//       evt.preventDefault();
//   } else {
//       evt.returnValue = false;
//   }
//   formValidity = false;

//   validatePayment();



//   if (formValidity === true) { // form is valid
//       document.getElementById("errorText").innerHTML = "";
//       document.getElementById("errorText").style.display = "none";
//       document.getElementsByTagName("form")[0].submit();
//   } else {
//       document.getElementById("errorText").innerHTML = "Please fix the indicated problems and then resubmit your order.";
//       document.getElementById("errorText").style.display = "block";
//       scroll(0, 0);
//   }
// }