$(document).ready(function(){
        var cambio = false;
        $('.navi a').each(function(index) {
            if(this.href.trim() == window.location){
                $(this).addClass(" active ");
                cambio = true;
            }
        });
        if(!cambio){
            $('.nav a:first').addClass("active");
        }
});
