      <style>
          .fa{

          }
          .fa-plus-square{

                }
          .fa-plus-square:before {
              content: "";
          }
      </style>
        <?php
       // $comboData1ss = CommonDB::GetAll('SELECT * FROM tbl_index WHERE delete_logic_flg=0 ORDER BY  INDEX_CODE',[]);
        $comboData1ss = Common::getSession('MENU_SS');
        function getDataArr($comboData1ss,$valType,$valParentId){
            $resultsArray = array();
            foreach($comboData1ss as $row){
                if(($row['type'] == $valType )&&($valParentId== -1) ) {
                    $resultsArray[] = $row;
                }else
                    if(($row['type'] == $valType )&&( $row['parent_id']==  $valParentId) ) {
                        $resultsArray[] = $row;
                    }
            }
            return $resultsArray;
        }
        $comboData=getDataArr($comboData1ss,0,-1);
        ?>

        <?php foreach($comboData as $value):?>
            <?php

            //$comboData1 = CommonDB::GetAll('SELECT * FROM tbl_index WHERE delete_logic_flg=0 AND TYPE=1 AND parent_id='.$value['id'].' ORDER BY  INDEX_CODE',[]);

            $comboData1= getDataArr($comboData1ss,1,$value['id']);

            ?>
            <li class="item<?php echo $value["id"]?> dropdown-submenu">

                <a class="aitem<?php echo $value["id"]?> " title="<?php echo $value["name"]?>" href="/thu-vien/?cate=<?php echo $value["id"]?>" myid="<?php echo $value["id"]?>"><?php echo Common::truncate($value["name"],36,'.') ;?> <i class="fa fa-plus-square"></i></a>
                <ul class="cute1 dropdown-menu">
                    <?php foreach($comboData1 as $value1):?>
                        <li class="subitem1 dropdown-submenu">

                            <a  title="<?php echo $value1["name"]?>" class="trung1" href="/thu-vien/?cate=<?php echo $value["id"]?>-<?php echo $value1["id"]?>" myid="<?php echo $value["id"]?>-<?php echo $value1["id"]?>" > <?php echo Common::truncate($value1["name"],30,'.');?>  <i class="fa fa-plus-square"></i></a>

                            <?php
                           // $comboData2 = CommonDB::GetAll('SELECT * FROM tbl_index WHERE delete_logic_flg=0 AND TYPE=2 AND parent_id='.$value1['id'].'   ORDER BY  INDEX_CODE',[]);
                            $comboData2= getDataArr($comboData1ss,2,$value1['id']);
                            ?>  <ul class="cute1 dropdown-menu">
                                <?php foreach($comboData2 as $value2):?>

                                    <li class="subitem1 sublittle"><a  title="<?php echo $value2["name"]?>" class="tieu" href="/thu-vien/?cate=<?php echo $value["id"]?>-<?php echo $value1["id"]?>-<?php echo $value2["id"]?>" id="<?php echo $value2["id"]?>" myid="<?php echo $value["id"]?>-<?php echo $value1["id"]?>-<?php echo $value2["id"]?>" >  <?php echo Common::truncate($value2["name"],34,'.')?> </a></li>


                                <?php endforeach?>
                            </ul>
                        </li>
                    <?php endforeach?>
                </ul>
            </li>

        <?php endforeach?>

