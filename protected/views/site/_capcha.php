<?php
$_SESSION['count'] = time();
$image;
?>


<?php
function create_image()
{
global $image;
$image = imagecreatetruecolor(200, 50) or die("Cannot Initialize new GD image stream");
$background_color = imagecolorallocate($image, 255, 255, 255);
$text_color = imagecolorallocate($image, 0, 255, 255);
$line_color = imagecolorallocate($image, 64, 64, 64);
$pixel_color = imagecolorallocate($image, 0, 0, 255);
imagefilledrectangle($image, 0, 0, 200, 50, $background_color);
// for ($i = 0; $i < 3; $i++) {
// imageline($image, 0, rand() % 50, 200, rand() % 50, $line_color);
// }
for ($i = 0; $i < 1000; $i++) {
imagesetpixel($image, rand() % 200, rand() % 50, $pixel_color);
}
$letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
$len = strlen($letters);
$letter = $letters[rand(0, $len - 1)];
$text_color = imagecolorallocate($image, 0, 0, 0);
$word = "";
for ($i = 0; $i < 6; $i++) {
$letter = $letters[rand(0, $len - 1)];
imagestring($image, 7, 5 + ($i * 30), 20, $letter, $text_color);
$word .= $letter;
}
$_SESSION['captcha_string'] = $word;
$images = glob("*.png");
// if(count($images)>0){
// 	foreach ($images as $image_to_delete) {
// 		print_r($image_to_delete);
// 		@unlink($image_to_delete);
// 	}
// }
 function display()
{
?><div style="display:inline-block"> 
<img  onclick="LoadCapcha();return false;"  src="<?php echo Yii::app()->baseUrl."/images/".$_SESSION['count'] ?>.png" width="150"></div>

<?php
}
imagepng($image, "images/" . $_SESSION['count'] . ".png");
}
create_image();
display();//echo $_SESSION['captcha_string'];
?>
<input type='hidden' id='ctc' name='ctc' value='<?php  echo $_SESSION['captcha_string'];?>' />