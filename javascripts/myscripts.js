var myConfigPieChart = {
 	type: "ring3d", 
 	plot: {
 	  borderColor: "#2B31",
 	  borderWidth: 5,
 	  valueBox: {
 	    placement: 'in',
 	    text: '%t\n%npv%',
        'fontFamily': "Open Sans",
        'font-size': 16,
        'font-weight': "bold",
        'font-style': "normal",
 	  },
 	  tooltip:{
 	    fontSize: '25',
 	    fontFamily: "Open Sans",
 	    padding: "5 10",
 	    text: "%npv%"
 	  },
 	  animation:{
      effect: 2, 
      method: 5,
      speed: 2000,
      sequence: 1,
      delay: 1000
    },
   },
  
 	title: {
 	  fontColor: "#8e99a9",
 	  text: 'Number of Listings Comparision',
 	  fontFamily: "Open Sans",
 	  fontSize: 30
 	},
 	series : [
		{
		 values : [5588],
	     text: "1 listing",
         backgroundColor: '#a8eb12',
		},
		{
		  values: [3973],
		  text: "2~5 listings",
		  backgroundColor: '#00bf72',
		},
		{
		  values: [932],
		  text: '6~10 listings',
		  backgroundColor: '#008793',
		},
		{
		  text: '10~50 listings',
		  values: [2120],
          backgroundColor: '#004d7a',
        },
   {
      text: '>50 listings',
      values: [899],
      backgroundColor: '#051937',
    }
        
	]
};

zingchart.render({ 
	id : 'pieChart', 
	data : myConfigPieChart, 
	height: '100%', 
	width: '100%' 
});

/*
 * Parse the data and create an area graph with the data.
 */
function parseData(createGraph) {
	  Papa.parse("data/room_type_price.csv", {
		download: true,
		complete: function(results) {
		createGraph(results.data);
		}
	});
}

