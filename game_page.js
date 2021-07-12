
  
player1_name=localStorage.getItem("player1name");
player2_name=localStorage.getItem("player2name");
player1_score=0;
player2_score=0;
document.getElementById("player1name").innerHTML=player1_name+":";
document.getElementById("player2name").innerHTML=player2_name+":";
document.getElementById("player1score").innerHTML=player1_score;
document.getElementById("player2score").innerHTML=player2_score;
document.getElementById("question").innerHTML="question turn:"+player1_name;
document.getElementById("answer").innerHTML="answer turn:"+player2_name;
function send(){
    num1=document.getElementById("number1").value ;
    num2=document.getElementById("number2").value ;
    correct_answer=parseInt(num1)+parseInt(num2);
   
       question_num = "<h4 >  "+num1+"+"+num2+"</h4>";
       input_box = "<br>Answer : <input type='text' id='input_check_box'>";
        check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>"; 
        row = question_num + input_box + check_button ; 
    document.getElementById("output").innerHTML = row;
     document.getElementById("number1").value = "";
     document.getElementById("number2").value = "";
}
qturn="player1";
aturn="player2";
function check(){
    answer=document.getElementById("input_check_box").value ;
    if(answer==correct_answer ){
if(aturn=="player1"){
    player1_score=player1_score+1;
    document.getElementById("player1score").innerHTML=player1_score;
}
else{
    player2_score=player2_score+1;
    document.getElementById("player1score").innerHTML=player1_score;
}
    }
    if(qturn=="player1")
    {
        qturn="player2";
        document.getElementById("question").innerHTML="question turn:"+player2_name;
    }
    else
    {
        qturn="player1";
        document.getElementById("question").innerHTML="question turn:"+player1_name;
    }
    if(aturn=="player1")
    {
        aturn="player2";
        document.getElementById("answer").innerHTML="answer turn:"+player2_name;
    }
    else
    {
        aturn="player1";
        document.getElementById("answer").innerHTML="answer turn:"+player1_name;
    }
    document.getElementById("output").innerHTML="";
}