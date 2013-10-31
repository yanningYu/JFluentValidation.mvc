(function ($) {
    $.fn.IsPastDate = function (errorMsg) {
        if (this.valid()) {
            jQuery.validator.addMethod("IsPastDate", function (value, element, colName) {
                var selectedDate = Date.parse(element.value);
                var now = new Date();
                if (selectedDate < now) {
                    return true;
                }
                return false;
            }, "{0}");

            this.each(function (index) {
                $(this).rules('add', {
                    IsPastDate: errorMsg
                });
            });
        }
        return this;
    };
} (jQuery));