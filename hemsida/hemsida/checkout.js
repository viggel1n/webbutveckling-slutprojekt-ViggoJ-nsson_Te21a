document.addEventListener("DOMContentLoaded", function (){
//Arrayen representerar en varukorg på en shoppingsajt.
//Varje objekt i arrayen representerar en produkt.

    window.onload = function() {
      // Initialize the variable with an initial value of 0
       let cheesevalue = 0;

      // Get the elements by their IDs
      const minusBtn = document.getElementById("minusBtn");
      const plusBtn = document.getElementById("plusBtn");
      const cheesevalueSpan = document.getElementById("cheese-counter");

      // Add click event listeners to the buttons
      minusBtn.addEventListener("click", function() {
          // Decrease the value by 1
          cheesevalue--;
          cart[0].quantity = cheesevalue
          console.log("hej")
        
          // Update the value displayed in the span element
          cheesevalueSpan.textContent = cheesevalue;
      });

      plusBtn.addEventListener("click", function() {
          // Increase the value by 1
          cheesevalue++;
          cart[0].quantity = cheesevalue
          // Update the value displayed in the span element
          cheesevalueSpan.textContent = cheesevalue;
      });
  }; 
  const cart = [
    // hak-parentes för att definiera en array
    
    {
      productId: 1,
      productImage: "images/cheese.png",
      name: "Cheese Burger",
      price: 49,
      quantity: 5,
    }, 
    {
      productId: 2,
      productImage: "images/fries.png",
      name: "Fries",
      price: 39,
      quantity: 1,
    },
    {
      productId: 3,
      productImage: "images/pizza.png",
      name: "Family Size Pizza",
      price: 149,
      quantity: 2,
    },
  ]
const items = [{

}]
  
  let shoppingCartContainer = document.getElementById("shopping-cart-container")
  
  let totalCost = 0;
  let option = "Remove"
  for (let index = 0; index < cart.length; index++) {
    const product = cart[index];
    const productContainer = document.createElement("div");
    productContainer.className = "product-container";
  
    const bild = document.createElement("img");
    bild.src = product.productImage;
    bild.alt = product.name;
    bild.className = "product-image";
    productContainer.appendChild(bild);
  
    const namn = document.createElement("div");
    namn.innerText = product.name;
    productContainer.appendChild(namn);
  
    const pris = document.createElement("div");
    pris.innerText = `Price: ${product.price} kr`;
    productContainer.appendChild(pris);
  
    const antal = document.createElement("div");
    antal.innerText = `Quantity: ${product.quantity}`;
    productContainer.appendChild(antal);
  
    const totalapriset = document.createElement("div");
    totalapriset.innerText = `Total Price: ${product.price * product.quantity} kr`;
    productContainer.appendChild(totalapriset);
    const tabort = document.createElement("button");
    tabort.innerText = `${option}`;
    tabort.className = "tabortknapp";
    tabort.addEventListener("click", function(){
      productContainer.remove()
      
    })
    productContainer.appendChild(tabort);
  
  
    shoppingCartContainer.appendChild(productContainer);
    totalCost += product.price * product.quantity;
  }
    
    const totalkostnad = document.createElement("div");
    totalkostnad.innerText = `Total Price For Cart: ${totalCost} kr`;  
    shoppingCartContainer.appendChild(totalkostnad);

  })