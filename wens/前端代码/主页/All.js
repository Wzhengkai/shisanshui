$(document).ready(function(){
    var token = "5413";
    var user_id = "5413";
    var username = "5413";
    var cards = "5413";
    var hisd="5413";
    var statu="5413";
    var timestamp="5413";
    var detail;
    var obj2 = {"username":"ShenHX","password":"254567087"};
    $("#order_start").click(function(){
        var data=new Array();
    $.ajax({
            url: "http://api.revth.com/rank",
            // beforeSend: function(xhr) {
            //     xhr.setRequestHeader("X-Auth-Token",token);
            // },
    
            type: "GET",
            success: function (result) {
                data=result;
                console.log(data);
                console.log(data[0].score)
            },
            error: function (res) {
                alert("dasdasd");
            }
        });

   
    });
/** 发牌按钮 **/$("#start").click(function(){
    token=localStorage.getItem("token1");
    console.log(token);
    $.ajax({
        url:"http://api.revth.com/game/open",
        beforeSend: function(xhr) {
                xhr.setRequestHeader("X-Auth-Token",token);
            },
        type: "post",
        headers:{"Content-Type":"application/json"},
        success:function(result){
            alert(result.data.card);
            var str=String(result.data.card);
           print(str);
        },
        error:function(){
            alert("wrong");
        }
    })
})    
function print(Str){
    $("#player_pokers").text(Str);    
}
/* 登录按钮 */$("#Sign_in_button").click(function(){  
        $.ajax({
            type:"POST",
            url:"http://api.revth.com/auth/login", 
            // contentType:"application/json",
             dataType:"json",    //跨域json请求一定是jsonp
            // jsonp: "callbackparam",    //跨域请求的参数名，默认是callback
            contentType:"application/json",
            data:JSON.stringify({
                "username":document.getElementById("user_name").value,
                "password":document.getElementById("secret").value
            }),
            // data:{
            //     username:$("#user_name").val(),
            //     password:$("#secret").val()
            // },
            success:function(result){
                console.log(result);
                token=result.data.token;
                user_id=result.data.user_id;
                username=document.getElementById("user_name").value;
                alert(user_id);
                localStorage.setItem("token1",token);
                localStorage.setItem("user_id1",user_id);
               localStorage.setItem("username1",username);
              
                alert(username);
                  window.location.href="Main.html"; 
            },
            error:function(){
                alert("wrong")
                }
           
        });
    });
    document.getElementById("main_user_name").text=localStorage.username1;
});