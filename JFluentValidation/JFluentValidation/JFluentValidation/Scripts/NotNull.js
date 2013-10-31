(function($) {
    $.fn.NotNull = function (errorMsg) {
        if (this.valid()) {
            this.each(function(index) {
                $(this).rules('add', {
                    required: true,
                    messages: {
                        required: errorMsg
                    }
                });
            });
        }
        return this;
    };
}(jQuery));
