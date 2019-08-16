let canvas = document.querySelector('canvas');
canvas.width=1000;
canvas.height=500;

let xGrid=10;
let yGrid=10;
let cellSize=10;

let ctx=canvas.getContext('2d');

let data={
  Ohio:5,
  Texas:11,
  California:19,
  Virginia:3,
  Illinois:16,
  Maryland:3,
  Tennessee:2,
  Colorado:6,
  Nevada:2,
  Washington:8,
  Louisiana:1,
  Kansas:2,
  Michigan:2,
  Oregon:2,
  Wisconsin:4,
  NewYork:4,
  Connecticut:3,
  Minnesota:2,
  Georgia:2,
  Arizona:1,
  Utah:1,
  Massachusetts:1,
  Arkansas:1,
  SouthCarolina:2,
  Iowa:1,
  NorthCarolina:2,
  Kentucky:2
}

const entries=Object.entries(data);


function drawGrids()
{
    ctx.beginPath();

    while(xGrid<canvas.height)
    {
        ctx.moveTo(0,xGrid);
        ctx.lineTo(canvas.width,xGrid);
        xGrid+=cellSize;
    }
    while(yGrid<canvas.width)
    {
        ctx.moveTo(yGrid,0);
        ctx.lineTo(yGrid,canvas.height);
        yGrid+=cellSize;
    }

    ctx.strokeStyle="gray";
    ctx.stroke();
}

function blocks(count)
{
  return count*10;
}

function drawAxis()
{
    let yPlot=40;
    ctx.beginPath();
    let pop = 0;
    ctx.strokeStyle="black";
    ctx.moveTo(blocks(5),blocks(5));
    ctx.lineTo(blocks(5),blocks(40));
    ctx.lineTo(blocks(80),blocks(40));

    ctx.moveTo(blocks(5),blocks(40));

    for (var i=0;i<=10;i++)
    {
        ctx.strokeText(pop,blocks(2),blocks(yPlot));
        yPlot-=5;
        pop+=500;
    }

    ctx.stroke();
}

function drawChart()
{
  ctx.beginPath();
  ctx.strokeStyle="black";
  ctx.moveTo(blocks(5),blocks(40));

  var xPlot=10;

  for(const [state,shooting] of entries)
  {
      var shootingInBlocks=populations/100;
      ctx.strokeText(state,blocks(xPlot),blocks(40-shootingInBlocks-2));
      ctx.lineTo(blocks(xPlot),blocks(40-shootingInBlocks));
      ctx.arc(blocks(xPlot), blocks(40-shootingInBlocks),2,0,Math.PI*2,true);
      xPlot+=5;
  }
  ctx.stroke();

}

drawGrids();
drawAxis();
drawChart();
