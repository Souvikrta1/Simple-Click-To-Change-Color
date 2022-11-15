var color = ["#d1769d","#57d7b0","#d7577f","#eb573d","#dbeb3d","#d13deb","#556b2f","#5c3876","#fc30c0"];
document.querySelector("button").addEventListener("click",function(){
    var randomColor = color[Math.floor(Math.random()*color.length)];
    document.querySelector("body").style.background = randomColor;   
})