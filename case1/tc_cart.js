"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 10
   Case Problem 1

   Author: Colby Abbott
   Date:   2/3/20
   
   Filename: tc_cart.js
	
*/
//Initialize order total
var orderTotal = 0;

var thisItem = "";

var itemCost = 0;

//code for the cartHTML string
var cartHTML = "<table>" +
				"<tr>" + 
					"<th>Item</th><th>Description</th><th>Price</th><th>Qty</th><th>Total</th>"+
				"</tr>";

//for loop to add items to the table
for (var i = 0; i < item.length; i++){
	thisItem = "tc_" + item[i] + ".png"; 
	itemCost = itemPrice[i] * itemQty [i];
	cartHTML += "<tr>"+
				"<td><img src='" + thisItem + "' alt = 'item' /></td><td>" + itemDescription[i] + 
				"</td><td>$" + itemPrice[i] + "</td><td>" + itemQty[i]  + "</td><td>$" + itemCost + "</td>" +
				"</tr>";
	orderTotal += itemCost;


}//end of for loop

cartHTML += "<tr>"+
			"<td colspan ='4'>Subtotal</td><td>$" + orderTotal + "</td>"+
			"</tr>"+
			"</table>";

document.getElementById("cart").innerHTML = cartHTML;

