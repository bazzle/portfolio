const mq = window.matchMedia("(min-width:600px)");
const mq2 = window.matchMedia("(max-width:600px)");

const root = document.getElementsByTagName('html')[0];
function lockview(){
  root.classList.add('noscroll');
};
function unlockview(){
  root.classList.remove('noscroll');
};



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

  document.addEventListener('keydown',function(i){
    if ( i.key == "Escape" ){
        closeall(items);
    };
  })

};


function gridallopen(){
  const items = document.querySelectorAll('.grid-work__item');
  items.forEach(function(i){
    i.classList.remove('close');
    i.classList.add('open');
  });
};

function enableimagemobile(){
  let link = document.querySelectorAll('.work-image-link');
  link.forEach(function(e){
    function dothis(evt){
      evt.preventDefault();
    };
    if (matchMedia) {
      mq2.addListener(WidthChangesenableimagemobile);
      WidthChangesenableimagemobile(mq2);
    };
    function WidthChangesenableimagemobile(mq2){
      if (mq2.matches) {
        // if mobile
        $(e).off('click', dothis);
      } else {
        // if dt
        $(e).on('click', dothis);
      };
    };
  });
};








function gallery(thisgallery){

  let anchors = thisgallery.querySelectorAll('.gallery-li a');
  let images = thisgallery.querySelectorAll('ul img');
  let overlay = thisgallery.querySelector('.gallery__overlay');
  let frame = thisgallery.querySelector('.gallery__overlay-frame img');
  let nextbutton = thisgallery.querySelector('.gallery__next');
  let prevbutton = thisgallery.querySelector('.gallery__prev');
  let close = thisgallery.querySelector('.gallery__close');
  let imageslength = images.length - 1;
  let currentimageindex;
  let currentimage;
  let src;

  function overlayopen(){
      overlay.classList.remove('gallery__overlay--invisible');
      overlay.classList.add('gallery__overlay--visible');
      lockview();
  };
  function overlayclose(){
      overlay.classList.add('gallery__overlay--invisible');
      overlay.classList.remove('gallery__overlay--visible');
      root.classList.remove('noscroll');
      unlockview();
  };

  // get rid of anchor default function
  anchors.forEach(function (e) {
      e.addEventListener('click', function (event) {
          event.preventDefault();
      });
  })

  images.forEach(function (image, index) {
      // click image to open it
      image.addEventListener('click', function () {
          src = image.getAttribute('src');
          overlayopen();
          frame.setAttribute('src', src);
          // next image
          currentimageindex = index;
      });
      // Focus functionality
      let listitem = image.closest('.gallery-li');
      listitem.addEventListener('focus',function(){
          document.addEventListener('keypress',function(k){
              if (k.key === "Enter"){
                  src = image.getAttribute('src');
                  overlayopen();
                  frame.setAttribute('src', src);
                  // next image
                  currentimageindex = index;
              };
          });
      });
  });



  function applynewindex(i) {
      currentimage = images[i];
      src = currentimage.getAttribute('src');
      frame.setAttribute('src', src);
  };

  function nextaction(){
      function next(){
          currentimageindex++;
          applynewindex(currentimageindex);
      };
      function reset(){
          currentimageindex = 0;
          applynewindex(currentimageindex);
      };
      if ( currentimageindex === imageslength){
          reset();
      } else {
          next();
      };
  };


  function prevaction(){
      function prev(){
          currentimageindex--;
          applynewindex(currentimageindex);
      };
      function reset(){
          currentimageindex = imageslength;
          applynewindex(currentimageindex);
      };
      if ( currentimageindex === 0){
          reset();
      } else {
          prev();
      };
  };


  nextbutton.addEventListener('click', nextaction );
  prevbutton.addEventListener('click', prevaction );

  // Arrow keys
  document.addEventListener('keydown',function(i){
      if ( i.keyCode == 39 ){
          nextaction();
      } else if ( i.keyCode == 37 ){
          prevaction();
      };
  });


  close.addEventListener('click',function(){
      overlayclose();
  });

  document.addEventListener('keydown',function(i){
      if ( i.key == "Escape" ){
          overlayclose();
      };
  });

};


