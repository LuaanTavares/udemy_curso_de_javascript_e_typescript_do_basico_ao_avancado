const div = document.querySelector(".paragrafos");
const paragrafos = document.querySelectorAll("p");
const estilosBody = getComputedStyle(document.body);
const backGroundColor = estilosBody.backgroundColor;
console.log(backGroundColor);

for (let i of paragrafos) {
  i.style.backgroundColor = backGroundColor;
  i.style.color = "#FFFFFF";
  i.style.height = "60px";
}
