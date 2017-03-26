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
        dragBox.style.position = 'absolute';
        dragBox.style.cursor = 'pointer';
        disX = oEvent.clientX - dragBox.offsetLeft;
        disY = oEvent.clientY - dragBox.offsetTop;
console.log('disX:'+disX);
        document.onmousemove = function(evt) {
            var oEvent = evt || event;
            dragBox.style.left = oEvent.clientX - disX + 'px';
            dragBox.style.top = oEvent.clientY - disY + 'px';
        }

        document.onmouseup = function() {
            dragBox.onmousedown = null;
            document.onmousemove = null;
        }
    }
}

window.onload = function() {
    drag('dragBox')
}
