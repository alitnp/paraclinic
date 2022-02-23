const persianNum = (input) => {
	if (input === null || input === undefined) return "";
	input = input.toString();
	input = input.replace(/[^۰۱۲۳۴۵۶۷۸۹0123456789]/g, "");
	input = input.replace(/0/g, "۰");
	input = input.replace(/1/g, "۱");
	input = input.replace(/2/g, "۲");
	input = input.replace(/3/g, "۳");
	input = input.replace(/4/g, "۴");
	input = input.replace(/5/g, "۵");
	input = input.replace(/6/g, "۶");
	input = input.replace(/7/g, "۷");
	input = input.replace(/8/g, "۸");
	input = input.replace(/9/g, "۹");

	return input;
};

const persianTellNum = (input) => {
	if (input === null || input === undefined) return "";
	input = input.toString();
	input = input.replace(/[^۰۱۲۳۴۵۶۷۸۹0123456789+]/g, "");
	input = input.replace(/ /g, "");
	input = input.replace(/0/g, "۰");
	input = input.replace(/1/g, "۱");
	input = input.replace(/2/g, "۲");
	input = input.replace(/3/g, "۳");
	input = input.replace(/4/g, "۴");
	input = input.replace(/5/g, "۵");
	input = input.replace(/6/g, "۶");
	input = input.replace(/7/g, "۷");
	input = input.replace(/8/g, "۸");
	input = input.replace(/9/g, "۹");

	return input;
};

const Separator = (input, seperater = ",", seperateLength = 3) => {
	input = input.toString();
	let result = "";
	let count = 0;
	for (let i = input.length - 1; i > -1; i--) {
		if (count === seperateLength) {
			result = seperater + result;
			count = 0;
		}
		result = input.charAt(i) + result;
		count++;
	}
	return result;
};

