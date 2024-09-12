const toggleButton = document.getElementById("hide-experience") as HTMLButtonElement
const experience = document.getElementById("experience") as HTMLElement
toggleButton.addEventListener('click',()=>{
    if(experience.style.display === 'none'){
        experience.style.display = 'block'
    }
    else{
        experience.style.display = 'none'
    }
});