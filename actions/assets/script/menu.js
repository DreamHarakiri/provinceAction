const exitBtn = document.querySelector(".exitBtn");

const exitAccount = () => {
  localStorage.clear("AccountData");
  window.location.href = "../index.html";
};

document.addEventListener("DOMContentLoaded", () => {
  exitBtn.addEventListener("click", exitAccount);
});
