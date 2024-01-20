const form__btn = document.querySelector(".form__btn");
const form__login = document.querySelector(".form__login");

form__login.addEventListener("submit", function (e) {
  e.preventDefault();
  sendApi(e);
});

const sendApi = (e) => {
  e.preventDefault();

  const email__input = document.querySelector(".email").value;
  const password__input = document.querySelector(".password").value;

  return fetch("https://zgpcgck3-5000.uks1.devtunnels.ms/checkData/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: email__input,
      password: password__input,
    }),
  })
    .then((res) => {
      if (res.ok) return res.json();
    })
    .then((data) => {
      if (data === false) {
        errorMessage();
      } else if (data !== false) {
        localStorage.setItem("AccountData", JSON.stringify(data));
      }
    })
    .catch((error) => {
      console.error(error);
    });
};

function errorMessage() {
  const container__error = document.querySelector(".errorContainer");

  container__error.classList.remove("errorContainer__hide");
  const timerError = setInterval(() => {
    container__error.classList.add("errorContainer__hide");
    clearInterval(timerError);
  }, 11500);
}

/*const checkdata = () => {
  let isJSON__data = localStorage.getItem("AccountData");
  let account = JSON.parse(isJSON__data);
  console.log(account.username);
};*/
