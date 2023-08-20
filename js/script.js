

let priceStorage = 0 ;

function addToCard(element){

const containerParent = document.getElementById('parent-container');
const heading = element.childNodes[3].childNodes[5].innerHTML;
const price = element.childNodes[3].childNodes[7].childNodes[0].innerHTML;
const count = containerParent.childElementCount;

const p = document.createElement('p');
p.classList.add('font-semibold')
p.classList.add('text-[15px]')
p.innerHTML = `${count + 1+'.'} ${heading}`;
containerParent.appendChild(p);


// Calculate 
const totalPrice = document.getElementById('total-price');
const discountButton = document.getElementById('btn-discounts');
const makePurchase = document.getElementById('btn-make')
let priceConvert = parseFloat(price);
priceStorage = priceStorage + priceConvert ;
totalPrice.innerText = priceStorage;



if( makePurchase >=  0){
makePurchase.setAttribute('disabled', true)            
}
else{
 makePurchase.removeAttribute('disabled')        
}


// Apply Button condition 
if( priceStorage >= 200 ){
  discountButton.removeAttribute('disabled')
                                          
}else{
  discountButton.setAttribute('disabled', true)
 }

}


// OnClick Function 02

 function getResult(){

 const inputField = document.getElementById('input-field');
 const inputFieldValue = inputField.value;
 inputField.value = '';
             
 const discountPrice = document.getElementById('discount-price');
const totalPrices = document.getElementById('total')

if(inputFieldValue === 'SELL200'){
const discountPrices = (priceStorage * 20) / 100 ;
discountPrice.innerText = discountPrices.toFixed(2);
                                                                                          
const totalPriceSubtra = priceStorage - discountPrices;
totalPrices.innerText = totalPriceSubtra.toFixed(2)
} else{
return false ;
}

 }

 document.getElementById('btn-make').addEventListener('click', function(){ 


 })



 document.getElementById('show-site').addEventListener('click', function(){
   location.href = "index.html";
 })

 