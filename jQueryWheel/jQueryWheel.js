function addEvent(obj, event, fn) {
    if (obj.attachEvent) {
        obj.attachEvent('on' + event, fn);
    } else {
        obj.addEventListener(event, fn, false);
    }
}

function jQueryWheel(args) {
    this.elements = [];
    switch (typeof args) {
        case 'function':
            // window.onload = args;
            addEvent(window, 'load', args);
            break;
        case 'string':
            switch (args.charAt(0)) {
                case '#':
                    this.elements.push(document.getElementById(args.substring(1)));
                    break;
            }
            break;
        default:
            break;
    }
}

jQueryWheel.prototype.click = function(fn) {
	var i=0;
    for (i = 0; i < this.elements.length; i++) {
        addEvent(this.elements[i], 'click', fn);
    }
}

/**
 * @param  鼠标移入事件
 * @param  鼠标移出事件
 * @description 鼠标移入移出事件
 */
jQueryWheel.prototype.hover = function(fnMouseOver, fnMouseOut) {
    if (arguments.length == 2) {

    } else {
        addEvent(this, 'mouseover', fnMouseOver);
    }
}
