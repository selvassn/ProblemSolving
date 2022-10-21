/*Here is a sequence:

'1', first number is 1
'11', since previous number has One(1) 1
'21', since previous number has Two(2) 1s
'1211', since previous number has One(1) 2 and One(1) 1
'111221', since previous number has One(1) 1, One(1) 2, Two(2) 1s
'312211', since previous number has Three(3) 1s, Two(2) 2s, One(1) 1
....
As explained above, the sequence is generated by counting the digits of previous number.

Please create getNthNum(n) to return the n-th number string in the sequence, n starts from 1.

*/

function getNthNum(n) {
    let resultMap = new Map([[1, '1']]);
      for(let i=1; i<=n; i++) {
        if(!resultMap.has(i)) {
          let prevValue = resultMap.get(i-1);
          let value = '';
            for(j=0; j<prevValue.length; j++) {
              let localValue = prevValue[j];
              let localCount = 1;  
                while(localValue == prevValue[j+1]) {
                  localCount++;
                  j++;
                }
              value += localCount+localValue;
            }
            resultMap.set(i, value);
        }
      }
    return resultMap.get(n);
  }