$(document).ready(function () {
  var entries = [
    { label: 'GAP' },
    { label: 'Adidas' },
    { label: 'NIKE' },
    { label: 'Andersson Bell' },
    { label: 'ADLV' },
    { label: 'dickies' },
    { label: 'Ambler' },
    { label: 'Acne Studios' },
    { label: 'Polo' },
    { label: 'Valentino Garavani' },
    { label: 'Fila' },
    { label: 'Puma' },
    { label: 'Off White' },
    { label: 'Balenciaga' },
    { label: 'Marvel' },
    { label: 'Pancoat' },
    { label: 'MLB' },
    { label: 'Kappa' },
    { label: 'Feltics' },
    { label: 'Jeep' },
    { label: 'NB' },
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
