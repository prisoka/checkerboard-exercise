//black and red:
let body = document.getElementsByTagName("body")[0];

for (let i = 0; i<63; i++){
  let div = document.createElement("div");
  div.style.width = "11.1%";
  div.style.float = "left";
  div.style.paddingBottom = "11.1%";

  if(i%2===0){
    div.style.backgroundColor = "red";
  } else {
    div.style.backgroundColor = "black";
  }
  body.appendChild(div);
}

// random colors:
// let body = document.getElementsByTagName("body")[0];
//
// for (let i = 0; i<63; i++){
//   let div = document.createElement("div");
//   div.style.width = "11.1%";
//   div.style.float = "left";
//   div.style.paddingBottom = "11.1%";
//
//   function getRandomColor() {
//     var letters = '0123456789ABCDEF';
//     var color = '#';
//     for (var i = 0; i < 6; i++) {
//       color += letters[Math.floor(Math.random() * 16)];
//     }
//     return color;
//   }
//   div.style.backgroundColor = getRandomColor();
//   body.appendChild(div);
// }

//gradient:
// let body = document.getElementsByTagName("body")[0];
// body.style.background = "linear-gradient(#49ede4, #581575)"
//
// for (let i = 0; i<63; i++){
//   let div = document.createElement("div");
//   div.style.width = "11.1%";
//   div.style.float = "left";
//   div.style.paddingBottom = "11.1%";
//
//   if(i%2===0){
//     div.style.backgroundColor = "#49ede4";
//     div.style.opacity = "0.2"
//   } else {
//     div.style.backgroundColor = "#581575";
//     div.style.opacity = "0.2"
//   }
//   body.appendChild(div);
// }

//flashing:
// let body = document.getElementsByTagName("body")[0];
//
// for (let i = 0; i<63; i++){
//   let div = document.createElement("div");
//   div.style.width = "11.1%";
//   div.style.float = "left";
//   div.style.paddingBottom = "11.1%";
//
//   function getRandomColor() {
//     var letters = '0123456789ABCDEF';
//     var color = '#';
//     for (var x = 0; x < 6; i++) {
//       color += letters[Math.floor(Math.random() * 16)];
//     }
//     return color;
//   }
//   div.style.backgroundColor = getRandomColor();
//
//   function flashingColors(){
//     for (let j=0; j<body.children.length; j++){
//       body.children[j].style.backgroundColor = getRandomColor();
//     }
//   }
//   body.appendChild(div);
//   setInterval(flashingColors, 2000);
// }
