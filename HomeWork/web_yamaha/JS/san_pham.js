let listUser = [];
const URL = "https://63a06c2224d74f9fe837cb43.mockapi.io/APItest/vidu1s/";
fetch(URL, {
  method: "GET",
})
  .then((response) => response.json())
  .then((data) => {
    renderUser(data);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
function renderUser(listUser) {
  let elmBody = document.getElementById("bodyUser");
  // let listUser = [
  //   {
  //     avatar:
  //       "https://www.revzoneyamaha-motor.com.vn/wp-content/uploads/2021/10/ymh-motor-vn-2022_yzf690_dpbmc_usa_team-yamaha-blue_s3_cmyk-1.png",
  //     dong: "SUPER SPORT",
  //     ten: "YAMAHA-YZF-R7",
  //     gia: "269.000.000 VND",
  //   },
  //   {
  //     avatar:
  //       "https://www.revzoneyamaha-motor.com.vn/wp-content/uploads/2021/10/ymh-motor-vn-2022_yzf690_dpbmc_usa_team-yamaha-blue_s3_cmyk-1.png",
  //     dong: "SUPER SPORT",
  //     ten: "YAMAHA-YZF-R7",
  //     gia: "269.000.000 VND",
  //   },
  //   {
  //     avatar:
  //       "https://www.revzoneyamaha-motor.com.vn/wp-content/uploads/2021/10/ymh-motor-vn-2022_yzf690_dpbmc_usa_team-yamaha-blue_s3_cmyk-1.png",
  //     dong: "SUPER SPORT",
  //     ten: "YAMAHA-YZF-R7",
  //     gia: "269.000.000 VND",
  //   },
  //   {
  //     avatar:
  //       "https://www.revzoneyamaha-motor.com.vn/wp-content/uploads/2021/10/ymh-motor-vn-2022_yzf690_dpbmc_usa_team-yamaha-blue_s3_cmyk-1.png",
  //     dong: "SUPER SPORT",
  //     ten: "YAMAHA-YZF-R7",
  //     gia: "269.000.000 VND",
  //   },
  //   {
  //     avatar:
  //       "https://www.revzoneyamaha-motor.com.vn/wp-content/uploads/2021/10/ymh-motor-vn-2022_yzf690_dpbmc_usa_team-yamaha-blue_s3_cmyk-1.png",
  //     dong: "SUPER SPORT",
  //     ten: "YAMAHA-YZF-R7",
  //     gia: "269.000.000 VND",
  //   },
  //   {
  //     avatar:
  //       "https://www.revzoneyamaha-motor.com.vn/wp-content/uploads/2021/10/ymh-motor-vn-2022_yzf690_dpbmc_usa_team-yamaha-blue_s3_cmyk-1.png",
  //     dong: "SUPER SPORT",
  //     ten: "YAMAHA-YZF-R7",
  //     gia: "269.000.000 VND",
  //   },
  //   {
  //     avatar:
  //       "https://www.revzoneyamaha-motor.com.vn/wp-content/uploads/2021/10/ymh-motor-vn-2022_yzf690_dpbmc_usa_team-yamaha-blue_s3_cmyk-1.png",
  //     dong: "SUPER SPORT",
  //     ten: "YAMAHA-YZF-R7",
  //     gia: "269.000.000 VND",
  //   },
  //   {
  //     avatar:
  //       "https://www.revzoneyamaha-motor.com.vn/wp-content/uploads/2021/10/ymh-motor-vn-2022_yzf690_dpbmc_usa_team-yamaha-blue_s3_cmyk-1.png",
  //     dong: "SUPER SPORT",
  //     ten: "YAMAHA-YZF-R7",
  //     gia: "269.000.000 VND",
  //   },
  // ];
  // let user = {
  //   avatar:
  //     "https://www.revzoneyamaha-motor.com.vn/wp-content/uploads/2021/10/ymh-motor-vn-2022_yzf690_dpbmc_usa_team-yamaha-blue_s3_cmyk-1.png",
  //   dong: "SUPER SPORT",
  //   ten: "YAMAHA-YZF-R7",
  //   gia: "269.000.000 VND",
  // };
  function formatUser(listUser) {
    return `
     
          <div class="sanPham w-25" style="text-align: center" >
          <img onclick="gotoDetail(${listUser.id})"
          class="w-75 "
          src=${listUser.avatar}
          alt=""
          />
          <h5>${listUser.hang}</h5>
          <h5>${listUser.ten}</h5>
          <p>${listUser.gia}</p>  
          <button class="btn btn-danger" onclick = "deleteUser(${listUser.id})">Delete</button>
          <button class="btn btn-success" onclick = "editUser(${listUser.id})">edit</button>
          </div>
          
          `;
  }
  let resCard = "";
  for (let index = 0; index < listUser.length; index++) {
    resCard += formatUser(listUser[index]);
  }
  elmBody.innerHTML = resCard;
}
function getlistUser(){
  fetch(URL, {
    method: "GET",
  })
    .then((response) => response.json())
    .then((data) => {
      renderUser(data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}
function gotoDetail(listUserid) {
  window.location.href=`./detail.html?id=${listUserid}`
}
function deleteUser(listUserid) {
  let user_delete = URL + "/" + listUserid;
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
function editUser(listUserid) {
  window.location.href= `./thong_tin.html?id=${listUserid}`
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

