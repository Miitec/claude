(function(window)
{
    "use strict";

    APP.COMPONENTS.Widget = APP.CORE.Event_Emitter.extend(
    {
        options:
        {

        },

        /**
         * INIT
         */
        init: function(options)
        {
            this._super(options);

            this.unique = true;
            this.name   = 'Widget';
            this.id     = 0;
        },

        /**
         * START
         */
        start: function()
        {

        }
    });
})(window);
