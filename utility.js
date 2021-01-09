class SnakeAndLadder{
    rollDie=()=>
    {
		let die=Math.floor(Math.random()*6)+1;
		return die;
	}
	gamePlay=(position)=>
	{
		let die;
		let flag=0;
		
        die=this.rollDie();
		console.log("Roll the die",die);
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
		return position;
	}
	twoPlayer=()=>
	{
		let player1=0;
		let player2=0;
		let win=0;
        while(player1!=10||player2!=10)
        {
            player1=this.gamePlay(player1);
			win=this.winner(player1);
			if(win==1)
			{
				console.log("Player 1 wins");
				break;
			}
            player2=this.gamePlay(player2);
			win=this.winner(player2);
            if(win==1)
			{
                console.log("Player 2 wins");
				break;
			}

        }
	} 
	winner=(win)=>
	{
		if(win==10)
			return 1;
		else
			return 0;
	}
}
module.exports=new SnakeAndLadder();