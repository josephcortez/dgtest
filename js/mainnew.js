var roleNumbers = [
  491, 494, 507, 509, 510, 516,
  521, 525, 527, 530, 532, 535,
  540, 543, 545, 548, 551, 553,
  554, 555, 556, 558, 564, 565,
  567, 568, 569, 570, 572, 573,
  574, 575, 578, 579, 581, 587,
  588, 589, 590, 592, 593, 594,
  595, 596, 597, 599, 600, 601,
  602, 603, 604, 605, 606, 607,
  609, 611, 612, 613, 614, 615,
  616, 617, 618, 619, 620, 622,
  623, 624, 625, 626, 627, 628,
  629, 630, 631, 632, 633, 634,
  635, 637, 638, 639, 640, 641,
  642
];
var roleNames = [
  "Kaylee",
  "Alexandria",
  "Julie",
  "Joshua",
  "Vanessa",
  "Molly",
  "Amanda",
  "Julian",
  "Jessica",
  "Jessica",
  "David",
  "Gregory",
  "Nicholas",
  "Emily",
  "Gabriela",
  "Matteo",
  "Michael",
  "Marissa",
  "Kenny",
  "Katelyn",
  "Francis",
  "Carter",
  "Parth",
  "Josh",
  "Jonathan",
  "Caroline",
  "Danny",
  "Shahbaz",
  "Alia",
  "Malik",
  "Chris",
  "David",
  "Rayane",
  "Kristen",
  "Kayla",
  "Amy",
  "Cyan",
  "Devin",
  "Mark",
  "Karan",
  "Ariana",
  "Aubrey",
  "Reuben",
  "Ethan",
  "Daniel",
  "Mark",
  "Arpit",
  "Valentino",
  "Alex",
  "Luis",
  "Corey",
  "David",
  "Quinten",
  "Andrea",
  "Brooke",
  "Thomas",
  "Ashnee",
  "Tristan",
  "Nicholas",
  "Samuel",
  "Emily",
  "Whitney",
  "Klaudja",
  "Royce",
  "Alexander",
  "Andrew",
  "Sean",
  "Kirsten",
  "Sabrina",
  "Katherine",
  "Ryan",
  "Sara",
  "Aaron",
  "Kendall",
  "Alyssa",
  "Dean",
  "Brendan",
  "Andrea",
  "Logan",
  "Thapthim",
  "Max",
  "Jessica",
  "Jose",
  "Farah",
  "Meredith"
];
var usedNames = [];
var score = 0;
var randomNumber = 0;
var roleName = "";
var roleNumber = 0;

function start(){
  random();
  document.getElementById('theImage').src = "img/" + roleNumber + ".jpg";
  document.getElementById("score").textContent = "Score: " + score + ", Role Number: " + roleNumber + ", Members checked: " + (usedNames.length - 1);
  document.getElementById("score2").innerHTML = usedNames.toString();
}

function random(){
  //do {
  randomNumber = Math.floor(Math.random() * 85);
  //}while(usedNames.includes(roleNames[randomNumber]) && usedNames.length < 85);
  roleNumber = roleNumbers[randomNumber];
  roleName = roleNames[randomNumber];
  usedNames.push(roleName);
}

function check(){
  if(document.getElementById("textBox").value == roleName){
    score += 1;
  }
  random();
  document.getElementById("score").textContent = "Score: " + score + ", Role Number: " + roleNumber + ", Members checked: " + (usedNames.length - 1);
  document.getElementById("score2").innerHTML = usedNames.toString();
  document.getElementById("textBox").value = "";
  document.getElementById('theImage').src = "img/" + roleNumber + ".jpg";
}
