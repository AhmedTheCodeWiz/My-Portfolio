const flashlightElem = document.head.appendChild(document.createElement("style"));
const flashlight = document.getElementById("flashlight")
const universe = document.getElementById("universe")

const audioLightOn = document.getElementById("lightOn");
const audioLightOff = document.getElementById("lightOff");
const audioLightBuzz = document.getElementById("lightBuzz");
const audioLightFlicker = document.getElementById("lightFlicker");
const audioFlashlightClickOn = document.getElementById("flashlightClickON");
const audioFlashlightClickOff = document.getElementById("flashlightClickOFF");
const audioSpace = document.getElementById("space")

const secrets = document.getElementsByClassName("secret")

const tutorial1A = document.getElementById("tutorial-1A");
const tutorial1B = document.getElementById("tutorial-1B");
const tutorial2B = document.getElementById("tutorial-2B");
const tutorial1C = document.getElementById("tutorial-1C");

const email = document.getElementById("email");

const yellowLight = 'rgba(211, 159, 15, 0.3)';
const yellowLightFlicker = 'rgba(222, 200, 15, 0.2)';
const UVLightCenter = 'RGBA(229, 140, 255, 0.4)';
const UVLightRing = 'RGBA(200, 16, 255, 0.4)'
const secretColor = 'rgb(92, 248, 201)'
const darkestDark = 'rgba(0, 0, 0, 1)';
const darkness = 'rgba(0, 0, 0, 0.85)';
const UVDarkness = 'rgba(10, 0, 40, 0.8)';
const transparent = 'transparent'

const UVSize = 30
const lampSize = 35

const blacklight = `#flashlight:before {background: radial-gradient( circle ${UVSize}rem at var(--Xpos) var(--Ypos), ${UVLightCenter} , ${UVLightRing}, ${UVDarkness}, ${darkestDark});}`
const lamplight = `#flashlight:before {background: radial-gradient( circle ${lampSize}rem at var(--Xpos) var(--Ypos), ${yellowLight}, ${darkness});}`
const flickerlight = `#flashlight:before {background: radial-gradient( circle ${lampSize}rem at var(--Xpos) var(--Ypos), ${yellowLightFlicker}, ${darkestDark});}`
const lamplightOff = `#flashlight:before {background: radial-gradient( circle ${lampSize}rem at var(--Xpos) var(--Ypos), ${darkestDark}, ${darkestDark});}`


const flickerChance = 6;
var isLampOn = false;
var isBlackOn = false;
var flickerInterval; // Added to keep track of the flicker interval

lightFlicker.volume = 0.4;
lightBuzz.volume = 0.25 ;
lightBuzz.loop = true;


const lampPosX = 50
const lampPosY = 40

var mouseX = 0
var mouseY = 0

var hasPressedSpace = false;
let isUKeyDown = false;
var copied = false;


function isMobileDevice() {
    return /iPhone|iPad|iPod|Android|Mobile/.test(navigator.userAgent);
  }
  
  if (isMobileDevice()) {
    tutorial2B.innerText = 'TAP'; // Change the text inside the span element
    tutorial2B.style.color = 'white'; // Change the color of the word "TAP"
    tutorial1B.innerText = '';
    tutorial1B.insertAdjacentElement('beforeend', tutorial2B); // Add the span back to the h3
    tutorial1B.insertAdjacentText('beforeend', ' on the screen to turn on the lamp');
  } else {
    
  }

//CLICK EMAIL TO COPY CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCC

function copyEmail(){
    copied = true
    navigator.clipboard.writeText("ahmedthedev05@gmail.com");
    email.innerHTML = "Copied"
}

email.addEventListener("mouseover", function() {
    if(copied){
        email.innerHTML = "Copied"
    }else{
        email.innerHTML = "ahmedthedev05@gmail.com"
    }
    
});

email.addEventListener("mouseout", function() {
    email.innerHTML = "ahmedthedev05@gmail.com"
});

//HOLD DOWN UUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUU vvvvvvvvvvvvvvvvvvvvvvvvvvv

document.addEventListener('keydown', function(event) {
    if (event.key === 'u' || event.key === 'U') {
      isUKeyDown = true;
      if(isBlackOn == false){
          audioFlashlightClickOn.play()
      }
      isBlackOn = true;
      flashlight.style.setProperty("--Xpos", mouseX + "px");
      flashlight.style.setProperty("--Ypos", mouseY + "px");
      flashlightElem.innerHTML = blacklight;
      for (var i = 0; i < secrets.length; i++) {
        secrets[i].style.backgroundColor = secretColor
      }
    }
  });
  
  document.addEventListener('keyup', function(event) {
    if (event.key === 'u' && isUKeyDown || event.key === 'U' && isUKeyDown) {
          isUKeyDown = false;
          isBlackOn = false;
          flashlight.style.setProperty("--Xpos", lampPosX + "vw");
          flashlight.style.setProperty("--Ypos", lampPosY + "vh");
          audioFlashlightClickOn.pause()
          audioFlashlightClickOff.play()
          for (var i = 0; i < secrets.length; i++) {
            secrets[i].style.backgroundColor = transparent
          }
          if(isLampOn){
              flashlightElem.innerHTML = lamplight;
          } else{
              flashlightElem.innerHTML = lamplightOff
          }
          if(!hasPressedSpace){
            tutorial1A.style.display = "block";
            tutorial1B.style.display = "block";
          }
      }
});

