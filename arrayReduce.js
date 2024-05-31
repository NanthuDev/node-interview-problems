
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
const countOccurrences = (arr)=>{
  return arr.reduce((countMap,item)=>{
    countMap[item] = (countMap[item] | 0) + 1
    return countMap;
  },{})

}

// Example usage:
console.log(countOccurrences(['apple', 'banana', 'apple', 'orange', 'banana', 'apple']));
// Output: { apple: 3, banana: 2, orange: 1 }


//4. Group objects by property

const groupBy = (arr,property)=>{
  return arr.reduce((grouped,item)=>{
    const key = item[property];
    if(!grouped[key]){
      grouped[key] = []
    }
    grouped[key].push(item)
    return grouped;
     
  },{})
}




// Example usage:
const people = [
  { name: 'Alice', age: 21 },
  { name: 'Bob', age: 25 },
  { name: 'Charlie', age: 21 },
  { name: 'David', age: 25 },
];
console.log(groupBy(people, 'age'));
// Output: 
// {
//   '21': [ { name: 'Alice', age: 21 }, { name: 'Charlie', age: 21 } ],
//   '25': [ { name: 'Bob', age: 25 }, { name: 'David', age: 25 } ]
// }





//4.Count the status
const groupByStatus = (arr)=>{
  return arr.reduce((grouped,item)=>{
    let key = item.status;
     if(!grouped[key]){
      grouped[key] = 0
    }
   grouped[key] = grouped[key]+1
    return grouped;
  },{})
}

const students = [
  { name: 'Alice', status: 'Active' },
  { name: 'Bob', status: 'Pending' },
  { name: 'Charlie', status: 'Pending'},
  { name: 'David', status: 'InActive' },
];

// Example usage:
console.log(groupByStatus(students));
 [
  {"Pending":2},
  {"Active":1},
  {"InActive":1}
 ] // Output: 10
 

 