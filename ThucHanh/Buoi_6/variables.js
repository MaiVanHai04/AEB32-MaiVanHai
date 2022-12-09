let name = "Mai Van Hai";
const age = 18;
let addRess = "Da Nang City";
let boo = true;
console.log("String", name);
console.log("number", age);
console.log("String", addRess);
console.log("boolean", boo);

let unde = undefined;
console.log("undefuned", unde);

let n = null;
console.log("null", n);

let ar = [1, 2, 3, 4, 5];
console.log(ar.length);
console.log("Array<number>", ar[0]);
console.log("Array<number>", ar[4]);

let array = ["hello world"];
console.log(array);

let myDate = {
  day: "9",
  month: "12",
  year: "2022",
};
console.log("number", myDate.day);
console.log("number", myDate.month);
console.log("number", myDate.year);

function tong() {
  let a = 10;
  let b = 10;
  let s = 5 + 10;
  return s;
}
console.log("function<number>", "tong = ", tong());

function tinhTong(x, y) {
  tong = x + y;
  return tong;
}
console.log("function<number>", "tong = ", tinhTong(2, 3));

//alert("hello world")

// let hello = prompt("xin chao, Mai Van Hai");
// console.log(hello);

function handleOnclick() {
  let elm = document.getElementById("delete");
  console.log(elm);
  elm.style.color = "red";
  // elm.style.display = "none"
  elm.innerHTML = "da thay doi";

  // let elm2 = confirm("ban co muon xoa khong")
  // alert("ban chac chu: " + elm2)
  // console.log(elm2)
}
