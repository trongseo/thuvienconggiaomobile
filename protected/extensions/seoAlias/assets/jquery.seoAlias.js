(function($){
    $.fn.extend({
        seoAlias: function(options) {
            var defaults = {
                target: 'tag'
            }
            var options =  $.extend(defaults, options);
            return this.each(function() {
                $(this).keyup(function(){
                    $(options.target).val($(this).val().toAlias());
                });
                $(this).change(function(){
                    $(options.target).val($(this).val().toAlias());
                });
            });
        }
    });
})(jQuery);