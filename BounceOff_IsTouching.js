function BounceOff(object1,object2){

  if (object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2) {
      object1.velocityX = object1.velocityX * (-1);
      object2.velocityX = object2.velocityX * (-1);
  }
  if (object1.y - object2.y < object2.height/2 + object2.height/2
    && object2.y - object1.y < object2.height/2 + object1.height/2){
    object1.velocityY = object1.velocityY * (-1);
    object2.velocityY = object2.velocityY * (-1);
  }

}

function Tocando(objeto1,objeto2){


  if (objeto2.x - objeto1.x < objeto1.width/2 + objeto2.width/2 && objeto1.x - objeto2.x < objeto1.width/2 + objeto2.width/2 && objeto1.y - objeto2.y < objeto1.height/2 + objeto2.height/2 && objeto2.y - objeto1.y < objeto1.height/2 + objeto2.height/2){

      return true;
  }
  else{
      return false;
  }
}