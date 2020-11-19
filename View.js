class View
{ 
    constructor(){                                 
               
        this.blocksSvg = document.getElementById("blocks");
        this.startButton = document.getElementById("startGameButtonSvg");
        this.numberTextBlocks = document.getElementsByClassName("numberBlock")    
        this.svgRects = document.getElementsByClassName("svgRect");    
    }


    renderDigits(digits) {
        for (let index = 0; index < this.numberTextBlocks.length; index++) {
            const element = this.numberTextBlocks[index];
            element.innerHTML = digits[index];
        }
    }

    showStartButton(){
        this.startButton.style.display = "block";
    }     
    setButtonClickEvent(clickFunction){
        this.startButton.onclick = clickFunction;
    }    
    
    hideDigits(){        
        for (let index = 0; index < this.numberTextBlocks.length; index++) {
            const element = this.numberTextBlocks[index];
            element.style.display = "none";                               
        }        
    }

    showDigits(digits,showNumberIndices){
       for (let index = 0; index < this.numberTextBlocks.length; index++) {
           const element = this.numberTextBlocks[index];
           element.innerHTML = digits[i];                                 
       }
    }
    showDigit(digitIndex){
        for (let index = 0; index < this.numberTextBlocks.length; index++) {
            const element = this.numberTextBlocks[index];
            if (digitIndex == index)
            {
                this.svgRects[index].style.fill = "green"
                element.style.display = "block";                                                 
            }
            
        }
    }
    hideStartButton(){
        this.startButton.style.display = "none";
        for (let index = 0; index < this.svgRects.length; index++) {
            const element = this.svgRects[index];
            element.style.fill = "blue";   
        }     
    }    

showDigitsBlock()
{}
showDigits()
{} 
    hideDigitsBlock(){
        this.blocksSvg.style.display = "none";        
    }
    render(digits){
        this.blocksSvg.style.display = "block"; 
        this.renderDigits(digits);
    }
    playAudio(path){
        var audio = new Audio(path);
        audio.play();
    }
    setClickBlockFunction(clickBlockFunction){        
        for (let index = 0; index < this.svgRects.length; index++) {
            const element = this.svgRects[index];
            element.onclick = clickBlockFunction;
        }
    }
    getNumberOfClickedBlock(event){
        for (let index = 0; index < this.svgRects.length; index++) {
            const element = this.svgRects[index];
            if (element == event.currentTarget){
                return index;
            }
        }
    }
}

var view = new View();
