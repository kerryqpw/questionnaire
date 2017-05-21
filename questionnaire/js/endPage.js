/**
 * Created by Administrator on 2017/5/16.
 */
window.onload=function (){
    //中心定位
    var center=document.getElementById("center");
    center.scrollIntoView();


    clickgotologout();
    function clickgotologout() {
        var navwrap=document.getElementById("navwrap");
        navwrap.onclick=function () {
            CloseWebPage();

        }

    }

    function CloseWebPage(){
        if (navigator.userAgent.indexOf("MSIE") > 0) {
            if (navigator.userAgent.indexOf("MSIE 6.0") > 0) {
                window.opener = null;
                window.close();
            } else {
                window.open('', '_top');
                window.top.close();
            }
        }
        else if (navigator.userAgent.indexOf("Firefox") > 0) {
            window.location.href = 'about:blank ';
        } else {
            window.opener = null;
            window.open('', '_self', '');
            window.close();
        }
    }

    // function closeWin(){
    //     alert("sad");
    //     window.opener=null;
    //     window.open('','_self','');
    //     window.close();
    //     alert("asdasd");
    // }
}