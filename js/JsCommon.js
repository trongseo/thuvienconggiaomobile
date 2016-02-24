/**
 * Created by PHAT on 9/3/15.
 */
function checkEmptyItem(objid,titleobj){
    var plsa='Vui lòng nhập!';
    var objval = $("#"+objid).val();
    if(objval == ""){
        $("#"+objid).bt(plsa,{
            trigger: 'none',
            clickAnywhereToClose : false,
            positions: ['top'],
            fill: 'rgba(33, 33, 33, .8)',
            spikeLength: 10,
            spikeGirth: 10,
            cssStyles: {color: '#FFF', fontSize: '11px',textAlign:'justify',width:'auto'}
        });
        $("#"+objid).btOn();
        $("#"+objid).focus();
        return false;
    }
    return true;
}
var ClassMyValidate = {
    checkEmptyItem: function (objid,titleobj) {
        var plsa='Vui lòng nhập!';
        var objval = $("#"+objid).val();
        if(objval == ""){
            $("#"+objid).bt(plsa,{
                trigger: 'none',
                clickAnywhereToClose : false,
                positions: ['top'],
                fill: 'rgba(33, 33, 33, .8)',
                spikeLength: 10,
                spikeGirth: 10,
                cssStyles: {color: '#FFF', fontSize: '11px',textAlign:'justify',width:'auto'}
            });
            $("#"+objid).btOn();
            $("#"+objid).focus();
            return false;
        }
        $("#"+objid).btOff();
        return true;
    },
    checkSamePassN: function ( objid, objid1) {
        var plsa='Vui lòng nhập mật khẩu giống nhau!';
        var title = $("#"+objid).val();
        var title1 = $("#"+objid1).val();
        var reVal=true;
        if (title!=title1) {

            $("#"+objid).bt(plsa,{
                trigger: 'none',
                clickAnywhereToClose : false,
                positions: ['top'],
                fill: 'rgba(33, 33, 33, .8)',
                spikeLength: 10,
                spikeGirth: 10,
                cssStyles: {color: '#FFF', fontSize: '11px',textAlign:'justify',width:'auto'}
            });
            $("#"+objid).btOn();
            $("#"+objid).focus();
            reVal=false;
        }
        return reVal;
    },
    checkValidEmail: function (objid,titleobj) {
        var emailv = $("#"+objid).val();
        var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
        var isvalid= re.test(emailv);


        var plsa='Email chưa chính xác!';

        if(isvalid == false){
            $("#"+objid).bt(plsa,{
                trigger: 'none',
                clickAnywhereToClose : false,
                positions: ['top'],
                fill: 'rgba(33, 33, 33, .8)',
                spikeLength: 10,
                spikeGirth: 10,
                cssStyles: {color: '#FFF', fontSize: '11px',textAlign:'justify',width:'auto'}
            });
            $("#"+objid).btOn();
            $("#"+objid).focus();
            return false;
        }
        $("#"+objid).btOff();
        return isvalid;
    },
    ShowError: function (objid,message) {

        var plsa=message;
        var objval = '';
        if(objval == ""){
            $("#"+objid).bt(plsa,{
                trigger: 'none',
                clickAnywhereToClose : false,
                positions: ['top'],
                fill: 'rgba(33, 33, 33, .8)',
                spikeLength: 10,
                spikeGirth: 10,
                cssStyles: {color: '#FFF', fontSize: '11px',textAlign:'justify',width:'auto'}
            });
            $("#"+objid).btOn();
            $("#"+objid).focus();

        }

    },

    MyAlert: function(yourMessage){
        BootstrapDialog.alert(yourMessage);
    },
    GetUrlParameter: function(sParam){
      return getUrlParameter(sParam);
    }
};
function alertMore(yourMessage){
    BootstrapDialog.alert(yourMessage);

}
//BootstrapDialog.confirm('ddddd');
/////
var myApp;
myApp = myApp || (function () {

        var pleaseWaitDiv = $('<div class="modal hide" id="pleaseWaitDialog" data-backdrop="static" data-keyboard="false"><div class="modal-header"><h1>Processing...</h1></div><div class="modal-body"><div class="progress progress-striped active"><div class="bar" style="width: 100%;"></div></div></div></div>');
        return {
            showPleaseWait: function() {
                pleaseWaitDiv.modal();
            },
            hidePleaseWait: function () {
                pleaseWaitDiv.modal('hide');
            },

        };
    })();
////

function wailtLoad(){
   // $('body').append('<div  class="overlay" style="position:absolute;top:10;left:10;width:100%;height:100%;z-index:1000;color: #000;width:0px">Đang tải....... </div>');
    $('#bodyEnd').show();
    document.body.style.cursor='wait';
 //   myApp.showPleaseWait();
}
function wailtLoadEnd(){
   // $('.overlay').hide();
 $('#bodyEnd').hide();
    document.body.style.cursor='default';
   // myApp.hidePleaseWait();
}
function checkSamePassN( objid, objid1){
    var plsa='Vui lòng nhập mật khẩu giống nhau!';
    var title = $("#"+objid).val();
    var title1 = $("#"+objid1).val();
    var reVal=true;
    if (title!=title1) {

        $("#"+objid).bt(plsa,{
            trigger: 'none',
            clickAnywhereToClose : false,
            positions: ['top'],
            fill: 'rgba(33, 33, 33, .8)',
            spikeLength: 10,
            spikeGirth: 10,
            cssStyles: {color: '#FFF', fontSize: '11px',textAlign:'justify',width:'auto'}
        });
        $("#"+objid).btOn();
        $("#"+objid).focus();
        reVal=false;
    }
    return reVal;
}
 function getUrlParameterUrl(mUrl,sParam) {
    var sPageURL = decodeURIComponent(mUrl),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : sParameterName[1];
        }
    }
}
 function getUrlParameter(sParam) {
    var sPageURL = decodeURIComponent(window.location.search.substring(1)),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : sParameterName[1];
        }
    }
}


/////////
function is_mobile() {
    return /android.+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|e\-|e\/|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(di|rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|xda(\-|2|g)|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4));
}