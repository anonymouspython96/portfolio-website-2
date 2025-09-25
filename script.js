document.addEventListener("DOMContentLoaded", function () {
  // Mobile Menu Toggle
  const mobileMenuButton = document.getElementById("mobile-menu-button");
  const mobileMenu = document.getElementById("mobile-menu");
  mobileMenuButton.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
  });
  document.querySelectorAll("#mobile-menu a").forEach((link) => {
    link.addEventListener("click", () => {
      mobileMenu.classList.add("hidden");
    });
  });

  // Image Carousel
  const carouselItems = document.querySelectorAll(".carousel-item");
  const prevBtn = document.getElementById("prev-btn");
  const nextBtn = document.getElementById("next-btn");
  let currentIndex = 0;

  function showSlide(index) {
    if (index >= carouselItems.length) {
      currentIndex = 0;
    } else if (index < 0) {
      currentIndex = carouselItems.length - 1;
    } else {
      currentIndex = index;
    }

    carouselItems.forEach((item, i) => {
      item.classList.remove("active");
      item.style.opacity = "0";
      if (i === currentIndex) {
        item.classList.add("active");
        setTimeout(() => (item.style.opacity = "1"), 50);
      }
    });
  }

  nextBtn.addEventListener("click", () => {
    showSlide(currentIndex + 1);
  });

  prevBtn.addEventListener("click", () => {
    showSlide(currentIndex - 1);
  });

  setInterval(() => {
    showSlide(currentIndex + 1);
  }, 5000);

  showSlide(currentIndex);

  // Newsletter Modal
  const modal = document.getElementById("newsletter-modal");
  const modalOverlay = document.getElementById("modal-overlay");
  const modalContent = document.getElementById("modal-content");
  const openModalBtn = document.getElementById("open-modal-btn");
  const closeModalBtn = document.getElementById("close-modal-btn");
  const newsletterForm = document.getElementById("newsletter-form");
  const successMessage = document.getElementById("success-message");
  const emailInput = document.getElementById("email-input");

  function openModal() {
    modal.classList.remove("hidden");
    setTimeout(() => {
      modalOverlay.classList.remove("opacity-0");
      modalOverlay.classList.add("opacity-100");
      modalContent.classList.remove("scale-95");
      modalContent.classList.add("scale-100");
    }, 10);
  }

  function closeModal() {
    modalOverlay.classList.remove("opacity-100");
    modalOverlay.classList.add("opacity-0");
    modalContent.classList.remove("scale-100");
    modalContent.classList.add("scale-95");
    setTimeout(() => {
      modal.classList.add("hidden");
      successMessage.classList.add("hidden");
      emailInput.value = "";
    }, 300);
  }

  openModalBtn.addEventListener("click", openModal);
  closeModalBtn.addEventListener("click", closeModal);
  modalOverlay.addEventListener("click", closeModal);

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !modal.classList.contains("hidden")) {
      closeModal();
    }
  });

  newsletterForm.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("Form submitted with email:", emailInput.value);
    newsletterForm.classList.add("hidden");
    successMessage.classList.remove("hidden");
    setTimeout(closeModal, 2000);
  });
});
