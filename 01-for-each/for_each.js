// define an array of fruits

const fruits = ["Albicocche", "Ananas", "Melone", "Pera", "Mango"];

const printFruits = (fruits, index) => {
  console.log(`${index +1} - ${fruits}`);
};
console.log('printing fruits with forEach');
fruits.forEach(printFruits);