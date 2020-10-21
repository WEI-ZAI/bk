$.ajax({
    type: "GET",
    url: "https://api.uixsj.cn/hitokoto/get",
    success: function (data) {
        $("#p").html(data);
    }
})