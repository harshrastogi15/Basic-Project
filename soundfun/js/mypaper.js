var circles = [];

function onKeyDown(event) {
    var maxpoint = new Point(view.size.width, view.size.height);
    var randomPoint = Point.random();
    var point = maxpoint * randomPoint;
    var myCircle = new Path.Circle(point, 500);
    if (keydata[event.key]) {
        keydata[event.key].sound.play();
        myCircle.fillColor = keydata[event.key].color;
        circles.push(myCircle);
    }
    else {
        playing();
        myCircle.fillColor = createColor();
        circles.push(myCircle);
        ele = createColor();
    }
}

function onFrame(event) {
    for (var i = 0; i < circles.length; i++) {
        circles[i].fillColor.hue += 1;
        circles[i].scale(.9);
    }
}

var keyPress = document.getElementById("keypress");
keyPress.addEventListener("input",function(){
    keyPress.value=""
});

function createColor(){
    R =100+ Math.floor(Math.random()*100);
    G =100+ Math.floor(Math.random()*100);
    B =100+ Math.floor(Math.random()*100);
    return "rgb("+R+","+G+","+B+")";
}

function playing(){
    ply=Math.floor(Math.random()*10);
    var url='music/newseries/sound'+ply+'.mp3';

    var newplay = new Howl({
        src: [url]
    }).play();
}