$(function(){

  //文字色変化アクション
  $('#change-color').on('click', function(){
      $('#target').css('color', 'red')
  });

  // 文字内容変更アクション
  $('#change-text').on('click', function(){
    if($('#target').text()==='こんにちは！'){
      $('#target').text('Hello!');
    }else{
      $('#target').text('こんにちは！')
    }    
  });

  //フェードアウトアクション
  $('#fade-out').on('click', function(){
    $('#target').fadeOut()
  });

  //フェードインアクション
  $('#fade-in').on('click', function(){
    $('#target').fadeIn()
  });


});
