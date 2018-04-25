function grid(){

  const container = document.querySelector('.grid-work__inner');
  const items = document.querySelectorAll('.grid-work__item');

  function closeall(arg){
    arg.forEach(function(e){
        e.classList.remove('open');
        e.classList.add('close');
    });
  };
  function openthis(arg){
    arg.classList.remove('close');
    arg.classList.add('open');
  };

  items.forEach(function(i){
    let image = i.querySelector('.grid-work__item-image');
    let closebutton = i.querySelector('.grid-work__item-panel-close');
    let panelopen;
    let actionopen = () => {
      closeall(items);
      openthis(i);
    }
    let actionclose = () => {
      closeall(items);
    }
    image.addEventListener('click', function(){
      if (i.classList.contains('open') ){
        actionclose();
      } else {
        actionopen();
      }
    });
    closebutton.addEventListener('click', function(){
      actionclose();
    });
  });

};


function gridallopen(){
  const items = document.querySelectorAll('.grid-work__item');
  items.forEach(function(i){
    i.classList.remove('close');
    i.classList.add('open');
  });
};



if (matchMedia) {
  if (window.matchMedia("(min-width: 600px)").matches) {
    grid();
  } else {
    gridallopen();
  };
};
