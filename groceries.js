// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products		 

var products = [
	{
		name: "Lettuce ($0.50)",
		vegetarian: true,
		organic: false,
		glutenFree: true,
		price: 0.50
	},
	
	{
		name: "Spaghetti ($1.27)",
		vegetarian: true,
		organic: false,
		glutenFree: false,
		price: 1.27
	},
	
	{
		name: "Jell-o ($1.77)",
		vegetarian: false,
		organic: false,
		glutenFree: true,
		price: 1.77
	},
	
	{
		name: "Porridge ($1.77)",
		vegetarian: true,
		organic: false,
		glutenFree: false,
		price: 1.77
	},
	
	{
		name: "Broccoli ($1.99)",
		vegetarian: true,
		organic: false,
		glutenFree: true,
		price: 1.99
	},
	{
		name: "Bread ($2.35)",
		vegetarian: true,
		organic: false,
		glutenFree: false,
		price: 2.35
	},	
	{
		name: "Milk ($4.49)",
		vegetarian: true,
		organic: false,
		glutenFree: true,
		price: 4.49
	},
	
	{
		name: "Orange Juice ($5.97)",
		vegetarian: true,
		organic: false,
		glutenFree: true,
		price: 5.97
	},
	
	{
		name: "Strawberry Cheesecake ($6.50)",
		vegetarian: false,
		organic: false,
		glutenFree: false,
		price: 6.50
	},
	
	{
		name: "Salmon ($10.00)",
		vegetarian: false,
		organic: false,
		glutenFree: true,
		price: 10.00
	},
	
	{
		name: "Organic Lettuce ($1.50)",
		vegetarian: true,
		organic: true,
		glutenFree: true,
		price: 1.50
	},
	
	{
		name: "Organic Spaghetti ($2.27)",
		vegetarian: true,
		organic: true,
		glutenFree: false,
		price: 2.27
	},
	
	{
		name: "Organic Porridge ($2.77)",
		vegetarian: true,
		organic: true,
		glutenFree: false,
		price: 2.77
	},
	
	{
		name: "Organic Broccoli ($2.99)",
		vegetarian: true,
		organic: true,
		glutenFree: true,
		price: 2.99
	},	
	{
		name: "Organic Milk ($5.49)",
		vegetarian: true,
		organic: true,
		glutenFree: true,
		price: 5.49
	},
	
	{
		name: "Organic Orange Juice ($6.97)",
		vegetarian: true,
		organic: true,
		glutenFree: true,
		price: 6.97
	},
	
	{
		name: "Organic Salmon ($11.00)",
		vegetarian: false,
		organic: true,
		glutenFree: true,
		price: 11.00
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
		else if((restriction == "Organic") && (prods[i].organic == true)){
			product_names.push(prods[i].name);
		}
		else if ((restriction == "GlutenFree&Vegetarian") && (prods[i].vegetarian == true) && (prods[i].glutenFree == true)){
			product_names.push(prods[i].name);
		}
		else if (restriction == "None"){
			product_names.push(prods[i].name);
		}
	}
	return product_names;
}

// Calculate the total price of items, with received parameter being a list of products
function getTotalPrice(chosenProducts) {
	totalPrice = 0;	
	for (let i=0; i<products.length; i+=1) {
		if (chosenProducts.indexOf(products[i].name) > -1){
			totalPrice += products[i].price;

		}
	}
	return totalPrice;
}
