class SnakeAndLadder{
    snakeAndLadder()
    {
        let position=0;
        while(position!=10)
        {
            let die=Math.floor(Math.random()*6)+1;
            console.log("Starts with position 0");
            console.log("Rolls the die:",die);
            console.log("1.No play 2.Ladder 3.Snake");
            let option=Math.floor(Math.random()*3)+1;
            switch(option)
			{
				case 1:
						console.log("No Play.");
						break;
				case 2:
						position+=die;
						console.log("ladder");
						if(position<=10)
							position+=die;
						break;
				case 3:
					    console.log("Snake");
						if((position-die)<0)
							position=0;
						else
							position-=die;
						break;
			}
        }
    }
}
module.exports=new SnakeAndLadder();