var obj = {
    a: 8,
    b: 2,
    c: 'montana'
}

function removeNumbersLargerThan(num, obj) {
    for (var key in obj) {                    
      if(!isNaN(obj[key]) && obj[key] > num)  
        delete obj[key];                      
    }
  }