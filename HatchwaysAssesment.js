const memeForm = document.getElementById('meme-form');
const topTextInput = document.getElementById('top-text');
const bottomTextInput = document.getElementById('bottom-text');
const submitButton = document.getElementById('submit-button');
const memeContainer = document.getElementById('meme-container');

memeForm.addEventListener('submit', (event) => {
 event.preventDefault();
 const topText = topTextInput.value.trim();
 const bottomText = bottomTextInput.value.trim();

 if (topText && bottomText) //generate meme image and add it to the container
 {
  const memeImage = generateMemeImage(topText,bottomText);
  memeContainer.appendChild(memeImage);

  topTextInput.value = '';
  bottomTextInput.value = '';
 }
});

function generateMemeImage(topText, bottomText) 
{
 const canvas = document.createElement('canvas');
 canvas.width = 500;
 canvas.height = 500;
 const ctx = canvas.getContext('2d');

 ctx.font = '24px Arial';
 ctx.fillStyle = 'white';
 ctx.textAlign = 'center';
 ctx.textBaseline = 'top';
 ctx.fillText(topText, 250, 20);

 ctx.textBaseline = 'bottom';
 ctx.fillText(bottomText, 250, 480);

 return canvas.toDataURL();
}

memeContainer.addEventListener('click', (event) => {
 if (event.target.tagName === 'IMG') {
  event.target.remove();
 }
});
