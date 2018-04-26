let body = document.getElementsByTagName("body")[0];
body.style.background = "linear-gradient(#49ede4, #581575)"

for (let i = 0; i<63; i++){
  let div = document.createElement("div");
  div.style.width = "11.1%";
  div.style.float = "left";
  div.style.paddingBottom = "11.1%";

  if(i%2===0){
    div.style.backgroundColor = "#49ede4";
    div.style.opacity = "0.2"
  } else {
    div.style.backgroundColor = "#581575";
    div.style.opacity = "0.2"
  }
  body.appendChild(div);
}
