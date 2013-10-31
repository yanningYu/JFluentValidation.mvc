(function ($) {
    $.fn.NotNullWithCondition = function (errorMsg, triggerSelector, triggerEvent, triggerfn) {
        var selector = this;
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