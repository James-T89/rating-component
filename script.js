const rating = document.querySelectorAll("input[name=rating]");
const finalScore = document.querySelector(".out-of-five");
const submitBtn = document.querySelector(".submit");

rating.forEach((score) =>
  score.addEventListener("click", () => {
    finalScore.innerHTML = `${score.value}`;
    submitBtn.addEventListener("click", () => {
      document.querySelector(".rating-state").hidden = true;
      document.querySelector(".thank-you-state").hidden = false;
    });
  })
);

document.onkeydown = (e) => {
  if (e.key === "Enter" || e.key === " ") {
    document.activeElement.click();
  }
};

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
});
