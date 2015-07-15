$.jribbble.setToken('899bd5aa51db0c0c732e492a26aad5bfd1a11b0191fec3ec836d606af90d23c5');

$.jribbble.users('JTreg').shots({"tags":"pixel_art"}).then(function(shots) {
  var html = [];
  
  shots.forEach(function(shot) {
    html.push('<li class="shots--shot">');
    html.push('<a href="' + shot.html_url + '" target="_blank"> ');
    html.push('<img src="' + shot.images.normal + '" alt="' + shot.tags + '">');
    html.push('</a></li>');
  });
  
  $('.shots').html(html.join(''));
});