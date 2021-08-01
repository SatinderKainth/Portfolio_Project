function myFunction()
    {
        alert ("This Page says \n Call us 555-5555");
    }
function playSound()
{
    document.getElementById("song").play();
}
function myFunction1(){
    var menuSelect= document.getElementById("menus").value;
    
    document.getElementById("submit").innerHTML = "you Selected " + menuSelect;
    console.log(menuSelect);
    
}