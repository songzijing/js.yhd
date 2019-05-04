//客户服务
$('.ss_listBg').hover(function(){
    $('.ss_list_bg').show();
},function(){
    $('.ss_list_bg').hide();
});
//颜色
$('#choice1 li').on('click',function(){
     index=$(this).index();
    $('#choice1 li').eq(index).addClass('checked').siblings().removeClass('checked');;
});
$('#choice2 li').on('click',function(){
    index=$(this).index();
    $('#choice2 li').eq(index).addClass('checked').siblings().removeClass('checked');
});

//+-
var num=$('.j_nums .n_ipt').val();

$('.n_btn_1').on('click',function(){
    num++;
    $('.n_ipt').val(num);
});
$('.n_btn_2').on('click',function(){
    num--;
    if(num<0)alert('不能再少了');num=0;
    $('.n_ipt').val(num);
});

//分享
window._bd_share_config={
    "common":{
        "bdSnsKey":{},
        "bdText":"",
        "bdMini":"2",
        "bdPic":"",
        "bdStyle":"0",
        "bdSize":"16"
    },
    "share":{},
    "image":{
        "viewList":["qzone","tsina","tqq","renren","weixin"],
        "viewText":"分享到：","viewSize":"16"},
    "selectShare":{
        "bdContainerClass":null,
        "bdSelectMiniList":["qzone","tsina","tqq","renren","weixin"]}};
with(document)0[(getElementsByTagName('head')[0]||body).appendChild(createElement('script')).src='http://bdimg.share.baidu.com/static/api/js/share.js?v=89860593.js?cdnversion='+~(-new Date()/36e5)];
 //推荐
 /*var shopCar={
     totalSum:0,
     count:1,
     shopList:[
        // {
        //     price:76 ,
        //     checked:checked
        // },
        // {
        //     price:1890 ,
        //     checked:checked
        // },
        // {
        //     price:232,
        //     checked:checked
        // }
     ]
 };
  var $teamList = $('.team_list') ;  //div
  var $check=$('.checked input');
  var $price=$('.price span');
  var $totalSum=$('.team_sum span');   //2000
  var $cound=$('.sum_ipt');    //1

//初始化
 $teamList.each(function(){
     var p=$('.price span',this).text().slice(1)-0;
     var checked=$('.checked input',this).is(":checked");
    shopCar.shopList.push(
        {
            price:p,
            checked:checked
        }
    )
 });
 shopCar.count=$cound.val() ||  1;

 //选中
  $check.on('click',function(){
      var index=$(this).index();
      // console.log(index);
      var checked=$(this).is(":checked");
      shopCar.shopList[index].checked=checked;
      // change(index);
       html();
  });

  //数量
$cound.change=(function(){
    var newCount = $(this).val();
    if(/^[1-9]\d*$/.test(newCount)){
        shopCar.count=newCount-0;
    }else{
        $(this).val(shopCar.count);
    }
    html();
});

  // function change(index){
  //
  //     $.each(shopCar.shopList,function(){
  //         if($check.eq(index).is(":checked")){
  //             shopCar.totalSum+=shopCar.shopList[index].price;
  //         }
  //     });
  //
  // }
 function html(){
    shopCar.totalSum=shopCar.shopList.list.reduce(function(index,item){
       console.log(index,item);
        var price=item.checked?item.price:0;
        return index+price
    },0)*shopCar.count;
     $totalSum.text(shopCar.totalSum)
 }

// console.log(shopCar);*/

(function() {
    var recommendList = {
        list: [],
        count: 1,
        totalSum: 0
    };
    var $teamList = $('.team_list') ;  //div
    var $check = $('.checkbox input');  //kuang
    var $sumIpt = $('.sum_ipt');      //1
    var $totalSum = $('.team_sum span');  //2000

    // 初始化
    $teamList.each(function(){
        var price = $('.price span', this).text().slice(1) - 0;
        var checked = $('.checkbox input', this).is(':checked');
        recommendList.list.push({
            price: price,
            checked: checked
        })
    });
    recommendList.count = $sumIpt.val() || 1;


    // 选中
    $check.click(function() {
        var index = $check.index(this);
        var checked = $(this).is(':checked');
        recommendList.list[index].checked = checked;
        render()
    });

    // 数量
    $sumIpt.change(function() {
        var newCount = $(this).val();

        if(/^[1-9]\d*$/.test(newCount)) {
            recommendList.count = newCount -0
        } else {
            $(this).val(recommendList.count)
        }
        render()
    });

    // 渲染
    function render() {
      /*  recommendList.totalSum = recommendList.list.reduce(function(index, item) {
            console.log(index,item);
            var price = item.checked ? item.price : 0;
            return index + price
        }, 0) * recommendList.count;
*/
      $.each(recommendList.list,function(index,item){
          var price = item.checked ? item.price : 0;
          recommendList.totalSum +=price;
      },0);

        $totalSum.text(recommendList.totalSum)
    }

    render()
})();