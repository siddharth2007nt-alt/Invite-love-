document.addEventListener("DOMContentLoaded", function(){

let stepAb = 0;

document.getElementById("imageUpload").addEventListener("change", function(e){
  const reader = new FileReader();
  reader.onload = function(){
    document.getElementById("previewImage").src = reader.result;
  }
  reader.readAsDataURL(e.target.files[0]);
});

const abButton = document.getElementById("abBtn");

function showNextAb() {
  const photoBox = document.getElementById("photoBoxAb");
  const photo = document.getElementById("photoAb");
  const quote = document.getElementById("quoteAb");

  photoBox.style.display = "block";
  photo.src = angryBirdData[stepAb].img;
  quote.innerText = angryBirdData[stepAb].text;

  stepAb++;

  if (stepAb < angryBirdData.length) {
    abButton.innerText = "Next Surprise 💌";
  } 
  else {
    window.location.href = "home.html";
  }
}

abButton.addEventListener("click", showNextAb);

});