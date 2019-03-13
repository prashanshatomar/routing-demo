$(document).on("click" , ".toggleBtn", function(){

    if ( $("#bodyWrapper").is(".active") ) {
        $("#bodyWrapper").removeClass("active")
    }
    else { 
        $("#bodyWrapper").addClass("active")
    }

}) 

$(document).on("blur" , ".dvceToolTipCntr,.usrToolTipCntr", function(){

    
    setTimeout( function(){ 
        $(".dvcePopInfBox").remove();
        $(".usrPopInfBox").remove();


    },1000 )

}) 
