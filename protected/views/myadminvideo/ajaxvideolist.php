
                        <div class="box-body">
                            <table class="table table-bordered">
                                <tbody><tr>
                                    <th style="width: 10px">#</th>
                                    <th>Video</th>
                                    <th>Xóa</th>

                                </tr>
                                <?php $numst=1; ?>
                                <?php foreach($data as $value):?>

                                    <tr class="remove<?php echo $value["video_list_guid"]?>">
                                        <td> <?php echo $numst++; ?></td>
                                        <td> <?php echo $value["text_embed"]?></td>
                                        <td>
                                            <button class="btn btn-info btn-sm cssdelete" type="button"  guid_id="<?php echo $value["video_list_guid"]?>" >Xóa</button>

                                            <button class="btn btn-info btn-sm cssedit" type="button"  guid_id="<?php echo $value["video_list_guid"]?>" >Sửa</button>
                                        </td>

                                    </tr>

                                <?php endforeach?>


                                </tbody></table>
                        </div>
<div class="form-group">
                        <?php

                        $this->widget('CLinkPager', array(
                            'currentPage'=> $dataSearch['pages']->getCurrentPage(),
                            'itemCount'=>$dataSearch['itemCount'],
                            'pageSize'=>$dataSearch['pageSize'],
                            'maxButtonCount'=>5,
                            //'nextPageLabel'=>'My text >',
                            'header'=>'',
                            'htmlOptions'=>array('class'=>'yiiPager'),
                        ));
                        ?> </div>
<script>




</script>