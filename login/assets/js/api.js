import { urlApi } from "../../../assets/js/config.js";

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
  return fetch(urlApi, {
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
        localStorage.removeItem("AccountData");
        localStorage.setItem("AccountData", JSON.stringify(data));
        window.location.href = "../actions";
      }
    })
    .catch((error) => {
      console.error(error);
    });
};

const checkAccount = () => {
  let localAccount = localStorage.getItem("AccountData");

  if (localAccount) {
    let localAccountJSON = JSON.parse(localAccount);
    return fetch(urlApi, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: localAccountJSON.email,
        password: localAccountJSON.password,
      }),
    })
      .then((res) => {
        if (res.ok) return res.json();
      })
      .then((data) => {
        if (data) {
          window.location.href = "../actions";
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }
};

checkAccount();

function errorMessage() {
  const container__error = document.querySelector(".errorContainer");
  let timerError;
  if (container__error.classList.contains("errorContainer__hide")) {
    container__error.classList.remove("errorContainer__hide");

    timerError = setInterval(() => {
      container__error.classList.add("errorContainer__hide");
      clearInterval(timerError);
    }, 11500);
  }
}

/*const checkdata = () => {
  let isJSON__data = localStorage.getItem("AccountData");
  let account = JSON.parse(isJSON__data);
  console.log(account.username);
};*/
