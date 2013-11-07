(function ($) {
    $.fn.NotNullWithCondition = function (errorMsg, triggerSelector, triggerEvent, triggerfn) {
        var selector = this;
        jQuery.validator.addMethod("NotEqual", function (value, element, colName) {
            if (element.value == null || element.value == '') {
                return true;
            }
            if (!isNaN(Date.parse(element.value))) {
                return true;
            }
            return false;
        }, "{0}");
       
        triggerSelector.live(triggerEvent, function () {
            if (triggerfn()) {
                if (selector.valid()) {
                    selector.each(function (index) {
                        $(this).rules('add', {
                            required: true,
                            messages: {
                                required: errorMsg
                            }
                        });
                    });
                }
            } else {
                selector.each(function (index) {
                    $(this).rules("remove", "required");
                });
            }

        });

        return this;
    };
} (jQuery));