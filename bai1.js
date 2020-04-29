var images = [];
for(var i=0;i<10;i++){
    images[i]=new Image();
    images[i].src = "images/"+(i+1)+".jpg";
}
var currentIndex = 0;
var vitri = document.getElementById("vitrianh")
function HienViTri(){
    vitri.innerHTML = "Ảnh " + (currentIndex+1) +"/"+ images.length
}

function next(){
    currentIndex++;
    if(currentIndex >= images.length){
            currentIndex = 0;
        }
    vitri.innerHTML = "Ảnh " + (currentIndex+1) +"/"+ images.length
    var anh = document.getElementById("anh");
    anh.src = images[currentIndex].src;
}
function prev(){
    currentIndex--;
    if(currentIndex < 0){
    currentIndex = images.length - 1;
    
    }
    vitri.innerHTML = "Ảnh " + (currentIndex+1) +"/"+ images.length
    var anh = document.getElementById("anh");
    anh.src = images[currentIndex].src;
}
