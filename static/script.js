

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
     console.log(yourChoice)
     var human ,botChoice;
     console.log(botPick())
     //rpsfrontEnd(yourChoice.id,botChoice,message)
}

function botPick()
{
     var bot_rps= ["rock","paper","scissors"]
     return bot_rps[Math.floor(Math.random()*3)]
}

