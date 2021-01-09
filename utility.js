class SnakeAndLadder{
    snakeAndLadder()
    {
		let position=0;
		let flag=0;
        while(position!=10)
        {
            let die=Math.floor(Math.random()*6)+1;
            console.log("Rolls the die:",die);
            console.log("1.No play 2.Ladder 3.Snake");
			let option=Math.floor(Math.random()*3)+1;
			flag++;
            switch(option)
			{
				case 1:
						console.log("No Play.");
						break;
				case 2:
						position+=die;
						console.log("ladder");
						if(position<=10)
						{
							position+=die;
						}
						else if(position>10)
						{
							position=10
						}
						break;
				case 3:
					    console.log("Snake");
						if((position-die)<0)
							position=0;
						else
							position-=die;
						break;
				default:
						console.log("Wrong choice");
			}
			console.log("Dice Rolled:",flag);
			console.log("Position:",position);
        }
    }
}
module.exports=new SnakeAndLadder();