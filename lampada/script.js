let isLampOn = true;

function toggleLamp() {
  const lampImage = document.getElementById('lampImage');
  
  if (isLampOn) {
    lampImage.src = 'lamp_off.png';
  } else {
    lampImage.src = 'lamp_on.png';
  }

  isLampOn = !isLampOn;
}
