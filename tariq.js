const name = prompt("Enter your name:");
const age = Number(prompt("Enter your age:"));
const gender = prompt("Enter your gender:");

if (gender === "male") {
    alert("Welcome Mr. " + name);
} else if (gender === "female") {
    alert("Welcome Ms. " + name);
} else {
    alert("Welcome " + name);
}
if (age < 16) {alert("You are not eligible to place an order");} 
else {
    alert("Continue with the order");}
    const order = prompt("Enter your order: Burger, Shawarma, or Zinger");
    let isAvailable;
    if ( order === "Burger" || order === "Shawarma" || order === "Zinger") {
        isAvailable = true;
    } else {
        isAvailable = false;
    }
    if (isAvailable === true) {
        alert("Your order is being prepared");
    } else {alert("Invalid order. Please try again");}
    let orderStatus;
    if (age >= 18 && isAvailable === true) {
        orderStatus = "Order confirmed";
    } else {orderStatus = "Order requires verification";}
   
    console.log("Customer: " + name);
    console.log("Age: " + age);
    console.log("Gender: " + gender);
    console.log("Order: " + order);
    console.log("Order Status: " + orderStatus);

    document.write("<h2>Final Order Summary</h2>");

    document.write("Customer: " + name + "<br>");
    document.write("Age: " + age + "<br>");
    document.write("Gender: " + gender + "<br>");
    document.write("Order: " + order + "<br>");
    document.write("Order Status: " + orderStatus);
