let num = 15;
if (num % 3 == 0 && num % 5 == 0){ //変数numが3と5の倍数の場合
  console.log(`3と5の倍数です`)
}
else if (num % 3 == 0){ //変数numが3の倍数の場合
  console.log(`3の倍数です`);
}
else if (num % 5 == 0){ //変数numが5の倍数の場合
  console.log(`5の倍数です`);
}
else {
  console.log(num) //それ以外の場合numを出力する
}
