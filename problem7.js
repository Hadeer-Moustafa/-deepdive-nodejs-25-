const products = [
  { name: "Headphones", ratings: [4, 5, 4], popular: false },
  { name: "Phone Case", ratings: [3, 3.5, 4], popular: false },
  { name: "Smartwatch", ratings: [5, 4.5, 4.75], popular: false },
];

function calculateAverage(ratings) {
   
    return ( ratings.reduce((acc,el)=>{
       
       return (acc+el);
    },0)/ratings.length)
}

let populars =products.filter((el)=>{
    let avg = calculateAverage(el.ratings);
    el.Average = avg.toFixed(2);
    return avg>= 4.0;
});//[ { name: "Headphones", ratings: [4, 5, 4], popular: false },{ name: "Smartwatch", ratings: [5, 4.5, 4.75], popular: false }]

populars.forEach(el=>{
    el.popular=true;
});

products.forEach(el=>{
    console.log(`${el.name}: Average = ${el.Average} , popular = ${el.popular}`);
});

let popNames =populars.map((el=>{
    return el.name;
}));//["Headphones","Smartwatch"]

console.log(`Popular Products: ${JSON.stringify(popNames)}`);


products.sort((a,b)=>b.Average-a.Average);
console.log(products)
