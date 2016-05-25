$(document).ready(function () {
    function addComment () {
        var nameAvtor = "Name avtor",
            date = new Date(),
            nowDate = date.getDate() + ' ' + date.getMonth() + ' ' + date.getFullYear();
            var comment = $("#commentRead").val();
        if (comment.length > 1) {
            $(".comment--full").append("<div class=\"blockComment\"><div class=\"blockComment--name\">" + nameAvtor + "</div><div class=\"blockComment--date\">" + nowDate + "</div><div class=\"blockComment--text\">" + comment + "<img src=\"images/comment_1.png\" alt=\"\"></div></div>");
            $("#commentRead").val(" ");
        }
    }
    $('#commentAdd').click(function(){
        addComment();
    });
    $('#commentRead').keydown(function (e) {
        if (e.ctrlKey && e.keyCode == 13) {
            addComment();
        }
    });
});