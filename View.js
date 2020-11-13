class View
{ 
    constructor(){                          
        this.canvas = document.getElementById("canvas");   
        this.canvas.width = 604;
        this.canvas.height = 424;         
        this.context = this.canvas.getContext("2d");        
        this.context.font = "36pt Times New Roman";
        this.canvas.style.display = "block";
        this.canvasLeft = this.canvas.offsetLeft;
        this.canvasTop = this.canvas.offsetTop;        

        this.buttonCanvas = document.getElementById("startGameButtonCanvas");
        this.buttonCanvas.width = 604;
        this.buttonCanvas.height = 424;
        this.buttonCanvasContext = this.buttonCanvas.getContext("2d");
        this.buttonCanvasContext.font = "36pt Times New Roman";                        
        
        this.blocks = [];
                        
        for (let i = 0; i < 5; i++){
            this.blocks.push({
                x: i * 100 + 42,
                y: 232,
                width: 100,
                height: 100,                 
            });
        }

    }

    renderBlocks(digits){
        this.context.fillStyle = "blue";
        this.context.lineWidth = 2;
        
        for (let index = 0; index < this.blocks.length; index++) {
            const element = this.blocks[index];
            this.context.fillRect(
                element.x,
                element.y,
                element.width,
                element.height
            )
            this.context.strokeRect(
                element.x,
                element.y,
                element.width,
                element.height
            )                    
        }
        this.context.fillStyle = "white"; 
        if (digits != null)
        for(let i = 0; i < 5; i++) {
            var text =this.context.measureText(digits[i]);
            this.context.fillText(digits[i],i * 100 + 90 - text.width / 2,300);
        }   
    }

    renderStartButton(){
        this.buttonCanvasContext.fillStyle = "green";
        this.buttonCanvasContext.fillRect(0,0,604,124);
        this.buttonCanvasContext.fillStyle = "white";    
        var text = this.buttonCanvasContext.measureText("Начать игру");
        this.buttonCanvasContext.fillText("Начать игру",604 / 2 - text.width / 2,80);
    }     
    setButtonClickEvent(clickFunction){
        if (this.buttonCanvas != null)
        this.buttonCanvas.onclick = clickFunction;               
    }    
    
    hideDigits(){
        this.hideDigitsBlock();
        this.renderBlocks(null);        
    }

    showDigits(digits,showNumberIndices){
        this.hideDigitsBlock();
        this.context.fillStyle = "blue";
        this.context.lineWidth = 2;
        var flag = false;
        for (let index = 0; index < this.blocks.length; index++) {
            if (showNumberIndices[index] == true){
                this.context.fillStyle = "green";
            }
            else{
                this.context.fillStyle = "blue";
            }
            const element = this.blocks[index];
            this.context.fillRect(
                element.x,
                element.y,
                element.width,
                element.height
            )
            this.context.strokeRect(
                element.x,
                element.y,
                element.width,
                element.height
            )                    
        }
        this.context.fillStyle = "white"; 
        if (digits != null)
        for(let i = 0; i < 5; i++) {
            if (showNumberIndices[i] == true){
                var text =this.context.measureText(digits[i]);
                this.context.fillText(digits[i],i * 100 + 90 - text.width / 2,300);    
            }            
        }   
    }
    
    hideStartButton(){
        this.buttonCanvasContext.clearRect(0,0,this.buttonCanvas.width,this.buttonCanvas.height);
    }    

    hideDigitsBlock(){
        this.context.clearRect(0,0,this.canvas.width,this.canvas.height);
    }

    
    playAudio(path){
        var audio = new Audio(path);
        audio.play();
    }

    setClickCanvasFunction(clickCanvasFunction){
        if (canvas != null)
        this.canvas.onclick = clickCanvasFunction;
    }

    clickCollision(event){
        var x = event.offsetX;
        var y = event.offsetY;

        for (let i = 0; i < this.blocks.length; i++) {
            const element = this.blocks[i];
            if (y > element.y && y < element.y + element.height 
                && x > element.x && x < element.x + element.width) {
                return i;
            }
        }        
    }
}

var view = new View();
