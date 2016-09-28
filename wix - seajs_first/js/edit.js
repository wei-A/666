/* 
* @Author: Marte
* @Date:   2016-09-12 15:48:49
* @Last Modified by:   Marte
* @Last Modified time: 2016-09-21 15:46:17
*/

    var wrapNav = document.getElementById("wrapNav");
    var preview = document.getElementById("preview");
    var wrapAlbum = document.getElementById("wrapAlbum");
    var btn = document.getElementById("btn");
    var btn1 = document.getElementById("btn1");
    var btn2 = document.getElementById("btn2");
    var btn3 = document.getElementById("btn3");
    var btn4 = document.getElementById("btn4");
    var btn5 = document.getElementById("btn5");
    var color = document.getElementById("color");
    var word_color = document.getElementById("word_color");
    var fontchange = document.getElementById("fontchange");
    var fontchange1 = document.getElementById("fontchange1");
    var fontchange2 = document.getElementById("fontchange2");
    var fontchange3 = document.getElementById("fontchange3");
    var fontchange_part = document.getElementById("fontchange_part");
    var bwide = document.getElementById("bwide");
    var bopacity = document.getElementById("bopacity");
    var submit = document.getElementById("submit");
    var wrap = document.getElementById("wrap");
    var lianjie = document.getElementById("lianjie");
    var Imgsrc = document.getElementById("Imgsrc");
    var imgsrcChange = document.getElementById("imgsrcChange");
    var asrcChange = document.getElementById("asrcChange");
    var disX = 0, disY = 0;
    var top_index = -1;//寻找事件处理对象的标志位
    var top_ele = 0;//当前定位到的模块
    var blimg_top_index = -1;
    var blimg_top_ele = 0;
    var wrapAlbumele = 0;
    var albumflag = 0;
    var nav_top_ele = 0;
    var nav_top_index = -1;
    var zfloor = 0;
    var tab_top_ele = 0;
    var tab_top_index = -1;
    var fontstyle_flag = true;
    var fontstyle_flag1 = true;
    var editor = document.getElementsByClassName("editor")[0];
    var hide = document.getElementById("hide");
    var createbox = document.getElementById("createbox");


    var index = -1;//给创建的各个模块定位
    var showflag = true;

hide.onclick = function(e){
    e = e || e.event;
    var target = e.target || e.srcElement; 
     editor.style.display = "block";
     createbox.style.display = "block"; 
     target.innerText = "隐藏编辑栏";
    if(showflag){
         editor.style.display = "none";
         createbox.style.display = "none";   
         target.innerText = "显示编辑器";      
    }
    showflag = !showflag;
    console.log(showflag);
    e.cancelBubble = true;
}
// 定位元素，所有操作的核心
document.addEventListener("mousedown",function(e){     
            var e = e || window.event;
            var target = e.target;   
            console.log(target);
            if(target.parentNode){
                if(target.parentNode.id.indexOf("pp") > -1){
                    target = target.parentNode;
                }
            } 
            if(target.id.indexOf("pp") > -1){//如果点击事件的事件目标是创建的模块       
                zfloor++;
                top_ele = target;//将当前选取的模块给到全局变量，这样的话就可以自由对元素进行操作
                top_ele.style.zIndex = zfloor; 
                top_index = 3;
                blimg_top_index = -1;    
                nav_top_index = -1;
                tab_top_index = -1;
                if(target.className == "pblock"){
                    editorcontrol([1,2,3,4,5,6]);
                    console.log(555);
                }
                else if(target.className == "block"){
                    editorcontrol([1]);
                }
                else if(target.className == "imgbox"){
                    editorcontrol([0]);
                }
            }
            else if(target.className.indexOf("alb") > -1){//如果点击的是相册内的图片
                   blimg_top_ele = target;
                   blimg_top_index = 3;
                   top_index = -1;
                   nav_top_index = -1;
                   tab_top_index = -1;
                   zfloor++;
                   blimg_top_ele.parentNode.parentNode.parentNode.style.zIndex = zfloor;
                   editorcontrol([0]);
              }
            else if(target.id.indexOf("album") > -1){ //如果点击的是相册
                   zfloor++;
                   target.style.zIndex = zfloor;
                   blimg_top_ele = target.childNodes[0].childNodes[0].childNodes[0];
                   blimg_top_index = 3;
                   top_index = -1;
                   nav_top_index = -1;
                   tab_top_index = -1;
                   editorcontrol([0]);
            }  
            else if(target.className.indexOf("lia") > -1){//如果点击的是导航栏的li标签
                   nav_top_ele = target.childNodes[0];
                   nav_top_index = 3;
                   top_index = -1;
                   blimg_top_index = -1;
                   tab_top_index = -1;
                   zfloor++;
                   target.parentNode.style.zIndex = zfloor;
                   editorcontrol([2,3,4,5,6]);
            }  
            else if(target.className == "nava"){
                   nav_top_ele = target;
                   nav_top_index = 3;
                   top_index = -1;
                   blimg_top_index = -1;
                   tab_top_index = -1;
                   zfloor++;
                   target.parentNode.parentNode.style.zIndex = zfloor;
                   editorcontrol([2,3,4,5,6]);
            }
},false)
document.addEventListener("mousedown",function(e){
                var e = e || e.event;
                var target = e.target || e.srcElement;
                if(target.parentNode.parentNode){
                if(target.parentNode.parentNode.className == "wrapbox"){//如果点击的是滚动图
                   zfloor++;
                   tab_top_ele = target;
                   tab_top_index = 3;
                   top_index = -1;
                   nav_top_index = -1;
                   blimg_top_index = -1; 
                   target.parentNode.parentNode.style.zIndex = zfloor;
                   editorcontrol([0]);
                }
            }
},false)




   //元素的移动
    document.addEventListener("mousedown",function(e){
                    var e = e || window.event;
                    var target = e.target || e.srcElement;
                    if(target.className.indexOf("lia") > -1){   //如果事件目标是导航栏的li标签
                        target = target.parentNode;

                    }
                    if(target.parentNode.parentNode.parentNode){//如果事件目标是相册内的图片，
                        if(target.parentNode.parentNode.parentNode.id == "album"){
                            target = target.parentNode.parentNode.parentNode;
                        }
                    }
                    if(target.parentNode){                      //如果事件目标是可编辑文本或图片
                        if(target.parentNode.id.indexOf("pp") > -1){
                            target = target.parentNode;
                        }
                    }
                   if(target.parentNode.parentNode){            //如果事件目标是滚动图内的图片
                        if(target.parentNode.parentNode.className.indexOf("wrapbo") > -1){
                            target = target.parentNode.parentNode;
                        }
                    }
                    disX = e.clientX - target.offsetLeft; //鼠标相对box边界偏移值
                    disY = e.clientY - target.offsetTop;  //鼠标相对box边界偏移值
                    document.onmousemove = function (e){
                         var e = e || window.event;
                         if(target.id.indexOf("pp") > -1 || target.id == "album" || target.className.indexOf("clear") > -1 || target.className.indexOf("wrapbo") > -1){      //如果事件目标是自定义模块，或者是相册，或者是轮播图，或者是导航栏
                            target.style.left = (e.clientX - disX) + 'px';
                            target.style.top = (e.clientY - disY) + 'px';
                            e.preventDefault();
                         }                       
                    };
                    document.onmouseup = function (){
                        document.onmousemove = null;  
                    };
                    
    },false)



