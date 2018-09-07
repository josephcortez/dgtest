var _img = document.getElementById('id1');
var newImg = new Image;

newImg.onload = new function(){
  _img.src = this.src;
}
newImg.src = 'img/491.jpg';
