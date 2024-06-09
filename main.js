function squareSum(numbers){
    let nums_len = numbers.length;
    let result = 0;
    
    for (let i = 0; i < nums_len; i++) {
      result += numbers[i] ** 2;
      console.log(result);  
    }
    
    return result;
  }


squareSum(nums = [1, 2, 2]);
 


// let user_name;
// let surname;
// let age;

// user_name = 'Neo', surname = 'mr.Andersen', age = '40';

// console.log(user_name, surname, age);


