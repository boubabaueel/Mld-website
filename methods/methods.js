const sedans = ['Benz','BMW'];
const suvs =['Cadillac','Navigator'];
console.log(sedans);
console.log(suvs);
const vehicles = sedans.concat(suvs);
console.log(vehicles);
// concat() joins arrays together
let northernStates =['New York', 'New Jersey', 'Vermont'];
let southernStates = ['Florida', 'Georgia', 'Mississippi']
let centralAmerica = ['Honduras', 'Costa Rica', 'El Salvador']
const americas = northernStates.concat(southernStates,centralAmerica);
console.log(americas);
console.log(americas.length);
console.log(americas.copyWithin(2,3));
console.log(sedans.entries());
