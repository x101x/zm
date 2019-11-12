//flexiable.js 移动端适配的库
// rem  => html  fs
//根据不同的屏幕大小 去计算不同的 HTML font-size
(function(win,doc){
    const cal= function(){
        const w = doc.documentElement.clientWidth;
        //宽375
        doc.documentElement.style.fontSize= 100*(w/375)+'px';
        doc.body.style.fontSize='16px'
    }
    cal()
})(window,document)