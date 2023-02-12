const allSections = document.querySelectorAll(".section");
const buttons = document.querySelectorAll(".control");
const mainContainer = document.querySelector(".main-content");

function activateTransitions() {
  //Add active class to buttons
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {
      let currentActiveBtn = document.querySelector(".active-btn");
      currentActiveBtn.classList.remove("active-btn");
      this.classList.add("active-btn");
    });
  }

  //Activate sections
  mainContainer.addEventListener("click", (event) => {
    const sectionId = event.target.dataset.id;
    if (sectionId) {
      buttons.forEach((btn) => {
        btn.classList.remove("active");
      });
      event.target.classList.add("active");

      allSections.forEach((section) => {
        section.classList.remove("active");
      });

      const selectedSection = document.getElementById(sectionId);
      selectedSection.classList.add("active");
    }
  });

  //Toggle theme
  const themeToggler = document.querySelector(".theme-btn");
  themeToggler.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");
    document.querySelector('.image').classList.toggle('hidden');
    document.querySelector('.image-2').classList.toggle('hidden');
  });
}

activateTransitions();

