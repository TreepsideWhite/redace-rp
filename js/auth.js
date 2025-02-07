$(document).ready(function() {

    var previousStyle = '1px solid rgba(76, 159, 255, 0.3)';

    var dataAuth = [
        { 
            server: 1 
        }
    ];
    dataAuth.server = 1;

    $("#server-one").click(function() {
        $("#server-one").addClass("server-active");
        $("#server-two").removeClass("server-active");
        dataAuth.server = 1;
    })

    $("#server-two").click(function() {
        $("#server-two").addClass("server-active");
        $("#server-one").removeClass("server-active");
        dataAuth.server = 2;
    })

    $("#login").click(function() {
        var username = $("#username");
        var password = $("#password");

        if(username.val().length == 0) {
            username.css('border', '1px solid red') 
            setTimeout(function() {
                username.css('border', previousStyle);
            }, 3000);
            return
        }

        if(password.val().length == 0) {
            password.css('border', '1px solid red')
            setTimeout(function() {
                password.css('border', previousStyle);
            }, 3000); 
            return
        }

        $.ajax({
            url: "/scripts/auth.php",
            method: "POST",
            data: { 
                server: dataAuth.server, 
                username: username.val(),
                password: password.val()
            },
            success: function(response) {
                if(response == 1) {
                    username.css('border', '1px solid red')
                    setTimeout(function() {
                        username.css('border', previousStyle);
                    }, 3000);
                }
                if(response == 2) {
                    password.css('border', '1px solid red')
                    setTimeout(function() {
                        password.css('border', previousStyle);
                    }, 3000);
                }
                if(response == 0) {
                    window.location.href = "/profile/";
                }
            },
            error: function(error) {
              console.log(error);
            }
          });
    })
    
});