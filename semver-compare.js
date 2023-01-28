// compare('12.1.0', '12.0.9')
// // 1, meaning first one is greater

// compare('12.1.0', '12.1.2')
// // -1, meaning latter one is greater

// compare('5.0.1', '5.0.1')
// // 0, meaning they are equal.

/**
 * @param {string} v1
 * @param {string} v2
 * @returns 0 | 1 | -1
 */
 function compare(v1, v2) {
    const ve1 = v1.split('.').map(Number);
    const ve2 = v2.split('.').map(Number);
    console.log(ve1);
    for(i=0; i < 3; i++) {
      if(ve1[i] > ve2[i]) return 1;
      if(ve1[i] < ve2[i]) return -1;
    }
    return 0;
  }
  