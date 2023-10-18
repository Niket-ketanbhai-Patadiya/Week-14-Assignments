const products=[
    {name:"laptop",price:120000},
    {name:"mobile",price:7000},
    {name:"laptop Bag",price:20000},
    {name:"Watch",price:2000},
    {name:"Mobile Charger",price:1500},
];

let maxproduct={name:"",price:0}
let minproduct={name:"",price:Number.MAX_VALUE}

for (let product of products){
    if(products.price>maxproduct.price){
        console.log(`the product with maximum amount is ${maxproduct.name} which is priced at rs ${maxproduct.price}`);
    }
    if(products.price<minproduct.price){
        console.log(`the product with maximum amount is ${minproduct.name} which is priced at rs ${minproduct.price}`);
    }
}