//编辑器控制函数
function editorcontrol(a){
 for(var i =0;i < 7;i++){
    var ele =  editor.childNodes[i*2 + 1].childNodes[3];
    ele.style.zIndex= 2;
    ele.style.backgroundColor = "gray";

    if(a.indexOf(i) > -1){//如果包含项编辑器就将蒙层置底，显示编辑器
       ele.style.zIndex = -1;
       ele.style.backgroundColor = "green";
    }
 }
}
    // 发布
 function sale(){
        //先将localStorage内的内容全部清空
        localStorage.removeItem("gg");
        localStorage.removeItem("Album");
        localStorage.removeItem("nav");
        localStorage.removeItem("index");
        //取rap，wrapNav，wrapNav,WrapAlbum内的代码
        var myhtml = rap.innerHTML;
        var wrapNavhtml = wrapNav.innerHTML;
        var wrapAlbumHtml = wrapAlbum.innerHTML;
        //将取到的代码UTF8编码
        var enmyhtml = encodeUTF8(myhtml);
        var enwrapNavhtml = encodeUTF8(wrapNavhtml);
        var enwrapAlbum = encodeUTF8(wrapAlbumHtml);
        var enindex = encodeUTF8(index);
        //将编码后的数据写入localStorage
        localStorage.setItem("gg",enmyhtml);
        localStorage.setItem("nav",enwrapNavhtml);
        localStorage.setItem("Album",enwrapAlbum);
        localStorage.setItem("index",enindex);              
    }
 submit.onclick = function(){
    sale();
    location.href = "index1.html";
 }

    //调节模块的大小 使用事件
    document.addEventListener("mousedown",function(e){
        var e = e || e.event;
        var target = e.target || e.srcElement;
        //如果事件目标是右下拉调节滑块（自定义模块，轮播图）
        if(target.className == "dragspan"){
            disX = e.clientX;//获取当前光标的位置
            disY = e.clientY;
            var divpos = target.parentNode.getBoundingClientRect();//获取当前元素的宽高
            if(target.parentNode.className == "wrapbox"){//如果事件目标是轮播图里面的图片，获取图片的宽高，从而做等比例缩放 
               var wid = target.parentNode.childNodes[0].childNodes[0].offsetWidth; 
               var hei = target.parentNode.childNodes[0].childNodes[0].offsetHeight;
            }
            document.onmousemove = function(e) {
                var e = e || window.event;
                changeX = e.clientX - disX;//获取光标位置的改变量
                changeY = e.clientY - disY;
                var a = divpos.width + changeX ;//当前元素的宽高加上改变量
                var b = divpos.height + changeY;
                target.parentNode.style.width = a + "px";
                target.parentNode.style.height = b + "px";
                if(target.parentNode.className == "wrapbox"){//如果事件目标是轮播图
                    target.parentNode.style.height = hei/wid*a + "px";//等比例缩放
                    target.parentNode.childNodes[0].style.width = a*3 + "px";
                    target.parentNode.childNodes[2].style.lineHeight = hei/wid*a + "px";//控制箭头的位置
                    target.parentNode.childNodes[3].style.lineHeight = hei/wid*a + "px";//控制箭头的位置
                }
            }
            document.onmouseup = function() {
                document.onmousemove = null;
            }                  
        }
    },false)

    document.addEventListener("mousedown",function(e){
        var e = e || e.event;
        var target = e.target || e.srcElement;
        //如果事件目标是右拉调节模块（图片，可编辑文本）
        if(target.className == "dragspan1"){//图片
            var e = e || window.event;
            disX = e.clientX;
            disY = e.clientY;
            var divpos = target.parentNode.getBoundingClientRect();
            document.onmousemove = function(e) {
                var e = e || window.event;
                changeX = e.clientX - disX;
                changeY = e.clientY - disY;
                var a = divpos.width + changeX + "px";
                target.parentNode.style.width = a ;//父级div的宽度是拖动的宽度
                target.parentNode.style.height = target.previousSibling.offsetHeight + "px";//父级div的高度根据此刻图片的高度来定
            }
            document.onmouseup = function() {
                document.onmousemove = null;
            }                  
        }
    },false)
    document.addEventListener("mousedown",function(e){
    var e = e || e.event;
    var target = e.target || e.srcElement;
    if(target.className == "dragspan2"){//可编辑文本
        var e = e || window.event;
        disX = e.clientX;
        disY = e.clientY;
        var divpos = target.parentNode.getBoundingClientRect();
        document.onmousemove = function(e) {
            var e = e || window.event;
            changeX = e.clientX - disX;
            changeY = e.clientY - disY;
            var a = divpos.width + changeX + "px";
            target.parentNode.style.width = a ;
        }
        document.onmouseup = function() {
            document.onmousemove = null;
        }                 
    }
},false)


