var allfunctions = new functions();

allfunctions.menu();
if ( $('body').attr('id') == 'homepage' ){
  allfunctions.readmore();
  allfunctions.jobs();
  allfunctions.careerprogress();
  allfunctions.homegrid();
}
if ( $('body').hasClass('flickity')){
  window.onload = function() {
    console.log('loaded');
    allfunctions.flickity();
  };
};