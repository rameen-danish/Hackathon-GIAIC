// created variabl for accessing form element
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
    var generateResume = "\n    <h2>Generated Resume</h2>\n    <h3>Personal information</h3>\n    <p><b>Name:</b> ".concat(name, "</p>\n    <p><b>Email:</b> ").concat(email, "</p>\n    <p><b>Address:</b> ").concat(address, "</p>\n    <h3>Education</h3>\n    <p>").concat(education, "</p>\n    <h3>Skills</h3>\n    <p>").concat(skills, "</p>\n    <h3>Experience</h3>\n    <p>").concat(experience, "</p>\n    ");
    //Display resume
    if (resumedisplay) {
        resumedisplay.innerHTML = generateResume;
    }
    else {
        console.error("The resume display element is missing");
    }
});
