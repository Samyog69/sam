document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("modal");
    const modalTitle = document.getElementById("modal-title");
    const modalDescription = document.getElementById("modal-description");
    const closeModal = document.getElementsByClassName("close")[0];
    const workItems = document.querySelectorAll(".work-item");

    workItems.forEach(item => {
        item.addEventListener("click", () => {
            modalTitle.textContent = item.dataset.title;
            modalDescription.textContent = item.dataset.description;
            modal.style.display = "block";
        });
    });

    closeModal.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    }
});