function createGraph(data) {
  /* Four variables to store the data*/ 
    var price_per_night_room = [];
    var price_per_night_apartment = [];
    var price_per_night_apartment_normalized = [];
    var price_per_night_room_normalized = [];

    for (var i = 1; i < data.length; i++) {
          // if the value is not undefined or null, push to array
          if (data[i][1] === 'room') {
              price_per_night_room.push(data[i][0]);
              price_per_night_room_normalized.push(data[i][2]);
          } 
          if (data[i][1] === 'apartment'){
              price_per_night_apartment.push(data[i][0]);
              price_per_night_apartment_normalized.push(data[i][2]);
          } 
    }

    for (var i = 0; i < price_per_night_room.length; i ++) {
        price_per_night_room[i] = Number(price_per_night_room[i]);
    }

    for (var i = 0; i < price_per_night_apartment.length; i ++) {
        price_per_night_apartment[i] = Number(price_per_night_apartment[i]);
    }

/* check if the data loading succeeds*/
console.log(price_per_night_room.length);
console.log(price_per_night_apartment.length);

var myConfigdistChart = {
  graphset:[
      {
      type: "area", 
      title : {
        text : "Distribution of Price Per Night",
        fontColor: "#8e99a9",
        fontFamily: "Open Sans",
        fontSize: 30
      },
      plot : {
        "line-width": 2,
        "marker": {
            "size": 1,
            "visible": false
        },
        'legend-item': {
          'font-family': "Open Sans"
        }
    },
    legend: {
      layout: "2x1",
      x: "82%",
      y: "25%",
    },
      series: [
        {
          values: [2, 79, 1895, 2243, 1601,838, 721, 411, 359, 221, 268, 122, 149, 53, 101, 54,68,32,58,38],
          "background-color": "#008793",
          "alpha-area": ".6",
          "font-family": "Open Sans",
          "font-size": "14px",
          "text": "apartment",
          "line-color": "#008793",
          "aspect": "spline",
          'legend-item': {
            "font-family": "Open Sans",
          }
        },
        {
          values: [1160, 1792, 351, 145, 64, 37, 10, 13, 4, 19, 5],
          "background-color": "#00bf72",
          "alpha-area": ".6",
          "font-family": "Open Sans",
          "font-size": "14px",
          "text": "room",
          "line-color": "#00bf72",
          "aspect": "spline",
          'legend-item': {
            'font-family': "Open Sans",
          }
        }
      ],
      "crosshair-x": {
        "line-color":"#8e99a9",
        "line-width": 2,
        "plot-label": {
            "visible": true
        }
    },
      "plotarea": {
        "margin-top":"10%",
        "margin-right":"dynamic",
        "margin-bottom":"dynamic",
        "margin-left":"dynamic",
        "adjust-layout":true
    }
    },
      {
    type: "area", 
      title : {
        text : "Distribution of Normalized Price Per Night",
        fontColor: "#8e99a9",
        fontFamily: "Open Sans",
        fontSize: 30
      },
      plot : {
        "line-width": 2,
        "marker": {
            "size": 1,
            "visible": false
        },
        'legend-item': {
          'font-family': "Open Sans"
        }
    },
    legend: {
      layout: "2x1",
      x: "82%",
      y: "25%",
    },
      series: [
        {
          values: [25, 2452, 2889,1410, 1014, 433, 420,158,166,118,104,46,70,0,0,0,0,0],
          "background-color": "#008793",
          "alpha-area": ".6",
          "font-family": "Open Sans",
          "font-size": "14px",
          "text": "apartment",
          "line-color": "#008793",
          "aspect": "spline",
        },
        {
          values: [0,0,571, 2154,486,177,95,48,28,13,4,19,5,4,2,1,0,0],
          "background-color": "#00bf72",
          "alpha-area": ".6",
          "font-family": "Open Sans",
          "font-size": "14px",
          "text": "room",
          "line-color": "#00bf72",
          "aspect": "spline",
        }
      ],
      "crosshair-x": {
        "line-color":"#8e99a9",
        "line-width": 2,
        "plot-label": {
            "visible": true
        }
    },
      "plotarea": {
        "margin-top":"10%",
        "margin-right":"dynamic",
        "margin-bottom":"dynamic",
        "margin-left":"dynamic",
        "adjust-layout":true
    }
    }
  ]
};

zingchart.render({
    id: 'distributionChart',
    data: myConfigdistChart,
    height: '100%', 
	  width: '100%' 
  })
};

/**creat the graphs */
parseData(createGraph);



var price_per_night_room = [];
var price_per_night_apartment = [];
var availability_room= [];
var availability_apartment= [];
var price_avail_pair_room = [];
var price_avail_pair_apartment = [];

/*
 * Parse the scatter data and create an area graph with the data.
 */
function parseData(createGraphScatter) {
  Papa.parse("data/scatter_data.csv", {
  download: true,
  complete: function(results) {
  createGraphScatter(results.data);
  }
});
}

function createGraphScatter(data) {
  /* Four variables to store the data*/ 
    
    for (var i = 1; i < data.length; i++) {
      var price = Number(data[i][1]);
      var avail = Number(data[i][0]);
      var pair = [avail, price];
        if (data[i][2] === 'room') {
          price_per_night_room.push(price);
          availability_room.push(avail);  
          price_avail_pair_room.push(pair);
    } else {
      price_per_night_apartment.push(price);
          availability_apartment.push(avail);  
          price_avail_pair_apartment.push(pair);
    }
  }

/** Scatter plot */
var  myConfigScatterChart = {
  "type": "scatter",
  title : {
    text : "Price Per Night vs Availability",
    fontColor: "#8e99a9",
    fontFamily: "Open Sans",
    fontSize: 30
  },
  legend: {
    layout: "2x1",
    position: "92% 10%",
    item: {
        'font-color': "#8e99a9",
        'font-family': "Open Sans"
    },
    'background-color': "white",
    alpha: 0.5,
    'border-color': "#8e99a9",
    shadow: false,
    marker: {
        type: "inherit",
        label: {
          text: "Projected Income"
      },
    }
},
  'scale-y': {
    progression: "log",
    'log-base': 10,
  },
  'scale-x': {
    progression: "linear",
    label: {
      text: "Number of days Available"
  },
  },
  "series": [
    {
      "values": price_avail_pair_room,
      "text": "room",
      marker: {
        'background-color': '#00bf72',
        'border-color': "inherit",
        "alpha-area": ".2",
        
      }
    },
    {
      "values": price_avail_pair_apartment,
      "text": "apartment",
      marker: {
        'background-color': '#a8eb12',
        'border-color': "inherit",
        "alpha-area": ".2",
        
      }
    }
	]
};

zingchart.render({ 
	id : 'scatterplotChart', 
	data : myConfigScatterChart, 
	height: 500, 
	width: "100%" 
});
};

