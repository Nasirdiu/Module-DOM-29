const products = [
  "dell heard work laptop",
  "asus laptop price high",
  "asus laptop price high",
  "iphone dell 13 pro max dam beshi onk",
  "iphone Dell !12 Er dam akon kom",
  "IPhone Watch er dam onk kom ase",
  "DELL Black color phone & Laptop amar Lakbe",
];

const searching = "high";

//indexOf
const output = [];
for (const product of products) {
  if (product.toLocaleLowerCase().indexOf(searching.toLocaleLowerCase()) != -1) {
    // output.push(product);
  }
}
// console.log(output);

// ................includes diea kora jai ........
for (const product of products) {
  if (product.toLocaleLowerCase().includes(searching.toLocaleLowerCase())) {
    // output.push(product);
  }
}
// console.log(output);

// startsWith dila ja gula dell name samne ase sei gula output asbe.
for (const product of products) {
    if (product.toLocaleLowerCase().startsWith(searching.toLocaleLowerCase())) {
    //   output.push(product);
    }
  }
//   console.log(output);
//endsWith sudu ses er name gula show korbe .
for (const product of products) {
    if (product.toLocaleLowerCase().endsWith(searching.toLocaleLowerCase())) {
      output.push(product);
    }
  }
  console.log(output);
  

