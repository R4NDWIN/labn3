class Controller
{    
    constructor(view,model){
        this.selectedBlockNumber = -1;
        this.view = view;
        this.model = model;
        this.clickFunction = null;
        this.clickBlockFunction = null;
        this.clickCanvasFunction = null;
        this.rightNumbersCount = 0;  
        this.rightDigits = [];                   
    }
    clickButton(event){              
        this.view.hideStartButton();                
        this.model.setDigits();
        this.view.render(model.getDigits());
        this.view.showDigitsBlock();
        this.view.showDigits();       
        this.showNumberIndices = [false,false,false,false,false]  
        this.rightDigits = []; 
        this.rightNumbersCount = 0;        
        setTimeout(this.view.hideDigits.bind(view),5000);
        setTimeout(this.view.setClickBlockFunction.bind(view),5000,this.clickBlockFunction)                                                  
    }    
    clickBlock(event){
        var index = this.view.getNumberOfClickedBlock(event);        
        var clickedDigit = this.model.getDigit(index);
        var rightDigit = this.model.getDigitFromSorted(this.rightNumbersCount)
        if (this.rightNumbersCount <= 4)
        {
            if (rightDigit != clickedDigit && this.rightDigits.indexOf(clickedDigit) == -1){
                this.view.playAudio("audio/error.mp3");               
            }
            else if (this.rightDigits.indexOf(clickedDigit) == -1){                                
                this.view.showDigit(index);              
                this.rightDigits.push(rightDigit);
                this.rightNumbersCount++;                
                this.view.playAudio("audio/success.mp3");
            }
            if (this.rightNumbersCount == 5){
                
                this.view.showDigit(index);              
                this.view.playAudio("audio/end.mp3")
                setTimeout(this.view.hideDigitsBlock.bind(view),3000);
                setTimeout(this.view.showStartButton.bind(view),3000);                                                      
                this.view.setClickBlockFunction(undefined);                        
            }            
        }         
    }
    init(){
        this.clickFunction = this.clickButton.bind(this);
        this.view.setButtonClickEvent(this.clickFunction);        
        this.clickBlockFunction = this.clickBlock.bind(this);                                     
        this.view.showStartButton();         
        this.view.hideDigitsBlock();
    }
}
var controller = new Controller(view,model);
controller.init();
