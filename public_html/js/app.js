 $(document).foundation();
$(document).ready(function(){
    $(".skala > div").on("click", function(){
        $(".skala > div").removeClass("selected");
        $(this).addClass("selected");
    });
}); 