// 快排quickSort
// function quickSort(array) { 
//     if (array.length < 2) {
//       return array;
//     }
//     const target = array[0];
//     const left = [];
//     const right = [];
//     for (let i = 1; i < array.length; i++) {
//       if (array[i] < target) {
//         left.push(array[i]);
//       } else {
//         right.push(array[i]);
//       }
//     }
//     return quickSort(left).concat([target], quickSort(right));
//   }


// 冒泡bubbleSort
// function sort1(arr){
//     for(let i=0;i<arr.length;i++){
//         for(let j=i+1;j<arr.length;j++){

//         if(arr[i]>arr[j]){
//             [arr[i],arr[j]]=[arr[j],arr[i]]
//         }

//         }
//     }
//     return arr
// }

//选择selectionSort
// function sort1(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         let minIndex = i;
//         // console.log(minIndex);

//         for (let j = i + 1; j < arr.length; j++) {
//             if(arr[j]<arr[minIndex]){
//                 minIndex = j
//                 // console.log('minIndex'+minIndex);
//             }

//         }
//          [arr[minIndex],arr[i]]=[arr[i],arr[minIndex]] 



//     }
//     return arr
// }

// 插入insertSort
// function sort1(arr){
//     for(let i=1;i<arr.length;i++){
//         let target = i;
//         for(let j=i-1;j>=0;j--){
//             if(arr[target]<arr[j]){
//                 [arr[target],arr[j]] = [arr[j],arr[target]];
//                 target = j;
//                 // console.log(arr);

//             }
//         }
//     }
// return arr
// }

// 归并mergeSort

// function sort1(arr) {
//     if(arr.length<2) return arr;
//     let arr1 = arr.slice(0,arr.length/2);
//     let arr2 = arr.slice(arr.length/2);
//     return merge(sort1(arr1),sort1(arr2));

//     function merge(a,b){
//         let temp = [];
//         while(a.length&&b.length){
//             if(a[0]<b[0]){
//                 temp.push(a.shift(0))
//             }else temp.push(b.shift(0))
//         }
//         while(a.length){
//             temp.push(a.shift(0))
//         }  while(b.length){
//             temp.push(b.shift(0))
//         }
//         return temp
//     }

// }

// sort1([6, 5, 7, 8, 9, 0, 4, 3, 2, 1])
console.log(sort1([6, 5, 7, 8, 9, 0, 4, 3, 2, 1]));
