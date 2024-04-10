$(document).on('submit', '.form_idea',function (event){
    event.preventDefault();

    var text = $(".connect_textarea").val();
    let _token = $('meta[name="csrf-token"]').attr('content');
    var valid = true;
    if(text.length < 1){
       valid = false;
       $(".connect_textarea").css("border","2px solid red");
    }
    if(!valid ){
        return false;
    }
    $.ajax({
        url: "/public/sendemail",
        type: "post",
        data: {
            text:text,
            _token:_token
        },
        success:function (response) {
            $(".connect_form-button").addClass("active");
            $(".js-connect-button").blur();
        }

    });
});



$(document).on('submit', '.form1',function (event) {
    event.preventDefault();

    var thisis = $(this);
    var name = $("#name").text();
    var companyname = $("#companyname").text();
    var text = $("#text").text();
    var email = $("#email").text();
    let _token = $('meta[name="csrf-token"]').attr('content');


    $.ajax({
        url: "/public/sendemail2",
        type: "post",
        data: {
            name:name,
            companyname:companyname,
            email:email,
            text:text,
            _token:_token,
        },
        success: function (response) {
            thisis.addClass('done');
        },
        error: function (error) {
            $('#erroremail').text(error.responseJSON.message);
        }
    })

});


$(document).on('submit', '.contact-form',function (event) {
    event.preventDefault();

     var thisis = $(this);
     var name = $("#names").text();
     var phone = $("#phone").text();
     var cv = $("input[name=cv]",this);
     var token = $('meta[name="csrf-token"]').attr('content');
    let formData = new FormData();
    formData.append('name', name);
    formData.append('_token', token);
    formData.append('phone', phone);
    formData.append('cv', cv[0].files[0]);

    $.ajax({
        url: "/public/sendemail3",
        type: 'POST',
        data:formData,
        cache: false,
        processData: false,
        contentType: false,
        success: function (response) {
            thisis.addClass('done');
        },
        error: function (error) {
            $('#error').text(error.responseJSON.message);
        }
    })


});

