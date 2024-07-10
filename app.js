// hometask1
function capitalizeWords(text) {
    return text
      .split(' ') 
      .map(word => word.charAt(0).toUpperCase() + word.slice(1)) 
      .join(' '); 
  }
  const inputText = prompt('Enter a text to capitalize:');
  const result = capitalizeWords(inputText);
   console.log(result); 


    // hometask2
    function isValidNumber(phoneNumber) {
        return phoneNumber.length === 12 && phoneNumber.startsWith('+7');
      }
      const inputNumber = prompt('Please enter a phone number:');
      const isValid = isValidNumber(inputNumber);
      console.log(isValid);

    //   hometask3
    function numCounter(text) {
        return text.length;
        
    }
    console.log(numCounter('Hello World'));

    // hometask4
    function isLucky(numberStr) {
    
        if (numberStr.length !== 6) {
            alert("Eded 6 reqemli olmalidir");
            return false;
        }
        

        const firstHalfSum = numberStr.slice(0, 3).split('').reduce((sum, digit) => sum + +digit, 0);
        
      
        const secondHalfSum = numberStr.slice(3).split('').reduce((sum, digit) => sum + +digit, 0);
        

        if (firstHalfSum === secondHalfSum) {
            return true;
        } else {
            return false;
        }
    }
    
  
    const userInput = prompt("6 reqemli eded daxil edin");
    

    if (userInput && /^[0-9]{6}$/.test(userInput)) {
        if (isLucky(userInput)) {
            alert("The number is lucky!");
        } else {
            alert("The number is not lucky.");
        }
    } else {
        alert("Please enter a valid six-digit number.");
    }