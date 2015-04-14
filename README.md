KirinWave
=========

画像をスライスして揺らす jQuery プラグインです。  
[サンプル](http://uda2.com/github/kirin.html "サンプル")

使い方
---------------------------------
jQuery と kirin.js をダウンロードして、HTMLファイルから読み込んで下さい。

    <script src="http://code.jquery.com/jquery-1.10.1.min.js"></script>
    <script src="kirin.js"></script>

後は揺らしたい画像タグを選んで指定すれば完成です。
画像をクリックしたら揺れ始めてクリックすると止まります。

    $("#container img").suiken();

オプション
---------------------------------
<table>
  <tr>
    <th>オプション</th><th>説明</th>
  </tr>
  <tr>
    <td>fps</td><td>フレームレート（1秒あたりのコマ数）</td>
  </tr>
  <tr>
    <td>speed</td><td>揺れのスピード </td>
  </tr>
  <tr>
    <td>amplitude</td><td>揺れ幅（ピクセル） </td>
  </tr>
  <tr>
    <td>wavelength</td><td>振幅（波と波の距離） </td>
  </tr>
</table>  

![キリン](/kirin.png)
