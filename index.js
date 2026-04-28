const number = document.getElementById("number");
const likeBtn = document.querySelector("#likeButton");
const dislikeBtn = document.querySelector(".dislikeButton");

let defaultValue = 0;

likeBtn.addEventListener("click", function (eve) {
  defaultValue++;
  number.textContent = defaultValue;
});

dislikeBtn.addEventListener("click", function (eve) {
  defaultValue--;

  if (defaultValue <= 0) {
    defaultValue = 0;
    number.textContent = "No Like Yet";
  } else {
    number.textContent = defaultValue;
  }
});
