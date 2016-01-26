var playerName = document.getElementById('name');
var playerEmail = document.getElementById('email');
var playerComments = document.getElementById('comments');
var submitButton = document.getElementById('contactSubmit');
var contactForm = document.getElementById('contactForm');

function submitCommentForm(event) {
  event.preventDefault();
  var contactName = event.target.name.value;
  var contactEmail = event.target.email.value;
  var contactComments = event.target.comments.value;
  console.log("Name: " + contactName);
  console.log("Email:" + contactEmail);
  console.log("Comments: " + contactComments);
  contactForm.reset();
}

contactForm.addEventListener('submit', submitCommentForm);
