var baseUrl='';
var getItem="Lấy về";
var deleteItem="Trả lại";
var errorStatus="Có lỗi xảy ra trong quá trình xử lý, vui lòng thử lại sau!";
var getItemCollection="Đưa vào bộ sưu tập";
var deleteItemCollecion="Xóa khỏi bộ sưu tập";
var like="Like";
var likeItem="Thích nội dung này";
var dislike="Dislike";
var dislikeItem="Không thích nội dung này";
var you_like_this="Bạn thích nội dung này";
var you_and="You and ";
function ShowOrders(){
        $('#show_orders').addClass("k-loading");
        $.ajax({
            url:baseUrl+"/Site/ShowOrders",
            success:function(result){
                $("#show_orders").removeClass("k-loading");
                $("#show_orders").empty().append(result);
            }
        });
    }
function Delete_Show_Cart(id){
    $.ajax({
        type:'POST',
        url:baseUrl+'/Orders/DeleteCart',
        data:{'id':id},
        success:function(result){
            if(result == 1){
                $("#basketTitleWrap").removeClass("k-loading");
                ShowOrders();
                LoadOrder();
            }
            else{
                $("#basketTitleWrap").removeClass("k-loading");
            }
        }
    })
    return false;
}
function Delete_Show_Topping(id,id1){
    $.ajax({
        type:'POST',
        url:baseUrl+'/Orders/DeleteTopping',
        data:{'id':id,'id1':id1},
        success:function(result){
            if(result == 1){
                $("#basketTitleWrap").removeClass("k-loading");
                ShowOrders();
                LoadOrder();
            }
            else{
                $("#basketTitleWrap").removeClass("k-loading");
            }
        }
    })
    return false;
}
function Delete_Cart(id){
    $.ajax({
        type:'POST',
        url:baseUrl+'/Orders/DeleteCart',
        data:{'id':id},
        success:function(result){
            if(result == 1){
                $("#basketTitleWrap").removeClass("k-loading");
                LoadOrder();
            }
            else{
                $("#basketTitleWrap").removeClass("k-loading");
            }
        }
    })
    return false;
}
function Delete_Topping(id,id1){
    $.ajax({
        type:'POST',
        url:baseUrl+'/Orders/DeleteTopping',
        data:{'id':id,'id1':id1},
        success:function(result){
            if(result == 1){
                $("#basketTitleWrap").removeClass("k-loading");
                LoadOrder();
            }
            else{
                $("#basketTitleWrap").removeClass("k-loading");
            }
        }
    })
    return false;
}

