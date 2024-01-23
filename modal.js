const modalBtn = document.querySelector(".modal-Btn");
const modal = document.querySelector(".modal");

modalBtn.addEventListener("click", () => {
    modal.showModal()
})

const closeBtn = modal.querySelector(".close")
closeBtn.addEventListener("click", e => {
    modal.style.display = "none"
})
