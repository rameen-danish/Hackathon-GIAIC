// created variable for accessing form element
var resumeform = document.getElementById("dynamic-resume-form");
var resumedisplay = document.getElementById("display-resume");
//form submission values handler
resumeform.addEventListener('submit', function (event) {
    event.preventDefault(); //prevent the default form submission behavior
    //collect input values from user
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var contact = document.getElementById("contact").value;
    var address = document.getElementById("address").value;
    var education = document.getElementById("education").value;
    var skills = document.getElementById("skills").value;
    var experience = document.getElementById("experience").value;
    //generate resume
    var generateResume = "\n    <h2>Generated Resume</h2>\n    <h3>Personal information</h3>\n    <p><b>Name:</b><span contenteditable=\"true\">".concat(name, "</span></p>\n    <p><b>Email:</b><span contenteditable=\"true\"> ").concat(email, "</span></p>\n    <p><b>Address:</b><span contenteditable=\"true\"> ").concat(address, "</span></p>\n    <h3>Education</h3>\n    <p contenteditable=\"true\">").concat(education, "</p>\n    <h3>Skills</h3>\n    <p contenteditable=\"true\">").concat(skills, "</p>\n    <h3>Experience</h3>\n    <p contenteditable=\"true\">").concat(experience, "</p>\n    ");
    //Display editable resume
    if (resumedisplay) {
        resumedisplay.innerHTML = generateResume;
    }
    else {
        console.error("The resume display element is missing");
    }
});
