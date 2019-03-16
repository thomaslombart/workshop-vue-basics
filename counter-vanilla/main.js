function updateUI() {
  counter.innerHTML = count;

  if (count < 0) {
    sign.innerHTML = "Negative";
    sign.style.display = "block";
  } else {
    sign.style.display = "none";
  }
}

const incrementButton = document.getElementById("increment");
const decrementButton = document.getElementById("decrement");

const sign = document.getElementById("sign");
const counter = document.getElementById("counter");

let count = 0;

sign.style.display = "none";

incrementButton.addEventListener("click", function() {
  count++;
  updateUI();
});

decrementButton.addEventListener("click", function() {
  count--;
  updateUI();
});
