function myFunction()
    {
        alert ("This Page says \n Call us 555-5555");
    }
function playSound()
{
    console.log("hello");
    document.getElementById("song").play();
    
}
function myFunction1(){
    var menuSelect= document.getElementById("menus").value;
    
    document.getElementById("submit").innerHTML = "You Selected" + menuSelect;
    console.log(menuSelect);
    
}