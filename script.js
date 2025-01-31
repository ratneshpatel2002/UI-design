var a =document.querySelector("#one")
var vid1=document.querySelector("#vid1")
a.addEventListener("mouseenter",function(){
   vid1.style.display ="initial"
})

a.addEventListener("mouseleave",function(){
    vid1.style.display="none"
})

var b =document.querySelector("#two")
var vid2=document.querySelector("#vid2")
b.addEventListener("mouseenter",function(){
   vid2.style.display ="initial"
})

b.addEventListener("mouseleave",function(){
    vid2.style.display="none"
})


var c =document.querySelector("#three")
var vid3=document.querySelector("#vid3")
c.addEventListener("mouseenter",function(){
   vid3.style.display ="initial"
})

c.addEventListener("mouseleave",function(){
    vid3.style.display="none"
})


var d =document.querySelector("#four")
var vid4=document.querySelector("#vid4")
d.addEventListener("mouseenter",function(){
   vid4.style.display ="initial"
})

d.addEventListener("mouseleave",function(){
    vid4.style.display="none"
})


var e =document.querySelector("#five")
var vid4=document.querySelector("#vid5")
e.addEventListener("mouseenter",function(){
   vid5.style.display ="initial"
})

e.addEventListener("mouseleave",function(){
    vid5.style.display="none"
})

var flag = 0

var svg =document.querySelector(".svg-wrapper")
var body =document.querySelector("body")
var i =document.querySelector("i")

i.addEventListener("click",function(){
    if (flag == 0){
    body.style.backgroundColor = "white"
    body.style.color = "black"
    svg.style.color = "black"
   
    flag = 1
    }
    else{
        body.style.backgroundColor ="black"
        body.style.color = "white"
       svg.style.color = "white"
       
        flag = 0
    }
})

