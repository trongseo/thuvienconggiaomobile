$(document).ready(function() {
    var baseUrl='/takeout99';
    $.fn.autosugguest({
           className: 'test',
//           className: 'ausu-suggest',
          methodType: 'POST',
            minChars: 2,
              rtnIDs: true,
            dataFile: baseUrl+'Site/GetPostCode'
    });
});
