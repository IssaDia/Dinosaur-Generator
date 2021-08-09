console.log('Script ok');

async function getDinoName() {
    const response = await fetch('/dinoname');
    const data = await response.json();
    let dinoName = data[0].join(' ');
 
    let dinoNameDiv = document.createElement('div');
    dinoNameDiv.id = 'dinoName';
    document.querySelector("#dinoWrapper").appendChild(dinoNameDiv);
    document.querySelector('#dinoName').textContent = dinoName;
    
}

async function getDinoImage() {
  const response = await fetch('/dinoimage');
  const data = await response.json();
  let dinoImage = data.value[Math.floor(Math.random()* data.value.length)];
  let dinoImageUrl = dinoImage.thumbnailUrl;
  let dinoAlt = dinoImage.name;

  
  let img = document.createElement('img');
  img.src = dinoImageUrl;
  img.alt = dinoAlt;
  img.id='dinoImage';
  document.querySelector("#dinoWrapper").appendChild(img);
}


const button = document.getElementById('btnLoad');

button.addEventListener('click', ()=> {
  if (document.querySelector("#dinoImage") !== null) {
    document.querySelector("#dinoImage").remove();
  }
   if (document.querySelector("#dinoName") !== null) {
     document.querySelector("#dinoName").remove();
   }
    getDinoName();
    getDinoImage();
})