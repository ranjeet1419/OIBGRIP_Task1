

function clearScreen(){
  document.getElementById("result").value="";
}
 function ram(value){
   let res = document.getElementById("result");
 if(res.value=="undefined"){
   res.value="";
 }
 res.value +=value;
 }




 document.addEventListener('keydown', function(event){

   playSound(event.key);
 });

 function playSound(character) {
   if(character=='1') {
   var song1 = new Audio('songs/crash.mp3');
   song1.play();
 }
 else if(character=='2'){
   var song2 = new Audio('songs/kick-bass.mp3');
   song2.play();
 }
 else if(character=='3'|| character=='*'){
   var song3 = new Audio('songs/snare.mp3');
   song3.play();
 }
 else if(character=='4' || character=='-'){
   var song4= new Audio('songs/tom-1.mp3');
   song4.play();
 }
 else if(character=='5' || character=='+'){
   var song5= new Audio('songs/tom-2.mp3');
   song5.play();
 }
 else if(character=='6' || character=='x'){
   var song6= new Audio('songs/tom-3.mp3');
   song6.play();
 }
 else{
   var song7=  new Audio('songs/tom-4.mp3');
   song7.play
 }
 }
