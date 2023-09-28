 $(document).ready(function(){

		$(".idcard").keyup(function(){
			var len = $(this).val().length;
			if(len >= 13){
				$(this).mask("0-0000-00000-00-0");
			}else{
				$(this).mask("AAAAAAAAAAAAA");
			}
		});

		$(".idcard").each(function(){
			var len = $(this).val().length;

			if(len >= 13){
				$(this).mask("0-0000-00000-00-0");
			}else{
				$(this).mask("AAAAAAAAAAAAA");
			}
		});

		
	  $(".mobilephone").mask("000-000-0000");

 });
 




 String.prototype.toNumber = function() {
    return Number(this.replace(/[^0-9\.]+/g,""));
}

String.prototype.toCurrency = function(c, d, t){
var n = this, 
    c = isNaN(c = Math.abs(c)) ? 2 : c, 
    d = d == undefined ? "." : d, 
    t = t == undefined ? "," : t, 
    s = n < 0 ? "-" : "", 
    i = parseInt(n = Math.abs(+n || 0).toFixed(c)) + "", 
    j = (j = i.length) > 3 ? j % 3 : 0;
   return s + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : "");
 };

Number.prototype.toCurrency = function(c, d, t){
var n = this, 
    c = isNaN(c = Math.abs(c)) ? 2 : c, 
    d = d == undefined ? "." : d, 
    t = t == undefined ? "," : t, 
    s = n < 0 ? "-" : "", 
    i = parseInt(n = Math.abs(+n || 0).toFixed(c)) + "", 
    j = (j = i.length) > 3 ? j % 3 : 0;
   return s + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : "");
};