const animationPage = document.querySelector(".loader");

const checkAccounts = () => {
  console.log(localStorage.getItem("AccountData"));
  if (localStorage.getItem("AccountData")) {
    console.log("test");

    let localDataJSON = localStorage.getItem("AccountData");
    let localData = JSON.parse(localDataJSON);
    console.log("test");
    return fetch("https://zgpcgck3-5000.uks1.devtunnels.ms/checkData/", {
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
    if (dataAccount) {
      window.location.href = "./main";
    } else {
      window.location.href = "./login";
    }
  });
};

checkAccounts();

const clearData = () => {
  localStorage.clear("AccountData");
};
