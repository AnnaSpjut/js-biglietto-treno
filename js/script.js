console.log('esercizio "biglietto treno"');

const pricePerKm = 0.21;
const pricePerKmUnder18 = 0.168;
const pricePerKmOver65 = 0.126;

const km = prompt('Quanti km vuoi viaggiare?')
console.log(km);

const agePassenger = prompt('Quanti anni hai?');
console.log(agePassenger);

let totalPrice = '';

if(agePassenger < 18){
  totalPrice = km * pricePerKmUnder18
} else if(agePassenger > 65){
  totalPrice = km * pricePerKmOver65
} else{
  totalPrice = km * pricePerKm
}
console.log(totalPrice)