function getMousePosition(e) {
    try {
        //Get position of mouse or touch
		mouseX = e.pageX;
		mouseY = e.pageY;

		//Set the Xpos and Ypos variables to current mouse/touch position
        if(isBlackOn){
            flashlight.style.setProperty("--Xpos", mouseX + "px");
		    flashlight.style.setProperty("--Ypos", mouseY + "px");
        }else{
            flashlight.style.setProperty("--Xpos", lampPosX + "vw");
		    flashlight.style.setProperty("--Ypos", lampPosY + "vh");
        }
		
	} catch (e) {}
}

//Update mouse position on mouse move / touch move
document.addEventListener("mousemove", getMousePosition);
document.addEventListener("touchmove", getMousePosition);

//LISTEN FOR KEY PRESS U AND SPACE BAR AND TAP            U U U U U U U U U U U                                          U U U U U                       U  U U  U U U U

function tap(){
    if(isMobileDevice()){
        if (isLampOn ) {
            
            isLampOn = !isLampOn
            flashlightElem.innerHTML = lamplightOff
            audioLightOff.play();
            audioLightBuzz.pause()
            // Clear the flicker interval if it exists
            if (flickerInterval) {
                clearInterval(flickerInterval);
                flickerInterval = undefined;
            }
        } else{ 
            hasPressedSpace = true
            isLampOn = !isLampOn
            audioLightOn.play();
            flashlightElem.innerHTML = lamplight
            audioLightBuzz.play();
        }
    }
}

document.addEventListener("keypress", function(event) {
    if (event.key === " " || event.key === "u" || event.key === 'U'){
        tutorial1A.style.display = "none";
        tutorial1B.style.display = "none";
        
        tutorial1C.remove(); 
    } 
    if (event.key === " ") {
        if (isLampOn ) {
            
            isLampOn = !isLampOn
            flashlightElem.innerHTML = lamplightOff
            audioLightOff.play();
            audioLightBuzz.pause()
            // Clear the flicker interval if it exists
            if (flickerInterval) {
                clearInterval(flickerInterval);
                flickerInterval = undefined;
            }
        } else{ 
            hasPressedSpace = true
            isLampOn = !isLampOn
            audioLightOn.play();
            flashlightElem.innerHTML = lamplight
            audioLightBuzz.play();
        }
    }
});




//LIGTH FLICKER  ..............     ..................   ...........................     ...................... ....................... ...... ...... ....... ...... .... ........ .......... ...... ........

function changeLampColor() {

    if(isBlackOn)
    {
        flashlightElem.innerHTML = blacklight;
    } else{
        flashlightElem.innerHTML = lamplight;
    }
    
    
    const yourFunction = async () => {
        await delay(5000);
        lightFlicker.pause();
      };
    
}

// Set the interval to run the randomizer every 2 seconds (2000 milliseconds)
const intervalId = setInterval(randomizer, 2000);

function randomizer() {
    const randomValue = Math.floor(Math.random() * flickerChance);
    
    if (randomValue == 2 && isLampOn == true && isBlackOn == false) {
        flashlightElem.innerHTML = flickerlight
        // Clear the previous flicker interval and set a new one
        clearInterval(flickerInterval);
        audioLightFlicker.play()
        flickerInterval = setInterval(changeLampColor, 600);
    }
}

//DRAGABLE DIVS DRAG &&&&&&&&&&&&&&&&&&&&&&&&     &&&&&&&&&&&&&&&&&&&&&&&&     &&&&&&&&&&&&&&&&&&&&&&&&      &&&&&&&&&&&&&&&&&&&&&&&&     &&&&&&&&&&&&&&&&&&&&&&&&     &&&&&&&&&&&&&&&&&&&&&&&&

var currentZIndex = 20; // Initial z-index value

dragableElement(document.getElementById("resume"));
dragableElement(document.getElementById("info"));
dragableElement(document.getElementById("polaroid"));

function dragableElement(elmnt) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;

    if (document.getElementById(elmnt.id)) {
        document.getElementById(elmnt.id).onmousedown = dragMouseDown;
    } else {
        elmnt.onmousedown = dragMouseDown;
    }

    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();

        currentZIndex++; // Increment the global z-index variable
        elmnt.style.zIndex = currentZIndex;

        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();

        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;

        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
        const rng = Math.floor(Math.random() * 11) - 5;
        elmnt.style.transform = `rotate(${rng}deg)`;
        document.onmouseup = null;
        document.onmousemove = null;
    }
}

function update(e) {
    var x = e.clientX || e.touches[0].clientX;
    var y = e.clientY || e.touches[0].clientY;

    document.documentElement.style.setProperty('--cursorX', x + 'px');
    document.documentElement.style.setProperty('--cursorY', y + 'px');
}




//CHECK IF HOVERING OVER "MY UNIVERSE"

universe.addEventListener("mouseover", function () {
    audioSpace.play()
});

universe.addEventListener('mouseout', function(){
    audioSpace.pause()
    audioSpace.currentTime = 0;
});
