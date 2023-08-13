var n=Math.random();
n=n*6;
n=(Math.floor(n)+1);
var dice="dice"+n+".png";
var ranimg="images/"+dice;
var img1=document.querySelectorAll("img")[0];
img1.setAttribute("src",ranimg);

var n1=Math.random();
n1=n1*6;
n1=(Math.floor(n1)+1);
var dice1="dice"+n1+".png";
var ranimg1="images/"+dice1;
var img11=document.querySelectorAll("img")[1];
img11.setAttribute("src",ranimg1);

if(n<n1)
{
    document.querySelector("h1").innerHTML="Player2 Wins!"
}
else if(n>n1)
{
    document.querySelector("h1").innerHTML="Player1 Wins!"
}
else{
    document.querySelector("h1").innerHTML="DRAW!"
}