function capture() {
event.preventDefault();
console.log(document.CustomerInfo.email.value);

}


var cart = [
];

function plaid()
{
  event.preventDefault();
cart.push("Plaid Scarf");
var size = cart.length;
console.log(cart);
}


function removeplaid()
{

  event.preventDefault();

  cart.pop("Plaid Scarf");
  var size= cart.length;
  console.log(cart);

}


function color()
{
  event.preventDefault();
cart.push("Multi-Color Scarf");
var size = cart.length;
console.log(cart);
}


function removecolor()
{
  event.preventDefault();
cart.pop("Multi-Color Scarf");
var size= cart.length;
console.log(cart);
}



function fringedplaid()
{
event.preventDefault();
cart.push("Fringed Plaid Scarf");
var size = cart.length;
console.log(cart);
}


function removefringedplaid()
{
  event.preventDefault();
  cart.pop("Fringed Plaid Scarf");
var size= cart.length;
console.log(cart);
}




function lights()
{
  event.preventDefault();
cart.push("Northern Lights Scarf");
var size = cart.length;
console.log(cart);
}


function removelights()
{
  event.preventDefault();
cart.pop("Northern Lights Scarf");
var size= cart.length;
console.log(cart);
}
