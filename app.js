const toggleButton = document.querySelector("[data-toggle='month-plan']");
const monthPlan = document.getElementById("month-plan");

if (toggleButton && monthPlan) {
  toggleButton.addEventListener("click", () => {
    monthPlan.classList.toggle("is-hidden");
  });
}
