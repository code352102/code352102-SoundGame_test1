// phina.js をグローバル領域に展開
phina.globalize();

//アセット
var ASSETS = {
  // サウンド
  sound: {
    'sound1': './music1.mp3',
  },
};

// MainScene クラスを定義
phina.define('MainScene', {
  superClass: 'DisplayScene',
  init: function() {
    this.superInit();
    // 背景色を指定
    this.backgroundColor = '#444';
    // ラベルを生成
    this.label = Label('Hello, phina.js!').addChildTo(this);
    this.label.x = this.gridX.center(); // x 座標
    this.label.y = this.gridY.center(); // y 座標
    this.label.fill = 'white'; // 塗りつぶし色

    var shape = Shape({
      backgroundColor: 'red',
      x: 320,
      y: 480,
    }).addChildTo(this);
    shape.setInteractive(true);
    shape.one('pointend',function(){
      SoundManager.play('sound1');
    });
  },
});

// メイン処理
phina.main(function() {
  // アプリケーション生成
  var app = GameApp({
    startLabel: 'main', // メインシーンから開始する
    assets: ASSETS, // アセット読み込み
  });
  // fps表示
  app.enableStats();
  // アプリケーション実行
  app.run();
});
