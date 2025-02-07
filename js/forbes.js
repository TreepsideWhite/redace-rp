$(document).ready(function() {

$("#server-one").click(function() {
    $("#server-one").addClass("server-active");
    $("#server-two").removeClass("server-active");

    $("#top-one").css('display', 'block')
    $("#top-two").css('display', 'none')
})

$("#server-two").click(function() {
    $("#server-two").addClass("server-active");
    $("#server-one").removeClass("server-active");

    $("#top-one").css('display', 'none')
    $("#top-two").css('display', 'block')
})

$("#money").click(function() {
    $("#forbes").css('display', 'flex')
    $("#level").css('display', 'none')

    $("#money").addClass("fill")
    $("#money").removeClass("trans")
    $("#exp").addClass("trans")
    $("#exp").removeClass("fill")
})
    
$("#exp").click(function() {
    $("#forbes").css('display', 'none')
    $("#level").css('display', 'block')

    $("#exp").addClass("fill")
    $("#exp").removeClass("trans")
    $("#money").addClass("trans")
    $("#money").removeClass("fill")
})


$("#money2").click(function() {
    $("#forbes2").css('display', 'flex')
    $("#level2").css('display', 'none')

    $("#money2").addClass("fill")
    $("#money2").removeClass("trans")
    $("#exp2").addClass("trans")
    $("#exp2").removeClass("fill")
})
    
$("#exp2").click(function() {
    $("#forbes2").css('display', 'none')
    $("#level2").css('display', 'block')

    $("#exp2").addClass("fill")
    $("#exp2").removeClass("trans")
    $("#money2").addClass("trans")
    $("#money2").removeClass("fill")
})

});