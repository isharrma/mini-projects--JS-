

function ageInDays(){
     var birthyear = prompt("Which year were you born sweety?")
     var ageinDays = (2020 - birthyear) * 365
     var h2 = document.createElement('h2')
     var textAnswer = document.createTextNode('You are '+ ageinDays + ' days old. ')
     h2.setAttribute('id','ageinDays')
     h2.appendChild(textAnswer)
     document.getElementById('flex-box-result').appendChild(h2)
}

function reset(){
     document.getElementById('ageinDays').remove()
}


function catGenerator(){
     var image = document.createElement('img')
     var div = document.getElementById('cat-generator')
     image.src = "cat.gif"
     div.appendChild(image)
}

function rpsGame(yourChoice){
     var humanChoice ,botChoice;
     humanChoice = yourChoice.id
     botChoice = botPick()
     console.log(humanChoice)
     console.log(botChoice)
     results = rpsWinner(humanChoice,botChoice)
     console.log(results)
     message = finalMessage(results[0])
     console.log(message)
     rpsFrontEnd(yourChoice.id,botChoice,message)
}

function botPick()
{
     var bot_rps= ["rock","paper","scissors"]
     return bot_rps[Math.floor(Math.random()*3)]
}

function rpsWinner(yourChoice, botChoice){
     var rpsDB = { 'rock': {'scissors':1 , 'rock': 0.5 ,'paper':0}, 'scissors': {'scissors':0.5 , 'rock':0 ,'paper': 1},'paper':{'scissors':0 , 'rock':1 ,'paper': 0.5} }
     var yourScore = rpsDB[yourChoice][botChoice]
     var botScore = rpsDB[botChoice][yourChoice]
     return [yourScore, botScore]
}

// '5' == 5 gives true  BUT BUT '5' === 5 gives false (So use 3 =s for strict comparasion)

function finalMessage(yourScore){
     if(yourScore === 0){
     return {'message':'You lost :(', 'color':'red'}
     }
     else if(yourScore === 0.5){
          return {'message':'Draw :(', 'color':'blue'}
     }
     else{
          return {'message':'You Won :)', 'color':'green'}
     }
}

function rpsFrontEnd(humanImageChoice, botImageChoice, finalMessage){
     var imageDB = { 'rock': document.getElementById('rock').src,'paper': document.getElementById('paper').src,'scissors': document.getElementById('scissors').src}
     document.getElementById('rock').remove()
     document.getElementById('paper').remove()
     document.getElementById('scissors').remove()
     
     
     humanDiv = document.createElement('div')
     botDiv = document.createElement('div')
     messageDiv = document.createElement('div')

     humanDiv.innerHTML = "<img id='human' src='"+ imageDB[humanImageChoice] + "' height=150 width=150 style='box-shadow: 0px 10px 25px rgba(37,50,233,1)'>"
     botDiv.innerHTML = "<img id='bot' src='"+ imageDB[botImageChoice] + "' height=150 width=150 style='box-shadow: 0px 10px 25px rgba(243,30,24,1)'>"
     messageDiv.innerHTML = "<h3 id='message' style='color:" + finalMessage['color'] + "; font-size: 60px; padding: 30px;'>" + finalMessage['message'] + "</h3>"

     document.getElementById('flex-box-game').appendChild(humanDiv)
     document.getElementById('flex-box-game').appendChild(messageDiv)
     document.getElementById('flex-box-game').appendChild(botDiv)

}

function rpsReset(){
     document.getElementById('human').remove()
     document.getElementById('bot').remove()
     document.getElementById('message').remove()

     RPS_rock = document.createElement('div')
     RPS_paper = document.createElement('div')
     RPS_scissors = document.createElement('div')
     RPS_rock.innerHTML = '<img src="rock.png" id="rock" height=150 width=150 onclick="rpsGame(this)">'
     RPS_paper.innerHTML = '<img src="hand.png" id="paper" height=150 width=150 onclick="rpsGame(this)">' 
     RPS_scissors.innerHTML = '<img src="scissors.png" id="scissors" height=150 width=150 onclick="rpsGame(this)">'

     document.getElementById('flex-box-game').appendChild(RPS_rock)
     document.getElementById('flex-box-game').appendChild(RPS_paper)
     document.getElementById('flex-box-game').appendChild(RPS_scissors)
     
}

