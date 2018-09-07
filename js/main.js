var roleNumbers = [491, 494, 507, 509, 510, 516,
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

var usedNumbers = [];
var randomRoleNumber;
var score = 0;

function pictureChange(randomNumber) {
  document.getElementById('theImage').src = "img/" + roleNumbers[randomRoleNumber] + ".jpg";
}

function updateScore(){
  document.getElementById('score').innerHTML = "Score: " + score;
}

function pickRandomRoleNumber() {
  randomRoleNumber = Math.floor(Math.random() * 85);
}

function start(){
  pickRandomRoleNumber();
  var roleNumber = roleNumbers[randomRoleNumber];
  usedNumbers.push(roleNumber);
  pictureChange(randomRoleNumber);
}

function check() {
  if (roleNumbers.length > usedNumbers.length) {
    pickRandomRoleNumber();
    var roleNumber = roleNumbers[randomRoleNumber];
    while(usedNumbers.includes(roleNumber)){
      pickRandomRoleNumber();
      roleNumber = roleNumbers[randomRoleNumber];
    }
    usedNumbers.push(roleNumber);
    var textInput = document.getElementById('textBox').value;
    //document.getElementById('textBox').value = roleNumber + " " + score + " " + textInput;
    if (roleNumber == 491) {
      if (textInput == "Kaylee") {

        score += 1;
        updateScore();
      }
      pictureChange();
    }
    if(roleNumber == 494){
      if(textInput == "Alexandria"){
        score += 1;
        updateScore();
      }
      pictureChange();
    }
    if(roleNumber == 507){
      if(textInput == "Julie"){
        score += 1;
        updateScore();
      }
      pictureChange();
    }
    if(roleNumber == 509){
      if(textInput == "Joshua"){
        score += 1;
        updateScore();
      }
      pictureChange();
    }
    if(roleNumber == 510){
      if(textInput == "Vanessa"){
        score += 1;
        updateScore();
      }
      pictureChange();
    }
    if(roleNumber == 516){
      if(textInput == "Molly"){
        score += 1;
        updateScore();
      }
      pictureChange();
    }
    if(roleNumber == 521){
      if(textInput == "Amanda"){
        score += 1;
        updateScore();
      }
      pictureChange();
    }
    if(roleNumber == 525){
      if(textInput == "Julian"){
        score += 1;
        updateScore();
      }
      pictureChange();
    }
    if(roleNumber == 527){
      if(textInput == "Jessica"){
        score += 1;
        updateScore();
      }
      pictureChange();
    }
    if(roleNumber == 530){
      if(textInput == "Jessica"){
        score += 1;
        updateScore();
      }
      pictureChange();
    }
    if(roleNumber == 532){
      if(textInput == "David"){
        score += 1;
        updateScore();
      }
      pictureChange();
    }
    if(roleNumber == 535){
      if(textInput == "Gregory"){
        score += 1;
        updateScore();
      }
      pictureChange();
    }
    if(roleNumber == 540){
      if(textInput == "Nicholas"){
        score += 1;
        updateScore();
      }
      pictureChange();
    }
    if(roleNumber == 543){
      if(textInput == "Emily"){
        score += 1;
        updateScore();
      }
      pictureChange();
    }
    if(roleNumber == 545){
      if(textInput == "Gabriela"){
        score += 1;
        updateScore();
      }
      pictureChange();
    }
    if(roleNumber == 548){
      if(textInput == "Matteo"){
        score += 1;
        updateScore();
      }
      pictureChange();
    }
    if(roleNumber == 551){
      if(textInput == "Michael"){
        score += 1;
        updateScore();
      }
      pictureChange();
    }
    if(roleNumber == 553){
      if(textInput == "Marissa"){
        score += 1;
        updateScore();
      }
      pictureChange();
    }
    if(roleNumber == 554){
      if(textInput == "Kenny"){
        score += 1;
        updateScore();
      }
      pictureChange();
    }
    if(roleNumber == 555){
      if(textInput == "Katelyn"){
        score += 1;
        updateScore();
      }
      pictureChange();
    }
    if(roleNumber == 556){
      if(textInput == "Francis"){
        score += 1;
        updateScore();
      }
      pictureChange();
    }
    if(roleNumber == 558){
      if(textInput == "Carter"){
        score += 1;
        updateScore();
      }
      pictureChange();
    }
    if(roleNumber == 564){
      if(textInput == "Parth"){
        score += 1;
        updateScore();
      }
      pictureChange();
    }
    if(roleNumber == 565){
      if(textInput == "Josh"){
        score += 1;
        updateScore();
      }
      pictureChange();
    }
    if(roleNumber == 567){
      if(textInput == "Jonathan"){
        score += 1;
        updateScore();
      }
      pictureChange();
    }
    if(roleNumber == 568){
      if(textInput == "Caroline"){
        score += 1;
        updateScore();
      }
      pictureChange();
    }
    if(roleNumber == 569){
      if(textInput == "Danny"){
        score += 1;
        updateScore();
      }
      pictureChange();
    }
    if(roleNumber == 570){
      if(textInput == "Shahbaz"){
        score += 1;
        updateScore();
      }
      pictureChange();
    }
    if(roleNumber == 572){
      if(textInput == "Alia"){
        score += 1;
        updateScore();
      }
      pictureChange();
    }
    if(roleNumber == 573){
      if(textInput == "Malik"){
        score += 1;
        updateScore();
      }
      pictureChange();
    }
    if(roleNumber == 574){
      if(textInput == "Chris"){
        score += 1;
        updateScore();
      }
      pictureChange();
    }
    if(roleNumber == 575){
      if(textInput == "David"){
        score += 1;
        updateScore();
      }
      pictureChange();
    }
    if(roleNumber == 578){
      if(textInput == "Rayane"){
        score += 1;
        updateScore();
        document.getElementById('textBox').value = "damn";
      }
      pictureChange();
    }
    if(roleNumber == 579){
      if(textInput == "Kristen"){
        score += 1;
        updateScore();
      }
      pictureChange();
    }
    if(roleNumber == 581){
      if(textInput == "Kayla"){
        score += 1;
        updateScore();
      }
      pictureChange();
    }
    if(roleNumber == 587){
      if(textInput == "Amy"){
        score += 1;
        updateScore();
      }
      pictureChange();
    }
    if(roleNumber == 588){
      if(textInput == "Cyan"){
        score += 1;
        updateScore();
      }
      pictureChange();
    }
    if(roleNumber == 589){
      if(textInput == "Devin"){
        score += 1;
        updateScore();
      }
      pictureChange();
    }
    if(roleNumber == 590){
      if(textInput == "Mark"){
        score += 1;
        updateScore();
      }
      pictureChange();
    }
    if(roleNumber == 592){
      if(textInput == "Karan"){
        score += 1;
        updateScore();
      }
      pictureChange();
    }
    if(roleNumber == 593){
      if(textInput == "Ariana"){
        score += 1;
        updateScore();
      }
      pictureChange();
    }
    if(roleNumber == 594){
      if(textInput == "Aubrey"){
        score += 1;
        updateScore();
      }
      pictureChange();
    }
    if(roleNumber == 595){
      if(textInput == "Reuben"){
        score += 1;
        updateScore();
      }
      pictureChange();
    }
    if(roleNumber == 596){
      if(textInput == "Ethan"){
        score += 1;
        updateScore();
      }
      pictureChange();
    }
    if(roleNumber == 597){
      if(textInput == "Daniel"){
        score += 1;
        updateScore();
      }
      pictureChange();
    }
    if(roleNumber == 599){
      if(textInput == "Mark"){
        score += 1;
        updateScore();
      }
      pictureChange();
    }
    if(roleNumber == 600){
      if(textInput == "Arpit"){
        score += 1;
        updateScore();
      }
      pictureChange();
    }
    if(roleNumber == 601){
      if(textInput == "Valentino"){
        score += 1;
        updateScore();
      }
      pictureChange();
    }
    if(roleNumber == 602){
      if(textInput == "Alex"){
        score += 1;
        updateScore();
      }
      pictureChange();
    }
    if(roleNumber == 603){
      if(textInput == "Luis"){
        score += 1;
        updateScore();
      }
      pictureChange();
    }
    if(roleNumber == 604){
      if(textInput == "Corey"){
        score += 1;
        updateScore();
      }
      pictureChange();
    }
    if(roleNumber == 605){
      if(textInput == "David"){
        score += 1;
        updateScore();
      }
      pictureChange();
    }
    if(roleNumber == 606){
      if(textInput == "Quinten"){
        score += 1;
        updateScore();
      }
      pictureChange();
    }
    if(roleNumber == 607){
      if(textInput == "Andrea"){
        score += 1;
        updateScore();
      }
      pictureChange();
    }
    if(roleNumber == 609){
      if(textInput == "Brooke"){
        score += 1;
        updateScore();
      }
      pictureChange();
    }
    if(roleNumber == 611){
      if(textInput == "Thomas"){
        score += 1;
        updateScore();
      }
      pictureChange();
    }
    if(roleNumber == 612){
      if(textInput == "Ashnee"){
        score += 1;
        updateScore();
      }
      pictureChange();
    }
    if(roleNumber == 613){
      if(textInput == "Tristan"){
        score += 1;
        updateScore();
      }
      pictureChange();
    }
    if(roleNumber == 614){
      if(textInput == "Nicholas"){
        score += 1;
        updateScore();
      }
      pictureChange();
    }
    if(roleNumber == 615){
      if(textInput == "Samuel"){
        score += 1;
        updateScore();
      }
      pictureChange();
    }
    if(roleNumber == 616){
      if(textInput == "Emily"){
        score += 1;
        updateScore();
      }
      pictureChange();
    }
    if(roleNumber == 617){
      if(textInput == "Whitney"){
        score += 1;
        updateScore();
      }
      pictureChange();
    }
    if(roleNumber == 618){
      if(textInput == "Klaudja"){
        score += 1;
        updateScore();
      }
      pictureChange();
    }
    if(roleNumber == 619){
      if(textInput == "Royce"){
        score += 1;
        updateScore();
      }
      pictureChange();
    }
    if(roleNumber == 620){
      if(textInput == "Alexander"){
        score += 1;
        updateScore();
      }
      pictureChange();
    }
    if(roleNumber == 622){
      if(textInput == "Andrew"){
        score += 1;
        updateScore();
      }
      pictureChange();
    }
    if(roleNumber == 623){
      if(textInput == "Sean"){
        score += 1;
        updateScore();
      }
      pictureChange();
    }
    if(roleNumber == 624){
      if(textInput == "Kirsten"){
        score += 1;
        updateScore();
      }
      pictureChange();
    }
    if(roleNumber == 625){
      if(textInput == "Sabrina"){
        score += 1;
        updateScore();
      }
      pictureChange();
    }
    if(roleNumber == 626){
      if(textInput == "Katherine"){
        score += 1;
        updateScore();
      }
      pictureChange();
    }
    if(roleNumber == 627){
      if(textInput == "Ryan"){
        score += 1;
        updateScore();
      }
      pictureChange();
    }
    if(roleNumber == 628){
      if(textInput == "Sara"){
        score += 1;
        updateScore();
      }
      pictureChange();
    }
    if(roleNumber == 629){
      if(textInput == "Aaron"){
        score += 1;
        updateScore();
      }
      pictureChange();
    }
    if(roleNumber == 630){
      if(textInput == "Kendall"){
        score += 1;
        updateScore();
      }
      pictureChange();
    }
    if(roleNumber == 631){
      if(textInput == "Alyssa"){
        score += 1;
        updateScore();
      }
      pictureChange();
    }
    if(roleNumber == 632){
      if(textInput == "Dean"){
        score += 1;
        updateScore();
      }
      pictureChange();
    }
    if(roleNumber == 633){
      if(textInput == "Brendan"){
        score += 1;
        updateScore();
      }
      pictureChange();
    }
    if(roleNumber == 634){
      if(textInput == "Andrea"){
        score += 1;
        updateScore();
      }
      pictureChange();
    }
    if(roleNumber == 635){
      if(textInput == "Logan"){
        score += 1;
        updateScore();
      }
      pictureChange();
    }
    if(roleNumber == 637){
      if(textInput == "Thapthim"){
        score += 1;
        updateScore();
      }
      pictureChange();
    }
    if(roleNumber == 638){
      if(textInput == "Max"){
        score += 1;
        updateScore();
      }
      pictureChange();
    }
    if(roleNumber == 639){
      if(textInput == "Jessica"){
        score += 1;
        updateScore();
      }
      pictureChange();
    }
    if(roleNumber == 540){
      if(textInput == "Jose"){
        score += 1;
        updateScore();
      }
      pictureChange();
    }
    if(roleNumber == 641){
      if(textInput == "Farah"){
        score += 1;
        updateScore();
      }
      pictureChange();
    }
    if(roleNumber == 642){
      if(textInput == "Meredith"){
        score += 1;
        updateScore();
      }
      pictureChange();
    }
  }
  document.getElementById('textBox').value = "";
}
