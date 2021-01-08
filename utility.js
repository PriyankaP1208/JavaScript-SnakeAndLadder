class SnakeAndLadder{
    snakeAndLadder()
    {
        let position=0;
        let option;
        let die=Math.floor(Math.random()*6)+1;
        console.log("Starts with position 0");
        console.log("Rolls the die:",die);
        console.log("1.No play 2.Ladder 3.Snake");
        option=Math.floor(Math.random()*3)+1;
        switch(option)
        {
            case 1:
                console.log("No Play.");
                break;
            case 2:
                position+=die;
                console.log("Ladder");
                break;
            case 3:
                position-=die;
                console.log("Snake");
                break;
        }
    }
}
module.exports=new SnakeAndLadder();