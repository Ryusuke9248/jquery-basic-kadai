
    $(window).on('load',()=>{
      //HTMLが読み込まれた後に「loadイベントが発生しました」と表示
      console.log("loadイベントが発生しました");
    });

    $(window).on('scroll',()=>{
      //画面をスクロールしたときに「scrollイベントが発生しました」と表示
      console.log("scrollイベントが発生しました");
    });

