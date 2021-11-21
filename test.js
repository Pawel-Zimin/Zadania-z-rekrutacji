// Zadanie trzecie z poprzedniej tury stażu:
const testObj1 = { value: 1 } // 1
const testObj2 = { 
   value: 1, 
   children: [
      { value: 2 },
      { value: 2 },
      { value: 2 }
   ] ,
} // 4
const testObj3 = {
   value: 1, 
   children: [
      { value: 2 },
      { value: 2 },
      {
         value: 2 , 
         children: [
            { value: 3 },
            { value: 3 },
         ]
      }
   ] 
} // 6

// Do napisania rekurencyjna funkcja zliczająca ilość kluczy 'value' w danym obiekcie.
const count = node => {
   let iter = 0;
   for(let key in node){
      if(key === 'value'){
         iter += 1;
      }else if(Array.isArray(node[key])){
         node[key].forEach(element => {
            iter += count(element);
         });
      }
   }

   return iter;
}

console.log('Key \'value\' count in testObj1: ' + count(testObj1));
console.log('Key \'value\' count in testObj2: ' + count(testObj2));
console.log('Key \'value\' count in testObj3: ' + count(testObj3));


// Do napisania funkcja rekurencyjna licząca silnie z podanej liczby.
const factorialRecursive = (base) => {
   let result = 1;
   if(base > 0){
      result = factorialRecursive(base - 1) * base;
   }
   return result;
}

console.log('factorialRecursive(5) output: ' + factorialRecursive(5));


// Zaimplementuj algorytm liczący silnię liczby używając Promisów.
const factorialPromise = base => {
   const promise = new Promise((resolve, reject) => {
      let result = base;
      while (base > 1) { 
         base--;
         result *= base;
      }
      resolve(result);
   });
   return promise;
}

factorialPromise(5).then(result => console.log('factorialPromise(5) output: ' + result)); // 120