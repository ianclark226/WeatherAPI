$(document).ready(function(){
    $('#submitWeather').click(function(){

        var city = $("#city").val();

        if(city != ''){

            $.ajax({

                url: "",
            })

        }else{
            $("#error").html('Field cannot be empty');
        }
    });
});