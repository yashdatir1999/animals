var page = document.querySelector(".page1")
var topic = document.querySelector(".page1 > h1")
var image = document.querySelector(".page1 > img")
var bigcircle = document.querySelector(".big-circle")
var circle = document.querySelector(".circle")
var blurp = document.querySelector(".blur >p")
var flag = 0


page.addEventListener("click",function(){
    if(flag === 0){

        topic.style.width = "20%"
        topic.style.marginTop = "5vh"
        topic.innerHTML = "What The deer are telling us"
        blurp.innerHTML = "Deer are graceful herbivorous mammals known for their distinctive antlers, which are primarily found on males"
        image.setAttribute("src","deer.png")
        flag = 1
    
    }else if(flag === 1){

        topic.style.width = "20%"
        topic.innerHTML = "A Master fisherman"
        blurp.innerHTML = "Birds are feathered, warm-blooded creatures that belong to the class Aves."
        image.setAttribute("src","bird.png")
        flag = 2

    }else{

        topic.style.width = "20%"
        topic.innerHTML = "The elephant queen"
        blurp.innerHTML = "Majestic in its grace, the elephant roams, a symbol of strength and wisdom in nature's grand tableau."
        image.setAttribute("src","elephant.png")
        flag = 0

    }
})