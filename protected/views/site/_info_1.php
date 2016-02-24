<style>
    .headerc {
        font-weight:600;

    }
    .infofont{
        color: #BA7B47;
    }

    .h4here{
        color: #5A2D0C;text-decoration: underline;
    }
    .contentit{
        color: #885A2A;
    }
    .book-css3-shadow {

        -moz-box-shadow: 0px 3px 3px 0px #5f5f5f,0px 3px 8px #ababab;
        -webkit-box-shadow: 0px 3px 3px 0px #5f5f5f,0px 3px 8px #ababab;
        box-shadow: 0px 3px 3px 0px #5f5f5f,0px 3px 8px #ababab;
</style>
<div class="row container1">
	<div class="main-login col-xs-12 col-sm-12 col-md-12" style="">
        <div class="row">
            <div class="" style="border-radius:none;">
                <h4 style="text-decoration: underline;" class="h4here">
                   THÔNG TIN CHI TIẾT
                </h4>

                <div class="clear1"></div>
                <div class="row textcolor1 " style="padding-left:15px">
                    <div class="col-md-4">
                        <div class="row">
                            <div class="col-md-12"> <span class="headerc colorconggiao"> Tác giả:</span>
                                <?php echo  $arrBook['author']; ?> </div>
                    </div>
                        <div class="row">
                            <div class="col-md-12">   <span class="headerc colorconggiao"> Người dịch:</span>  <?php echo  $arrBook['translator']; ?></div>
                        </div>
                       
                    </div>
                    <div class="col-md-3">
                        <div class="row">
                            <div class="col-md-12">  <span class="headerc colorconggiao">  Ngôn ngữ:</span>
                                <?php echo  $arrBook['language']==1?'Việt':'Anh'; ?> </div>
                        </div>
                        <div class="row">
                            <div class="col-md-12"> <span class="headerc colorconggiao"> Số trang: </span> <?php echo  $arrBook['pages_num']; ?></div>
                        </div>
                        <div class="row">
                            <div class="col-md-12"> <span class="headerc colorconggiao"> Ngày phát hành:</span><?php echo Common::converYYYYMMDDtoDaymonyyyyPara($arrBook['issue_date']) ; ?></div>
                        </div>
                    </div>
                    <div class="col-md-3">

                        <div class="row">
                            <div class="col-md-12"> <span class="headerc colorconggiao">  Quyền sở hữu:</span>
                                <?php echo  $arrBook['owner']; ?> </div>
                        </div>
                        <div class="row">
                            <div class="col-md-12"> <span class="headerc colorconggiao"> Người tặng:</span>  <?php echo  $arrBook['giver']; ?></div>
                        </div>
                        <div class="row">
                            <div class="col-md-12"><span class="headerc colorconggiao"> Mã sách:</span>  <?php echo  $arrBook['book_code']; ?></div>
                        </div>
                        </div>
                    <div class="col-md-2">

                        <div class="row">
                            <div class="col-md-12">  <span class="headerc colorconggiao"> Số người xem:</span>
                                <?php echo  $arrBook['viewer_count']; ?>  </div>
                        </div>
                        <div class="row">
                            <div class="col-md-12"> <span class="headerc colorconggiao"> Số người đọc:</span>
                                <?php echo  $arrBook['reader_count']; ?>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-12"></div>
                        </div>

                        </div>
                    </div>
                </div>
                <div class="clear1"></div>

                <h4 style="" class="h4here">
                    NỘI DUNG SÁCH
                </h4>
                <div class="clear1"></div>
                <div class="col-md-12">
                	<div class="form-group">
	                	<div class="col-md-2">
	                		<div class="row">
		                		<img class="book-css3-shadow" src="<?php echo PATH_IMAGE.$arrBook["bookimage_link"] ?>" width="150px" height="200px">
		                	</div>
                            <?php if(isset(Yii::app()->session['id_user'])): ?>
                                <div class="download">
                                    <a class="register" href="<?php echo PATH_IMAGE_bookFile.'/'.$arrBook['book_content']; ?>">
                                        Lấy về miễn phí
                                    </a>
                                </div>
                            <?php else: ?>

                            <?php endif; ?>


	                	</div>						
	                	<div class="col-md-8" style="text-align:left;">
	                		<div class="row  " >
                                <?php echo  $arrBook['introduction']; ?>
		                	</div>
	                	</div>
                	</div>
                </div>
                <div class="clear1"></div>
            </div>
        </div>
    </div>
</div>