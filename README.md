KirinWave
=========

画像をスライスして揺らす jQuery プラグインです。
[サンプル](http://uda2.com/kirin/ "サンプル")

使い方
---------------------------------
jQuery と kirin.js をダウンロードして、HTMLファイルから読み込んで下さい。
> &lt;script src=&quot;http://code.jquery.com/jquery-1.10.1.min.js&quot;&gt;&lt;/script&gt;
> &lt;script src=&quot;kirin.js&quot;&gt;&lt;/script&gt;

後は揺らしたい画像タグを選んで指定すれば完成です。
画像をクリックしたら揺れ始めてクリックすると止まります。
> $("#container img").suiken();

オプション
---------------------------------
fps:フレームレート（1秒あたりのコマ数）  
speed：揺れのスピード  
amplitude：揺れ幅（ピクセル）  
wavelength：振幅（波と波の距離）  

![キリン](/kirin.png)
