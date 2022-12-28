const URL_USER = "https://63a06c2224d74f9fe837cb43.mockapi.io/APItest/vidu1s";

let urlDetail = new URLSearchParams(window.location.search);
let id = urlDetail.get("id");

if (id) {
  getUser();
}
function getUser() {
  fetch(`${URL_USER}/${id}`, {
    method: "GET",
  })
    .then((response) => response.json())
    .then((data) => {
      let elmAvatar = document.getElementById("inputAvatar");
      let elmHang = document.getElementById("inputHang");
      let elmTen = document.getElementById("inputTen");
      let elmGia = document.getElementById("inputGia");
      let elmTongQuan = document.getElementById("inputTongQuan");

      elmAvatar.value = data.avatar;
      elmHang.value = data.hang;
      elmTen.value = data.ten;
      elmGia.value = data.gia;
      elmTongQuan.value = data.tongQuan;
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

function handleSubmit() {
  let elmAvatar = document.getElementById("inputAvatar");
  let elmHang = document.getElementById("inputHang");
  let elmTen = document.getElementById("inputTen");
  let elmGia = document.getElementById("inputGia");
  let elmTongQuan = document.getElementById("inputTongQuan");

  let user = {
    avatar: elmAvatar.value,
    hang: elmHang.value,
    ten: elmTen.value,
    gia: elmGia.value,
    tongQuan: elmTongQuan.value,
  };
  if (id) {
    console.log(user);
    updateUser(user);
  } else {
    postUser(user);
  }
}
function postUser(user) {
  fetch(URL_USER, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}
function updateUser(user) {
  fetch(`${URL_USER}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}
window.onload = function(){
  loadHeader()
}
function loadHeader() {
  let elmHeader = document.getElementById("header")
  fetch("./header.html")
    .then((response) => response.text())
    .then((data) => {
      elmHeader.innerHTML = data
    }) 
}
