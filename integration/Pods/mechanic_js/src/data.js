//     mechanic.js
//     Copyright (c) 2012 Jason Kozemczak
//     mechanic.js may be freely distributed under the MIT license.

(function($) {
    var app = UIATarget.localTarget().frontMostApp();
    $.extend($.fn, {
        name: function() { return (this.length > 0) ? this[0].name() : null; },
        label: function() { return (this.length > 0) ? this[0].label() : null; },
        value: function() { return (this.length > 0) ? this[0].value() : null; },
        isFocused: function() { return (this.length > 0) ? this[0].hasKeyboardFocus() : false; },
        isEnabled: function() { return (this.length > 0) ? this[0].isEnabled() : false; },
        isVisible: function() { return (this.length > 0) ? this[0].isVisible() : false; },
        isValid: function(certain) {
            if (this.length != 1) return false;
            else if (certain) return this[0].checkIsValid();
            else return this[0].isValid();
        }
    });

    $.extend($, {
        version: function() {
            return app.version();
        },
        bundleID: function()  {
            return app.bundleID();
        },
        prefs: function(prefsOrKey) {
            // TODO: should we handle no-arg version that returns all prefs???
            if (typeof prefsOrKey == 'string') return app.preferencesValueForKey(prefsOrKey);
            else {
                $.each(prefsOrKey, function(key, val) {
                    app.setPreferencesValueForKey(val, key);
                });
            }
        }
    });

})(mechanic);
