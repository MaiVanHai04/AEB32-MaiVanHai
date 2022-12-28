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