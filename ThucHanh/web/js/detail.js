let urlDetail = new URLSearchParams(window.location.search);
let id = urlDetail.get("id");
console.log(id);

const URL = "https://63a06c2224d74f9fe837cb43.mockapi.io/APItest/vidu1s/" + id;
fetch(URL, {
  method: "GET",
})
  .then((response) => response.json())
  .then((data) => {
    // console.log(data);
    renderUser(data);
  })
  .catch((error) => {
    console.error("Error:", error);
  });

function renderUser(user) {
  console.log(user);
  let elm = document.getElementById("info__user");
  elm.innerHTML = `
    <p>${user.id}</p>
    <p>${user.name}</p>
    <p>${user.city}</p>
    <p>${user.avatar}</p>
  `;
}
