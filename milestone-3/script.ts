// created variabl for accessing form element
const resumeform = document.getElementById("dynamic-resume-form") as HTMLFormElement;
const resumedisplay = document.getElementById("display-resume") as HTMLDivElement;

//form submission values handler
resumeform.addEventListener('submit',(event:Event)=>{
    event.preventDefault();             //prevent the default form submission behavior

        //collect input values from user
    const name =(document.getElementById("name") as HTMLInputElement).value
    const email =(document.getElementById("email") as HTMLInputElement).value
    const contact =(document.getElementById("contact") as HTMLInputElement).value
    const address =(document.getElementById("address") as HTMLInputElement).value
    const education =(document.getElementById("education") as HTMLInputElement).value
    const skills =(document.getElementById("skills") as HTMLInputElement).value
    const experience =(document.getElementById("experience") as HTMLInputElement).value

    //generate resume
    const generateResume = `
    <h2>Generated Resume</h2>
    <h3>Personal information</h3>
    <p><b>Name:</b> ${name}</p>
    <p><b>Email:</b> ${email}</p>
    <p><b>Address:</b> ${address}</p>
    <h3>Education</h3>
    <p>${education}</p>
    <h3>Skills</h3>
    <p>${skills}</p>
    <h3>Experience</h3>
    <p>${experience}</p>
    `
    //Display resume
    if(resumedisplay){
        resumedisplay.innerHTML = generateResume;
    }
    else{
        console.error("The resume display element is missing")
    }
})