<?php $form = $this->beginWidget('CActiveForm', array('id' => 'frm', 'enableAjaxValidation' => false, 'enableClientValidation' => true, 'htmlOptions' => array('name' => 'frm','enctype'=>'multipart/form-data'))); ?>


    <input type="file" name="uploaded_image" id="uploaded_image" />
    <input type="submit" name="submit" onclick="return showFileSize('uploaded_image') " value="Upload" />

<?php $this->endWidget(); ?>
<script>

    function showFileSize(uploaded_image) {
        var input, file;

        // (Can't use `typeof FileReader === "function"` because apparently
        // it comes back as "object" on some browsers. So just see if it's there
        // at all.)
        if (!window.FileReader) {
            return false;
        }

        input = document.getElementById(uploaded_image);
        if(input.value==""){
            alert('Vui lòng nhập!');
            input.focus();
            return false;
        }
//        if (!input) {
//            bodyAppend("p", "Um, couldn't find the fileinput element.");
//        }
//
//        else if (!input.files) {
//            bodyAppend("p", "This browser doesn't seem to support the `files` property of file inputs.");
//        }
//        else if (!input.files[0]) {
//            bodyAppend("p", "Please select a file before clicking 'Load'");
//        }
//        else {
//            file = input.files[0];
//            bodyAppend("p", "File " + file.name + " is " + file.size + " bytes in size");
//        }
        if (!input.files[0].name.toLowerCase().match(/\.(jpg|jpeg|png|gif)$/)){
            alert('Hãy chọn hình!');return false;
        }
        file = input.files[0];
        logit(file.size);
        if( file.size>1024*2000){
            alert('Hãy chọn hình <2MB!');return false;
        }

        return false;
    }
    function   logit(content){
        console.log(content);
    }
</script>