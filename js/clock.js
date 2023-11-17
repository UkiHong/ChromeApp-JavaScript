const clock = document.querySelector("h2#clock");

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `${hours}:${minutes}:${seconds}`;
}
//padStart(총 스트링 개수, 추가할 스트링 문자)
//String 으로 표현하는 법은 String(괄호 안에 씌워주면 끝)

getClock();
setInterval(getClock, 1000);
