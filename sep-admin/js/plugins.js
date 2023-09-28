(function ($) {

    $("#wsnavtoggle").click(function () {
        if ($(this).hasClass('active')) {
          $(this).removeClass('active');
          $(".sidebarnav").removeClass('hidemenu');
        }
        else{
          $("#wsnavtoggle").addClass('active');
          $(".sidebarnav").addClass('hidemenu');
        }
    });
   
   //  eye password
   $(".g-pass").on("click", function () {
      $(this).toggleClass("bi bi-eye-slash-fill");
      let inputField = $(this).parent().find(".inputPassword");
      let type = $(inputField).attr("type");
      if (type === "password") {
            $(inputField).attr("type", "text");
      } else {
            $(inputField).attr("type", "password");
      }
   });
   // accordionSidebar
   $("#accordionSidebar h2").click(function () {
      if ($(this).hasClass('active')) {
        $(this).removeClass('active');
        $(this).parent().find(".submenu").slideUp(200);
      }
      else{
        $(this).addClass('active');
        $(this).parent().find(".submenu").slideDown(200);
      }
   });
   //currency
   $("input[data-type='currency']").on({
      keyup: function () {
         formatCurrency($(this));
      },
      blur: function () {
         validateCurrency($(this));
         formatCurrency($(this), "blur");
      },
   });
   // clear data in modal

   $("button[data-bs-dismiss='modal']").click(function () {
      console.log('test');
      $(this).closest('.form-main').find('input.form-control').val('');
   });
   
   function validateCurrency(input) {
      var c = parseFloat(input.val().replace(/\,|$/g, "").replace("$", ""));
      if (c < input.attr("min")) {
         input.val(input.attr("min"));
      } else if (c > input.attr("max")) {
         input.val(input.attr("max"));
      }
   }
   function formatNumber(n) {
      // format number 1000000 to 1,234,567
      return n.replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ",");
   }
   
   function formatCurrency(input, blur) {
      // appends $ to value, validates decimal side
      // and puts cursor back in right position.
   
      // get input value
      var input_val = input.val();
   
      // don't validate empty input
      if (input_val === "") {
         return;
      }
   
      // original length
      var original_len = input_val.length;
   
      // initial caret position
      var caret_pos = input.prop("selectionStart");
   
      // check for decimal
      if (input_val.indexOf(".") >= 0) {
         // get position of first decimal
         // this prevents multiple decimals from
         // being entered
         var decimal_pos = input_val.indexOf(".");
   
         // split number by decimal point
         var left_side = input_val.substring(0, decimal_pos);
         var right_side = input_val.substring(decimal_pos);
   
         // add commas to left side of number
         left_side = formatNumber(left_side);
   
         // validate right side
         right_side = formatNumber(right_side);
   
         // On blur make sure 2 numbers after decimal
         if (blur === "blur") {
            right_side += "00";
         }
   
         // Limit decimal to only 2 digits
         right_side = right_side.substring(0, 2);
   
         // join number by .
         input_val = left_side + "." + right_side;
      } else {
         // no decimal entered
         // add commas to number
         // remove all non-digits
         input_val = formatNumber(input_val);
   
         // final formatting
         if (blur === "blur") {
            input_val += ".00";
         }
      }
   
      // send updated string to input
      input.val(input_val);
   
      // put caret back in the right position
      var updated_len = input_val.length;
      caret_pos = updated_len - original_len + caret_pos;
      // input[0].setSelectionRange(caret_pos, caret_pos);
   }
   // datenowpicker
   $('input[name="now-dates"]').daterangepicker({
      singleDatePicker: true,
      autoApply: true,
      
      locale: {
         format: 'DD/MM/YYYY'
       }
   });
   //datetime
   $('.date-time').daterangepicker({
      singleDatePicker: true,
      autoApply: true,
      timePicker: true,
      autoUpdateInput: false,
      alwaysShowCalendars: true,
      showDropdowns: true,
   });
   $('.date-time').on('apply.daterangepicker',function(ev, picker) {
      $(this).val(picker.startDate.format('DD/MM/YYYY hh:mm a'));
  });
  $('.date-time').on('cancel.daterangepicker', function(ev, picker) {
      $(this).val('');
  });
  //datetime
   $('.date-picker').daterangepicker({
      singleDatePicker: true,
      autoApply: true,
      autoUpdateInput: false,
      alwaysShowCalendars: true,
      showDropdowns: true,
   });

   $('.date-picker').on('apply.daterangepicker',function(ev, picker) {
      $(this).val(picker.startDate.format('DD/MM/YYYY'));
  });


   
   $('.has-placeholder').on('apply.daterangepicker',function(ev, picker) {
      $(this).val(picker.startDate.format('DD/MM/YYYY'));
  });

  $('.has-placeholder').on('cancel.daterangepicker', function(ev, picker) {
      $(this).val('');
  });

  $(".date-calendar").daterangepicker({
      autoApply: true,
      autoUpdateInput: false,
      alwaysShowCalendars: true,
      showDropdowns: true,
      "locale": {
         "format": "MM/DD/YYYY",
         "separator": " - ",
         "applyLabel": "Apply",
         "cancelLabel": "Cancel",
         "fromLabel": "From",
         "toLabel": "To",
         "customRangeLabel": "Custom",
         "weekLabel": "W",
         "daysOfWeek": [
             "Su",
             "Mo",
             "Tu",
             "We",
             "Th",
             "Fr",
             "Sa"
         ],
         "monthNames": [
             "January",
             "February",
             "March",
             "April",
             "May",
             "June",
             "July",
             "August",
             "September",
             "October",
             "November",
             "December"
         ],
         "firstDay": 1
     }
   })
   .on("apply.daterangepicker", function (ev, picker) {
      var checkin = picker.startDate.format("DD/MM/YYYY"); // hh:mm A
      var checkout = picker.endDate.format("DD/MM/YYYY");

      // var text_checkin = picker.startDate.format("MMM D, YYYY");
      // var text_checkout = picker.endDate.format("MMM D, YYYY");

      $(".txtcalendarin").val(checkin);
      $(".txtcalendarout").val(checkout);

      // $(".calendar-text-in").val(text_checkin);
      // $(".calendar-text-out").val(text_checkout);
   });
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

   // tab access
   $(".access-tab").not(".not-tab").click(function(event) {
      if (!$(this).hasClass("active")) {
        $(this).closest(".access-check").find(".access-tab").removeClass("active");
        $(this).addClass("active");
      }
      return false;
   });
   $(".form-check-input,.form-check-label").click(function(event){
      event.stopPropagation();
      //do something here
   });
   
})(jQuery);




function checkNumber(event) {
   var aCode = event.which ? event.which : event.keyCode;
   if (aCode > 31 && (aCode < 48 || aCode > 57)) return false;
   return true;
}


(() => {
   'use strict'
 
   // Fetch all the forms we want to apply custom Bootstrap validation styles to
   const forms = document.querySelectorAll('.needs-validation')
 
   // Loop over them and prevent submission
   Array.from(forms).forEach(form => {
     form.addEventListener('submit', event => {
       if (!form.checkValidity()) {
         event.preventDefault()
         event.stopPropagation()
       }
 
       form.classList.add('was-validated')
     }, false)
   })
})()

$(".not-validate").change(function () {
   if($(this).val() == "0") {
      $(this).addClass("not-change");
   }
   else {
      $(this).removeClass("not-change")
   }

   if($(this).val() == "promotionCode") {
      $('#promocode').removeAttr("disabled");
   }
   else{
      $('#promocode').attr("disabled","disabled");
      $('#promocode').val('');
   }
});
$(".not-validate").change();


// $(".table-responsive").mousewheel(function(event, delta) {
//    this.scrollLeft -= (delta * 30);
//    event.preventDefault();
// });



