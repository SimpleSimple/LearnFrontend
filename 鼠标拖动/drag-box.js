function $$(id) {
    if (typeof id === 'string') {
        return document.getElementById(id);
    }
}


// var eventX = oEvent.clientX,
//     eventY = oEvent.clientY;
// var inputX = $$("x"),
//     inputY = $$("y");
// inputX.value = eventX;
// inputY.value = eventY;

function drag(id) {
    var dragBox = $$(id);
    dragBox.onmousedown = function(evt) {
        var oEvent = evt || event;
        var disX,
            disY; //鼠标与拖动物体的距离
        // dragBox.style.position = 'absolute';
        dragBox.style.cursor = 'pointer';
        disX = oEvent.clientX - dragBox.offsetLeft;
        disY = oEvent.clientY - dragBox.offsetTop;
        console.log('disX:' + disX);
        document.onmousemove = function(evt) {
            var oEvent = evt || event;
            var left = oEvent.clientX - disX;
            var top = oEvent.clientY - disY;
            if (left < 0) {
                left = 0;
            } else if (left > document.documentElement.clientWidth - dragBox.offsetWidth) {
                left = document.documentElement.clientWidth - dragBox.offsetWidth;
            } else if (top < 0) {
                top = 0;
            } else if (top > document.documentElement.clientHeight - dragBox.offsetHeight) {
                top = document.documentElement.clientHeight - dragBox.offsetHeight;
            } else if (left < 0 && top < 0) {
                left = 0;
                top = 0;
            }
            dragBox.style.left = left + 'px';
            dragBox.style.top = top + 'px';
        }

        document.onmouseup = function() {
            document.onmousemove = null;
            document.onmouseup = null;
        }
    }
}

window.onload = function() {
    drag('dragBox')
}
