// Start Game Variables 
const start = document.querySelector('.start-game button');
const startGame = document.querySelector('.start-game');
const nameFiled = document.querySelector('#name') ;
let Name ;

// Logic Variables 

let duration = 1000; 

const mainBlock = document.querySelector('.game-contanier');

const blocks = Array.from(mainBlock.children);

const imges = document.querySelector('.game-contanier  div i ')
const score = document.querySelector('#Score')





// Main Game Logic 


function mainLogic(){
    changePosition()
    flipImg ()
}

mainLogic ()


//change cards positions 

function changePosition(){

    blocks.forEach(block => {
        let change ;
        let newCards;
        for(let i=0 ; i<blocks.length ; i++){
        change = Math.floor(Math.random()*20);
        newCards = blocks[i];
        newCards.style.order = change
    }   
    });

}





// flip the img 
function flipImg (){
    blocks.forEach(block => {
        block.addEventListener('click' , function (){
            flipTheImg(block)
        })
    
        function flipTheImg(choosenCard){
            choosenCard.classList.add('flipped')
            //Make the check function runs on the clicked cards 
            Check()
        }
        
    
    });
    
}


//MINORS FUNCTIONS 

//Check the two flipped cards 

function Check(){
    let filppedCards = blocks.filter(filppedBlock => filppedBlock.classList.contains('flipped'))
    
    if(filppedCards.length === 2){
        stopclick();
        checkForMatch(filppedCards[0] , filppedCards[1])
        
    }

}

//Stop clicking 

function stopclick(){
    mainBlock.classList.add('noclick')

    setTimeout(() => {
        mainBlock.classList.remove('noclick')
        console.log('stio')
    }, duration)
}


//Check matched cards 
function checkForMatch(firstCard , secondCard){

    if(firstCard.dataset.set === secondCard.dataset.set){
        firstCard.classList.remove('flipped');
        secondCard.classList.remove('flipped');

        firstCard.classList.add('has-match');
        secondCard.classList.add('has-match');

        score.innerHTML = parseInt(score.innerHTML) +25
        document.getElementById('success').play()


    }else {
        setTimeout(() => {

        firstCard.classList.remove('flipped');
        secondCard.classList.remove('flipped');

        } , duration)

        score.innerHTML = parseInt(score.innerHTML) -5 
        document.getElementById('failure').play()
    }


}




// Start the Game 


start.onclick = function (){
    let playerName = prompt('Your Name ')

    if(playerName === null || playerName  === ""){
         Name = 'Unknown';
         document.getElementById('startA').play()
    }else {
        Name =  playerName;
        document.getElementById('startA').play()
    }

    startGame.remove();
    nameFiled.innerHTML =  Name

}
