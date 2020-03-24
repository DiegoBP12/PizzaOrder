(function ($) {
    "use strict";

    /*==================================================================
    [ Validate after type ]*/
    $('.validate-input .input100').each(function () {
        $(this).on('blur', function () {
            if (validate(this) == false) {
                showValidate(this);
            } else {
                $(this).parent().addClass('true-validate');
            }
        })
    })

    $('.validate-input-email .input100').each(function () {
        $(this).on('blur', function () {
            if (validateEmail(this) == false) {
                showValidate(this);
            } else if ($(this).val().trim() != '') {
                $(this).parent().addClass('true-validate');
            }
        })
    })

    $('.validate-input-phone .input100').each(function () {
        $(this).on('blur', function () {
            if (validatePhone(this) == false) {
                showValidate(this);
            } else {
                $(this).parent().addClass('true-validate');
            }
        })
    })
    $('.validate-input-zip .input100').each(function () {
        $(this).on('blur', function () {
            if (validateZip(this) == false) {
                showValidate(this);
            } else {
                $(this).parent().addClass('true-validate');
            }
        })
    })
    /*==================================================================
    [ Validate ]*/
    var input = $('.validate-input .input100');
    var inputE = $('.validate-input-email .input100');
    var inputP = $('.validate-input-phone .input100');
    var inputZ = $('.validate-input-zip .input100');


    $('.validate-form').on('submit', function () {
        var check = true;


        for (var i = 0; i < input.length; i++) {
            if (validate(input[i]) == false) {
                showValidate(input[i]);
                check = false;
            }
        }
        for (i = 0; i < inputE.length; i++) {
            if (validateEmail(inputE[i]) == false) {
                showValidate(inputE[i]);
                check = false;
            }
        }

        for (i = 0; i < inputP.length; i++) {

            if (validatePhone(inputP[i]) == false) {
                showValidate(inputP[i]);
                check = false;
            }
        }

        for (i = 0; i < inputZ.length; i++) {
            if (validateZip(inputZ[i]) == false) {
                showValidate(inputZ[i]);
                check = false;
            }
        }
        if (check) {
            confirmOrder();
        }

        return check;

    });


    $('.validate-form .input100').each(function () {
        $(this).focus(function () {
            hideValidate(this);
            $(this).parent().removeClass('true-validate');
        });
    });

    function validate(input) {
        if ($(input).val().trim() == '') {
            return false;
        }
    }

    function validateEmail(input) {
        if ($(input).val() == '') {
            return true;
        }
        if ($(input).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
            return false;
        }
    }


    function validatePhone(input) {
        if ($(input).val() == '') {
            return false;
        }
        if ($(input).val().trim().match(/^\+?([0-9]{2})?[-. ]?([0-9][-. ]?){10}$/) == null) {
            return false;
        }
    }

    function validateZip(input) {
        if ($(input).val() == '') {
            return false;
        }
        if ($(input).val().trim().match(/^([0-9][-. ]?){5}$/) == null) {
            return false;
        }
    }


    function showValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).addClass('alert-validate');

        $(thisAlert).append('<span class="btn-hide-validate">&#xf136;</span>')
        $('.btn-hide-validate').each(function () {
            $(this).on('click', function () {
                hideValidate(this);
            });
        });
    }

    function hideValidate(input) {
        var thisAlert = $(input).parent();
        $(thisAlert).removeClass('alert-validate');
        $(thisAlert).find('.btn-hide-validate').remove();
    }



})(jQuery);