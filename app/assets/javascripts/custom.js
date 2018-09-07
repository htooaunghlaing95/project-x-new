/*
 * Navbar background changed when scrolled
 */
$(document).ready(function(){
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if (scroll > 300) {
            $("#mainNav").addClass("scrolled");
        }
        else{
            $("#mainNav").removeClass("scrolled");
        }
    })
})




