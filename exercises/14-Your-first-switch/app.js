function getColor(selection)
{
	switch(selection){

case "red":
    return true;
    
  case "green":
        return true;

  case "blue":
        return true;


	    default:
            return false;  //returns false because the user picked an unavailable color  
	}
}

var colorname = prompt('What color do you want?');
var isAvailable = getColor(colorname);

if(isAvailable)
	console.log (colorname.toUpperCase('Good news! That color is available'));
else 
	console.log(colorname.toUpperCase('We are sorry, that color is not available'));