var all_buttons = document.getElementsByTagName('button')

var copyAllButtons = []
for(let i=0;i < all_buttons.length;i++){
     copyAllButtons.push(all_buttons[i].classList[1])
}

function buttonColorChange(buttonValue){
     if(buttonValue.value == 'red'){
          buttonRed()
     }else if(buttonValue.value == 'green'){
          buttonGreen()
     }else if(buttonValue.value == 'random'){
          buttonRandom()
     }else if(buttonValue.value == 'reset'){
          buttonReset()
     }
}

function buttonRed(){
     for(let i=0; i < all_buttons.length; i++){
          all_buttons[i].classList.remove(all_buttons[i].classList[1])
          all_buttons[i].classList.add('btn-danger')
     }
}

function buttonGreen(){
     for(let i=0; i < all_buttons.length ; i++){
          all_buttons[i].classList.remove(all_buttons[i].classList[1])
          all_buttons[i].classList.add('btn-success')
     }
}

function buttonReset(){
     for(let i=0; i < all_buttons.length ; i++){
          all_buttons[i].classList.remove(all_buttons[i].classList[1])
          all_buttons[i].classList.add(copyAllButtons[i])
     }
}

function buttonRandom(){
     var choices = ['btn-primary' , 'btn-warning' , 'btn-succes' ,'btn-danger']
     for(let i=0; i < all_buttons.length; i++){
          rC = choices[Math.floor(Math.random()*4)]
          all_buttons[i].classList.remove(all_buttons[i].classList[1])
          all_buttons[i].classList.add(rC)
     }
}


//BLACKJACK GAME

let blackjackGame = {
     'you': { 'scoreSpan': '#your-blackjack-result','div': '#your-box','score':0},
     'dealer': {'scoreSpan':'#dealer-blackjack-result', 'div': '#dealer-box','score': 0},
     'cards' : ['2' , '3','4','5','6','7','8','9','10','K','J','Q','A'],
     'cardsMap': {'2':2,'3':3,'4':4,'5':5,'6':6,'7':7,'8':8,'9':9,'10':10,'K':10,'J':10,'Q':10,'A':[1,11] }
}

const YOU = blackjackGame['you']
const DEALER = blackjackGame['dealer']

const hitSound = new Audio('static/sounds/swoosh.mp3')

document.querySelector('#blackjack-hit-button').addEventListener('click',blackjackHit)
document.querySelector('#blackjack-deal-button').addEventListener('click',blackjackDeal)

function blackjackHit(){
     let card = randomCard()
     showCard(card,YOU)
     showCard(card,DEALER)
     updateScore(card, DEALER )
     blackjackyourScore = blackjackGame['dealer']['score']
    showScore(DEALER)
    
}

function randomCard(){
     let randomIndex = Math.floor(Math.random()*13)
     return blackjackGame['cards'][randomIndex]
}

function showCard(card,activePlayer){
     let cardImage = document.createElement('img')
     cardImage.src = 'static/image/' + card +'.png'
     document.querySelector(activePlayer['div']).appendChild(cardImage)
     hitSound.play()
}

function blackjackDeal(){
     let yourImages = document.querySelector('#your-box').querySelectorAll('img')
     let dealerImages = document.querySelector('#dealer-box').querySelectorAll('img')

     for(i=0; i < yourImages.length; i++){
          yourImages[i].remove()
     }

     for(i=0; i < dealerImages.length; i++){
          dealerImages[i].remove()
     }
     removeScore(DEALER)
}

function updateScore(card,activePlayer){
     if(card =='A'){
          if(activePlayer['score'] + blackjackGame['cardsMap'][card][1] <= 21){
               activePlayer['score'] += blackjackGame['cardsMap'][card][1]
          }else{
               activePlayer['score'] += blackjackGame['cardsMap'][card][0]
          }
     }

     activePlayer['score'] += blackjackGame['cardsMap'][card]
}

function showScore(activePlayer){
     document.querySelector(activePlayer['scoreSpan']).textContent = activePlayer['score']
}

function removeScore(activePlayer){
     activePlayer['score'] = 0 
     document.querySelector(activePlayer['scoreSpan']).textContent = activePlayer['score']
}
