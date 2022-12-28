let urlDetail = new URLSearchParams(window.location.search);
let id = urlDetail.get("id");
console.log(id);

const URL = "https://63a06c2224d74f9fe837cb43.mockapi.io/APItest/vidu1s/"+id ;
fetch(URL, {
  method: "GET",
})
  .then((response) => response.json())
  .then((data) => {
    renderInfo(data);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
function renderInfo(listUser) {
  let elmInfo = document.getElementById("infoBody");
  elmInfo.innerHTML = `<img style='object-fit'
        class="w-75"
        src="${listUser.avatar}"
        alt=""
      />
      <div class="content" style="width: 320px; ">
        <h1 style="width: 320px;">${listUser.ten}</h1>
          <h3>TỔNG QUAN:</h3> 
          <p style='text-align: justify;'>
          ${listUser.tongQuan}
        </p>
        <h3>giá:${listUser.gia}</h3>
      </div>`;
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
