(function ($) {
    $.fn.NotEqual = function (fn, errorMsg) {
        if (this.valid()) {
            jQuery.validator.addMethod("NotEqual", function (value, element, colName) {
                if (element.value != fn()) {
                    return true;
                }
                return false;
            }, "{0}");

            this.each(function (index) {
                $(this).rules('add', {
                    NotEqual: errorMsg
                });
            });
        }
        return this;
    };
} (jQuery));