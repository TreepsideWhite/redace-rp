$(document).ready(function() {

    var previousStyle = '1px solid rgba(76, 159, 255, 0.3)';

    var dataAuth = [
        { 
            server: 101 
        }
    ];
    dataAuth.server = 101;

    $("#server-one").click(function() {
        $("#server-one").addClass("server-active");
        $("#server-two").removeClass("server-active");
	$("#adam-stream").removeClass("server-active");
        dataAuth.server = 101;
    })

    $("#server-two").click(function() {
        $("#server-two").addClass("server-active");
        $("#server-one").removeClass("server-active");
	$("#adam-stream").removeClass("server-active");
        dataAuth.server = 102;
    })

    $("#adam-stream").click(function() {
        $("#adam-stream").addClass("server-active");
        $("#server-one").removeClass("server-active");
	$("#server-two").removeClass("server-active");
        dataAuth.server = 65535;
    })

    $("#donate").click(function() {
        var username = $("#username");
        var sum = $("#sum");
        var email = $("#email");
	var message = $("#message");

        if(username.val().length == 0) {
            username.css('border', '1px solid red') 
            setTimeout(function() {
                username.css('border', previousStyle);
            }, 3000);
            return
        }

        if(sum.val().length == 0) {
            sum.css('border', '1px solid red') 
            setTimeout(function() {
                sum.css('border', previousStyle);
            }, 3000);
            return
        }

        if(!$.isNumeric(sum.val())) {
            sum.css('border', '1px solid red') 
            setTimeout(function() {
                sum.css('border', previousStyle);
            }, 3000);
            return
        }

        if(email.val().length == 0) {
            email.css('border', '1px solid red') 
            setTimeout(function() {
                email.css('border', previousStyle);
            }, 3000);
            return
        }

        $.ajax({
            url: "/scripts/donate.php",
            method: "POST",
            data: { 
                server: dataAuth.server, 
                email: email.val(),
                username: username.val(),
		message: message.val()
            },
            success: function(response) {
                if(response == 1) {
                    email.css('border', '1px solid red')
                    setTimeout(function() {
                        email.css('border', previousStyle);
                    }, 3000);
                }
                if(response == 2) {
                    username.css('border', '1px solid red')
                    setTimeout(function() {
                        username.css('border', previousStyle);
                    }, 3000);
                }
                if(response == 0) {
                    $("#server-numb").text("BONUS №" + dataAuth.server)

                    $("#nickname").text(username.val())
                    $("#summa").text(sum.val())
                    $("#mail").text(email.val())
		    $("#message").text(message.val())

                    $("#modal-box").fadeIn(300)
                    $("#modal-box").css('display', 'flex')
                }
            },
            error: function(error) {
              console.log(error);
            }
          });
    })

    $("#exit-modal").click(function(){
        $("#modal-box").fadeOut(300)
        $("#modal-box").css('display', 'none')
    })

    $("#card").click(function() {
        var account = $("#nickname").text()
        var username = $("#nickname").text()
        var sum = $("#summa").text()
	var message = $("#message").text()
        var server = $("#server-numb").text().replace(/\D/g, "");


        $.ajax({
            url: "/don/any.php",
            method: "POST",
            data: { 
                account: account,
                username: username,
                server: server,
                sum: sum,
		message: message
            },
            success: function(response) {
                window.location.href = response
            },
            error: function(error) {
              console.log(error);
            }
          });
    })

    $("#qiwi").click(function() {
        var account = $("#nickname").text()
        var username = $("#nickname").text()
        var sum = $("#summa").text()
	var message = $("#message").text()
        var server = $("#server-numb").text().replace(/\D/g, "");


        $.ajax({
            url: "/don/any.php",
            method: "POST",
            data: { 
                account: account,
                username: username,
                server: server,
                sum: sum,
		message: message
            },
            success: function(response) {
                window.location.href = response
            },
            error: function(error) {
              console.log(error);
            }
          });
    })
    
});