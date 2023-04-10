---
title: FlutterFlowの活用
date: 2023-04-03
---

弊社では [FlutterFlow](https://flutterflow.io) を活用してスマホアプリの開発をしていますのでちょっと紹介します。

### Flutter とは

スマホアプリを作成できる [Flutter](https://flutter.dev) は iPhone, Android にととまらず Windows や Mac でのデスクトップアプリや Web システムまで作れる便利なツールです。

JavaScript/CSS/HTML で画面を構築することに比べて、 Flutter では Widget で画面を構築します。これにより Modal やアコーディオンのようなよく使う UI をわりとさくっと実装できます。また、人やプロジェクトによって UI の構築方法が異なることがない点は非常に良いです。

一方で Flutter はマテリアルデザインを意識しているので素直に作るとマテリアルデザインに沿ったものになりますが、これがあまりにもコテコテすぎるというか、マテリアルデザイン過ぎておしゃれじゃないというか。 Flutter でおしゃれな画面を作るテクニックは習得に時間がかかりそうです。
そもそも Widget で画面を構築するデメリットとして、ちょっと要素に Padding を入れるだけで Widget を追加して child 属性のネストを増やして数行のコードを書くというのが結構かったるいです。

というわけで Flutter の利点を活かしつつ UI を構築する方法が望まれていました。

### そこで FlutterFlow

FlutterFlow は Flutter アプリをローコードで開発できるツールです。
つまり GUI で Flutter の画面を作ることができ、さらには画面遷移やちょっとしたフォームのコントロール、RESTful API の利用などのロジックも組むことができます。
さらには作った UI パーツをシェアして他の人が使えるようにしたり、逆に使ったりもできます。
これにより Flutter で画面を構築することが非常に楽になります。

#### FlutterFlow のメリット

FlutterFlow のメリットは単に画面を構築できるだけでなく、最終的に作成したアプリを Flutter のコードとして出力できるということです。
さすがに FlutterFlow だけで全てのロジックを構築するのは効率が悪く限界もあるため、ソースコードを入手できるのは非常に便利です。
しかもこのコードがわりと綺麗な上、 go router や provider のようなよく使うライブラリも導入されていて、 Flutter 初心者が書くコードよりもよほどクオリティが高いのです。

なので、弊社では

- 画面の構築は FlutterFlow でできるだけやる
- 画面ができたらソースコードをダウンロードしてロジックを構築する
- Flutter build などでリリース

という流れが必勝パターンとなっています。

#### FlutterFlow のデメリット