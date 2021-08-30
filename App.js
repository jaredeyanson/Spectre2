function forceDetail(e){
  let characterInfo 
  let tier
  for (let i = 0; i < data[0].tier.length; i++){
    if (e.srcElement.innerHTML === data[0].tier[i].name){
      characterInfo = data[0].tier[i].model
      tier = data[0].tier[i].name
    }
  }

  let charDiv = document.createElement('div')

  charDiv.id = 'charDiv'

  for (let i = 0; i < characterInfo.length; i++){
    let newDiv = document.createElement("div")
    let button = document.createElement("button")
    let points = document.createElement("p")
    let level = document.createElement("p")
    let statDiv = document.createElement("div")
    let titleDiv = document.createElement('div')
    document.getElementById(tier).disabled = true

    button.innerHTML = characterInfo[i].modelName
    button.id = characterInfo[i].modelName
    button.className = 'charButton'
    points.innerHTML = "Points: " + characterInfo[i].points
    level.innerHTML = "Level: " + characterInfo[i].level
    newDiv.id = 'characters'
    statDiv.id = "statDiv"
    titleDiv.id = 'titleDiv'

    for (let h = 0; h < characterInfo[i].stats.length; h++) {
      let stat = document.createElement('p')
      stat.id= "statValue"
      stat.innerHTML = characterInfo[i].stats[h].statValue
      statDiv.appendChild(stat)
    }

    for (let h = 0; h < characterInfo[i].stats.length; h++) {
      let stat = document.createElement('p')
      stat.innerHTML = characterInfo[i].stats[h].statAbbr
      stat.id = 'statTitle'
      titleDiv.appendChild(stat)
    }

    newDiv.appendChild(button)
    newDiv.appendChild(level)
    newDiv.appendChild(points)
    charDiv.appendChild(newDiv)
    charDiv.appendChild(titleDiv)
    charDiv.appendChild(statDiv)
    document.body.appendChild(charDiv)
  }
}

//add function to add model to army list... this is goin to take a minute

let tierList = data[0].tier.map((e) => {
  return e.name
})

for (let i = 0; i < tierList.length; i++){
  let button = document.createElement("button")
  button.innerHTML = tierList[i]
  document.body.appendChild(button)
  button.id = tierList[i]
  document.getElementById(tierList[i]).addEventListener("click", forceDetail);
}