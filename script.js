const showButton = document.querySelectorAll(".show-modal");
const modal = document.querySelector(".modal");
const hideButton = document.querySelector(".close-modal");
const overlay = document.querySelector(".overlay");


const openModal = () =>{
    modal.classList.remove("hidden")
    overlay.classList.remove("hidden")
}
const hideModal = () =>{
    modal.classList.add("hidden")
    overlay.classList.add("hidden")
}
for(let i=0; i<showButton.length; i++){
    showButton[i].addEventListener("click", openModal)
}
hideButton.addEventListener("click", hideModal)
overlay.addEventListener("click", hideModal)

document.addEventListener("keydown", function(event){
    if(event.key === "Escape" && !modal.classList.contains("hidden")){
            hideModal();
        }
    }
)