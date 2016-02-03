### react-starter
minimum start with gulp

- 時代遅れだとしても、nodeじゃなくてgulpでreactを動かしたかった
- watchタスクでまとめるgulpの書き方じゃなくて、defaultタスクにまとめる書き方をしたかった
- 必要最低限を知りたかった（plumber消し忘れた）
- とにかく一回動かしたかった

####わかったこと

- bundle.jsって何かと思ったら、reactとreact-domとapp.jsxがconcatされたファイルだった
- こまごまとrequireして、app.jsというひとつの大きなファイルを作っていく作業（らしい）ということ