// 图片的替换
    Imgsrc.onchange = function(){
        if(top_index > -1){
         top_ele.childNodes[0].setAttribute("src","img/" + this.value);
         console.log(212);
        }
        else if(blimg_top_index > -1){ 
          blimg_top_ele.setAttribute("src","img/" + this.value);      
        }
        else if(tab_top_index > -1){
          tab_top_ele.setAttribute("src","img/" + this.value);
        }
    }
// 图片链接的更改
    // imgsrcChange.onclick = function(){
    //       blimg_top_ele.parentNode.parentNode.setAttribute("href",lianjie.value);
    // }
    // asrcChange.onclick = function(){
    //       nav_top_ele.setAttribute("href",lianjie.value);
    // }
    //渲染之前的数据
     var gg = localStorage.getItem("gg");
     var demyhtml = decodeUTF8(gg);
     rap.innerHTML = demyhtml;  
     if(localStorage.getItem("index") != ""){
        index = parseInt(localStorage.getItem("index")) ;
     } 
     if(localStorage.getItem("Album")){
        var enwrapAlbum = localStorage.getItem("Album");
        var dewrapAlbum = decodeUTF8(enwrapAlbum);
        wrapAlbum.innerHTML = dewrapAlbum;
     }
     if(localStorage.getItem("nav")){
        var nav = localStorage.getItem("nav");
        var denav = decodeUTF8(nav);
        wrapNav.innerHTML = denav;
     }
    //相册的编辑 
    // var dbflag = true;  
    // document.ondblclick = function(e){
    //     var e = e || e.event;
    //     var target = e.target || e.srcElement;
    //     console.log(target);

    //     if(dbflag){
            
    //         if(target.nextSibling){
    //                         target = target.nextSibling;
    //                         console.log(target);
    //                         target.style.zIndex = 1;

    //                         target.setAttribute("contenteditable","true");   
    //                         dbflag = !dbflag;  

    //         }
    
    //     }
    //     else{
    //         var target = e.target || e.srcElement;
    //         target.setAttribute("contenteditable","flase");  
    //         console.log(target);
    //         target.style.zIndex = -1;
    //         dbflag = !dbflag;   

    //     }
    //     console.log(dbflag);
    // }
//元素的删除
    document.addEventListener("keydown",function(e){
            if(e.keyCode == 46){
                if(top_index >　-1){
                top_ele.remove();                    
                }
                if(nav_top_index > -1){
                    nav_top_ele.parentNode.parentNode.remove();
                }
                if(blimg_top_index > -1){
                    blimg_top_ele.parentNode.parentNode.parentNode.remove();
                }
                if(tab_top_index > -1){
                    tab_top_ele.parentNode.parentNode.remove();
                }

            }
    },false)

    //改变块的背景色
    color.onchange = function(){   
        if(top_index > -1){
         top_ele.style.backgroundColor = color.value;            
        }      
    }

