(function ($) {
    $.fn.NotEqualWithCondition = function (fnComparedValue, errorMsg, triggerSelector, triggerEvent, triggerfn) {
        var selector = this;
        jQuery.validator.addMethod("NotEqual", function (value, element, colName) {
            if (element.value != fnComparedValue()) {
                return true;
            }
            return false;
        }, "{0}");
       
        triggerSelector.live(triggerEvent, function () {
            if (triggerfn()) {
                if (selector.valid()) {
                    selector.each(function (index) {
                        $(this).rules('add', {
                            NotEqual: errorMsg
                        });
                    });
                }
            } else {
                selector.each(function (index) {
                    $(this).rules("remove", "NotEqual");
                });
            }

        });

        return this;
    };
} (jQuery));