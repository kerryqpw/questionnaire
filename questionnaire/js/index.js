/**
 * Created by Administrator on 2017/5/16.
 */
window.onload=function () {

    /**界面布局JS*/
    // var age=document.getElementsByName("age");
    //
    // if(age!=null){
    //     var i;
    //     for(i=0;i<age.length;i++){
    //         alert(age[i].value);
    //         if(age[i].checked){
    //             alert(age[i].value);
    //         }
    //     }
    // }

    /** 与后端交互JS */
    //前端后台交互模块初始化
    submitPetQuestModule();
    
    function submitPetQuestModule() {
        var sexValue;
        var ageValue;
        var liveareaValue;
        var isfeedpetValue;
        var payforpetmonthValue;
        var petageValue;
        var isknowpetguildValue;
        var knowpetfuneralfromValue;
        var ifpetdieValue;
        var deathpettowhereValue;
        var howtopayfordeathpetValue;
        var isneedspacefordeathpetValue;
        var isneeddeathpetreposeValue;
        var isbuynewpetValue;
        var buynewpetfromValue;
        var ischeckfornewpetValue;


        var submit=document.getElementById("submit");

        submit.onclick=function () {
            //验证是否提交
            verifyData();
            //submitPetQuestAjax
        }


        
        function  verifyData() {
            var issexselect=false;
            var isageselect=false;
            var isliveareaselect=false;
            var isisfeedpetselect=false;
            var ispayforpetmonthselect=false;
            var ispetageselect=false;
            var isisknowpetguildselect=false;
            var isknowpetfuneralfromselect=false;
            var isifpetdieselect=false;
            var isdeathpettowhereselect=false;
            var ishowtopayfordeathpetselect=false;
            var isisneedspacefordeathpetselect=false;
            var isisneeddeathpetreposeselect=false;
            var isisbuynewpetselect=false;
            var isbuynewpetfromselect=false;
            var isischeckfornewpetselect=false;


            var sex=document.getElementsByName("sex");
            var age=document.getElementsByName("age");
            var livearea=document.getElementsByName("livearea");
            var isfeedpet=document.getElementsByName("isfeedpet");
            var payforpetmonth=document.getElementsByName("payforpetmonth");
            var petage=document.getElementsByName("petage");
            var isknowpetguild=document.getElementsByName("isknowpetguild");
            var knowpetfuneralfrom=document.getElementsByName("knowpetfuneralfrom");
            var ifpetdie=document.getElementsByName("ifpetdie");
            var deathpettowhere=document.getElementsByName("deathpettowhere");
            var howtopayfordeathpet=document.getElementsByName("howtopayfordeathpet");
            var isneedspacefordeathpet=document.getElementsByName("isneedspacefordeathpet");
            var isneeddeathpetrepose=document.getElementsByName("isneeddeathpetrepose");
            var isbuynewpet=document.getElementsByName("isbuynewpet");
            var buynewpetfrom=document.getElementsByName("buynewpetfrom");
            var ischeckfornewpet=document.getElementsByName("ischeckfornewpet");


            if(sex!=null){
                var i;
                for(i=0;i<sex.length;i++){
                    if(sex[i].checked){
                        // alert(sex[i].value);
                        issexselect=true;
                        sexValue=sex[i].value;
                    }
                }
                if(issexselect==false){
                    alert("未选择性别");
                    return;
                }
            }

            if(age!=null){
                var i;
                for(i=0;i<age.length;i++){
                    if(age[i].checked){
                        isageselect=true;
                        ageValue=age[i].value;
                    }
                }
                if(isageselect==false){
                    alert("未选择年龄");
                    return;
                }
            }


            if(livearea!=null){
                var i;
                for(i=0;i<livearea.length;i++){
                    if(livearea[i].checked){
                        // alert(sex[i].value);
                        isliveareaselect=true;
                        liveareaValue=livearea[i].value;
                    }
                }
                if(isliveareaselect==false){
                    alert("未选择居住域");
                    return;
                }
            }


            if(isfeedpet!=null){
                var i;
                for(i=0;i<isfeedpet.length;i++){
                    if(isfeedpet[i].checked){
                        // alert(sex[i].value);
                        isisfeedpetselect=true;
                        isfeedpetValue=isfeedpet[i].value;
                    }
                }
                if(isisfeedpetselect==false){
                    alert("未选择是否喂养了小动物");
                    return;
                }
            }

            if(payforpetmonth!=null){
                var i;
                for(i=0;i<payforpetmonth.length;i++){
                    if(payforpetmonth[i].checked){
                        // alert(sex[i].value);
                        ispayforpetmonthselect=true;
                        payforpetmonthValue=payforpetmonth[i].value;
                    }
                }
                if(ispayforpetmonthselect==false){
                    alert("未选择没月在他(她)身上的花销");
                    return;
                }
            }


            if(petage!=null){
                var i;
                for(i=0;i<petage.length;i++){
                    if(petage[i].checked){
                        // alert(sex[i].value);
                        ispetageselect=true;
                        petageValue=petage[i].value;
                    }
                }
                if(ispetageselect==false){
                    alert("未选择小动物年龄");
                    return;
                }
            }

            if(isknowpetguild!=null){
                var i;
                for(i=0;i<isknowpetguild.length;i++){
                    if(isknowpetguild[i].checked){
                        // alert(sex[i].value);
                        isisknowpetguildselect=true;
                        isknowpetguildValue=isknowpetguild[i].value;
                    }
                }
                if(isisknowpetguildselect==false){
                    alert("未选择是否了解宠物殡葬行业");
                    return;
                }
            }

            if(knowpetfuneralfrom!=null){
                var i;
                for(i=0;i<knowpetfuneralfrom.length;i++){
                    if(knowpetfuneralfrom[i].checked){
                        // alert(sex[i].value);
                        isknowpetfuneralfromselect=true;
                        knowpetfuneralfromValue=knowpetfuneralfrom[i].value;
                    }
                }
                if(isknowpetfuneralfromselect==false){
                    alert("未选择从什么地方了解到的宠物殡葬行业");
                    return;
                }
            }


            if(ifpetdie!=null){
                var i;
                for(i=0;i<ifpetdie.length;i++){
                    if(ifpetdie[i].checked){
                        // alert(sex[i].value);
                        isifpetdieselect=true;
                        ifpetdieValue=ifpetdie[i].value;
                    }
                }
                if(isifpetdieselect==false){
                    alert("未选择如果宠物变成小天使了，你会为她做什么");
                    return;
                }
            }


            if(deathpettowhere!=null){
                var i;
                for(i=0;i<deathpettowhere.length;i++){
                    if(deathpettowhere[i].checked){
                        // alert(sex[i].value);
                        isdeathpettowhereselect=true;
                        deathpettowhereValue=deathpettowhere[i].value;
                    }
                }
                if(isdeathpettowhereselect==false){
                    alert("未选择你愿意将成小天使的它带到什么地方");
                    return;
                }
            }

            if(howtopayfordeathpet!=null){
                var i;
                for(i=0;i<howtopayfordeathpet.length;i++){
                    if(howtopayfordeathpet[i].checked){
                        // alert(sex[i].value);
                        ishowtopayfordeathpetselect=true;
                        howtopayfordeathpetValue=howtopayfordeathpet[i].value;
                    }
                }
                if(ishowtopayfordeathpetselect==false){
                    alert("未选择你愿意为你的小天使花费多少");
                    return;
                }
            }


            if(isneedspacefordeathpet!=null){
                var i;
                for(i=0;i<isneedspacefordeathpet.length;i++){
                    if(isneedspacefordeathpet[i].checked){
                        // alert(sex[i].value);
                        isisneedspacefordeathpetselect=true;
                        isneedspacefordeathpetValue=isneedspacefordeathpet[i].value;
                    }
                }
                if(isisneedspacefordeathpetselect==false){
                    alert("未选择你需要一个特定的私人空间时常来看看你的小天使吗");
                    return;
                }
            }

            if(isneeddeathpetrepose!=null){
                var i;
                for(i=0;i<isneeddeathpetrepose.length;i++){
                    if(isneeddeathpetrepose[i].checked){
                        // alert(sex[i].value);
                        isisneeddeathpetreposeselect=true;
                        isneeddeathpetreposeValue=isneeddeathpetrepose[i].value;
                    }
                }
                if(isisneeddeathpetreposeselect==false){
                    alert("未选择如果宠物能继续活在网络世界中陪伴你,你觉得会是一份寄托吗");
                    return;
                }
            }

            if(isbuynewpet!=null){
                var i;
                for(i=0;i<isbuynewpet.length;i++){
                    if(isbuynewpet[i].checked){
                        // alert(sex[i].value);
                        isisbuynewpetselect=true;
                        isbuynewpetValue=isbuynewpet[i].value;
                    }
                }
                if(isisbuynewpetselect==false){
                    alert("未选择你还会再添置新宠物吗");
                    return;
                }
            }


            if(buynewpetfrom!=null){
                var i;
                for(i=0;i<buynewpetfrom.length;i++){
                    if(buynewpetfrom[i].checked){
                        // alert(sex[i].value);
                        isbuynewpetfromselect=true;
                        buynewpetfromValue=buynewpetfrom[i].value;
                    }
                }
                if(isbuynewpetfromselect==false){
                    alert("未选择你会选择从什么渠道购买宠物");
                    return;
                }
            }
            if(ischeckfornewpet!=null){
                var i;
                for(i=0;i<ischeckfornewpet.length;i++){
                    if(ischeckfornewpet[i].checked){
                        // alert(sex[i].value);
                        isischeckfornewpetselect=true;
                        ischeckfornewpetValue=ischeckfornewpet[i].value;
                    }
                }
                if(isischeckfornewpetselect==false){
                    alert("未选择你购买新宠物猴,会为她做一次全面体检吗");
                    return;
                }
            }



            submitPetQuestAjax();



        }


        
        function submitPetQuestAjax() {
            // alert("ajax");
            // alert(sexValue);
            // alert(ageValue);
            // alert(liveareaValue);
            // alert(isfeedpetValue);
            // alert(payforpetmonthValue);
            // alert(petageValue);
            // alert(isknowpetguildValue);
            // alert(knowpetfuneralfromValue);
            // alert(ifpetdieValue);
            // alert(deathpettowhereValue);
            // alert(howtopayfordeathpetValue);
            // alert(isneedspacefordeathpetValue);
            // alert(isneeddeathpetreposeValue);
            // alert(isbuynewpetValue);
            // alert(buynewpetfromValue);
            // alert(ischeckfornewpetValue);

            $.ajax({
                type: "post",
                url: "/chenchi/chenchiWebPet/submitPetQuestion.do",
                data: {
                    "sex": sexValue,
                    "age": ageValue,
                    "livearea": liveareaValue,
                    "isfeedpet": isfeedpetValue,
                    "payforpetmonth": payforpetmonthValue,
                    "petage": petageValue,
                    "isknowpetguild": isknowpetguildValue,
                    "knowpetfuneralfrom": knowpetfuneralfromValue,
                    "ifpetdie": ifpetdieValue,
                    "deathpettowhere": deathpettowhereValue,
                    "howtopayfordeathpet": howtopayfordeathpetValue,
                    "isneedspacefordeathpet": isneedspacefordeathpetValue,
                    "isneeddeathpetrepose": isneeddeathpetreposeValue,
                    "isbuynewpet": isbuynewpetValue,
                    "buynewpetfrom": buynewpetfromValue,
                    "ischeckfornewpet": ischeckfornewpetValue
                },
                dataType: "json",
//            contentType:'application/json',
                success: function (data) {
                    if(data.msg=="Ok"){
                    	// alert("感谢你的参与");
                        window.location.href='endPage.html';
                    }


                },
                error: function (XMLHttpRequest, textStatus, errorThrown) {
                    // alert(XMLHttpRequest.status);
                    // alert(XMLHttpRequest.readyState);
                    // alert(textStatus);
                    window.location.href='endPage.html';

                },
            });

        }
    }



}