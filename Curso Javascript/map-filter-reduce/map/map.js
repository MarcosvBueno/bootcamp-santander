const maca = {
  value : 2, 
}

const pera = {
  value : 3,
}

function mapComThis (arr, thisarg){
  return arr.map(function(item){
    return item * this.value;
  }, thisarg);
}

const nums = [1 , 2];

console.log('this -> maçã',mapComThis(nums, maca))

console.log('this -> laranja',mapComThis(nums, pera))