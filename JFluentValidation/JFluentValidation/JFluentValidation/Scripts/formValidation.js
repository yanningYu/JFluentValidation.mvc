$('document').ready(function () {
    if ($("#validationSummary .validation-summary-errors ul").children().length == 0) {
        $("#validationSummary div").attr("style", "display:none !important");
        $("#validationSummary div ul").attr("style", "display:none !important");
    } else {
        $("#validationSummary div").attr("style", "display:in-line");
        $("#validationSummary div ul").removeAttr('style');
    }

});
$('form').validate({
    errorContainer: $("#validationSummary div"),
    errorLabelContainer: $("#validationSummary div ul"),
    errorElement: 'li',
    wrapper: "",

    highlight: function (element, errorClass, validClass) {
        $(element).addClass('input-validation-error').removeClass(validClass);
        var errorElement = $('form').find("li[for=" + element.id + "]");
        errorElement.addClass(errorClass);

        if ($('.validation-summary-errors', errorElement.parent().parent().parent()).children().length == 0) {
            $('.validation-summary-valid', errorElement.parent().parent().parent()).attr('class', 'validation-summary-errors');
        }
    },

    unhighlight: function (element, errorClass, validClass) {
        $(element).removeClass('input-validation-error').addClass(validClass);
        $(element.form).find("li[for=" + element.id + "]").remove();
    },
    success: function (label) {
        if ($("#validationSummary .validation-summary-errors ul").children().length == 0) {
            $("#validationSummary div").attr("style", "display:none !important");
            $("#validationSummary div ul").attr("style", "display:none !important");
        } else {
            $("#validationSummary div").attr("style", "display:in-line");
            $("#validationSummary div ul").removeAttr('style');
        }
    },
    
     
      
    invalidHandler: function (event, validator) {
        var errors = validator.numberOfInvalids();
        if (errors) {
            $("#validationSummary div").attr('class', 'validation-summary-errors');
        } else {
            $("#validationSummary div").attr('class', 'validation-summary-valid');
        }
    }
});