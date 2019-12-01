layui.use(["util", "layer", "code"], function(){
    var layer = layui.layer
        ,util = layui.util
        ,device = layui.device();

    // 阻止IE7以下访问
    if( device.ie && device.ie < 8){
        layer.alert("请使用IE8+以上版本访问")
    }
    // 代码修饰器
    layui.code({
        encode: true,
        about: false
    });
    // 固定位置
    util.fixbar({
        bar1: false
        ,bar2: false
        ,bgcolor: "#00C1DE"
    });
    //nav
    $("#mnavh").click(function(){
        $("#starlist").toggle();
        $("#mnavh").toggleClass("open");
    });
    //搜索
    $('.searchicon').on('click', function(){
        layer.open({
            type: 1
            ,title: false
            ,closeBtn: false
            //,shade: [0.1, '#fff']
            ,shadeClose: true
            ,maxWidth: 10000
            ,skin: 'fly-layer-search'
            ,content: ['<form action="https://www.baidu.com/s">'
                ,'<input autocomplete="off" placeholder="搜索内容，回车跳转" type="text" name="wd">'
                ,'</form>'].join('')
            ,success: function(layero){
                var input = layero.find('input');
                input.focus();

                layero.find('form').submit(function(){
                    var val = input.val();
                    if(val.replace(/\s/g, '') === ''){
                        return false;
                    }
                    input.val('site:ainiok.com '+ input.val());
                });
            }
        })
    });
})