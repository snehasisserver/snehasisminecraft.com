var canvas = new fabric.Canvas('myCanvas');

block_image_width=30;
block_image_height=30;

player_x = 10;
player_y = 10;

var player_object = "";
function player_update(){
    fabric.Image.fromURL("player.png",function(Img){
        player_object=Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top:player_y,
            left:player_x
        });
      canvas.add(player_object); 
      
      
    })

    
}
function new_image(get_image){
    fabric.Image.fromURL(get_image,function(Img){
    block_img_object=Img;
    block_img_object.scaleToWidth(block_image_width);
    block_img_object.scaleToHeight(block_image_height);
    block_img_object.set({
        top:player_y,
        left:player_x
    });
    canvas.add(block_img_object);
    });
}

window.addEventListener("keydown",my_keydown);
function my_keydown(e){
   keyPressed=e.keyCode;
   console.log(keyPressed);
   if(e.shiftKey==true && keyPressed=='80'){
      block_image_height=block_image_height+10;
      block_image_width=block_image_width+10;
      console.log("P and shift key have been pressed together");

      document.getElementById("current_width").innerHTML=block_image_width;
      document.getElementById("current_height").innerHTML=block_image_height;
   }
   if(e.shiftKey==true && keyPressed=='77'){
    block_image_height=block_image_height-10;
    block_image_width=block_image_width-10;
    console.log("M and shift key have been pressed together");

    document.getElementById("current_width").innerHTML=block_image_width;
    document.getElementById("current_height").innerHTML=block_image_height;
 }
 if(keyPressed=='39'){
     right();
     console.log("Right");
 };
 if(keyPressed=='38'){
    up();
    console.log("Up");
};
if(keyPressed=='40'){
    down();
    console.log("Down");
};
if(keyPressed=='37'){
    left();
    console.log("Left");
};


if(keyPressed=='84'){
    new_image('trunk.jpg');
    console.log("t for Trunk");
};
if(keyPressed=='68'){
   new_image('dark_green.png');
   console.log("d for dark green");
};
if(keyPressed=='76'){
   new_image('light_green.png');
   console.log("l for light green");
};
if(keyPressed=='71'){
   new_image('ground.png');
   console.log("g for ground");
};
if(keyPressed=='87'){
    new_image('wall.jpg');
    console.log("w for wall");
};
if(keyPressed=='89'){
   new_image('yellow_wall.png');
   console.log("y for yellow color wall");
};
if(keyPressed=='82'){
   new_image('roof.jpg');
   console.log("r for roof");
};
if(keyPressed=='67'){
   new_image('cloud.jpg');
   console.log("c for cloud");
};
if(keyPressed=='85'){
   new_image('unique.png');
   console.log("U for different");
}
}
function up(){
    if(player_y > 0){
    player_y=player_y-block_image_height;
    console.log("Y = " + player_y + " , " + " X = " + player_x);
    canvas.remove(player_object);
    player_update();
    
}
}
function down(){
    if(player_y < 475){
    player_y=player_y+block_image_height;
    console.log("Y = " + player_y + " , " + " X = " + player_x);
    canvas.remove(player_object);
    player_update();
    
}
}
function left(){
    if(player_x > 0){
    player_x=player_x-block_image_width;
    console.log("Y = " + player_y + " , " + " X = " + player_x);
    canvas.remove(player_object);
    player_update();
    
}
}
function right(){
    if(player_x < 650){
    player_x=player_x+block_image_width;
    console.log("Y = " + player_y + " , " + " X = " + player_x);
    canvas.remove(player_object);
    player_update();
    
}
}
