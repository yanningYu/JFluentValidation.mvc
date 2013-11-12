(function ($) {
    $.fn.Equal = function (fnComparedValue, errorMsg) {
        if (this.valid()) {
            jQuery.validator.addMethod("Equal", function (value, element, colName) {
                if (element.value == fnComparedValue()) {
                    return true;
                }
                return false;
            }, "{0}");

            this.each(function (index) {
                $(this).rules('add', {
                    Equal: errorMsg
                });
            });
        }
        return this;
    };
} (jQuery));