var keyQueue = [];
setInterval( function() {
	var keyFunc = keyQueue.shift();
	if (keyFunc !== undefined)
		keyFunc[0](keyFunc[1])
},100);

var textTranslationTable = ["","","","","","ガ","ギ","グ","ゲ","ゴ","ザ","ジ","ズ","ゼ","ゾ","ダ","ヂ","ヅ","デ","ド","","","","","","バ","ビ","ブ","ボ","","","","","","","","","","が","ぎ","ぐ","げ","ご","ざ","じ","ず","ぜ","ぞ","だ","ぢ","づ","で","ど","","","","","","ば","び","ぶ","べ","ぼ","","パ","ピ","プ","ポ","ぱ","ぴ","ぷ","ぺ","ぽ","","","","","","","","@","","","","#","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","№","…","","","","┌","─","┐","│","└","┘"," ","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","(",")",":",";","[","]","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","é","'d","'l","'s","'t","'v","た","ち","つ","て","と","な","に","ぬ","ね","の","は","ひ","ふ","へ","ほ","ま","み","む","め","も","や","ゆ","よ","ら","り","る","れ","ろ","わ","を","ん","っ","'","ゅ","ょ","-","'r","'m","?","!",".","","","","","▶","","♂","¥","×","","/",",","♀","0","1","2","3","4","5","6","7","8","9"];

function translateText(text,len) { result = ""; for (var i=text; i<text+len; i++) { result += translationTable[gameboy.memory[i]]; } return result; }
/*
User-callable commands for PokeAPI-js
*/
function tapButton(key,done) {
	keyQueue.push([GameBoyKeyDown,key]);
	keyQueue.push([function(key) {
		GameBoyKeyUp(key); 
		if (done !== undefined)
			done()
	}, key]);
}

function textOnScreen() { return (translateText(50361,18).trim()+"\n"+translateText(50401,18).trim()).trim(); }