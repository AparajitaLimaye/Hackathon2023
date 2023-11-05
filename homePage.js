const amazonGenre = ['CLOTHING', 'ELECTRONICS', 'HOME DECOR', 'TOOLS'];
const clothingCategory = ['TOPS', 'BOTTOMS', 'ACCESSORIES'];
const electronicsCategory = ['TV', 'CAMERA', 'VIDEO GAMES'];
const homeDecorCategory = ['FURNITURE', 'FINE ART', 'LIGHTING'];
const toolsCategory = ['COOKWARE', 'HANDS TOOLS', 'LIGHT FIXTURES'];
const topsWin = '';

var inCategory;
var category = [];

function main()
{
    inCategory = false; 
}

function submit()
{
    var myValue = '';
    myValue = document.getElementById("myTextArea").value;
    myValue = myValue.toUpperCase();
    if(inCategory) categoryGuess(myValue.toUpperCase());
    else giveCategory(myValue.toUpperCase());
}

function giveCategory(myValue)
{
    inCategory = true;
    switch(myValue){
        case 'CLOTHING':
            category = clothingCategory;
            document.getElementById("feedback").innerHTML = "Correct!"; 
            break;
        default:
            document.getElementById("feedback").innerHTML = "Incorrect! Please enter one of the following: \n" + amazonGenre; 
            isSubmitted = false;
    }
    document.getElementById("myTextArea").value = "";

    if(category != null)
    {
        document.getElementById("feedback").innerHTML = "Guess what kind of category"; 
        
    }
}

function categoryGuess(myValue)
{
    if(category.includes(myValue)) change_page();
    else document.getElementById("feedback").innerHTML = "Try again!";
}

function change_page(){
    window.location.href = "game.html";
  }
window.addEventListener('load', main);