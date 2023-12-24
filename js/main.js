let lefthad = document.querySelector(".left-heder");
let iconhed = document.querySelector(".left-heder .hidd");
let basisicon = Array.from(document.querySelectorAll(".basis"));
let navRight = document.querySelector("header .container nav .right");
let nevLeft = document.querySelector("header .container nav .left");
let middle = document.querySelector("header .container nav .middle");
let pigention = document.querySelector(".pigention");
function showandhid(item) {
  item.addEventListener("click", function () {
    document.body.classList.toggle("active");
    pigention.classList.toggle("hidden");
    lefthad.classList.toggle("active");
    navRight.classList.toggle("active");
    document
      .querySelector(" header .container nav .middle input ")
      .classList.toggle("active");
    window.scrollTo((x = 0), (y = 0));
    document.querySelector(".overlay").classList.toggle("active")
  });
}

showandhid(basisicon[1]);
showandhid(basisicon[0]);
showandhid(iconhed);

// نهاية الجزء الى بيختفى ويظهر
let kaboerd = document.querySelector(
  "header .container nav .middle .fa-keyboard"
);
let inpSer = document.querySelector("header .container nav .middle input");
inpSer.addEventListener("focus", function () {
  kaboerd.style.display = "none";
});

inpSer.addEventListener("blur", function () {
  kaboerd.style.display = "inherit";
  hiddKapoyerd()
});

// نهاية جزء الفوكس بتاع السيرش

// تظبيط الجزء بتاع الموبايل بتاع السيرش والايقونات بتعته

function hiddKapoyerd () {
    if(inpSer.value != ``) {
        kaboerd.style.display = `none`
    } else {
        
        kaboerd.style.display = `inherit`
    }
}


let angleRight = document.createElement("span");
angleRight.className = `angle`;
angleRight.innerHTML = `<i class="fas fa-arrow-right"></i>`;
angleRight.style.fontSize = `1.5rem`;
let btnSer = document.querySelector(
  "header .container nav .middle .icon-search i"
);

let body = document.querySelector("body");

let inconSer = document.querySelector(
  "header .container nav .middle .icon-search"
);
window.onresize = function () {


  if (body.offsetWidth <= 650) {
    inpSer.style.display = `none`;
    kaboerd.style.display = `none`;
    inconSer.style.border = ` 1px solid transparent`;
    btnSer.addEventListener("click", function () {
      navRight.style.display = `none`;
      inpSer.style.display = `inherit`;
      kaboerd.style.display = `inherit`;
      nevLeft.style.display = `none`;
      document.querySelector(
        "header .container nav .middle .icon-search"
      ).style.cssText = `
            border: 1px solid #d3d3d3ed;
            background-color: #f8f8f8;
            `;
      middle.appendChild(angleRight);
      angleRight.style.display = `inherit`;
    });

  }

  if (body.offsetWidth > 640) {
    navRight.style.display = `inherit`;
    inpSer.style.display = `inherit`;
    inpSer.style.border = ` #d3d3d3ed`;
    kaboerd.style.display = `inherit`;
    nevLeft.style.display = `inherit`;
    document.querySelector(
      "header .container nav .middle .icon-search"
    ).style.cssText = `
        border: 1px solid #d3d3d3ed;
        background-color: #f8f8f8;
        `;
    angleRight.style.display = `none`;
    hiddKapoyerd();
  }
};

angleRight.addEventListener("click", function () {
  navRight.style.display = `inherit`;
  inpSer.style.display = `none`;
  kaboerd.style.display = `none`;
  nevLeft.style.display = `inherit`;
  document.querySelector(
    "header .container nav .middle .icon-search"
  ).style.cssText = `
    border: 1px solid transparent;
    background-color: transparent;
    `;
    hiddKapoyerd()
  this.style.display = `none`;
});

// تظبيط الجزء بتاع الموبايل بتاع السيرش والايقونات بتعته

//اضافة الكروت
let parVideos = document.querySelector(".videos");

let titles = [
  "نصائح مهمة للمبرمجين المبتدأين",
  "معلومات مهمة عن مجال Dev-Pps",
  "شرح عمل صفحة تسجيل دهول بال html + css",
  "how to make landing page >",
  "اسباب انهزام الدولة العثمانية",
];


let gend = [
    "proj" , "sassa" , "gem" , "mov" , "mosls" , "child" , "keds", "sport" , 
]


for (let i = 0; i < 20; i++) {
  let tit = Math.floor(Math.random() * titles.length);
  let gen = Math.floor(Math.random() * gend.length);

  let cart = document.createElement("div");
  cart.className = "card";
  cart.setAttribute("gend" , `${gend[gen]}`)
  cart.innerHTML = `
  <div class="top">
  <span>1:00:45</span>
  <img src="./img/${i}.webp" alt="elzero">
  </div>
  <div class="card-body">
    <div class="left">
     <i class="fas fa-ellipsis-v"></i>
    </div>
    <div class="middle">
     <p class="card-title"> ${titles[tit]} </p>
     <p class="name-chenal"> <i class="fas fa-check-circle"></i> elzero Wep School </p>
     <p class="time">   الف مشاهدة  . قبل سنة واحدة <bdi>20</bdi></p>
    </div>
    <div class="right">
        <img class="logo" src="./img/logo/0.jpg" alt="">
    </div>
</div>
`;
  parVideos.appendChild(cart);
}

// الانتهاء من اضافة الكطروت

// ازرار المحتوى

let btnsContent = Array.from(document.querySelectorAll("header .btns button"));
btnsContent.forEach((e) => {
  e.addEventListener("click", function (x) {
    if (!x.target.classList.contains("active")) {
      for (let z = 0; z < btnsContent.length; z++) {
        btnsContent[z].classList.remove("active");
        x.target.classList.add("active");
      }
      let allCards =Array.from( document.querySelectorAll(".videos .card")) ; 
          allCards.forEach (it=> {
        if(x.target.getAttribute("act") == it.getAttribute("gend") ) {
            for(let y = 0 ; y< allCards.length ; y++) {
                allCards[y].style.display = `none`
                if(allCards[y].getAttribute("gend") == it.getAttribute("gend") ) {
                    allCards[y].style.display = `grid`
                }
            }
        } else if (x.target.getAttribute("act") == "all") {
            for(let y = 0 ; y< allCards.length ; y++) {
                allCards[y].style.display = `grid`
            }
        }
      })

    }
});
});
// ازرار المحتوى
