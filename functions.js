// 这是一个master分支，所谓的master分支，只能提交没有bug的代码
// 从现在开始，由你和另一位小伙伴联合开发一些功能函数
// coding .......

// 在dev下开发，当函数能正常运行了，再和并到master分支上
function youPlay() {
    var winH = $(window).height();
    $("video").each(function() {
        var posTop = $(this).offset().top;
        var scrollH = $(window).scrollTop(); //浏览器滚动高度
        var targetH = $(this).height();
        var needShow = (posTop - winH + winH / 2) <= scrollH && scrollH <= (posTop - winH + winH / 2 + targetH);
        if (needShow) {
            $('video').each(function() {
                this.pause();
            })
            this.play();
        }
    })
}

// 不知道小伙伴已经修改过上面函数，在此情形下，我添加了另一个函数
function newFunction() {

}
