class Model
{
    constructor(){
     this.digits = [];  
     this.sortedDigits = [];
    }
    setDigits(){
        this.digits = generateRandomArray(5);
        this.sortedDigits = this.digits.slice().sort(function(a,b){
            return a-b;
        })
    }
    getDigits(){
        return this.digits;
    }    
    getDigit(number){
        return this.digits[number];
    }
    getDigitFromSorted(number){
        return this.sortedDigits[number];
    }
}
var model = new Model();
model.setDigits();