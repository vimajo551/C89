
	player1Name = localStorage.getItem("player1Name");
	player2Name = localStorage.getItem("player2Name");

	player1Score = 0;
	player2Score = 0;

document.getElementById("player1Name").innerHTML = player1Name + " : ";
document.getElementById("player2Name").innerHTML = player2Name + " : ";

document.getElementById("player1Score").innerHTML = player1Score ;
document.getElementById("player2Score").innerHTML = player2Score ;

document.getElementById("playerQuestion").innerHTML = "Turno de Pergunta - " + player1Name ;
document.getElementById("playerAnswer").innerHTML = "Turno de Resposta - " + player2Name ;

function send() {
	getnumber1 = document.getElementById("num1").value;
	getnumber2 = document.getElementById("num2").value;
	actual_answer = parseInt(getnumber1) *parseInt(getnumber2);

    questionnumber = "<h4>"+getnumber1+"X"+getnumber2+"</h4>";
    input_box = "<br>Resposta : <input type='text' id='inputCheckBox'>";
    checkButton = "<br><br><button class='btn btn-info' onclick='check()'>Checar</button>";
    row =  questionnumber + input_box + checkButton ; 
    document.getElementById("output").innerHTML = row;
document.getElementById("getnumber1").value = "";
document.getElementById("getnumber2").value = "";
}


questionTurn = "player1";
answerTurn = "player2";


function check()
{
	getAnswer = document.getElementById("inputCheckBox").value;
	if(getAnswer == actual_answer)	
	{
		if(answerTurn == "player1")
		{
			player1Score = player1Score +1;
		    document.getElementById("player1Score").innerHTML = player1Score;
		}
		else 
		{
			player2Score = player2Score +1;
		    document.getElementById("player2Score").innerHTML = player2Score;
		}
	}
	if(questionTurn == "player1")
	{
		questionTurn = "player2"
		document.getElementById("playerQuestion").innerHTML = "Turno de Pergunta: " + player2Name ;
	}
	else 
	{
		questionTurn = "player1"
		document.getElementById("playerQuestion").innerHTML = "Turno de Pergunta: " + player1Name ;
	}

	if(answerTurn == "player1")
	{
		answerTurn = "player2"
		document.getElementById("playerAnswer").innerHTML = "Turno de Resposta: " + player2Name ;
	}
	else 
	{
		answerTurn = "player1"
		document.getElementById("playerAnswer").innerHTML = "Turno de Resposta: " + player1Name ;
	}

    document.getElementById("output").innerHTML = "";
}
