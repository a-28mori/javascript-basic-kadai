// btnというidを持つHTML要素を取得し定数に代入する
const btn = document.getElementById('btn');
// textというidを持つHTML要素を取得し定数に代入する
const text = document.getElementById('text');

// HTML要素がクリックされた時にイベント処理を実行する
btn.addEventListener('click', () => {
  // 2秒後(2000ミリ秒)の待ち時間を設定し非同期処理を実行する
  setTimeout(() => {
  // textを「ボタンをクリックしました」という文字にテキストを変更する
    text.textContent = `ボタンをクリックしました`
  }, 2000);
});