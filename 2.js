let cart=[
    "Wheat",
    "Dal",
    "Rice"
];

function calculateTotalCartValue(p1,p2,p3) {
    return p1+p2+p3;
}

let a= calculateTotalCartValue(125,20,30)

console.log(`The total bill of your cart is ${a}`);