function filtraPares (arr) {
  return arr.filter(callback);
}

function callback (item){
  return item % 2 === 0;
}

const meuArray = [1,24,56,76,34,12,4, 9];

console.log(filtraPares(meuArray))