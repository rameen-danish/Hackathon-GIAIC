var form = document.getElementById('resume-form');
var resumeDisplayElement = document.getElementById('resume-display');
var shareableLinkContainer = document.getElementById('shareable-link-container');
var shareableLinkElement = document.getElementById('shareable-link');
var downloadPdfButton = document.getElementById('download-pdf');
// Handle form submission
form.addEventListener('submit', function (event) {
    event.preventDefault();
    var username = document.getElementById('username').value.trim();
    var name = document.getElementById('name').value.trim();
    var email = document.getElementById('email').value.trim();
    var phone = document.getElementById('phone').value.trim();
    var address = document.getElementById('address').value.trim();
    var education = document.getElementById('education').value.trim();
    var experience = document.getElementById('experience').value.trim();
    var skills = document.getElementById('skills').value.trim();
    // Validation checks
    if (!username || !name || !email) {
        alert('Please fill in all required fields.');
        return;
    }
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert('Please enter a valid email address.');
        return;
    }
    // Save form data in localStorage with the username as the key
    var resumeData = { name: name, email: email, phone: phone, address: address, education: education, experience: experience, skills: skills };
    try {
        localStorage.setItem(username, JSON.stringify(resumeData));
    }
    catch (error) {
        console.error('Failed to save resume data:', error);
        alert('There was an error saving your data. Please try again.');
        return;
    }
    // Generate the resume content dynamically
    var resumeHTML = "\n        <h2>Generated Resume</h2>\n        <h3>Personal Information</h3>\n        <p><b>Name:</b> <span contenteditable=\"true\">".concat(name, "</span></p>\n        <p><b>Email:</b> <span contenteditable=\"true\">").concat(email, "</span></p>\n        <p><b>Contact:</b> <span contenteditable=\"true\">").concat(phone, "</span></p>\n        <p><b>Address:</b> <span contenteditable=\"true\">").concat(address, "</span></p>\n        <h3>Education</h3>\n        <p contenteditable=\"true\">").concat(education, "</p>\n        <h3>Skills</h3>\n        <p contenteditable=\"true\">").concat(skills, "</p>\n        <h3>Experience</h3>\n        <p contenteditable=\"true\">").concat(experience, "</p>\n    ");
    // Display the generated resume
    resumeDisplayElement.innerHTML = resumeHTML;
    // Generate a shareable URL with the username only
    var shareableURL = "".concat(window.location.origin, "?username=").concat(encodeURIComponent(username));
    shareableLinkContainer.style.display = 'block';
    shareableLinkElement.href = shareableURL;
    shareableLinkElement.textContent = shareableURL;
});
downloadPdfButton.addEventListener('click', function () {
    window.print();
});
window.addEventListener('DOMContentLoaded', function () {
    var urlParams = new URLSearchParams(window.location.search);
    var username = urlParams.get('username');
    if (username) {
        var savedResumeData = localStorage.getItem(username);
        if (savedResumeData) {
            var resumeData = JSON.parse(savedResumeData);
            document.getElementById('username').value = username;
            document.getElementById('name').value = resumeData.name;
            document.getElementById('email').value = resumeData.email;
            document.getElementById('phone').value = resumeData.phone;
            document.getElementById('address').value = resumeData.address;
            document.getElementById('education').value = resumeData.education;
            document.getElementById('experience').value = resumeData.experience;
            document.getElementById('skills').value = resumeData.skills;
        }
    }
});
