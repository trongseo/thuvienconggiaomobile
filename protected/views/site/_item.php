<?php
	$active0 = '';
	$active1 = '';
	$active2 = '';
	$active3 = '';
	if($id == 0){
		$active0 = 'active-item';
	}
	if($id == 1){
		$active1 = 'active-item';
	}
	if($id == 2){
		$active2 = 'active-item';
	}
	if($id == 3){
		$active3 = 'active-item';
	}
?>


<div onclick="LoadInfo(0);" class="item-book <?php echo $active0?>">
	Đọc sách
</div>
<div onclick="LoadInfo(1);" class="item-book <?php echo $active1?>">
	Thông tin sách
</div>
<div onclick="LoadInfo(2);" class="item-book <?php echo $active2?>">
	Đánh giá & Bình luận
</div>
<div onclick="LoadInfo(3);" class="item-book <?php echo $active3?>">
	Sách liên quan
</div>