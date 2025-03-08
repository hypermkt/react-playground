// npx ts-node src/generateSvgWithPath.ts
import opentype from "opentype.js";

const fontPath = "./src/NotoSansJP-VariableFont_wght.ttf"; // 利用したいフォントファイルへのパスに置き換えてください
const character = "あ";
const fontSize = 100;

opentype.load(fontPath, (err: any, font: any) => {
  if (err) {
    console.error("フォントの読み込みに失敗しました:", err);
    return;
  }
  // 文字のパスを取得（x座標:0, y座標:fontSize を指定）
  const path = font.getPath(character, 0, fontSize, fontSize);
  const svgPath = path.toSVG();
  console.log(svgPath);
});
