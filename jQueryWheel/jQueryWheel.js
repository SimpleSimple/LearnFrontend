function addEvent(obj, event, fn) {
    if (obj.attachEvent) {
        obj.attachEvent('on' + event, fn);
    } else {
        obj.addEventListener(event, fn, false);
    }
}

function jQueryWheel(args) {
    switch (typeof args) {
        case 'function':
            // window.onload = args;
            addEvent(window, 'load', args);
            break;
        case 'string':
            switch (args.charAt(0)) {
                case '#':
                    break;
            }
            break;
        default:
            break;
    }
}

jQueryWheel.prototype.hover = function(fnMouseOver, fnMouseOut) {
    if (arguments.length == 2) {

    } else {
        addEvent(this, 'mouseover', fnMouseOver);
    }
}