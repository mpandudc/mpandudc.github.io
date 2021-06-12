$(document).ready(function () {
  var entries = [
    { label: 'Python' },
    { label: 'Machine Learning' },
    { label: 'Deep Learning' },
    { label: 'R' },
    { label: 'C/C++' },
    { label: 'Javascript' },
    { label: 'HTML' },
    { label: 'SQL' },
    { label: 'Regression' },
    { label: 'Classification' },
    { label: 'Data Visualization' },
    { label: 'CSS' },
    { label: 'Web Development' },
    { label: 'Project Management' },
    { label: 'Digital Marketing' },
    { label: 'Data Scraping' },
    { label: 'Java' },
    { label: 'PHP' },
    { label: 'Design' },
  ];

  var settings = {
    entries: entries,
    width: 680,
    height: 680,
    radius: '70%',
    radiusMin: 75,
    bgDraw: true,
    bgColor: '#fff',
    opacityOver: 2.0,
    opacityOut: 0.05,
    opacitySpeed: 6,
    fov: 800,
    speed: 0.4,
    fontSize: '20',
    fontColor: 'black',
    fontWeight: 'bold', //bold
    fontStyle: 'normal', //italic
    fontStretch: 'normal', //wider, narrower, ultra-condensed, extra-condensed, condensed, semi-condensed, semi-expanded, expanded, extra-expanded, ultra-expanded
    fontToUpperCase: true,
  };

  //var svg3DTagCloud = new SVG3DTagCloud( document.getElementById( 'holder'  ), settings );
  $('#holder').svg3DTagCloud(settings);
});
