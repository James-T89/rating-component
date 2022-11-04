const scores = document.querySelectorAll(".rating-number");
const finalScore = document.querySelector(".out-of-five");
const submitBtn = document.querySelector(".submit");

scores.forEach((score) =>
  score.addEventListener("click", () => {
    finalScore.innerHTML = `${score.innerHTML}`;
    submitBtn.addEventListener("click", () => {
      document.querySelector(".rating-state").style.display = "none";
      document.querySelector(".thank-you-state").style.display = "block";
    });
  })
);
