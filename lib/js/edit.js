/* 
* @Author: Marte
* @Date:   2016-09-30 09:39:39
* @Last Modified by:   Marte
* @Last Modified time: 2016-09-30 11:35:40
*/

$(document).ready(function(){
    $(document).bind("selectstart",function(){
        // return false;
    })
    $(document).bind("contextmenu",function(e){
        e.preventDefault();
        // var e = e || e.event;
        // var target = e.target || e.srcElement;
        // console.log(target);
        // if(target.className == "shop-title" || target.tagName == "SPAN"){
        //     target.setAttribute("contenteditable","true");
        // }
        // if(target.tagName == "IMG"){
        //     console.log(target.src);
        //     $(".input")[0].click();
        // }
    })
var top_ele ;
    $(document).find("img").on("click",function(e){
         var e = e || e.event;
         var target = e.target || e.srcElement;
         console.log(111);
         $(".input")[0].click();
         top_ele = target;
    })
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