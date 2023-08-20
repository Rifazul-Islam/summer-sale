


let priceStorage = 0 ;

function addToCard(element){

const containerParent = document.getElementById('parent-container');
const heading = element.childNodes[3].childNodes[5].innerHTML;
const price = element.childNodes[3].childNodes[7].childNodes[0].innerHTML;
const count = containerParent.childElementCount;

const p = document.createElement('p');
p.classList.add('font-semibold')
p.classList.add('text-xl')
p.innerHTML = `${count + 1+'.'} ${heading}`;
containerParent.appendChild(p);


// Calculate 
 
 const totalPrice = document.getElementById('total-price');

let priceConvert = parseFloat(price);
  priceStorage = priceStorage + priceConvert ;
  totalPrice.innerText = priceStorage
  


}