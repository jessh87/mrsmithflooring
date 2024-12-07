/* 
   Mr. Smith Flooring & More style sheet 
   Filename: script.js

   Author:  Jessica Haynes 
   Date:    11/30/2024 
   HTML5 and CSS3 Illustrated Independent Project 4
 */

/* create variables */
var fromValue = document.querySelector(".feeback-from");
var feedbackValue = document.querySelector(".feedback-content");
var nameField = document.querySelector("#nameinput");
var feedbackField = document.querySelector("#otherinfo"); 
var form = document.querySelector(".contact-form");
var feedbackPreview = document.querySelector(".feedback-preview");
var submitButton = document.querySelector(".submitbutton");

/* add form text to preview section */
function completePreview() 
   fromValue.textContent = nameField.value;
   feedbackValue.textContent = feedbackField.value;
   feedbackPreview.className = "feedback-preview show";
   if (form.checkValidity() === true) {
	   submitButton.className = "submitbutton show";
}

completePreview();
*/

/* create event listener for changes to form */
form.addEventListener("change", completePreview, false);