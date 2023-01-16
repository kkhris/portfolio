var html = document.getElementById("page");
html.innerHTML =
  "<div style='z-index: 99;text-align: center;position: fixed;right: 10px;bottom: 35%;background-color: #ffffffb3;border: 2px solid #3a3c3d;padding: 1vw 0.2vw;border-radius: 6px;'><div><button onclick='toTop()' style='background-color: #ffffff00;font-size: 1vw;cursor: pointer;'>↑</button></div><div id='pagenum'  style='margin: 1.5vw 0px;font-size:1vw'>/</div><div><button onclick='toBottom()' style='background-color: #ffffff00;font-size: 1vw;cursor: pointer;'>↓</button></div></div>";

let curp = 1;
var pageList = document.getElementsByClassName("page_mark");
var t = pageList.length;
function toTop() {
  if (curp === 1) {
    return;
  }
  curp = curp - 1;
  const scrollTopHeight = pageList[curp - 1].offsetTop;
  document.documentElement.scrollTo({
    top: scrollTopHeight,
    behavior: "smooth", //  smooth(平滑滚动),instant(瞬间滚动),默认auto
  });
  getinitPagenum();
}

function toBottom() {
  if (curp === t) {
    return;
  }
  curp = curp + 1;
  const scrollTopHeight = pageList[curp - 1].offsetTop;
  document.documentElement.scrollTo({
    top: scrollTopHeight,
    behavior: "smooth", //  smooth(平滑滚动),instant(瞬间滚动),默认auto
  });
  getinitPagenum();
}

function getinitPagenum() {
  document.getElementById("pagenum").innerText = curp + "/" + t;
}
getinitPagenum();
