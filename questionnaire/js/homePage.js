/**
 * Created by Administrator on 2017/5/16.
 */
window.onload=function (){

    //中心定位
    var center=document.getElementById("center");
    center.scrollIntoView();

    setTimeout(gotoindex,10000);

    clickgotoindex();

    function gotoindex() {
        window.location.href='questionnaire/web/index.html';
    }

    function clickgotoindex() {
        var navwrap=document.getElementById("navwrap");
        navwrap.onclick=function () {
            window.location.href='questionnaire/web/index.html';

        }

    }
    
}