//guessing a number game
alert("hello");
var guess=prompt("Guessing a number ");
guess=Number(guess);
var secretnum=6;
if(guess===secretnum)
{alert("You guess right");}
else if(guess>secretnum)
{alert("it is too high");}
else
{alert("it is too low");}