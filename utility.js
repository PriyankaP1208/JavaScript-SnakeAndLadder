class SnakeAndLadder{
    snakeAndLadder()
    {
        let position=0;
        let die=Math.floor(Math.random()*6)+1;
        console.log("Starts with position 0");
        console.log("Rolls the die:",die);
    }
}
module.exports=new SnakeAndLadder();