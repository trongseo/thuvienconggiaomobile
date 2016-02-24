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
        box-shadow: 0px 3px 3px 0px #5f5f5f,0px 3px 8px #ababab;}
    .viewtextsearch{

        z-index: 10;
        color: #B73A3A;
        font-size: 14px;
        font-weight: bold;
        left: 0px;
        /* top: 177px; */
         display: none;
        background-color: #D7BD9E;
        /* opacity: 0.9; */
        width: 150px;
        opacity: 0.9;
        height: 35px;
        position: relative;
        margin-top: -34px;
        padding-top: 1px;
    }
    .readbooknewsearch {
        background: url('/images/ic_book.png') no-repeat scroll 0 0;
        padding-left: 29px;
        cursor: pointer;
        color: #311D05;
        clear: both;
        margin-left: 52px;
        margin-top: 5px;
        /* position: absolute; */
    }
    .hoverdiv:hover .viewtextsearch{
        display: block;
    }
</style>
<div class="row container1">
	<div class="main-login col-xs-12 col-sm-12 col-md-12" style="">
        <div class="row">
            <div class="" style="border-radius:none;">
                <h4 style="text-decoration: underline;" class="h4here">
                   THÔNG TIN SÁCH
                </h4>

                <div class="clear1"></div>
                <div class="row textcolor1 " style="padding-left:15px">
                    <div class="col-md-4">
                        <div class="row">
                            <div class="col-md-12">  <span class="headerc colorconggiao"> Tên sách:</span> <?php echo  $arrBook['book_name']; ?></div>
                        </div>
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
                            <div class="col-md-12">  <span class="headerc colorconggiao"> Nhà xuất bản:</span> <?php echo  $arrBook['publisher']; ?></div>
                        </div>

                    </div>
                    <div class="col-md-3">
                        <div class="row">
                            <div class="col-md-12"> <span class="headerc colorconggiao"> Ngày phát hành:</span><?php echo Common::converYYYYMMDDtoDaymonyyyyPara($arrBook['issue_date']) ; ?></div>
                        </div>
                        <div class="row">
                            <div class="col-md-12"> <span class="headerc colorconggiao">  Quyền sở hữu:</span>
                                <?php echo  $arrBook['owner']; ?> </div>
                        </div>
                        <div class="row">
                            <div class="col-md-12"> <span class="headerc colorconggiao"> Người tặng:</span>  <?php echo  $arrBook['giver']; ?></div>
                        </div>

                        </div>
                    <div class="col-md-2">
                        <div class="row">
                            <div class="col-md-12"><span class="headerc colorconggiao"> Mã sách:</span>  <?php echo  $arrBook['book_code']; ?></div>
                        </div>
                        <div class="row">
                            <div class="col-md-12">  <span class="headerc colorconggiao"> Số lượt xem:</span>
                                <?php echo  $arrBook['viewer_count_detail']; ?>  </div>
                        </div>
                        <div class="row">
                            <div class="col-md-12"> <span class="headerc colorconggiao"> Số người đọc:</span>
                                <?php echo  $arrBook['reader_count_detail']; ?>
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
                    GIỚI THIỆU SÁCH
                </h4>
                <div class="clear1"></div>
                <div class="col-md-12">
                	<div class="form-group">
	                	<div class="col-md-2">
	                		<div class="row hoverdiv">
		                		<img  class=" bookimagecls book-css3-shadow" src="<?php echo PATH_IMAGE.$arrBook["bookimage_link"] ?>" width="150px" height="200px">
                                <div class="viewtextsearch bookimagecls" >
                                    <div class="readbooknewsearch bookimagecls"  >
                                        Đọc
                                    </div>
                                </div>
                            </div>
                            <?php if(isset(Yii::app()->session['id_user'])&&($arrBook['download_flg']==1)): ?>
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