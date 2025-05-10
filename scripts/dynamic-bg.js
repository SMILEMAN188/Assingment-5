const getRandomRgbColor = () => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
};


document.getElementById("btn-bg").addEventListener("click",function(event) {
    event.preventDefault();
    const newColor = getRandomRgbColor();
    document.getElementById('dynamic-bg').style.backgroundColor = newColor;
})

 