let items = require("./etsy-items.js");
/*Questions
1. Calculate the average price of all items.

2. Get an array of items that cost between $14.00 and $18.00 USD

3. Which item has a "GBP" currency code? Display its name and price.

4. Display a list of all items which are made of wood.

5. Which items are made of eight or more materials? Display the name, number of items and the items it is made of.

√ 6. How many items were made by their sellers?
*/

//Convert all prices to USD
let pricesInUSD = items.map(object => {
  if (object.currency_code === "GBP"){
    return Object.assign({},object,{
      price: object.price / .80,
      currency_code: "USD converted from GBP"}
    )
  } else {return object}
})

//#1
let justPrice = pricesInUSD.map(object => object.price);
let totalPrice = justPrice.reduce((total, object) => total += object);
let avgPrice = totalPrice / items.length;
console.log("1. Calculate the average price of all items. $ "+avgPrice.toFixed(2));

//#2
console.log("2. Get an array of items that cost between $14.00 and $18.00 USD")
let priceBetween14and18 = pricesInUSD.filter(object => object.price >= 14 && object.price <= 18)
.map(object => [object.title, object.price, object.currency_code]);
console.log(priceBetween14and18);

//#3
console.log("3. Which item has a \"GBP\" currency code? Display its name and price.")
let currencySearch = items.filter(object => object.currency_code === "GBP")
.map(object => [object.title, object.price, object.currency_code]);
console.log(currencySearch);

//#4
console.log("4. Display a list of all items which are made of wood.")
let materialSearch = items.filter(object => object.materials.indexOf("wood") != -1)
.map(object => [object.title, object.materials]);
console.log(materialSearch);

//#5
console.log("5. Which items are made of eight or more materials? Display the name, number of items and the items it is made of.")
let materialCount = items.filter(object => object.materials.length >= 8)
.map(object => [object.title, object.materials.length, object.materials]);
console.log(materialCount);

//#6
let selfMade = items.filter(object => object.who_made === "i_did");
console.log("6. How many items were made by their sellers?",selfMade.length);
