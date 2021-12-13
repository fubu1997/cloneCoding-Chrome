const days = document.querySelector('h2#days');
const clock = document.querySelector('h2#clock');

function getClock() {
  const date = new Date();
  //날짜
  const year = String(date.getFullYear()).padStart(4,'0');
  const month = String(date.getMonth()).padStart(2,'0');
  const day = String(date.getDay()).padStart(2,'0');

  //padStart는 (문자열갯수, "채울문자")로 이루어졋으며
  //문자열에만 쓸수있으므로 String을 이용해서 문자열로 변환
  const hours = String(date.getHours()).padStart(2,'0');
  const minutes = String(date.getMinutes()).padStart(2,'0');
  const seconds = String(date.getSeconds()).padStart(2,'0');
  clock.innerText = `${year}년 ${month}월 ${day}일 ${hours}:${minutes}:${seconds}`;
}

getClock();
setInterval(getClock, 1000);