

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
//ageInDays()

function catGenerator(){
     var image = document.createElement('img')
     var div = document.getElementById('cat-generator')
     image.src = "C:/Users/DELL/Desktop/cat.gif"
     div.appendChild(image)
}
