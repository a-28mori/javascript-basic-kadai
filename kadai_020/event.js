// btnというidを持つHTML要素を取得し定数に代入する
const btn = document.getElementById(`btn`);
// textというidを持つHTML要素を取得し定数に代入する
const text = document.getElementById(`text`);

// HTML要素がクリックされたときにイベントの処理を実行する
btn.addEventListener(`click`, () => {
    // textの中の文字を「ボタンをクリックしました」というテキストに変更する
    text.textContent = `ボタンをクリックしました`
});