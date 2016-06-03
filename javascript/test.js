//限制字符个数
    var setMaxWordLength=function(len) {
        if (len == null || len == undefined) {
            len = 80
        }
        $("#result-list>li").find('p').each(function() {
            var maxwidth = len;
            if ($(this).text().length > maxwidth) {
                $(this).text($(this).text().substring(0,
                    maxwidth));
                $(this).html($(this).html() + '...');
            }
        });
    }
    setMaxWordLength(80);
