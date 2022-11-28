// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector('.price span').innerHTML;
  const quantity = product.querySelector('.quantity input');
  const quantityToCalculate = quantity.value; 
  const calculation = +quantityToCalculate * price;
  const subTotal = product.querySelector('.subtotal span');
  subTotal.innerHTML = calculation;
  return +quantityToCalculate * price
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test
const productOne = document.getElementsByClassName('product')[0];
const productTwo = document.getElementsByClassName('product')[1];
updateSubtotal(productOne);
updateSubtotal(productTwo);
  
const total = document.querySelector('.total-value span')
total.innerText = updateSubtotal(productOne) + updateSubtotal(productTwo)
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
