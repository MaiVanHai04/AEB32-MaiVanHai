let user = [];
const URL = "https://63a06c2224d74f9fe837cb43.mockapi.io/APItest/vidu1s";
fetch(URL, {
  method: "GET",
})
  .then((response) => response.json())
  .then((data) => {
    _renderUI(data);
  })
  .catch((error) => {
    console.error("Error:", error);
  });

function _renderUI(user) {
  let elmBody = document.getElementById("tbody__user");

  function fomatRow(user) {
    return `<tr onclick="handleClickRow(${user.id})">
    <dt>${user.id}</dt>
    <td>${user.name}</td>
    <td>${user.city}</td>
    <td>${user.avatar}</td>
  </tr>`;
  }
  let resRow = "";
  for (let index = 0; index < user.length; index++) {
    resRow += fomatRow(user[index]);
  }
  elmBody.innerHTML = resRow;
}
function handleClickRow(userId) {
  console.log(userId);
  window.location.href="./detail.html?id="+userId
}