/**creat the graphs */
parseData(createGraphScatter);


var stackedchartConfig = {
  type: 'hbar',
  backgroundColor: '#2A2B3A',
  plot: {
    tooltip: {
      borderRadius: '2px',
      borderWidth: '0px'
    },
    valueBox: {
      text: '%v',
      fontColor: '#2A2B3A',
      fontSize: '14px',
      visible: true
    },
    animation: {
      effect: 'ANIMATION_EXPAND_TOP',
      method: 'ANIMATION_BOUNCE_EASE_OUT',
      sequence: 'ANIMATION_BY_PLOT_AND_NODE'
    },
    'legend-item': {
      'font-family': "Open Sans"
    },
    barsSpaceRight: '20px',
    barsSpaceLeft: '20px',
    stacked: true
  },
  // title : {
  //   text : "No. of Apartments vs No. of Rooms",
  //   fontColor: "#8e99a9",
  //   fontFamily: "Open Sans",
  //   fontSize: 30,
  //   width: 150,
  //   height: 30,
  //   'border-radius': "20px",
  // },
  legend: {
    layout: "2x1",
    x: "92%",
    y: "10%",
    'background-color': "white",
    alpha: 0.3,
    'border-color': "#8e99a9",
    shadow: false,
  },
  plotarea: {
    marginTop: '30px',
    marginBottom: '30px',
    marginLeft: '80px'
  },
  scaleX: {
    item: {
      fontColor: '#e8e8e8',
      fontSize: '16px'
    },
    labels: ['4thQ', '3rdQ', '2ndQ', '1stQ'],
    lineColor: 'transparent',
    tick: {
      visible: false
    }
  },
  scaleY: {
    guide: {
      visible: false
    },
    lineColor: 'transparent',
    tick: {
      visible: false
    },
    visible: false
  },
  tooltip: {
    visible: false
  },
  series: [
    {
      values: [3180, 3004, 2418,813],
      "text": "apartment",
      backgroundColor: '#008793',
      borderRadius: '50px 0px 0px 50px',
      rules: [
        {
          backgroundColor: '#008793',
          rule: '%i === 0'
        },
        {
          backgroundColor: '#008793',
          rule: '%i === 1'
        },
        {
          backgroundColor: '#008793',
          rule: '%i === 2'
        },
        {
          backgroundColor: '#008793',
          rule: '%i === 3'
        },
      ]
    },
    {
      values: [129, 305, 891,2469],
      "text": "room",
      backgroundColor: '#00bf72',
      borderRadius: '0px 50px 50px 0px',
      rules: [
        {
          backgroundColor: '#00bf72',
          rule: '%i === 0'
        },
        {
          backgroundColor: '#00bf72',
          rule: '%i === 1'
        },
        {
          backgroundColor: '#00bf72',
          rule: '%i === 2'
        },
        {
          backgroundColor: '#00bf72',
          rule: '%i === 3'
        },
      ]
    }
  ]
};
 
zingchart.render({
  id: 'stackedbarCahrt',
  data: stackedchartConfig
});

 
