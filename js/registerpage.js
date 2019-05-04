//点击验证码，60秒倒计时
var num=6;
var time=null;
$('#a').on('click',function(){
  function time_(){
      num--;
      if(num<=0){
          clearInterval(timer);
          num=6;
          $('#a').html("重发验证码");
      }else if(num>0){
          $('#a').html(num+"秒之后重新获取");
      }

  }
  timer=setInterval(time_,1000);
});

//表单验证
var phone=document.getElementsByClassName(".phone")[0];
var pass=document.getElementsByClassName(".pass")[0];
var rePass=document.getElementsByClassName(".rePass")[0];

function sbt(){
    phone.onchange=function(){
        if(phone.value===""){
            alert("手机号不能为空");
        }
    };
    pass.onchange=function(){
        if(pass.value===""){
            alert("密码不能为空");
        } else if(pass.value!=rePass.value){
            alert('两次密码不一致');
        }
    };
}






