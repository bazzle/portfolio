var allfunctions = new functions();

allfunctions.menu();
allfunctions.lockview();
allfunctions.unlockview();
if ( $('body').attr('id') == 'homepage' ){
  allfunctions.readmore();
  allfunctions.jobs();
  allfunctions.careerprogress();
  allfunctions.homegrid();
}