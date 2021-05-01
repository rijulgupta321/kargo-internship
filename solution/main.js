//Converts a number into its phonetic form
function func(y){
    y = y.toString(); //Turns the integer argument into a String
    let z = ""; //Will collect and combine each integer of the argument
    for(let i = 0; i < y.length; i++){
      if(y.charAt(i).localeCompare("-") == 0){
        z += "Negative";
      }
      if(y.charAt(i).localeCompare("0") == 0){
        z += "Zero";
      }
      else if(y.charAt(i).localeCompare("1") == 0){
        z += "One";
      }
      if(y.charAt(i).localeCompare("2") == 0){
        z += "Two";
      }
      else if(y.charAt(i).localeCompare("3") == 0){
        z += "Three";
      }
      if(y.charAt(i).localeCompare("4") == 0){
        z += "Four";
      }
      else if(y.charAt(i).localeCompare("5") == 0){
        z += "Five";
      }
      if(y.charAt(i).localeCompare("6") == 0){
        z += "Six";
      }
      else if(y.charAt(i).localeCompare("7") == 0){
        z += "Seven";
      }
      if(y.charAt(i).localeCompare("8") == 0){
        z += "Eight";
      }
      else if(y.charAt(i).localeCompare("9") == 0){
        z += "Nine";
      }
    }
    return z;
  } //end of method
  
  //Takes in the array of arguments passed in through node, iterates through array and passes each element
  //Each element is then converted into phonetic form using func(y)
  function arr_numbers_to_words(arr){
    let arr_result = arr.map(x => func(x)); //Result  of mapping the input array to func() stored in array
    let result = "";

    //Loop will combine all the phonetic representations of all elements in the array into a string
    for(let i = 0; i < arr_result.length; i++){
      if(result.length == 0){result = arr_result[i];}
      else{result += "," + arr_result[i];}
    }
    return result;
  } //end of method

  let array_passed_as_arg = [];
  for(let i = 2; i < process.argv.length; i++){
    array_passed_as_arg.push(process.argv[i]);
  }
  console.log(arr_numbers_to_words(array_passed_as_arg));