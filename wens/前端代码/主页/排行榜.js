$(document).ready(function(){
    var data=new Array();
    $("#order_start").click(function(){    
    
        $.ajax({
                url: "http://api.revth.com/rank",
                // beforeSend: function(xhr) {
                //     xhr.setRequestHeader("X-Auth-Token",token);
                // },
        
                type: "GET",
                success: function (result) {
                    data=result;
                    console.log(data[0].score);
                    console.log(data);
                    renderPage()
                },
                error: function (res) {
                    alert("error");
                }
            });
        function renderPage() {
            data.forEach((item) => {
                $("#TABLE").append(
                "<tr align='center'>" +
                    "<td>" + item["player_id"] + "</td> " + 
                    "<td>" + item["name"] + "</td> " +
                    "<td>" + item["score"] + "</td> " +
                "</tr>")
            })
        } })
  })
