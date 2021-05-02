// const shippingMethod  = prompt("Enter shipping Method");
// const crating = prompt("Enter 'yes' or 'no' for crating");
// const costInUSD = prompt("Enter cost");
// Cost per pound is $30 per pound  under 5 lbs, $20 per pound > 10lbs  $10 per pound for 10 pounds and over. 
const freightChargeValue = () => {
  if (shippingWeight < 5) {
    return shippingWeight * 30
  }
  else if (shippingWeight < 10) {
    return shippingWeight * 20
  }
  else return shippingWeight * 10
}


const cratingFeeValue = () => {
  if(crating) {
    return 200
  } 
  else return 0
}

const handlingVatValue = .6;

const fuelSurchargeValue = () => shippingWeight * 3;
const onlineTaxValue = () => costInUSD * .07;
const basicInsurnaceValue = () =>  costInUSD * .01;
// const itemDuty = itemDescriptionSelected.duty;
// const itemVat = itemDescriptionSelected.vat;
// const dutyValue = () =>  costInUSD * itemDuty;
// const customsVatValue = () =>  costInUSD * itemVat;
// const totalEstimateValue = freightChargeValue() + fuelSurchargeValue() + cratingFeeValue() + handlingVatValue + onlineTaxValue() + basicInsurnaceValue() + dutyValue() + customsVatValue();





// const priceCalculator = (x) => {
//   // if (shippingMethod === "air") 
//   // if (crating === true)

//   const chargesDescription = {
//     freightCharges: 0,
//     fuelSurcharge: 0,
//     cratingFee: 0,
//     handlingVat: 0,
//     onlineTax: 0,
//     basicInsurnace: 0,
//     duty: 0,
//     customsVat: 0,
//     totalEstimate: 0
//   }
 

//   console.log(chargesDescription)
// } 