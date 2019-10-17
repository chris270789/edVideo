// var canvas = document.getElementById('bubbles');
// var ctx = canvas.getContext('2d');
// var pi= Math.PI;
// var bubbleCount = 100; //количество пузырей
//  var bubbles = [];
//  var bubbleSpeed = 1;
//  var popLines = 12; //сколько линий при взрыве
//  var popDistance = 10;
//  var popCoeff = 0.61; //степень разлёта при лопании, от 0 до 1
//  var minRadius = 4; //минимальный радиус
//  var scaleRadius = 12; //максимальная добавка для радиуса
//  var mouseOffset = { x: 0, y: 0 }
//  var counter = 0; //счёт игры
//  var inGame = false;
//  var globalId;



    


// for (var i=0;i<6;i++){
//     ctx.beginPath(); 
//     ctx.lineWidth='1';
//     ctx.strokeStyle="rgba(255,255,255,0.5)";
//     ctx.fillStyle = "rgba(255,255,255,0.5)";
//     var x = Math.floor(Math.random() * canvas.width-200);
//     var y=Math.floor(Math.random() * canvas.height-100);
//     ctx.arc(x,y,20,0,2*pi,false);
//     ctx.stroke(); 
//     ctx.fill();
//     ctx.closePath();
//  }
//  for (var i=0;i<6;i++){
//     ctx.beginPath(); 
//     ctx.lineWidth='1';
//     ctx.strokeStyle="rgba(255,255,255,0.5)";
//     ctx.fillStyle = "rgba(255,255,255,0.5)";
//     x = Math.floor(Math.random() * canvas.width-200);
//     y=Math.floor(Math.random() * canvas.height-100);
//     ctx.arc(x,y,15,0,2*pi,false);
//     ctx.stroke(); 
//     ctx.fill();
//     ctx.closePath();
//  }
 
