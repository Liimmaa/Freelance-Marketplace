$(document).ready(function(){
    $("#login").click(function(){
        var user = $("#user").val();
        var password = $("#password").val();
        var error = true;

        $.ajax({
            type: "POST",
            url: "data.js",
            dataType: "json",
            success: function(data){
                $.each(data, function(key, value){
                    if(user == value.username && password == value.password){
                        error = false;
                        
;                    }
                    else{
                        alert("Username or password incorrect");
                    }
                });
            }
        });console.log(error);
    });
});