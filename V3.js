var oneVal = oneVal

$(document).ready(function () {
    $('form.page-item').click(function () {
        $.ajax({

            type: 'GET',
            url: 'taipei_hoteldata_V3.html',
            data: { one: oneVal },
            success: function (data) {
                // 假設資料存儲在一個陣列中
                var data = ['Data 1', 'Data 2', 'Data 3', 'Data 4', 'Data 5', 'Data 6', 'Data 7', 'Data 8', 'Data 9', 'Data 10'];

                // 創建一個空的 HTML 字符串
                var htmlContent = '';

                // 遍歷前10筆資料，將每一筆資料添加到 HTML 字符串中
                for ( i = 0; i < 10; i++) {
                    htmlContent += '<div>' + data[i] + '</div>';
                }

                // 將 HTML 字符串設置到具有 id 為 "one" 的元素中
                $('#one').html(htmlContent);
            }

        });
    });
});