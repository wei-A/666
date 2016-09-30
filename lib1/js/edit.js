/* 
* @Author: Marte
* @Date:   2016-09-30 09:39:39
* @Last Modified by:   Marte
* @Last Modified time: 2016-09-30 18:29:56
*/

$(document).ready(function(){
    $(document).bind("selectstart",function(){
        // return false;
    })
    $(document).bind("dblclick",function(e){
        // e.preventDefault();
        var e = e || e.event;
        var target = e.target || e.srcElement;
        console.log(target);
        if(target.className == "shop-title" || target.tagName == "SPAN"){
            target.setAttribute("contenteditable","true");
        }
    })
var top_ele ;
    // $(document).find("img").on("click",function(e){
    //      var e = e || e.event;
    //      var target = e.target || e.srcElement;
    //      console.log(111);
    //      $(".input")[0].click();
    //      top_ele = target;
    //      // e.stopPropagation();
    // })
    document.onclick = function(e){
        var e = e || e.event;
        var target = e.target || e.srcElement;
        // console.log(target.tagName);
        if(target.tagName == "IMG"){
             top_ele = target;
            document.getElementsByClassName("input")[0].click();
        }
    }
    $(".input").on("change",function(e){
        var e = e || e.event;
        var target = e.target || e.srcElement;
        console.log(this.files);
        var file = this.files;
        var url = window.URL || window.webkitURL;
                if(url) {
                    var src = url.createObjectURL(file[0]);
                    console.log(src);
                    top_ele.src = src;
                }else if(window.FileReader) {
                    var fr = new FileReader();
                    fr.readAsDataURL(files[0]);//将图片文件转换成base64位
                    console.log(this.result);
                    top_ele.src = this.result;
                }
             
    })
});

//编码和解码
    function encodeUTF8(str){
    var temp = "",rs = "";
    for( var i=0 , len = str.length; i < len; i++ ){
        temp = str.charCodeAt(i).toString(16);
        rs  += "\\u"+ new Array(5-temp.length).join("0") + temp;
    }
        return rs;
     }
     function decodeUTF8(str){
        return str.replace(/(\\u)(\w{4}|\w{2})/gi, function($0,$1,$2){
            return String.fromCharCode(parseInt($2,16));
        }); 
     }  

    $(".preview").bind("click",function(){
        console.log(111);
        localStorage.removeItem("gg");
        var myhtml = $(".www").html();
        console.log(myhtml);
        var enmyhtml = encodeUTF8(myhtml);
        localStorage.setItem("gg",enmyhtml);        
        window.location.href = "view.html"

    })