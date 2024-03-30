const prompt = require('prompt-sync')();
let amount = Number(prompt("What is the order amount? $"));
let state = prompt("What state do you live in? ");
if(state == "USA" || state == "usa" || state == "United States" ){
  let country = prompt("Which city do you want?");
  //console.log("What county do you live in? " + country);
  if (country == "New York" || country == "new york"){
    let Tax = 10.00;
    console.log("The tax is $" + Tax);
  let total = amount + Tax;
  console.log("The total is $" + total);
  }else if(country == "Los Angeles" || country == "los angeles"){
    let Tax = 9.00;
    console.log("The tax is $" + Tax);
  let total = amount + Tax;
  console.log("The total is $" + total);
  }else if(country == "San Diego" || country == "san diego"){
    let Tax = 8.00;
    console.log("The tax is $" + Tax);
  let total = amount + Tax;
  console.log("The total is $" + total);
  }else if(country == "Chicago" || country == "chicago"){
    let Tax = 5.00;
    console.log("The tax is $" + Tax);
  let total = amount + Tax;
  console.log("The total is $" + total);
  }else(console.log("Unable to deliver"))
}
if(state =="Germany" || state == "germany"){
  let tax = amount * 8 / 100;
  console.log("The tax is 8%.");
  let total = amount + tax ;
  console.log("The total is $" + total);
}
if(state == "Georgia" || state == "georgia" ){
  console.log("The total is $" + amount);
}
else(console.log("Delivery is not possible where you live."));