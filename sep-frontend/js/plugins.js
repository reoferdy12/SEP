$(document).ready(function(){
   
   $('.cart-spin').TouchSpin({
      initval: 1,
      min:1
   });
   $('.cart-spin').on('touchspin.on.min', function () {
      $(this).closest('.product-add').find(".add-spin").show();
      $(this).closest('.product-add').find('.wrap-cart-spin').removeClass('active');
   });
   
   $(".add-spin").click(function () {
      $(this).parent().find(".wrap-cart-spin").addClass('active');
      $(this).hide();
   });

   // datenowpicker

   $(".size-tab a").click(function () {
      if (!$(this).hasClass("active")) {
         $(".size-tab a").removeClass("active");
         $(this).addClass("active");
         $(".tab-size-guide").hide();
         var selected_tab = $(this).attr("href");
         $(selected_tab).show();
      }
      return false;
   });

   $("#show-size-guide").click(function (e) {
      var sizeguideBox = $(".show-size-guide");
      if (sizeguideBox.is(":visible")) {
         sizeguideBox.slideUp();
         $(this).removeClass("active");
      } else {
         sizeguideBox.slideDown();
         $(this).addClass("active");
      }
   });
   

   $(".have-sub").click(function (e) {
      var subm_menu = $(this).find(".submenu");
      if (subm_menu.is(":visible")) {
         subm_menu.slideUp();
         $(".have-sub").removeClass("active");
      } else {
         subm_menu.slideDown();
         $(".have-sub").removeClass("active");
         $(this).addClass("active");
      }
   });

   $("#wsnavtoggle").click(function (e) {
      $("html").addClass("open-menu");
      setTimeout(function () {
         $(".boxmenu").addClass("active");
      }, 200);
      setTimeout(function () {
         $(".main-menu-mobile").addClass("active");
      }, 500);
      e.stopPropagation();
      $(".transparent-cat").fadeIn();
   });


   $("#icon-cart").click(function () {
      $("html").addClass("open-menu");
      $(".boxcart").addClass("active");
      $(".transparent-cat").fadeIn();
   });

   $(".select-size button").click(function () {
      $('.select-size button').removeClass('active');
      $(this).addClass('active');
      
   });


   $(".transparent-cat").click(function () {
      closenav();
      $(".transparent-cat").fadeOut();
   });


   function closenav() {
      $(".boxmenu").removeClass("active");
      $(".boxcart").removeClass("active");
      setTimeout(function () {
         $(".main-menu-mobile").removeClass("active");
      }, 200);
      setTimeout(function () {
         $("html").removeClass("open-menu");
      }, 500);

   }

   $(".top-close").click(function () {
      closenav();
      $(".transparent-cat").fadeOut();
   });
   $(".boxmenu").click(function (e) {
      e.stopPropagation();
   });


   

   $(".g-pass").on("click", function () {
      $(this).toggleClass('bi bi-eye-slash-fill');
      var inputField = $(this).parent().find(".inputPassword");
      var type = $(inputField).attr("type");
      if (type === "password") {
         $(inputField).attr("type", "text");
      } else {
         $(inputField).attr("type", "password");
      }
   });
	$(".product-order-by").on("click", function () {
      $(this).toggleClass("active");
   });

   function checkNumber(event) {
      var aCode = event.which ? event.which : event.keyCode;
      if (aCode > 31 && (aCode < 48 || aCode > 57)) return false;
      return true;
   }
   

    // uploadGallery
    $('#fileUpload').on('change', function(e) {
      var files = e.target.files;
      for (var i = 0; i < files.length; i++) {
         var file = files[i];
         if (typeof FileReader != "undefined") {
            if (file.type.startsWith('image/')) {
               displayImageThumbnail(file);
            }else {
               alert("Pls select only images");
            }
         }else{
            alert("This browser does not support FileReader.");
         }
      }
   });

   $(".form-select").change(function () {
      if($(this).val() == "") {
         $(this).addClass("placeholder-in");
      }
      else {
         $(this).removeClass("placeholder-in")
      }
   });

   $('#check-tax-all').click(function() {
      if($("#checkTaxinvoice").is(':checked'))
         $('.tax-elem').removeAttr('disabled');
      else
         $('.tax-elem').attr('disabled','disabled');
         $('.tax-elem').val('');
   });



   $(".form-search button").click(function(){
      if($(this).hasClass("active")) {
        $(this).removeClass("active");
        $(this).parent().find('.form-control').removeClass("active");
      }
      else{
        $(this).addClass("active");
        $(this).parent().find('.form-control').addClass("active");
        $(this).parent().find('.form-control').focus()
      }
   });

   
   function displayImageThumbnail(file) {
      var image_holder = $("#image-holder");
      var reader = new FileReader();
      reader.onload = function(e) {
         let wrapElement=$("<div />", { class: "wrap-image-holder",});
         let removeElement=$("<div class=\"remove-image\"></div>");
         var imageElement = $('<img />', { src: e.target.result, class: 'thumb-image' });
         image_holder.append(wrapElement.append(removeElement).append(imageElement));
         $(".remove-image").on( "click", function() {
            $(this).parent(".wrap-image-holder").remove();
         });
         browserImage();
      };
      reader.readAsDataURL(file);
      
   }
   function browserImage(){
      $(".remove-image").on( "click", function() {
         $(this).parent(".wrap-image-holder").remove();
      });
   }
   browserImage();

   // end documentready
});


