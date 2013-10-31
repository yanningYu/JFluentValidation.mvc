(function ($) {
    $.fn.isDateType = function (errorMsg) {
        if (this.valid()) {
            jQuery.validator.addMethod("isDateType", function (value, element, colName) {
                if (element.value == null || element.value == '') {
                    return true;
                }
                if (Date.parse(element.value)!= null) {
                    return true;
                }
                return false;
            }, "{0}");

            this.each(function (index) {
                $(this).rules('add', {
                    isDateType: errorMsg
                });
            });
        }
        return this;
    };
} (jQuery));