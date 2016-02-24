<div id="img-block">
    <div target="_blank" href="/chi-tiet/<?php echo $value["id"]?>"  class="preview-img ddddd">
        <div class="mainimgintro">
            <img onclick="openNewWindow('<?php echo $value["id"]?>')" alt="<?php echo $value["book_name"]?>" WIDTH="96" height="144" src="<?php echo PATH_IMAGE.$value["bookimage_link"] ?>" class="img-hover-action book-css3-shadow" />

        </div>
        <div class="viewtext" >
            <div class="read-booknew1" onclick="openNewWindow('<?php echo $value["id"]?>')" >
                Đọc
            </div>
        </div>
    </div>

</div>


<div class="preview-text ddddd" >
    <span class="book-title"> <a target="_blank" href="/chi-tiet/<?php echo $value["id"]?>" > <?php echo $value["book_name"]?></a></span> <span class="author"><?php echo $value["author"]?></span> <span class="preview">
                  <hr class="hrtext"/>
        <?php echo $value["introduction"]?>
                </span>
</div>
<span class="dots">...</span>