const wheel = document.getElementById('wheel');
const spinBtn = document.getElementById('spin-btn');
const finalValue = document.getElementById('final-value');

// objects that storage minimum and maximum angale for the value

const rotationValues = [
                        {minDegree:0, maxDegree:30, value: 2},
                        {minDegree:31, maxDegree:90, value: 1},
                        {minDegree:91, maxDegree:150, value:6},
                        {minDegree:151, maxDegree:210, value: 5},
                        {minDegree:211, maxDegree:270, value: 4},
                        {minDegree:271, maxDegree:230, value: 3},
                        {minDegree:331, maxDegree:360, value: 2}
                          ];
//size of each piece
const data = [ 16, 16, 16, 16, 16, 16];
//background color of each pice 
const pieColors = ["#8b35bc",
                    "#b163da",
                    "#8b35bc",
                    "#b163da",
                    "#8b35bc", 
                    "#b163da"
                    ];
//create chart
let mychart = new chart(wheel,{
  //plugin for displaying text on pie chart 
  plugins:[ChartDataLabels],
  //chart type pie
  type:"pie",
  data:{
    //labelsvalues which are to be displayed on chart
    labels:[1, 2, 3, 4, 5, 6],
    //settings for dataset/pie
    datasets:[
      {
        backgroundColor:pieColors,
        data:data,
      },
    ],
  },
options:{
  //responsive chart
  responsive:true,
  animation:{ duration: 0 },
  //hide tooltip and lagend
  tooltip:false,
  legend:{
    display:false,
  },
  //display labels inside pie chart
  datalabels:{
    color: "#fff",
    formatter:(_,context) =>
    context.chart.data.labels[context.dataIndex],
    font: { size: 24 },
    },
  },
});

