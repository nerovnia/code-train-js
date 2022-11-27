const sourceArray = [5,4,1,8,7,2,6,6,7,8,9,4,5,6];

const mergeSort = (arr) => {
  if(!Array.isArray(arr)) return [];
  if(arr.length < 3) {
    if(arr.length === 2) {
      if(arr[0] > arr[1]) {
        [arr[0], arr[1]] = [arr[1], arr[0]];
      }
    }
    return arr; 
  }

  const leftPartArr = mergeSort(arr.slice(0, Math.floor(arr.length / 2)));
  const rightPartArr = mergeSort(arr.slice(Math.floor(arr.length / 2)));
  if(leftPartArr.length === 0) {
    return rightPartArr;
  }
  if(rightPartArr.length === 0) {
    return leftPartArr;
  }
  let resArr = [];
  let l = 0;
  let r = 0;
  for(let i = 0; i < (leftPartArr.length + rightPartArr.length); i++) {
    if((leftPartArr[l] < rightPartArr[r]) || (r >= rightPartArr.length)) {
      resArr.push(leftPartArr[l]);
      l++;
    } else {
      resArr.push(rightPartArr[r]);
      r++;
    }
  }
  return resArr;
}

console.dir(mergeSort(sourceArray));