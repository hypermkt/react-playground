// npx tsc -p tsconfig.scripts.json
// node dist/generateSvgWithPath.js
import opentype from "opentype.js";

const fontPath = "./src/NotoSansJP-VariableFont_wght.ttf";
const character = "あ";
const fontSize = 100;

opentype.load(fontPath, (err: any, font: any) => {
  if (err) {
    console.error("フォントの読み込みに失敗しました:", err);
    return;
  }
  const path = font.getPath(character, 0, fontSize, fontSize);
  const svgPath = path.toSVG();
  console.log(svgPath);
});
