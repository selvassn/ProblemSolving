/**
 * @param {number[]} arr1 - integers
 * @param {number[]} arr2 - integers
 * @returns {number[]}
 */
 function intersect(arr1, arr2) {
    const uniqueArray = [...new Set(arr1)];
    const result = [];
    uniqueArray.forEach((data) => {
      const filterArr1 = arr1.filter((val) => val === data);
      const filterArr2 = arr2.filter((val) => val === data);
      filterArr1.length > filterArr2.length ? result.push(...filterArr2) : result.push(...filterArr1)
    });
    return result;
  }



/*Given 2 sorted array of integers, find the elements that exist in both arrays.

intersect(
    [1,2,2,3,4,4],
    [2,2,4,5,5,6,2000]
  )
  // [2,2,4]
  The arrays might have duplicate numbers.
  The order of returning result doesn't matter.
  What is the time & space cost of your approach? Could you improve it?

  */