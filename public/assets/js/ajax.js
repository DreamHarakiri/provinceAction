var xhr = new XMLHttpRequest();
// Открываем запрос на адрес /call
xhr.open("GET", "/");
// Устанавливаем обработчик события загрузки
xhr.onload = function () {
  // Парсим ответ от сервера в JSON-формат
  var data = JSON.parse(xhr.responseText);
  // Получаем имя функции и аргументы
  var func = data.func;
  var args = data.args;
  // Вызываем функцию с помощью метода apply
  window[func].apply(null, args);
};
// Отправляем запрос
xhr.send();

function test(e) {
  console.log(e);
}
