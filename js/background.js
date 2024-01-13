const images = ["0.jpg", "1.jpg", "2.jpg"];

const chosenImage = images[[Math.floor(Math.random() * images.length)]];

const bgImage = document.createElement("img");

//bgImage.src = `img/${chosenImage}`;

document.body.style.backgroundImage = `url(img/${chosenImage})`;
document.body.style.backgroundPosition = "top";
document.body.style.backgroundRepeat = "no-repeat";
document.body.style.backgroundSize = "cover";
document.body.style.backgroundAttachment = "fixed";

//background images 깔끔하게 넣는법
//bgImage.src = `img/${chosenImage}`; 아 코드 지우고 아래 입력
//document.body.style.backgroundImage = `url(img/${chosenImage})`;
//document.body.style.backgroundPosition = "top";
//document.body.style.backgroundRepeat = "no-repeat";
//document.body.style.backgroundSize = "cover";
//document.body.style.backgroundAttachment = "fixed";

document.body.appendChild(bgImage);
