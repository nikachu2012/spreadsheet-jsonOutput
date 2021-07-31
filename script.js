document.getElementById("outputButton").onclick = function() {

  var textbox = document.getElementById("sheetURL");
      var sheetURL = textbox.value;
  var textbox = document.getElementById("sheetNumber");
      var sheetNumber = textbox.value;

  var outputURL = sheetURL.replace("https://docs.google.com/spreadsheets/d/", "");

    // https://docs.google.com/spreadsheets/d/12RPkcLd4R-z6N76bcaUJ-myHZnLLGZBxO-_ONGyhgww/edit#gid=0
  out2 = outputURL.substring(0,outputURL.indexOf("/"));

  //テキストボックスの値を使って、出力するメッセージを生成する
  var output = "https://spreadsheets.google.com/feeds/list/" + out2 + "/" + sheetNumber + "/public/values?alt=json";
  //出力用のp要素にメッセージを表示
  document.getElementById("URLOutput").innerHTML = output;

};
