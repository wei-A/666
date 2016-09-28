/* 
* @Author: Marte
* @Date:   2016-09-19 10:51:21
* @Last Modified by:   Marte
* @Last Modified time: 2016-09-19 16:06:42
*/


   
    // document.addEventListener("click",function(e){
    //     var e = e || e.event;
    //     var target = e.target || e.srcElement;
    //     console.log(target.className);
    //     if(target.className.indexOf("left") > -1){
    //         pre();
    //     }
    //     if(target.className.indexOf("right") > -1){
    //         next();
    //     }
    //     if(target.className.indexOf("button") > -1){
    //         index_tab = target.id.substring(4);
    //         go();
    //     }
    // },false)


    // var timer = setInterval(function(){
    //     if(tab_num > 0){
    //      next();   
    //     }

    // },5000)
    var buttonlist1 = document.getElementsByClassName("btn");
    var buttonlist2 = document.getElementsByClassName("button");  
 function next(ele){
        ele.index++;
        if(ele.index > 3 - 1){
            ele.index = 0;
        }
        go(ele);
    }
    function pre(ele){
        ele.index--;
        if(ele.index < 0){
            ele.index = 3 - 1;
        }
        go(ele);
    }

    
    function go(ele){
        ele.childNodes[0].style.left = -ele.index*ele.offsetWidth + "px"; 
        for(var j = 0;j < 3;j++){
            ele.childNodes[1].childNodes[j].style.backgroundColor = "blue";
        }
        ele.childNodes[1].childNodes[ele.index].style.backgroundColor = "red";   
    }
    for(var i = 0;i < buttonlist1.length;i += 2){
        buttonlist1[i].onclick = function(e){
            if(!this.parentNode.index){
              this.parentNode.index = 0;
            }
            var e = e || e.event;
            pre(this.parentNode);
            e.cancelBubble = true;
        }          
    }
    for(var j = 1;j < buttonlist1.length;j +=2){
        buttonlist1[j].onclick = function(e){
            if(!this.parentNode.index){
              this.parentNode.index = 0;
            }
            var e = e || e.event;
            next(this.parentNode);
            e.cancelBubble = true;
    }
}
    for(var k =0;k < buttonlist2.length;k++){
        buttonlist2[k].onclick = function(e){
            var e = e || e.event;
            this.parentNode.parentNode.index = this.id.substring(4);

            go(this.parentNode.parentNode);
            e.cancelBubble = true;
        }
    }