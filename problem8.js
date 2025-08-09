
async function getData() {
  try {
    let data = (await fetch("data.json")).json();
    let obj = await data;
    let totalprice = 0;
    let prices = [];
    let instock = [];
    let categories = [];
    for (let i = 0; i < obj["products"].length; i++) {
      console.log(obj["products"][i].name);
      totalprice += obj["products"][i].price;
      prices.push(obj["products"][i].price);
      categories.push(obj["products"][i].category);
      if (obj["products"][i].inStock) {
        instock.push(obj["products"][i]);
      }
    }
    console.log(`Total price: ${totalprice}`);
    prices.sort((a, b) => b > a);
    for (let i = 0; i < obj["products"].length; i++) {
      if (obj["products"][i].price === prices[0]) {
        console.log(`the Most Expensive Product : ${obj["products"][i].name}`);
        break;
      }
    }

    console.log(`Instock products: `);
    console.log(instock);
    let set = new Set(categories);
    console.log([...set]);
  } catch (error) {
    console.log(error);
  }
}

getData();
