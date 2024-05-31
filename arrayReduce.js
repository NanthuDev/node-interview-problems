
//1. Sum of elements in array
const sumArray = (arr)=>{
    return arr.reduce((sum,num)=>{
      return sum+num;
    })
  }
  
 console.log(sumArray([1, 2, 3, 4, 5])); // Output: 15


//2.Flatten a nested array

const flattenArray = (arr)=>{
  return arr.reduce((flatten, toBeflat)=>{
      console.log(flatten);
      console.log(toBeflat)
  })
}

console.log(flattenArray([1, [2, [3, 4], 5], 6])); // Output: [1, 2, 3, 4, 5, 6]

 
  