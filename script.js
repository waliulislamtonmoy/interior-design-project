let plus = document.querySelector(".plus");
let minus = document.querySelector(".minus");
let price = document.querySelector(".price");
let roomNumber1 = document.getElementById("roomNumber1");
let roomNumber = document.querySelector(".roomNumber11");
let signupbtn1 = document.querySelector(".signup-btn-1");
let signupbtn = document.querySelector(".signup-btn");

let proMessage = document.getElementById("proMessage");
let message = document.getElementById("message");
// console.log(proMessage);

// proMessage.innerHTML = "<h1>thanks proMessage</h1>";

let n = 1;
let roomprice = 199;

plus.addEventListener("click", () => {
  n++;
  roomprice += 99;
  price.innerText = roomprice;
  roomNumber1.innerText = n;
});

minus.addEventListener("click", () => {
  if (n > 1) {
    n--;
    roomprice -= 99;
  }

  price.innerText = roomprice;
  roomNumber1.innerText = n;
});

//pro-package start

let ProPlus = document.querySelector(".ProPlus");
let ProMinus = document.querySelector(".ProMinus");
let ProPrice = document.querySelector(".ProPrice");
let ProRoomNumber1 = document.getElementById("ProRoomNumber1");
let ProRoomNumber = document.querySelector(".ProRoomNumber11");

console.log(ProRoomNumber);

let ProRoom = 1;
let ProRoomprice = 249;

ProPlus.addEventListener("click", () => {
  ProRoom++;
  ProRoomprice += 99;
  ProPrice.innerText = ProRoomprice;
  ProRoomNumber1.innerText = ProRoom;
});

ProMinus.addEventListener("click", () => {
  if (ProRoom > 1) {
    ProRoom--;
    ProRoomprice -= +99;
  }

  ProPrice.innerText = ProRoomprice;
  ProRoomNumber1.innerText = ProRoom;
});

signupbtn1.addEventListener("click", () => {
  message.innerHTML = `<p>Thank you for chosing ${n}  Room</p>`;
  roomNumber.innerText = n;
});

signupbtn.addEventListener("click", () => {
  ProRoomNumber.innerText = ProRoom;
  proMessage.innerHTML = `<p>Thank you for chosing ${ProRoom} Pro Room</p>`;
});
