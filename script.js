const rating = document.querySelectorAll("input[name=rating]");
const finalScore = document.querySelector(".out-of-five");
const submitBtn = document.querySelector(".submit");

rating.forEach((score) =>
  score.addEventListener("click", () => {
    finalScore.innerHTML = `${score.value}`;
    submitBtn.addEventListener("click", () => {
      document.querySelector(".rating-state").style.display = "none";
      document.querySelector(".thank-you-state").style.display = "block";
    });
  })
);
