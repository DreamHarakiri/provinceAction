import { urlApi } from "./config.js";

const animationPage = document.querySelector(".loader");

export const loaderChecker = () => {
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
      if (!dataAccount) {
        window.location.href = "./login";
      } else {
        window.location.href = "./actions";
      }
    }, 1000);
  });
};

const clearData = () => {
  localStorage.clear("AccountData");
};

// new code

const checkAccount = () => {
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
          window.location.href = "../login";
        }
      })
      .catch((error) => {
        console.error(error);
      });
  } else {
    window.location.href = "../login";
  }
};

export { checkAccount };
