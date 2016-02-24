
                    <div id="divlist">

                        <div class="box-body">
                            <table class="table table-bordered">
                                <tbody><tr>
                                    <th style="width: 10px">#</th>
                                    <th>Ip</th>
                                    <th>Thời gian</th>
                                    <th>Xóa</th>

                                </tr>
                                <?php $numst=1; ?>
                                <?php foreach($data as $value):?>

                                    <tr class="remove<?php echo $value["id"]?>">
                                        <td> <?php echo $numst++; ?></td>
                                        <td> <?php echo $value["ip_address"]?>
                                            </td>
                                        <td> <?php echo $value["time_accessed"]?>
                                        </td>
                                        <td>
                                            <button class="btn btn-info btn-sm cssdelete" type="button"  guid_id="<?php echo $value["id"]?>" >Xóa</button>


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
                            'maxButtonCount'=>25,
                            //'nextPageLabel'=>'My text >',
                            'header'=>'',
                            'htmlOptions'=>array('class'=>'yiiPager'),
                        ));
                        ?>  </div>
                    </div>
