var toggleButton = document.getElementById("hide-experience");
var experience = document.getElementById("experience");
toggleButton.addEventListener('click', function () {
    if (experience.style.display === 'none') {
        experience.style.display = 'block';
    }
    else {
        experience.style.display = 'none';
    }
});
