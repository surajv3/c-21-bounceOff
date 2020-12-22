function bounceOff(Tyson, Leo){
    if (Tyson.x - Leo.x < Leo.width/2 + Tyson.width/2
        && Leo.x - Tyson.x < Leo.width/2 + Tyson.width/2) {
            Tyson.velocityX = Tyson.velocityX * (-1);
            Leo.velocityX = Leo.velocityX * (-1);
    }
    if (Tyson.y - Leo.y < Leo.height/2 + Tyson.height/2
      && Leo.y - Tyson.y < Leo.height/2 + Tyson.height/2){
        Tyson.velocityY = Tyson.velocityY * (-1);
      Leo.velocityY = Leo.velocityY * (-1);
    }

}