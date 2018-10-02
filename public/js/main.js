var getUrl = window.location;
var baseUrl = getUrl .protocol + "//" + getUrl.host + "/" + getUrl.pathname.split('/')[1];
console.log(baseUrl);

if(getUrl.pathname == '/'){
  displayall();
}

function displayall(){
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var data = JSON.parse(this.responseText);
      console.log('hola');
      for (var i = 0; i < data.length; i++) {
        document.getElementById('hot-jobs').innerHTML += '<div class="job-ad-item"><div class="item-info"><div class="item-image-box"><div class="item-image"><a href="job-details.html"><img src="images/job/3.png" alt="Image" class="img-responsive"></a></div></div><div class="ad-info"><span><a href="job-details.html" class=title>'+data[i].title+'</a> @ <a href="#">Nelliady</a></span><div class="ad-meta"><ul><li><a href="#"><i class="fa fa-map-marker" aria-hidden="true"></i>'+data[i].body+' </a></li><li><a href="#"><i class="fa fa-clock-o" aria-hidden="true"></i>5000/=</a></li></ul></div></div><div class="button"><a href="#" class="btn btn-primary">Hire Now</a></div></div></div>'
      }
    }
  };
  xhttp.open("GET", baseUrl+"articles/searchall", true);
  xhttp.send();
}


jQuery(function ($) {

  'use strict';

  // -------------------------------------------------------------
  //  Placeholder
  // -------------------------------------------------------------

  (function() {

    var textAreas = document.getElementsByTagName('textarea');

    Array.prototype.forEach.call(textAreas, function(elem) {
      elem.placeholder = elem.placeholder.replace(/\\n/g, '\n');
    });

  }());


  // -------------------------------------------------------------
  //  Show
  // -------------------------------------------------------------

  (function() {

    $("document").ready(function()
    {
      $(".more-category.one").hide();
      $(".show-more.one").click(function()
      {
        $(".more-category.one").show();
        $(".show-more.one").hide();
      });
    });

    $("document").ready(function()
    {
      $(".more-category.two").hide();
      $(".show-more.two").click(function()
      {
        $(".more-category.two").show();
        $(".show-more.two").hide();
      });
    });

    $("document").ready(function()
    {
      $(".more-category.three").hide();
      $(".show-more.three").click(function()
      {
        $(".more-category.three").show();
        $(".show-more.three").hide();
      });
    });

  }());


  // -------------------------------------------------------------
  //  Slider
  // -------------------------------------------------------------

  (function() {

    $('#price').slider();

  }());


  // -------------------------------------------------------------
  //  language Select
  // -------------------------------------------------------------

  (function() {

    $('.category-dropdown').on('click', '.category-change a', function(ev) {
      if ("#" === $(this).attr('href')) {
        ev.preventDefault();
        var parent = $(this).parents('.category-dropdown');
        parent.find('.change-text').html($(this).html());
      }
    });

  }());


  // -------------------------------------------------------------
  // Accordion
  // -------------------------------------------------------------

  (function () {
    $('.collapse').on('show.bs.collapse', function() {
      var id = $(this).attr('id');
      $('a[href="#' + id + '"]').closest('.panel-heading').addClass('active-faq');
      $('a[href="#' + id + '"] .panel-title span').html('<i class="fa fa-minus"></i>');
    });

    $('.collapse').on('hide.bs.collapse', function() {
      var id = $(this).attr('id');
      $('a[href="#' + id + '"]').closest('.panel-heading').removeClass('active-faq');
      $('a[href="#' + id + '"] .panel-title span').html('<i class="fa fa-plus"></i>');
    });
  }());


  // -------------------------------------------------------------
  //  Checkbox Icon Change
  // -------------------------------------------------------------

  (function () {

    $('input[type="checkbox"]').change(function(){
      if($(this).is(':checked')){
        $(this).parent("label").addClass("checked");
      } else {
        $(this).parent("label").removeClass("checked");
      }
    });

  }());


  // -------------------------------------------------------------
  //  select-category Change
  // -------------------------------------------------------------
  $('.select-category.post-option ul li a').on('click', function() {
    $('.select-category.post-option ul li.link-active').removeClass('link-active');
    $(this).closest('li').addClass('link-active');
  });

  $('.subcategory.post-option ul li a').on('click', function() {
    $('.subcategory.post-option ul li.link-active').removeClass('link-active');
    $(this).closest('li').addClass('link-active');
  });


  // script end
});
