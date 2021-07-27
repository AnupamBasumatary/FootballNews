$(document).ready(function(){
    $nav = $('.nav');
    $toggleCollapse = $('.toggle-collapse');

    /*--click event on hamburger nav-- */
    $toggleCollapse.click(function(){
        $nav.toggleClass('collapse');
    })

});