"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// npx tsc -p tsconfig.scripts.json
// node dist/generateSvgWithPath.js
var opentype_js_1 = __importDefault(require("opentype.js"));
var fontPath = "./src/NotoSansJP-VariableFont_wght.ttf";
var character = "あ";
var fontSize = 100;
opentype_js_1.default.load(fontPath, function (err, font) {
    if (err) {
        console.error("フォントの読み込みに失敗しました:", err);
        return;
    }
    var path = font.getPath(character, 0, fontSize, fontSize);
    var svgPath = path.toSVG();
    console.log(svgPath);
});
