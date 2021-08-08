console.log('Script ok');



async function getDinoName() {
    const response = await fetch('/dinoname');
    const data = await response.json();
    let dinoName = data[0].join(' ');
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
  document.getElementById('dinoName').appendChild(img);
}


const button = document.getElementById('btnLoad');

button.addEventListener('click', ()=> {
    getDinoName();
    getDinoImage();
})