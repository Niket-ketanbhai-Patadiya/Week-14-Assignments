const productDetails={
    name: "Apple Macbook 2020 Air Laptop",
    price:82000,
    color:"Grey",
    hardDisk:"256 GB",
};


for (const product in productDetails) {
    if (productDetails.hasOwnProperty(product)) {
      console.log(`${product}: ${productDetails[product]}`);
    }
  }