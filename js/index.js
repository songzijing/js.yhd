
  //客户服务
  $('.ss_listBg').hover(function(){
      $('.ss_list_bg').show();
  },function(){
      $('.ss_list_bg').hide();
  });
//全部商品分类
  $(".fj").hover(function(){
      $(this).parents("li").find(".zj").show();
  },function(){
      $(this).parents("li").find(".zj").hide();
  });
  //移入二级菜单
  $('.zj').hover(function(){
      $(this).show();
  },function(){
      $(this).hide();
  });
  //购物车
  $('.car_t').on('mouseover',function(){
      $('.last').show();
  });
  $('.last').hover(function(){
      $(this).show();
  },function(){
      $(this).hide();
  });
  //数据格式
  var shopCar={
      totalPrice:0,
      totalNum:0,
      shopList:[
          // {
          //     J_inputCount:1,     //数量
          //     price:190,         //单价总和
          //      total:190
          // }
      ]
  };
  //从页面中获取数据
  var $lis=$('.shop ul li');
  $lis.each(function(){
      var n=$(this).find($('.J_inputCount')).val()-0;
      var p=$(this).find($('.price')).text()-0;
      var t=n*p;
      shopCar.shopList.push({
          J_inputCount:n,
          price:p,
          total:t
      });
  });
  //点击+
  $('.J_btnAddCount').on('click',function(){
      var index=$(this).parents("li").index();
      var num=++shopCar.shopList[index].J_inputCount;
      change_(index,num);
      html(index);
  });
  //点击-
  $('.J_btnDelCount').on('click',function(){
      var index=$(this).parents("li").index();
      var num=shopCar.shopList[index].J_inputCount;
      if(num<=1){
          alert("不能再少了");
          return false;
      }
      --num;
      change_(index,num);
      html(index);
  });

  function change_(index,num){
      if(index>-1){
      shopCar.shopList[index].J_inputCount=num;
      shopCar.shopList[index].total=num*shopCar.shopList[index].price;
  }
      shopCar.totalPrice =0;
      shopCar.totalNum =0;
     $.each(shopCar.shopList,function(index,item){
         shopCar.totalPrice+=item.total;
         shopCar.totalNum+=item.J_inputCount;
     });
      html(index);
  }
  //在页面上展示
    function html(index){
      if(index>-1){
     $('.J_inputCount').eq(index).val(shopCar.shopList[index].J_inputCount);
      $('.price').eq(index).text(shopCar.shopList[index].total);
    }
      $('.totalPrice').text(shopCar.totalPrice);
      $('.J_totalCount').text(shopCar.totalNum);
    }
    //删除
  $('.J_btnDelete').on('click',function(){
      var index=$(this).parents('li').index();
      //html
      $(this).parents('li').remove();
      //数据
      shopCar.shopList.splice(index,1);
     change_(-1);
      //判断购物车为空
      if($('.last .shop ul li').length<1){
          $('.last .shop').hide();
          $('.last .noshop').show();
      }
  });

  //轮播图
   $(function(){
      var img=$('.slide_box li');
      var li=$('.num li');
      var timer=null;
      var num=0;

      function auto(){
          for(var i=0;i<img.length;i++){
              img[i].style.display="none";
              li[i].className="";
          }
          num++;
          if(num>=img.length){
              num=0;
          }
          img[num].style.display="block";
          li[num].className="active";
      }
      timer=setInterval(auto,1000);
      for(var i=0;i<li.length;i++){
          mouse(i)
      }
     function mouse(index){
         //移入
         li[index].onmouseenter=function(){
             clearInterval(timer);
             for(var j=0;j<li.length;j++){
                 img[j].style.display="none";
                 li[j].className="";
             }
             num=index;
             img[index].style.display="block";
             li[index].className="active a";
         };
         //移出
         li[index].onmouseleave=function(){
             timer=setInterval(auto,1000);
         }
     }
  });
/*  //面向对象 轮播图

        var img=$('.slide_box li');
        var li=$('.num li');
        var timer=null;
        var num=0;

  //公共部分
  function autoplay(n){
      for(var i=0;i<img.length;i++){
          img[i].style.display="none";
          li[i].className="";
      }
      img[n].style.display="block";
      li[n].className="active";
  }
  //自动轮播
  function auto(){
        timer=setInterval(function(){
            num++;
            if(num>=img.length){
                num=0;
            }
            autoplay(num);
        },1000);
  }
  //鼠标事件
  for(var i=0;i<li.length;i++){
      mouse(i)
  }
  function mouse(index){
      auto();
      //移入
      li[index].onmouseover=function(){
          clearInterval(timer);
          num=index;
          autoplay(index);
      };
      //移出
      li[index].onmouseout=function(){
          auto();
      }
  }
  mouse();*/

  //新闻列表
  var  li_h=$('#express').find('li').innerHeight();
   var  timer=null;
  var option={
      parent:'#express',
      child:'#express li'
  };
  function exp(){
      $(option.parent).css("marginTop",-li_h);
      $(option.child).slice(0,1).appendTo($(option.parent));
      $(option.parent).animate({"marginTop":0},3000,function(){});
  }
  timer=setInterval(exp,1000);
  $(option.child).hover(function(){
      clearInterval(timer);
  },function(){
      timer=setInterval(exp,1000);
  });

