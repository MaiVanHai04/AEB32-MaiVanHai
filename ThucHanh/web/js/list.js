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
  function getlistUser() {
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
  }

function _renderUI(user) {
  let elmBody = document.getElementById("tbody__user");

  function fomatRow(user) {
    return `<tr>
    <td>${user.id}</td>
    <td>${user.name}</td>
    <td>${user.city}</td>
    <td>${user.avatar}</td>
    <td>
    <button class="btn btn-success "onclick="gotoDetail(${user.id})">Detail</button>
    <button class="btn btn-danger "onclick="deleteUser(${user.id})">Delete</button>
    </td>
  </tr>`;
  }
  let resRow = "";
  for (let index = 0; index < user.length; index++) {
    resRow += fomatRow(user[index]);
  }
  elmBody.innerHTML = resRow;
}
function gotoDetail(userId) {
  window.location.href = "./detail.html?id=" + userId;
}

function deleteUser(userId) {
  let user_delete = URL + "/" + userId;
  fetch(user_delete, {
    method: "DELETE",
  })
    .then((response) => response.json())
    .then((data) => {
      getlistUser()
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}
