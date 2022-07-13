const progress = document.getElementById("progress");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");
const circles = document.querySelectorAll(".circle");

let currentStep = 1;

nextButton.addEventListener("click", () => {
  currentStep++;
  if (currentStep > circles.length) {
    currentStep = circles.length;
  }
  progress.style.width = `${(currentStep / circles.length) * 100}%`;
  circles.forEach((circle, index) => {
    if (index + 1 <= currentStep) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  });

  if (currentStep !== 1) {
    prevButton.disabled = false;
  }

  if (currentStep === circles.length) {
    nextButton.disabled = true;
  }
});

prevButton.addEventListener("click", () => {
  currentStep--;
  if (currentStep < 1) {
    currentStep = 1;
  }
  progress.style.width = `${(currentStep / circles.length) * 100}%`;
  circles.forEach((circle, index) => {
    if (index + 1 <= currentStep) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  });

  if (currentStep !== circles.length) {
    nextButton.disabled = false;
  }

  if (currentStep === 1) {
    prevButton.disabled = true;
  }
});
