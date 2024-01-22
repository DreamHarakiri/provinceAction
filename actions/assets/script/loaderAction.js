const NameCompany = document.querySelector(".name__content");
const companyContent = document.querySelector(".company__content");
const dynamicContent = document.querySelector(".dynamic__content");
const priceContent = document.querySelector(".price__content");

const template = document.querySelector("#templateAction").content;
const list__content = document.querySelector(".actionsTop");

function renderAction() {
  initialAction.forEach((e) => {
    const action = addAction(e);
    list__content.append(action);
  });
}

function addAction(e) {
  const addAction = template.querySelector(".list__content").cloneNode(true);
  console.log(addAction);
  addAction.querySelector(".logo__content").src = e.logo;
  addAction.querySelector(".name__content").textContent = e.name;
  addAction.querySelector(".company__content").textContent = e.company;
  addAction.querySelector(".dynamic__content").textContent = e.dynamic;
  addAction.querySelector(".price__content").textContent = e.price;

  return addAction;
}

renderAction();
