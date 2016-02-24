<?php
$flg = $value["flg_iframe"];
$strOpen ='window.open("'.$value["link_ref"].'","_blank") ';
if($flg==1){
    //$strOpen ='target="_blank" href="'.$value["link_ref"].'" ';
    $strOpen ='window.open("'.$value["link_ref"].'","_blank") ';
}
//window.open('/chi-tiet/'+openid,'_blank');

?>
<div id="img-block">
    <div  class="preview-img ddddd">
        <div class="mainimgintro">
            <img alt="<?php echo $value["description"]?>" WIDTH="96" height="144" src="<?php echo PATH_IMAGE_REF.$value["image_name"] ?>" class="img-hover-action book-css3-shadow boximg" onclick="openNewWindowURL('<?php echo $value["link_ref"]?>',<?php echo $value["flg_iframe"]?>,<?php echo $value["id"]?>')"   />

        </div>
        <div class="viewtext" >
        <div class="read-booknew1" onclick="openNewWindowURL('<?php echo $value["link_ref"]?>',<?php echo $value["flg_iframe"]?>,<?php echo $value["id"]?>)"  >
            Đọc
        </div>
        </div>
    </div>

</div>


<div class="preview-text ddddd" >
    <span class="book-title"> <a onclick="openNewWindowURL('<?php echo $value["link_ref"]?>',<?php echo $value["flg_iframe"]?>,<?php echo $value["id"]?>)" > <?php echo $value["title"]?></a></span>  <span class="preview">
                  <hr class="hrtext"/>
        <?php echo $value["description"]?>
                </span>
</div>
<span class="dots">...</span>
