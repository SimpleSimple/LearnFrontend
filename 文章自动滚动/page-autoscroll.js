function fnAddEvent(obj, event, fn) {
    if (obj.attachEvent) obj.attachEvent('on' + event, fn);
    else { obj.addEventListener(event, fn) }
}

var interval = 20,
    timer = null;


function fnStartAutoScroll() {
    var topicsNode = document.getElementById('topics');
    if (!topicsNode) {
        console.log('not find topics node');
        return;
    }
    if (topicsNode) {
        var $btn = $("<input type='button' id='recomm_read' value='推荐滚动阅读'/>");
        $(".post .postTitle").append($btn);

        $(document).on("click", "#recomm_read", function() {
            if (timer) {
                return;
            }
            // console.log('1111');
            timer = setInterval(function() {
                document.body.scrollTop = window.scrollY + interval;
            }, 1000);
        })
    }

    document.body.onmousewheel = function() {
        window.clearInterval(timer);
        timer = null;
    }
}

if (typeof jQuery === 'undefined') {
    (function() {
        fnStartAutoScroll();
    })()
} else {
    $(function() {
        fnStartAutoScroll();
    })
}