//  for (var i=0;i<10;i++){
//     ctx.beginPath(); 
//     ctx.lineWidth='1';
//     ctx.strokeStyle="rgba(255,255,255,0.5)";
//     ctx.fillStyle = "rgba(255,255,255,0.5)";
//      x = Math.floor(Math.random() * canvas.width-200);
//      y=Math.floor(Math.random() * canvas.height-100);
//     ctx.arc(x,y,12,0,2*pi,false);
//     ctx.stroke(); 
//     ctx.fill();
//     ctx.closePath();
//  }
//  for (var i=0;i<9;i++){
//     ctx.beginPath(); 
//     ctx.lineWidth='1';
//     ctx.strokeStyle="rgba(255,255,255,0.5)";
//     ctx.fillStyle = "rgba(255,255,255,0.5)";
//      x = Math.floor(Math.random() * canvas.width-200);
//      y=Math.floor(Math.random() * canvas.height-100);
//     ctx.arc(x,y,8,0,2*pi,false);
//     ctx.stroke(); 
//     ctx.fill();
//     ctx.closePath();
//  }
//  for (var i=0;i<6;i++){
//     ctx.beginPath(); 
//     ctx.lineWidth='1';
//     ctx.strokeStyle="rgba(255,255,255,0.5)";
//     ctx.fillStyle = "rgba(255,255,255,0.5)";
//      x = Math.floor(Math.random() * canvas.width-200);
//      y=Math.floor(Math.random() * canvas.height-100);
//     ctx.arc(x,y,4,0,2*pi,false);
//     ctx.stroke(); 
//     ctx.fill();
//     ctx.closePath();
//  }

 var canvas = document.getElementById('bubbles');
 var ctx = canvas.getContext('2d');
 var bubbleCount = 50; //количество пузырей
 var bubbles = [];
 var bubbleSpeed = 1;
 var popLines = 4; //сколько линий при взрыве
 var popDistance = 10;
 var popCoeff = 0.61; //степень разлёта при лопании, от 0 до 1
 var minRadius = 4; //минимальный радиус
 var scaleRadius = 22; //максимальная добавка для радиуса
 var mouseOffset = { x: 0, y: 0 }
  //var counter = 0; //счёт игры
 var inGame = false;
 var globalId;
 var height = window.screen.height;

 function startGame () { 
  //if (inGame) return; 
  for (var i = 0; i < bubbleCount; i++) {
   var tempBubble = new createBubble();
   bubbles.push(tempBubble);
  }
  inGame = true; 
  // document.getElementById('countBox').innerHTML = 'Your count is 0';
  globalId = window.requestAnimationFrame (animate);
   	//createBubble();
 }

 function animate () { //цикл анимации

  //if (!inGame) return;
  ctx.clearRect(0, 0, canvas.width, canvas.height); //очистка канвы
  ctx.beginPath();
  for (var i = 0; i < bubbles.length; i++) { //цикл отрисовки
   bubbles[i].position.x = 
    Math.sin(bubbles[i].count/bubbles[i].distanceBetweenWaves) * 50 + bubbles[i].xOffset;
   //bubbles[i].position.y = Math.cos(bubbles[i].count/bubbles[i].distanceBetweenWaves) * 50 + bubbles[i].yOffset;
 bubbles[i].position.y = bubbles[i].count;
  bubbles[i].render();
  //bubbles[i].position.y -= bubbleSpeed;
  
    //bubbles[i].count -= bubbles[i].count;
     
    //if (bubbles[i].count < - bubbles[i].radius) {  //конец игры
   //bubbles[i].count = canvas.height + bubbles[i].yOffset;
  //  //  // document.getElementById('countBox').innerHTML = 'Your count is ' + counter + '; repeat?';
  //    counter = 0;
  //   window.cancelAnimationFrame (globalId);
  //   bubbles = [];
  //   inGame = false; 
  // } 
  // else {
    bubbles[i].count -= bubbleSpeed;
if (bubbles[i].count < bubbles[i].radius) { 
     	inGame = true;
     	bubbles[i].count = canvas.height;
     	/// bubbles.push(tempBubble);
     	 //bubbles[i].count -= bubbleSpeed;
     	// bubbles[i].render();

     	return  window.requestAnimationFrame(animate);
     	//bubbles[i].render();
     	bubbles.push(tempBubble);
  // bubbles[i].count = canvas.height + bubbles[i].yOffset;
  }
  //bubbles[i].position.y -= bubbleSpeed;
  //bubbles[i].count ++;
     //createBubble();
  // }
  }

  for (var i = 0; i < bubbles.length; i++) { //при наведении мыши на пузырь
   if (mouseOffset.x > bubbles[i].position.x - bubbles[i].radius && 
       mouseOffset.x < bubbles[i].position.x + bubbles[i].radius) {
    if (mouseOffset.y > bubbles[i].position.y - bubbles[i].radius && 
        mouseOffset.y < bubbles[i].position.y + bubbles[i].radius) {
     // document.getElementById('countBox').innerHTML = 'Your count is ' + (++counter);
     for (var a = 0; a < bubbles[i].lines.length; a++) {
      popDistance = bubbles[i].radius * popCoeff;
      bubbles[i].lines[a].popping = true;
      bubbles[i].popping = true;
     }
    }
   }
  }
  globalId = window.requestAnimationFrame (animate);

 }

 var createBubble = function() { //Новый пузырь
  var colors = ['rgba(255,255,255,0.5)']; //цвета
  this.position = { x: 0, y: 0 };
  this.radius = minRadius + Math.random() * scaleRadius;
  this.xOffset = Math.random() * canvas.width - this.radius;
  this.yOffset = Math.random() * canvas.height;
  this.distanceBetweenWaves = 50 + Math.random() * 40;
  this.count = canvas.height + this.yOffset;
  this.color = colors[ Math.floor(Math.random()*colors.length) ];
  this.lines = [];
  this.popping = false;
  this.maxRotation = 85;
  this.rotation = Math.floor (Math.random() * 
   (this.maxRotation - (this.maxRotation * -1))) - this.maxRotation;
  this.rotationDirection = 'forward';

  for (var i = 0; i < popLines; i++) {

   var tempLine = new createLine (this.color);
   tempLine.bubble = this;
   tempLine.index = i;
   this.lines.push(tempLine);
  }

  this.resetPosition = function() {
   this.position = {x: 0, y: 0};
   this.radius = 8 + Math.random() * 6;
   this.xOffset = Math.random() * canvas.width - this.radius;
   this.yOffset = Math.random() * canvas.height;
   this.distanceBetweenWaves = 50 + Math.random() * 40;
   this.count = canvas.height + this.yOffset;
   this.popping = false;
  }

  this.render = function() {
   if (this.rotationDirection === 'forward') {
    if (this.rotation < this.maxRotation) this.rotation++;
    else this.rotationDirection = 'backward';
   } 
   else {
    if (this.rotation > this.maxRotation * -1) this.rotation--;
    else this.rotationDirection = 'forward';
   }
    ctx.save();
    ctx.translate (this.position.x, this.position.y);
    ctx.rotate (this.rotation*Math.PI/180);
   if (!this.popping) {
    ctx.beginPath();
    ctx.strokeStyle = this.color;
    ctx.lineWidth = 1;
    ctx.fillStyle = this.color;
    ctx.arc(0, 0, this.radius - 3, 0, Math.PI*1.5, true);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(0, 0, this.radius, 0, Math.PI*2, false);
    ctx.stroke();
    ctx.fill();
   }
   ctx.restore();
   for (var a = 0; a < this.lines.length; a++) { //Отрисовка линий
    if (this.lines[a].popping) {
     if (this.lines[a].lineLength < popDistance && !this.lines[a].inversePop) 
      this.lines[a].popDistance += 0.05;
     else {
      if (this.lines[a].popDistance >= 0) {
       this.lines[a].inversePop = true;
       this.lines[a].popDistanceReturn += 1;
       this.lines[a].popDistance -= 0.025;
      } 
      else {
       this.lines[a].resetValues();
       this.resetPosition();
      }
     }
     this.lines[a].updateValues();
     this.lines[a].render();
    }
   }
  }
 }

 function createLine (color) { //новая линия
  this.lineLength = 0;
  this.popDistance = 0;
  this.popDistanceReturn = 0;
  this.inversePop = false;
  this.popping = false;
  this.color = color;

  this.resetValues = function() {
   this.lineLength = 0;
   this.popDistance = 0;
   this.popDistanceReturn = 0;
   this.inversePop = false;
   this.popping = false;
   this.updateValues();
  }

  this.updateValues = function() {
   this.x = this.bubble.position.x + (this.bubble.radius + this.popDistanceReturn) * 
    Math.cos(2 * Math.PI * this.index / this.bubble.lines.length);
   this.y = this.bubble.position.y + (this.bubble.radius + this.popDistanceReturn) * 
    Math.sin(2 * Math.PI * this.index / this.bubble.lines.length);
   this.lineLength = this.bubble.radius * this.popDistance;
   this.endX = this.lineLength;
   this.endY = this.lineLength;
  }

  this.render = function() {
   this.updateValues();
   ctx.beginPath();
   ctx.strokeStyle = this.color;
   ctx.lineWidth = 2;
   ctx.moveTo(this.x, this.y);
  if (this.x < this.bubble.position.x) this.endX = - this.lineLength;
   if (this.y < this.bubble.position.y) this.endY = - this.lineLength;
  if (this.y === this.bubble.position.y) this.endY = 0;
   if (this.x === this.bubble.position.x) this.endX = 0;
   ctx.lineTo(this.x + this.endX, this.y + this.endY);
   ctx.stroke();
  };
 }

 canvas.addEventListener('mousemove', mouseMove); //назначаем слушатель события mousemove
 function mouseMove(e) {
  mouseOffset.x = e.offsetX;
  mouseOffset.y = e.offsetY;
 }
startGame ();