const persian = (input) => {
	if (input === null || input === undefined) return "";
	input = input.toString();
	input = input.replace(/0/g, "۰");
	input = input.replace(/1/g, "۱");
	input = input.replace(/2/g, "۲");
	input = input.replace(/3/g, "۳");
	input = input.replace(/4/g, "۴");
	input = input.replace(/5/g, "۵");
	input = input.replace(/6/g, "۶");
	input = input.replace(/7/g, "۷");
	input = input.replace(/8/g, "۸");
	input = input.replace(/9/g, "۹");
	input = input.replace(/Q/g, "ض");
	input = input.replace(/q/g, "ض");
	input = input.replace(/W/g, "ص");
	input = input.replace(/w/g, "ص");
	input = input.replace(/E/g, "ث");
	input = input.replace(/e/g, "ث");
	input = input.replace(/R/g, "ق");
	input = input.replace(/r/g, "ق");
	input = input.replace(/T/g, "،");
	input = input.replace(/t/g, "ف");
	input = input.replace(/Y/g, "غ");
	input = input.replace(/y/g, "غ");
	input = input.replace(/U/g, "ع");
	input = input.replace(/u/g, "ع");
	input = input.replace(/I/g, "ه");
	input = input.replace(/i/g, "ه");
	input = input.replace(/O/g, "خ");
	input = input.replace(/o/g, "خ");
	input = input.replace(/P/g, "ح");
	input = input.replace(/p/g, "ح");
	input = input.replace(/\[/g, "ج");
	input = input.replace(/\]/g, "چ");
	input = input.replace(/\\/g, "پ");
	input = input.replace(/A/g, "ش");
	input = input.replace(/a/g, "ش");
	input = input.replace(/S/g, "س");
	input = input.replace(/s/g, "س");
	input = input.replace(/D/g, "ی");
	input = input.replace(/d/g, "ی");
	input = input.replace(/F/g, "پ");
	input = input.replace(/f/g, "ب");
	input = input.replace(/G/g, "ل");
	input = input.replace(/g/g, "ل");
	input = input.replace(/H/g, "آ");
	input = input.replace(/h/g, "ا");
	input = input.replace(/J/g, "ت");
	input = input.replace(/j/g, "ت");
	input = input.replace(/K/g, "ن");
	input = input.replace(/k/g, "ن");
	input = input.replace(/L/g, "م");
	input = input.replace(/l/g, "م");
	input = input.replace(/;/g, "ک");
	input = input.replace(/'/g, "گ");
	input = input.replace(/Z/g, "ظ");
	input = input.replace(/z/g, "ظ");
	input = input.replace(/X/g, "ط");
	input = input.replace(/x/g, "ط");
	input = input.replace(/C/g, "ژ");
	input = input.replace(/c/g, "ز");
	input = input.replace(/V/g, "ر");
	input = input.replace(/v/g, "ر");
	input = input.replace(/B/g, "ذ");
	input = input.replace(/b/g, "ذ");
	input = input.replace(/N/g, "د");
	input = input.replace(/n/g, "د");
	input = input.replace(/M/g, "ئ");
	input = input.replace(/m/g, "ء");
	input = input.replace(/,/g, "و");
	input = input.replace(/÷/g, "پ");

	return input;
};

const persianChar = (input) => {
	if (input === null || input === undefined) return "";
	input = input.toString();
	input = input.replace(/[۰۱۲۳۴۵۶۷۸۹0123456789]/g, "");
	input = input.replace(/Q/g, "ض");
	input = input.replace(/q/g, "ض");
	input = input.replace(/W/g, "ص");
	input = input.replace(/w/g, "ص");
	input = input.replace(/E/g, "ث");
	input = input.replace(/e/g, "ث");
	input = input.replace(/R/g, "ق");
	input = input.replace(/r/g, "ق");
	input = input.replace(/T/g, "،");
	input = input.replace(/t/g, "ف");
	input = input.replace(/Y/g, "غ");
	input = input.replace(/y/g, "غ");
	input = input.replace(/U/g, "ع");
	input = input.replace(/u/g, "ع");
	input = input.replace(/I/g, "ه");
	input = input.replace(/i/g, "ه");
	input = input.replace(/O/g, "خ");
	input = input.replace(/o/g, "خ");
	input = input.replace(/P/g, "ح");
	input = input.replace(/p/g, "ح");
	input = input.replace(/\[/g, "ج");
	input = input.replace(/\]/g, "چ");
	input = input.replace(/\\/g, "پ");
	input = input.replace(/A/g, "ش");
	input = input.replace(/a/g, "ش");
	input = input.replace(/S/g, "س");
	input = input.replace(/s/g, "س");
	input = input.replace(/D/g, "ی");
	input = input.replace(/d/g, "ی");
	input = input.replace(/F/g, "پ");
	input = input.replace(/f/g, "ب");
	input = input.replace(/G/g, "ل");
	input = input.replace(/g/g, "ل");
	input = input.replace(/H/g, "آ");
	input = input.replace(/h/g, "ا");
	input = input.replace(/J/g, "ت");
	input = input.replace(/j/g, "ت");
	input = input.replace(/K/g, "ن");
	input = input.replace(/k/g, "ن");
	input = input.replace(/L/g, "م");
	input = input.replace(/l/g, "م");
	input = input.replace(/;/g, "ک");
	input = input.replace(/'/g, "گ");
	input = input.replace(/Z/g, "ظ");
	input = input.replace(/z/g, "ظ");
	input = input.replace(/X/g, "ط");
	input = input.replace(/x/g, "ط");
	input = input.replace(/C/g, "ژ");
	input = input.replace(/c/g, "ز");
	input = input.replace(/V/g, "ر");
	input = input.replace(/v/g, "ر");
	input = input.replace(/B/g, "ذ");
	input = input.replace(/b/g, "ذ");
	input = input.replace(/N/g, "د");
	input = input.replace(/n/g, "د");
	input = input.replace(/M/g, "ئ");
	input = input.replace(/m/g, "ء");
	input = input.replace(/,/g, "و");
	input = input.replace(/÷/g, "پ");

	return input;
};

const englishNum = (input) => {
	if (input === null || input === undefined) return "";
	input = input.toString();
	input = input.replace(/[^۰۱۲۳۴۵۶۷۸۹0123456789]/g, "");
	input = input.replace(/ /g, "");
	input = input.replace(/۰/g, "0");
	input = input.replace(/۱/g, "1");
	input = input.replace(/۲/g, "2");
	input = input.replace(/۳/g, "3");
	input = input.replace(/۴/g, "4");
	input = input.replace(/۵/g, "5");
	input = input.replace(/۶/g, "6");
	input = input.replace(/۷/g, "7");
	input = input.replace(/۸/g, "8");
	input = input.replace(/۹/g, "9");

	return input;
};

const english = (input) => {
	if (input === null || input === undefined) return "";
	input = input.toString();
	input = input.replace(/۰/g, "0");
	input = input.replace(/۱/g, "1");
	input = input.replace(/۲/g, "2");
	input = input.replace(/۳/g, "3");
	input = input.replace(/۴/g, "4");
	input = input.replace(/۵/g, "5");
	input = input.replace(/۶/g, "6");
	input = input.replace(/۷/g, "7");
	input = input.replace(/۸/g, "8");
	input = input.replace(/۹/g, "9");
	input = input.replace(/ً/g, "Q");
	input = input.replace(/ض/g, "q");
	input = input.replace(/ٌ/g, "W");
	input = input.replace(/ص/g, "w");
	input = input.replace(/ٍ/g, "E");
	input = input.replace(/ث/g, "e");
	input = input.replace(/ق/g, "r");
	input = input.replace(/،/g, "T");
	input = input.replace(/ف/g, "t");
	input = input.replace(/؛/g, "Y");
	input = input.replace(/غ/g, "y");
	input = input.replace(/,/g, "U");
	input = input.replace(/ع/g, "u");
	input = input.replace(/\]/g, "I");
	input = input.replace(/ه/g, "i");
	input = input.replace(/\[/g, "O");
	input = input.replace(/خ/g, "o");
	input = input.replace(/\\/g, "P");
	input = input.replace(/ح/g, "p");
	input = input.replace(/\}/g, "{");
	input = input.replace(/ج/g, "[");
	input = input.replace(/\{/g, "}");
	input = input.replace(/چ/g, "]");
	input = input.replace(/\|/g, "|");
	input = input.replace(/پ/g, "\\");
	input = input.replace(/َ/g, "A");
	input = input.replace(/ش/g, "a");
	input = input.replace(/ُ/g, "S");
	input = input.replace(/س/g, "s");
	input = input.replace(/ِ/g, "D");
	input = input.replace(/ی/g, "d");
	input = input.replace(/ّ/g, "F");
	input = input.replace(/ب/g, "f");
	input = input.replace(/ۀ/g, "G");
	input = input.replace(/ل/g, "g");
	input = input.replace(/آ/g, "H");
	input = input.replace(/ا/g, "h");
	input = input.replace(/ـ/g, "J");
	input = input.replace(/ت/g, "j");
	input = input.replace(/«/g, "K");
	input = input.replace(/ن/g, "k");
	input = input.replace(/»/g, "L");
	input = input.replace(/م/g, "l");
	input = input.replace(/:/g, ":");
	input = input.replace(/ک/g, ";");
	input = input.replace(/"/g, "");
	input = input.replace(/گ/g, "'");
	input = input.replace(/ة/g, "Z");
	input = input.replace(/ظ/g, "z");
	input = input.replace(/ي/g, "X");
	input = input.replace(/ط/g, "x");
	input = input.replace(/ژ/g, "C");
	input = input.replace(/ز/g, "c");
	input = input.replace(/ؤ/g, "V");
	input = input.replace(/ر/g, "v");
	input = input.replace(/إ/g, "B");
	input = input.replace(/ذ/g, "b");
	input = input.replace(/أ/g, "N");
	input = input.replace(/د/g, "n");
	input = input.replace(/ء/g, "M");
	input = input.replace(/ئ/g, "m");
	input = input.replace(/</g, "<");
	input = input.replace(/و/g, ",");
	input = input.replace(/>/g, ">");
	input = input.replace(/؟/g, "?");

	return input;
};

export {
	persian,
	persianNum,
	persianTellNum,
	Separator,
	persianChar,
	englishNum,
	english,
};
