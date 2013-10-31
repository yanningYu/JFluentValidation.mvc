(function ($) {
    $.fn.isPastDate = function (errorMsg) {
        if (this.valid()) {
            jQuery.validator.addMethod("isPastDate", function (value, element, colName) {
                var selectedDate = Date.parse(element.value);
                var now = new Date();
                if (selectedDate < now) {
                    return true;
                }

                return false;
            }, "{0}");

            this.each(function (index) {
                $(this).rules('add', {
                    isPastDate: errorMsg
                });
            });
        }
        return this;
    };
} (jQuery));