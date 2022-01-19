let lefthad = document.querySelector(".left-heder") ; 
let iconhed = document.querySelector(".left-heder .hidd") ; 
let basisicon = Array.from(document.querySelectorAll(".basis"))
let navRight = document.querySelector("header .container nav .right")
let pigention = document.querySelector(".pigention")

// lefthad.addEventListener

// basisicon[1].addEventListener("click" , function () {
//     pigention.classList.toggle("hidden") ;
//     lefthad.classList.toggle ("active")
// })
// basisicon[0].addEventListener("click" , function () {
//     pigention.classList.toggle("hidden") ;
//     lefthad.classList.toggle ("active")
// })

// iconhed.addEventListener("click" , function () {
//     pigention.classList.toggle("hidden") ;
//     lefthad.classList.toggle ("active")

// })

function showandhid (item) {
    item.addEventListener("click" , function () {
        document.body.classList.toggle("active");
        pigention.classList.toggle("hidden") ;
        lefthad.classList.toggle ("active")
        navRight.classList.toggle ("active")
        document.querySelector(" header .container nav .middle input ").classList.toggle("active")
    }) 
} 

showandhid (basisicon[1])
showandhid (basisicon[0])
showandhid (iconhed)


window.onscroll = function () {
    
    console.log (screen.availWidth )
}