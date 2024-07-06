var fullImgBox =document.getElementById("fullImgBox")
var fullImg=document.getElementById("fullImg")

function openImg(src){
 fullImgBox.style.display="flex";
 fullImg.src=src

 }
 function closeImg(){
    fullImgBox.style.display="none"
 }