function jobs(){
  let timeline = document.querySelector('.progress__items');

  function addnewjob(arg1,arg2,arg3){
    var structure =
    `<div class="progress__item item">
      <div class="progress__marker"></div>
      <div class="progress__item-title">
        ${arg1}
      </div>
      <div class="progress__item-meta item-meta">
        <p class="progress__item-role">
          ${arg2}
        </p>
        <div class="progress__item-date">
          ${arg3}
        </div>
      </div>
  </div>`
    ;
    var newelement = $(timeline).append(structure);
  };


    thejobs.forEach(function(i){
      let company = i.querySelector('.job__company').innerHTML;
      let role = i.querySelector('.job__role').innerHTML;
      let dates = i.querySelector('.job__date').innerHTML;
      addnewjob(company,role,dates);
    });
    let timelineitems = timeline.querySelectorAll('.item');
    let jobs = document.querySelector('.jobs');
    let jobinfoitems = jobs.querySelectorAll('.job');
    let jobinfoitemslength = jobinfoitems.length;
    let jobinfoitemslast = jobs.lastElementChild;
    let jobinfoitemsfirst = jobs.firstElementChild;
    $(jobinfoitemslast).addClass('job-show job-last');
    $(jobinfoitemsfirst).addClass('job-first');

    timelineitems.forEach(function(e, index){
      e.addEventListener('click',function(){
        let item = jobinfoitems.item(index);
        $(item).addClass('job-show');
        $(jobinfoitems).not(item).each(function(){
          $(this).removeClass('job-show');
        });
      });
    });
    jobinfoitems.forEach(function(i, index){
      let nextarrow = i.querySelector('.job__arrows--next');
      let prevarrow = i.querySelector('.job__arrows--prev');
      let previtem = index-1;
      let nextitem = index+1;
      function nextitemfunc(){
        let item = jobinfoitems.item(nextitem);
        $(item).addClass('job-show');
        $(jobinfoitems).not(item).each(function(){
          $(this).removeClass('job-show');
        });
      };
      function previtemfunc(){
        let item = jobinfoitems.item(previtem);
        $(item).addClass('job-show');
        $(jobinfoitems).not(item).each(function(){
          $(this).removeClass('job-show');
        });
      };
      nextarrow.addEventListener('click', nextitemfunc );
      prevarrow.addEventListener('click', previtemfunc );
    });


  // make job an object with various properties
  // get all jobs and job data properties to display on timeline (name, role and years)
  // get line graph to add jobs to
  // function to - flag to make only one job display at once, add marker to line 

};


function careerprogress(){

  let item = progressline.querySelectorAll('.item');
  let itemlength = item.length-1;
  let meta = document.querySelectorAll('.item-meta');
  let collapse = 'progress__item--collapse';
  item.forEach(function(i, index){
    if(index != itemlength){
      $(i).addClass(collapse);
    } else {
      $(i).find('.item-meta').addClass('show');
    }
  });
  $(item).on('click',function(){
    $(this).removeClass(collapse);
    $(item).not(this).each(function(){
      $(this).addClass(collapse);
      $(this).find('.item-meta').removeClass('show');
    });
    $(this).find('.item-meta').addClass('show');
  });

  let jobs = document.querySelector('.jobs');
  let jobinfoitems = jobs.querySelectorAll('.job');

  jobinfoitems.forEach(function(i, index){
    let nextarrow = i.querySelector('.job__arrows--next');
    let prevarrow = i.querySelector('.job__arrows--prev');

    function nextitemfunc(){
      let thisitem = item[index+1];
      $(thisitem).removeClass(collapse);
      $(item).not(thisitem).each(function(){
        $(this).addClass(collapse);
        $(this).find('.item-meta').removeClass('show');
      });
      $(thisitem).find('.item-meta').addClass('show');
    };

    function previtemfunc(){
      let thisitem = item[index-1];
      $(thisitem).removeClass(collapse);
      $(item).not(thisitem).each(function(){
        $(this).addClass(collapse);
        $(this).find('.item-meta').removeClass('show');
      });
      $(thisitem).find('.item-meta').addClass('show');
    };

    nextarrow.addEventListener('click', nextitemfunc );
    nextarrow.addEventListener('focus', function(){
      document.addEventListener('keydown',function(evt){
        if( evt.key == 'Enter' ){
          nextitemfunc();
        };
      });
    });
    prevarrow.addEventListener('click', previtemfunc );
    //prevarrow.addEventListener('focus', previtemfunc );

  });

};



function readmore(){
  let readmore = aboutstatement.querySelector('.about__readmore');
  let morecontent = aboutstatement.querySelector('.about__more');
  let quote = document.querySelector('.about__quote');
  let open = false;
  readmore.addEventListener('click',function(){
    if (open == true){
      morecontent.classList.add('about__more--hide');
      morecontent.classList.remove('about__more--show');
      quote.classList.add('about__quote--hide');
      quote.classList.remove('about__quote--show');
      open = false;
    } else {
      morecontent.classList.remove('about__more--hide');
      morecontent.classList.add('about__more--show');
      quote.classList.remove('about__quote--hide');
      quote.classList.add('about__quote--show');
      $(readmore).fadeOut(200);
      open = true;
    }
  });
}

/*
var galleries = document.querySelectorAll('.gallery');
if ( (galleries.length != 0 && galleries != undefined ) ){
  galleries.forEach(function(){
    gallery(g);
  });
};
*/

var aboutstatement = document.querySelector('.about__statement');
if ( !(readmore == null) ){
  readmore();
}

var thejobs = document.querySelectorAll('.job');
if ( !(thejobs.length == 0) ){
  jobs();
};

let progressline = document.querySelector('.progress__items');
if ( !(progressline == null) ){
  careerprogress();
}

enableimagemobile();

if (matchMedia) {
  if (mq.matches) {
    grid();
  } else {
    gridallopen();
  };
};