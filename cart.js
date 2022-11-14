///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/


//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
    {
        name: 'pizza', 
        price: 9.99
    }, 
    {
        name: 'pasta', 
        price: 8.99
    }, 
    {
        name: 'salad', 
        price: 7.99
    }
]

//CODE HERE

var sumCartInitial = 0;
var sumCart2 = cart.reduce((a, c) => a + c.price, sumCartInitial);

console.log(sumCart2)


// const summedPrice = cart.reduce(/* CALLBACK HERE */)


//////////////////PROBLEM 2////////////////////
/*  
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments. 

    Inside the function, calculate the tax 
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number. 

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/

//CODE HERE

let calcFinalPrice = (cartTotal, couponValue, tax) => {
    var taxedSum = cartTotal * tax
    let SumAfterTaxAndCoupon = (taxedSum + sumCart2) - couponValue

    console.log(SumAfterTaxAndCoupon)

}

calcFinalPrice(26.97, 2.00, 0.08)


//////////////////PROBLEM 3////////////////////
/*  
    In this problem, you'll create a model for 
    a customer object as well as an example
    object. 

    Plan out a customer object for the cart page.
    Think about the information that a 
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types. 

    Your object should have at least 4 properties. 
*/

/*
    The customer object would need the name of the customer, their phone number, the 
    items they ordered, the total price, and whether its for pick up or delivery.
    I chose these properties because they are what is usually required when executing a
    food order. 
    customer - string because its a name
    phone number - integer because its a number
    items ordered - array because there are multiple items from a food category
    total price - integer because its a number
    pick up or delivery - string because its just a word 

*/

/*
    Now, create a customer object following your own
    guidelines.
*/

//CODE HERE

const customer = {
    customerName: "Nami",
    phoneNumber: 1234567891,
    itemsOrdered: ['shaggy dog roll', 'margherita pizza', 'salmon and rice'],
    totalPrice: 20,
    pickUporDeliv: "pick up"

}


