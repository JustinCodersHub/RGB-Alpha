function generateAlpha(){ 
        let getRed = parseInt(document.getElementById("redValue").value);
        let getGreen = parseInt(document.getElementById("greenValue").value);
        let getBlue = parseInt(document.getElementById("blueValue").value);


        document.getElementById("color").style.backgroundColor = `rgb(${getRed},${getGreen},${getBlue})`;

        for (let i = 1; i <= 10; i++) {
        let alpha = i / 10;
        let element = document.getElementById(`box${i}`);
        element.style.backgroundColor = `rgba(${getRed},${getGreen},${getBlue},${alpha})`;
        }
    }

    function randomColor(){
        let r = Math.floor(Math.random() * 256);
        let g = Math.floor(Math.random() * 256);
        let b = Math.floor(Math.random() * 256);

        document.getElementById("color").style.backgroundColor = `rgb(${r},${g},${b})`;

        document.getElementById("redValue").value = `${r}`;
        document.getElementById("greenValue").value = `${g}`;
        document.getElementById("blueValue").value = `${b}`;
    }

    function reset(){
        document.getElementById("color").style.backgroundColor = "";

        for(let i = 1; i <= 10; i++){
            document.getElementById(`box${i}`).style.backgroundColor = "";
        }
    }
