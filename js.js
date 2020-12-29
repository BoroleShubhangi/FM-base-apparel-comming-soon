$(document).ready(function()
{
    active=false;

    button_submit=$(".form__button");
    $(button_submit).click(click_submit_button);

});

function click_submit_button()
{
    var value=$(".form__email").val();
    if(value=="")
    {
        $(".form__error").text("The input field is empty");
        $(".form__error").css("display","block");
        $(".form__img-error").css("display","block");
    }
    if(value!="")
    {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        var bool=re.test(value); 

        if(bool==false)
        {
            $(".form__error").text("The email address is not formatted correctly");
            $(".form__error").css("display","block");
            $(".form__img-error").css("display","block");
        }
        else{
            $(".form__error").css("display","none");
            $(".form__img-error").css("display","none");
        }    
    }
    
       
    }