const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Looping through images */

for (i=1; i<6; i++){
    const newImage = document.createElement("img");
    newImage.setAttribute("src", "qn5_images/pic"+i+".jpg");
    thumbBar.appendChild(newImage);
    newImage.onclick = function(chg) {
        displayedImage.src = chg.target.src;
    }
}

/* Wiring up the Darken/Lighten button */

btn.addEventListener("click", darli)

function darli() 
    {
        if (btn.getAttribute("class") == 'dark') {
            btn.setAttribute("class", 'light');
            btn.textContent = "Lighten";
            overlay.style.backgroundColor = "rgba(0,0,0,0.5)";
        } 
        else if (btn.getAttribute("class") != 'dark') {
            btn.setAttribute("class", 'dark');
            btn.textContent = "Darken";
            overlay.style.backgroundColor = "rgba(0,0,0,0)";
        }
    }