//exercise 1

function sumAll(arr) {
    var max = Math.max(arr[0], arr[1]); ;
    var min = Math.min(arr[0], arr[1]);
    var temp = 0;

    for(var i = min; i <= max; i++){
      temp += 1
    }
    return temp;

  }
  
  sumAll([1, 4]);




//exercise 2

function diffArray(arr1, arr2) {
    var newArr = [];
    
    function onlyInFirst(first, secoond){
      for(var i = 0; i < first.length; i++){
        if(secoond.indexOf(first[i]) === -1){
          newArr.push(first[1]);
        }
      }
    }
    onlyInFirst(arr1, arr2);
    onlyInFirst(arr2, arr1);

    return newArr;
  }
  
  diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);



//exercise 3

function spinalCase(str) {
    
  
    str = str.replace(/([a-z])(A-z)/);
  
    return str.toLowerCase().split(/(?:_| )+/).join('-');
    }
    
    spinalCase('This Is Spinal Tap');