function getLoginWindow(){
    var login=$("#window");
    login.kendoWindow({
        content:baseUrl+'/sign-in',
        modal: true,
        visible: false,
        width: 440,
        height: 350
    }).data("kendoWindow").center().open();
}
function LoadRegister(){
    var reg=$("#window");
    reg.kendoWindow({
        content:baseUrl+'/sign-in-reg',
        width:"440px",
        height:"350px",
        modal: true,
        visible: false
    }).data("kendoWindow").center().open();     
}
function handGetItem(id,status){
    checkLogin();
    $.ajax({
        type:'POST',
        async:false,
        url:baseUrl+'/Account/GetFood',
        data:{
            'menu_id':id,
            'status':status
        },
        success:function(result){
            if(result==1){
                $('#get_item_'+id).text(deleteItem);
                $('#get_item_'+id).attr('name', deleteItemCollecion);
                
                $('#get_item1_'+id).text(deleteItem);
                $('#get_item1_'+id).attr('name', deleteItemCollecion);
                
                return;
            }
            if(result==0){
                $('#get_item_'+id).text(getItem);
                $('#get_item_'+id).attr('name',getItemCollection);
                $('#get_item1_'+id).text(getItem);
                $('#get_item1_'+id).attr('name',getItemCollection);
                return;
            }
        },
        error:function(){
            alert(errorStatus);
        }
    })
}
function handGetRest(id,status){
    checkLogin();
    $.ajax({
        type:'POST',
        async:false,
        url:baseUrl+'/Account/GetRestaurants',
        data:{
            'rest_id':id,
            'status':status
        },
        success:function(result){
            if(result==1){
                $('#get_item_'+id).text(deleteItem);
                $('#get_item_'+id).attr('name', deleteItemCollecion);

                $('#get_item1_'+id).text(deleteItem);
                $('#get_item1_'+id).attr('name', deleteItemCollecion);

                return;
            }
            if(result==0){
                $('#get_item_'+id).text(getItem);
                $('#get_item_'+id).attr('name',getItemCollection);
                $('#get_item1_'+id).text(getItem);
                $('#get_item1_'+id).attr('name',getItemCollection);
                return;
            }
        },
        error:function(){
            alert(errorStatus);
        }
    })
}
function getSocialWindow(objectID,objectType){
    checkLogin();
    var comment_block=$('#comment_block_'+objectID);
    $("body").append("<div class='k-overlay' style='display: block; z-index: 10002; opacity: 0.5;'></div>");
    $.ajax({
        url:baseUrl+"/Social/GetSocialForNotify",
        data:{
            'objectID':objectID,
            'objectType':objectType
        },
        success: function (message) {
            $('#comment_block_'+objectID).empty().append(message);
            comment_block.kendoWindow({
                actions: ["Close"],
                width:"655px",
                height:"auto",
                close: function(){
                    $('.k-overlay').remove();
                    $('#comment_block_'+objectID).html('');
                }
            }).data("kendoWindow").center().open();
        },
        error:function(){

        }
    })
}
function getLike(objectID,objectType){
    getLikeMore(objectID, objectType);
    $.ajax({
        type:"POST",
        url:baseUrl+'/Social/GetLike',
        data:{
            'objectID':objectID,
            'objectType':objectType
        },
        success:function(result){
            if(result==2){
                $('#like_'+objectID).text(like);
                $('#like_'+objectID).attr('title', likeItem);
                $('#like_'+objectID).attr('status','1')
                $('#like_'+objectID).addClass('hand-like');
                return;
            }
            if(result==1){
                $('#like_'+objectID).text(dislike);
                $('#like_'+objectID).attr('title', dislikeItem);
                $('#like_'+objectID).attr('status','2')
                $('#like_'+objectID).addClass('hand-dislike');
                return;
            }
            $('#like_'+objectID).removeClass('k-loading');
        }
    })
}
function getLikeMore(objectID,objectType){
    $.ajax({
        url:baseUrl+'/Social/GetLikeMore',
        data:{
            'objectID':objectID,
            'objectType':objectType
        },
        success:function(result){
            $('#like_more_'+objectID).html('').append(result);
        }
    })
}
function LoadOrder(){
        $.ajax({
            url:baseUrl+'/Orders/LoadOrder',
            success:function(result){
                $("#basketWrap").removeClass("k-loading");
                $("#basketWrap").empty().append(result);
            },
            error:function(){
                $("#basketWrap").removeClass("k-loading");
            }
        })
    }
function LoadText(){
        $.ajax({
            url:baseUrl+'/Site/LoadText',
            success:function(result){
                $("#TextWrap").removeClass("k-loading");
                $("#TextWrap").empty().append(result);
            },
            error:function(){
                $("#TextWrap").removeClass("k-loading");
            }
        })
    }
