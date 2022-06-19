function hasTargetSum(array, target) {
  // create object to keep track of all numbers
  const seen = {}

  //Iterate over the array of numbers
  for (const number of array) {
    //Identify complimentary number that adds to our target
    const comp = target - number;

    //Check if any key in array complements the current number
  if(seen[comp]) return true;

  //Save current number as key on our object
  seen[number] = true;

  }

  return false;
  

}

/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
