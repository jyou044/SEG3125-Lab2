// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products		 

var products = [
	{
		name: "Lettuce ($0.50)",
		vegetarian: true,
		glutenFree: true,
		price: 0.50
	},
	
	{
		name: "Spaghetti ($1.27)",
		vegetarian: true,
		glutenFree: false,
		price: 1.27
	},
	
	{
		name: "Jell-o ($1.77)",
		vegetarian: false,
		glutenFree: true,
		price: 1.77
	},
	
	{
		name: "Porridge ($1.77)",
		vegetarian: true,
		glutenFree: false,
		price: 1.77
	},
	
	{
		name: "Broccoli ($1.99)",
		vegetarian: true,
		glutenFree: true,
		price: 1.99
	},
	{
		name: "Bread ($2.35)",
		vegetarian: true,
		glutenFree: false,
		price: 2.35
	},	
	{
		name: "Milk ($4.49)",
		vegetarian: true,
		glutenFree: true,
		price: 4.49
	},
	
	{
		name: "Orange Juice ($5.97)",
		vegetarian: true,
		glutenFree: true,
		price: 5.97
	},
	
	{
		name: "Strawberry Cheesecake ($6.50)",
		vegetarian: false,
		glutenFree: false,
		price: 6.50
	},
	
	{
		name: "Salmon ($10.00)",
		vegetarian: false,
		glutenFree: true,
		price: 10.00
	}
	
	
];
	


// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(prods, restriction) {
	let product_names = [];
	for (let i=0; i<prods.length; i+=1) {
		if ((restriction == "Vegetarian") && (prods[i].vegetarian == true)){
			product_names.push(prods[i].name);
		}
		else if ((restriction == "GlutenFree") && (prods[i].glutenFree == true)){
			product_names.push(prods[i].name);
		}
		else if ((restriction == "GlutenFree") && (restriction == "Vegetarian") && (prods[i].vegetarian == true) && (prods[i].glutenFree == true)){
			product_names.push(prods[i].name);
		}
		else if (restriction == "None"){
			product_names.push(prods[i].name);
		}
	}
	return product_names;
}

// Calculate the total price of items, with received parameter being a list of products
function getTotalPrice(chosenProducts,organicVal) {
	totalPrice = 0;	
	for (let i=0; i<products.length; i+=1) {
		if (chosenProducts.indexOf(products[i].name) > -1){
			totalPrice += products[i].price;

		}
	}
	return totalPrice;
}
