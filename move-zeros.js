
/**********Problem statement **************/

/*Given an array of integers, move zeros to the end while keeping the order of the rest.

You should make the in-place change.

const list = [1,0,0,2,3]
moveZeros(list) 
console.log(list) // [1,2,3,0,0]
What is the time & space complexity of your approach? */

/******************Solution  ****************/

function moveZeros(list) {
    for(i= list.length -1; i >= 0; i--) {
      if(list[i] == 0) {
        list.splice(i,1);
        list.push(0);
      }
    }
  }
  
  moveZeros([1,0,0,2,3]);