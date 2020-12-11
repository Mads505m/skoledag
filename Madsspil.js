//Lavet af Mads Bo Bjerring Madsen
//aargang 2.r
//Slotshaven Gymnasium
//Kryds og bolle spil
  let firkant = document.querySelectorAll('.firkant div')
  let SpillerDisplay = document.querySelector('#spiller')
  /* Her gør jeg så jeg faktisk kan bruge vindebeskeden i mit js*/
  let vindebeskedElement = document.getElementById('vindebesked')
  
  /*her diffiner jeg bare bollestur,som senere kommer ti */
  
  let bollestur

  //Her siger jeg bare at den første spiller er X
  let nuvaerneSpiller = 'SpillerX'
  
  //Hvordan man kan vinde
  let vindemetoder=[
[0,1,2], [3,4,5], [6,7,8],
[0,3,6],[1,4,7],[2,5,8],
[0,4,8], [2,4,6]
]

  
//Når jeg klikker på min mus burde den nu lave en action, og når jeg har trykke på firkanten en gang så kan jeg ikke trykke på den igen
  
  firkant.forEach(firkant => {
    firkant.addEventListener('click', Musseclickoutcome, {once: true})
  })
    //Så jeg laver et function der gør så den ved, hvilken firkant jeg trykker på 
    function Musseclickoutcome (e) {
     let firkantarray =Array.from(firkant)
     let index=firkantarray.indexOf(e.target)
     
     //Tjekker om man har vundet
      if (TjekingomVundet(nuvaerneSpiller)) {
          Slut(false)
     } 
        //Her har jeg lavet beskeder du får når du vinder, uafgjort eler taber
     function Slut(uafgjort) {
  if (uafgjort) {
    vindebeskedElement.innerText = "uafgjort!"
  } else {
      //Her har jeg skrevet bollestur : i mellem o og x, så hvis det er x der har sat den sidst får den vinde beskeden og omvendt, og dollar tegnet gør så det faktisk virker, ellers kommer bare O's``: x´´wins!.
    vindebeskedElement.innerText= `${bollestur ? "O" : "X"} overrtog kampen og vandt!`
  }
         //Her gør jeg så den faktisk viser beskeden
    vindebeskedElement.classList.add("show") 
} 

     //den gør så den viser, Hvilken spillers tur det er
     SpillerDisplay.innerHTML= nuvaerneSpiller
        
       //Så dette er et if statement,hvis det er spiller x og der bliver klikket, bliver det spiller O, hvis det ikke er x bliver det x
    if(nuvaerneSpiller==="SpillerX") {
        firkant[index].classList.add("SpillerX")
        nuvaerneSpiller= "SpillerO"
        
    } else{
        firkant[index].classList.add("SpillerO")
        nuvaerneSpiller="SpillerX"
        
    }
     }
function TjekingomVundet(nuvaerneSpiller) {
  return vindemetoder.some(forskelligetilfaelde => {
    return forskelligetilfaelde.every(index => {
      return firkant[index].classList.contains(nuvaerneSpiller)
    })
  })
}

//VIGTIGT! Jeg kan simpelthen ikke forstå, hvorfor at man ikke vinder når man har opfyldt betingelserne, det er ud til at du skal have sat 3 på stribe og så efter sætte en til for at vinde, ved ikke, hvorfor.
//Uafgjort virker heller  ikke, det gøre vindebeskeden.. Jeg ved jeg skal lave en function med draw, men ved ik, hvordan.


