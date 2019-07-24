var functions = function() {

  function readmore() {
    $(".about__readmore").on("click", function() {
      $(this).fadeOut(150);
      setTimeout(function() {
        $(".about__more").addClass("js-show");
        $(".about__quote").addClass("js-show");
      }, 200);
    });
  }

  function jobs() {
    var thejobs = document.querySelectorAll(".job");
    var timeline = document.querySelector(".progress__items");

    function addnewjob(arg1, arg2, arg3) {
      var structure = `<div class="progress__item item">
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
      </div>`;
      var newelement = $(timeline).append(structure);
    }

    thejobs.forEach(function(i) {
      var company = i.querySelector(".job__details__company").innerHTML;
      var role = i.querySelector(".job__details__role").innerHTML;
      var dates = i.querySelector(".job__details__date").innerHTML;
      addnewjob(company, role, dates);
    });

    var timelineitems = timeline.querySelectorAll(".item");
    var jobs = document.querySelector(".jobs");
    var jobinfoitems = jobs.querySelectorAll(".job");
    var jobinfoitemslength = jobinfoitems.length;
    var jobinfoitemslast = jobs.lastElementChild;
    var jobinfoitemsfirst = jobs.firstElementChild;
    $(jobinfoitemslast).addClass("job-show job-last");
    $(jobinfoitemsfirst).addClass("job-first");

    timelineitems.forEach(function(e, index) {
      e.addEventListener("click", function() {
        var item = jobinfoitems.item(index);
        $(item).addClass("job-show");
        $(jobinfoitems)
          .not(item)
          .each(function() {
            $(this).removeClass("job-show");
          });
      });
    });
    jobinfoitems.forEach(function(i, index) {
      var nextarrow = i.querySelector(".job__arrows--next");
      var prevarrow = i.querySelector(".job__arrows--prev");
      var previtem = index - 1;
      var nextitem = index + 1;
      function nextitemfunc() {
        var item = jobinfoitems.item(nextitem);
        $(item).addClass("job-show");
        $(jobinfoitems)
          .not(item)
          .each(function() {
            $(this).removeClass("job-show");
          });
      }
      function previtemfunc() {
        var item = jobinfoitems.item(previtem);
        $(item).addClass("job-show");
        $(jobinfoitems)
          .not(item)
          .each(function() {
            $(this).removeClass("job-show");
          });
      }
      nextarrow.addEventListener("click", nextitemfunc);
      prevarrow.addEventListener("click", previtemfunc);
    });
  }

  function careerprogress() {
    var progressline = document.querySelector(".progress__items");
    let item = progressline.querySelectorAll(".item");
    let itemlength = item.length - 1;
    let meta = document.querySelectorAll(".item-meta");
    let collapse = "progress__item--collapse";
    item.forEach(function(i, index) {
      if (index != itemlength) {
        $(i).addClass(collapse);
      } else {
        $(i)
          .find(".item-meta")
          .addClass("show");
      }
    });
    $(item).on("click", function() {
      $(this).removeClass(collapse);
      $(item)
        .not(this)
        .each(function() {
          $(this).addClass(collapse);
          $(this)
            .find(".item-meta")
            .removeClass("show");
        });
      $(this)
        .find(".item-meta")
        .addClass("show");
    });

    let jobs = document.querySelector(".jobs");
    let jobinfoitems = jobs.querySelectorAll(".job");

    jobinfoitems.forEach(function(i, index) {
      let nextarrow = i.querySelector(".job__arrows--next");
      let prevarrow = i.querySelector(".job__arrows--prev");

      function nextitemfunc() {
        let thisitem = item[index + 1];
        $(thisitem).removeClass(collapse);
        $(item)
          .not(thisitem)
          .each(function() {
            $(this).addClass(collapse);
            $(this)
              .find(".item-meta")
              .removeClass("show");
          });
        $(thisitem)
          .find(".item-meta")
          .addClass("show");
      }

      function previtemfunc() {
        let thisitem = item[index - 1];
        $(thisitem).removeClass(collapse);
        $(item)
          .not(thisitem)
          .each(function() {
            $(this).addClass(collapse);
            $(this)
              .find(".item-meta")
              .removeClass("show");
          });
        $(thisitem)
          .find(".item-meta")
          .addClass("show");
      }

      nextarrow.addEventListener("click", nextitemfunc);
      nextarrow.addEventListener("focus", function() {
        document.addEventListener("keydown", function(evt) {
          if (evt.key == "Enter") {
            nextitemfunc();
          }
        });
      });
      prevarrow.addEventListener("click", previtemfunc);
    });
  }

  function homegrid() {
    setTimeout(function() {
      $(".grid-work__item").fadeIn(200);
    }, 200);
  }

  function menu() {
    function lockview() {
      $("html").addClass("noscroll");
    }
    function unlockview() {
      $("html").removeClass("noscroll");
    }
    function menu_open() {
      $(".js-menu-button").attr("aria-pressed", true).attr("aria-expanded", true);
      $(".js-menu").addClass("visible");
      $(".js-menu-button").text('Close menu');
      lockview();
    }
    function menu_close() {
      $(".js-menu-button").attr("aria-pressed", false).attr("aria-expanded", false);
      $(".js-menu").removeClass("visible");
      $(".js-menu-button").text('Menu');
      unlockview();
    }
    $(".js-menu-button").on("click", function() {
      if ($(".js-menu").hasClass("visible")) {
        menu_close();
      } else {
        menu_open();
      }
    });
    $(document).on("keyup", function(e) {
      if ($(".js-menu").hasClass("visible") && e.key == "Escape") {
        menu_close();
      }
    });
  }

  function flickity(){

    var slides = document.querySelectorAll('.flickity-slides');
    slides.forEach(function(i){
      var images = i.querySelectorAll('img');
      function whenloaded(){
        i.classList.add('loaded');
        var flkty = new Flickity(i, {
        // options
        cellAlign: 'left',
        contain: true,
        pageDots: false,
        });
      };
      imagesLoaded(images, function(){
        whenloaded();
      });
    });

    var slides = document.querySelectorAll('.flickity-slides-fade');
    slides.forEach(function(i){
      var images = i.querySelectorAll('img');
      function whenloaded(){
        i.classList.add('loaded');
        var flkty = new Flickity(i, {
          // options
          cellAlign: 'left',
          contain: true,
          pageDots: false,
          autoPlay: 2500,
          fade: true,
          prevNextButtons: false,
          pauseAutoPlayOnHover: false,
          draggable: false
        });
      };
      imagesLoaded(images, function(){
        whenloaded();
      });
    });

  }


  return{
    readmore: readmore,
    jobs: jobs,
    careerprogress: careerprogress,
    homegrid: homegrid,
    menu: menu,
    flickity: flickity
  }

}