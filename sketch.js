var n1, n2;
var b1, b2, b3, b4;


function setup() {
  createCanvas(400,400);

num1 = createInput();
num1.position(5, 60)

num2 = createInput();
num2.position(200, 60)

b1 = createButton("ADD")
b1.position(30, 200);
b1.mousePressed(add);

b2 = createButton("SUBTRACT")
b2.position(200, 200);
b2.mousePressed(sub);

b3 = createButton("MULTIPLY")
b3.position(100, 200);
b3.mousePressed(mul);

b4 = createButton("DIVIDE")
b4.position(300, 200);
b4.mousePressed(div);
}

function draw() 
{
  background("black");

  text("Number1", 70, 50)
  text("Number2", 270, 50)

n1 = parseInt(num1.value())
n2 = parseInt(num2.value())





}

function add(){
  console.log(n1+n2)
}

function sub(){
  console.log(n1-n2)
}

function mul(){
  console.log(n1*n2)
}

function div(){
  console.log(n1/n2)
}
