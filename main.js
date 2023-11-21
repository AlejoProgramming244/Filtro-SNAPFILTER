WristLeftX = 0;
WristLeftY = 0;

WristRightX = 0;
WristRightY = 0;

function cambiarFondo(temporal) {
    var miDiv = document.getElementById("header");

    // Cambia el fondo del div al hacer clic en el botón
    if (temporal) {
        miDiv.style.backgroundColor = "lightcoral";

        // Revierte los cambios después de 500 milisegundos (0.5 segundos)
        setTimeout(function() {
            miDiv.style.backgroundColor = "lightblue";
        }, 500);
    } else {
        // Al soltar el botón, vuelve al fondo original
        miDiv.style.backgroundColor = "lightblue";
    }
}

function cambiarFondo1(temporal1)
{
    var miButton = document.getElementById("btn_");

    if(temporal1)
    {
        miButton.style.backgroundColor = "salmon";

        setTimeout(function() {
            miButton.style.backgroundColor = "salmon";
        }, 500);
    } 
    else {
        // Al soltar el botón, vuelve al fondo original
        miButton.style.backgroundColor = "salmon";
    }
}

function setup()
{
    Canvas = createCanvas(1000, 410);

    Canvas.center();
  
    background("skyblue");
  
    capture = createCapture(VIDEO);
    capture.size(400, 370);
    capture.hide();

    poseNet = ml5.poseNet(capture, modelLoaded);
    poseNet.on("pose", gotPoses)
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results)

        WristRightX = results[0].pose.WristRight.x-15;
        WristRightY = results[0].pose.WristRight.y-15;

        WristLeftX = results[0].pose.WristRight.x-15;
        WristLeftY = results[0].pose.WristRight.y-15;
    }
}

function modelLoaded()
{
    console.log("El modelo p5 se a cargado");
}

function draw()
{
    image(capture, 250, 20, 500, 370);


}

function preload()
{

}


