$(function(){
  //class属性btnがクリックされたら
  $('.btn').on('click', function(){
    $('.text-box').prop('value', "クリックしました！");
  });
});