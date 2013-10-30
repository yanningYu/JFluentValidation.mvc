(function ($) {
    $.fn.notNull = function (condition, errorMsg) {
        if (this.valid()) {
            this.each(function (index) {
                $(this).rules('add', {
                    required: condition,
                    messages: {
                        required: errorMsg
                    }
                });
            });
        }
        return this;
    };
} (jQuery));