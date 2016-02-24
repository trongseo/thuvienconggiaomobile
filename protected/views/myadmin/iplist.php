<style>
    ul.yiiPager{
        padding-left: 15px;
    }
</style>
<section class="content-header">
    <h1>
        <?php echo $this->pageTitle; ?>

    </h1>

</section>

<link rel="stylesheet" href="themes/admin-green/views/js/date_range/daterangepicker.css" />
<script src="themes/admin-green/views/js/date_range/jquery-1.11.2.min.js"></script>
<script src="themes/admin-green/views/js/date_range/moment.min.js"></script>
<script src="themes/admin-green/views/js/date_range/jquery.daterangepicker.js"></script>
<script src="http://malsup.github.com/jquery.form.js"></script>
<form id="myForm" action="index.php?r=myadmin/iplist" method="post" enctype="multipart/form-data">
    <section class="content  bordertop">
        <div class="row">
            <div class="col-md-6" style="width: 80%">

                <div class="panel panel-default">

                    <div class="panel-body">
                    <div class="form-group">
                        <table style="height: 40px;" width="500" >
                            <tbody>
                            <tr>
                                <td> <label for="pass_new"> </label></td>
                                <td class="twoinputs" >
                                    <input type="text" id="date_from"  name="date_from" placeholder="Từ ngày" value="<?php echo $hsSearch["date_from"] ?>" class="form-control"/>


                                </td>
                                <td class="twoinputs">
                                    <input type="text" id="date_to"  name="date_to" placeholder="Đến ngày" value="<?php echo $hsSearch["date_to"] ?>" class="form-control"/>

                                </td>
                                <td>   <input value="Tìm" type="button" class="btn btn-info cssfind"/></td>
                            </tr>

                            </tbody>
                        </table>


</div>
                    </div>

                    <div id="divlist">


                    </div>
                </div>

            </div>
        </div>
    </section>
</form>

<script>
$(document).on('click', '.cssdelete', function () {
    guid_id = $(this).attr("guid_id");
var cf1= confirm("Bạn có chắc là muốn xóa ?Không thể phục hồi.");
    if(cf1)
    $.get("index.php?r=ajaxadmin/deletesanpham&guid_id="+guid_id +"&imagename=", function (data, status) {
      $('.remove'+guid_id).hide()  ;
    });

});

$(document).on('click', '.cssfind', function () {
  ///form1.submit();

    myhreff= 'index.php?r=myadmin/ajaxiplist&'+$('#myForm').serialize();
    GoTo(myhreff);

});
//click vao page
$(document).on('click', '.mycho', function () {
    myhreff= $(this).attr("href");
    $(this).attr("href","#");
//myadminvideo/videoedit&san_pham_guid=45D2ACE6-D24E-CB65-149C-7A32C24BB3EF
    //window.location.href='index.php?r=myadminvideo/videoedit&guid='+guid_id;
    GoTo(myhreff);

});

function GoTo(ahref){
    $('#divlist').html("loading...");
    $.get(ahref, function (data, status) {
        $('#divlist').html(data);
        jQuery('.yiiPager .page a').each(function() {
            console.log( $(this).attr('href'));

        });

    });
}
GoTo('index.php?r=myadmin/ajaxiplist');
function GoTo1(ahref){
    $.get(ahref, function (data, status) {
        $('#divlist').html(data);
        jQuery('.yiiPager .page a').each(function() {
            console.log( $(this).attr('href'));

        });

    });
}
</script>
<script>
$('.twoinputs').dateRangePicker(
    {
        separator : ' to ',
        getValue: function()
        {
            if ($('#date_from').val() && $('#date_from').val() )
                return $('#date_from').val() + ' to ' + $('#date_to').val();
            else
                return '';
        },
        setValue: function(s,s1,s2)
        {
            $('#date_from').val(s1);
            $('#date_to').val(s2);
        }
    });
</script>


