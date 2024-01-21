import { urlApi } from "./config.js";

const animationPage = document.querySelector(".loader");

const checkAccounts = () => {
  if (localStorage.getItem("AccountData")) {
    let localDataJSON = localStorage.getItem("AccountData");
    let localData = JSON.parse(localDataJSON);

    return fetch(urlApi, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: localData.email,
        password: localData.password,
      }),
    })
      .then((res) => {
        if (res.ok) return res.json();
      })
      .then((data) => {
        if (data === false) {
          animationEnd(false);
        } else {
          animationEnd(data);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  } else {
    animationEnd(false);
  }
};

const animationEnd = (e) => {
  let dataAccount = e;
  animationPage.addEventListener("animationend", () => {
    setInterval(() => {
      if (dataAccount) {
        window.location.href = "./actions";
      } else {
        window.location.href = "./login";
      }
    }, 1000);
  });
};

checkAccounts();

const clearData = () => {
  localStorage.clear("AccountData");
};
