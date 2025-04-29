const modal = document.querySelector(".backdrop");
const modalClose = document.querySelector(".modal-close");
const modalOpen = document.querySelector(".modal-open");

const toggleModal = () => modal.classList.toggle("is-hidden");

modalOpen.addEventListener("click", toggleModal);
modalClose.addEventListener("click", toggleModal);
