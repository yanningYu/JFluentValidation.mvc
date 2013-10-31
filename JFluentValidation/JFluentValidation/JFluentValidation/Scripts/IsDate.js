(function ($) {
    $.fn.IsDate = function (errorMsg) {
        if (this.valid()) {
            jQuery.validator.addMethod("IsDate", function (value, element, colName) {
                if (element.value == null || element.value == '') {
                    return true;
                }
                if (!isNaN(Date.parse(element.value))) {
                    return true;
                }
                return false;
            }, "{0}");

            this.each(function (index) {
                $(this).rules('add', {
                    IsDate: errorMsg
                });
            });
        }
        return this;
    };
} (jQuery));