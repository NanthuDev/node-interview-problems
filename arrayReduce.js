
//1. Sum of elements in array
const sumArray = (arr)=>{
    return arr.reduce((sum,num)=>{
      return sum+num;
    })
  }
  
 console.log(sumArray([1, 2, 3, 4, 5])); // Output: 15

 
//2.Flatten a nested array

const flattenArray = (arr)=>{
  return arr.reduce((flatten, toBeflat)=>  flatten.concat(Array.isArray(toBeflat)?flattenArray(toBeflat):toBeflat),[]) 
   
}

console.log(flattenArray([1, [2, [3, 4], 5], 6])); // Output: [1, 2, 3, 4, 5, 6]


//3.Count occurences of elements



 
  