function handLike(objectID,objectType){
    checkLogin();
    var status=$('#like_'+objectID).attr('status');
    $.ajax({
        type:'POST',
        async:false,
        url:baseUrl+'/Social/HandLike',
        data:{
            'status':status,
            'objectID':objectID,
            'objectType':objectType
        },
        success:function(result){
            getLikeMore(objectID, objectType);
            if(result==1){
                $('#like_'+objectID).text(dislike);
                $('#like_'+objectID).attr('title', dislikeItem);
                $('#like_'+objectID).attr('status',2)
                $('#like_'+objectID).removeClass('hand-like').addClass('hand-dislike');
                return;
            }
            else if(result==2){
                $('#like_'+objectID).text(like);
                $('#like_'+objectID).attr('title', likeItem);
                $('#like_'+objectID).attr('status',1)
                $('#like_'+objectID).removeClass('hand-dislike').addClass('hand-like');
                return;
            }else{
                return;
            }
        },
        error:function(){
//            alert(errorStatus);
        }
    })
}
function handLikeComment(objectID,objectType,status){
    checkLogin();
    $.ajax({
        type:'POST',
        async:false,
        url:baseUrl+'/Social/HandLike',
        data:{
            'status':status,
            'objectID':objectID,
            'objectType':objectType
        },
        success:function(result){
            var count=parseInt($('#like_comment_count_'+objectID).html());
            if(result==1){
                $('#like_comment_'+objectID).text(dislike);
                $('#like_comment_'+objectID).attr('title', dislikeItem);
                $('#like_comment_'+objectID).attr('status',2);
                $('#like_comment_count_'+objectID).removeClass('hide');
                $('#like_comment_count_'+objectID).html(count+1);
                return;
            }
            if(result==2){
                $('#like_comment_'+objectID).text(like);
                $('#like_comment_'+objectID).attr('title',likeItem);
                $('#like_comment_'+objectID).attr('status',1);
                $('#like_comment_count_'+objectID).html(count-1);
                if(count==1){
                    $('#like_comment_count_'+objectID).addClass('hide');
                }
                return;
            }else{
                alert(errorStatus);
                return;
            }
        },
        error:function(){
            alert(errorStatus);
        }
    })
    
}
function handLikeTakeout(objectID,objectType,status){
    checkLogin();
    $.ajax({
        type:'POST',
        async:false,
        url:baseUrl+'/Social/HandLike',
        data:{
            'status':status,
            'objectID':objectID,
            'objectType':objectType
        },
        success:function(result){
            if(result==1){
                $('#like_item_'+objectID).text(dislike);
                $('#like_item_'+objectID).attr('title', dislikeItem);
                $('#like_item_'+objectID).attr('status',2);
                return;
            }
            if(result==2){
                $('#like_item_'+objectID).text(like);
                $('#like_item_'+objectID).attr('title', likeItem);
                $('#like_item_'+objectID).attr('status',1);
                return;
            }
        },
        error:function(){
            alert(errorStatus);
        }
    })
    
}
function checkLogin(){
    var takeout99SS=$("#takeout99SS").val();
    if(takeout99SS==0){
        getLoginWindow();
        e.preventDefault();
    }
}
function addFilmItemAddBt()
{
    $('.addfilmItem').hide();
    $('#myfilmadd').append('<div class="filmItem addfilmItem mgr"><a href="javascript:gotofocus();" class="click_back"><img class="add-colection-img" src="<?php echo Yii::app()->baseUrl ?>/images/layout/add.png" width="158px" height="238px" /></a><div class="title-btad"><?php echo more_film_collection; ?></div></div>');
}
function LoadChangePassword(){
    var reg=$("#window");
    $("body").append("<div class='k-overlay' style='display: block; z-index: 10002; opacity: 0.5;'></div>");
    reg.kendoWindow({
        content:baseUrl+'/Account/FormAccountChangePassword',
        actions: ["Close"],
        width:"450px",
        resizable: false,
        close: function(){
            $('.k-overlay').remove();
        //$('.k-window').remove();
        //$('body').append('<div id="window"></div>');
        }
    }).data("kendoWindow").center().open();
}
function handIntroItem(itemID,status){
    checkLogin();
    $.ajax({
        type:'POST',
        async:false,
        url:baseUrl+'/Account/IntroFood',
        data:{
            'id':itemID,
            'status':status
        },
        success:function(result){
                return result;
        },
        error:function(){
            alert(errorStatus);
        }
    })
//    preventDefault();
}
function handIntroRest(itemID,status){
    checkLogin();
    $.ajax({
        type:'POST',
        async:false,
        url:baseUrl+'/Account/IntroRestaurant',
        data:{
            'id':itemID,
            'status':status
        },
        success:function(result){
                return result;
        },
        error:function(){
            alert(errorStatus);
        }
    })
//    preventDefault();
}