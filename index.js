const chinese = document.querySelector("#chinese");
const west = document.querySelector("#west");
const france = document.querySelector("#france");
const america = document.querySelector("#america");
const tai = document.querySelector("#tai");
const tea = document.querySelector("#tea");
const ptext = document.querySelector("#ptext");
const btn = document.querySelector("#btn");
// 保存所有的選項
const options = [
  {
    name: [
      "雞肉飯",
      "鴨肉飯",
      "魯肉飯",
      "滷味",
      "鴨肉麵線",
      "炒泡麵",
      "維力炸醬麵",
    ],
    value: "chinese",
    checked: false,
  },
  {
    name: [
      "西班牙馬鈴薯蛋餅",
      "菇蕈濃湯煨馬鈴薯麵疙瘩",
      "嫩煎鮭魚佐檸檬香草醬汁＋香酥白花椰＋馬鈴薯玉米濃湯",
      "白酒蛤蜊義大利麵",
    ],
    value: "west",
    checked: false,
  },
  {
    name: [
      "法式洋蔥湯 Soupe à l’oignon",
      "鵝肝醬/ 鴨肝醬 Foie gras",
      "法式青蛙腿 Cuisses de grenouille",
      "烤勃根地蝸牛 Escargot",
      "松露 Truffe",
      "法國生牛肉塔 Tartare de boeuf",
      "兔肉 Lapin",
      "油封鴨腿 Confit de canard",
      "香煎鴨胸 Magret de Canard",
      "燉小牛肉佐白醬",
      "法國豬血腸 Boudin Noir",
      "卡酥來砂鍋 Cassoulet",
      "紅酒燉牛肉 Bœuf bourguignon",
      "火上鍋 Pot-au-feu",
      "馬賽魚湯 Bouillabaisse",
      "普羅旺斯燉菜 Ratatouille",
      "尼斯沙拉 Salade Niçoise",
      "法式薄餅 Crêpe",
      "法式鹹派 Quiche Lorraine",
    ],
    value: "france",
    checked: false,
  },
  {
    name: [
      "爆炸雞肉沙拉 Explosion Chicken Salad",
      "辣味牛肉醬塔可飯 Chili Taco Rice",
      "奶油番茄雞肉義大利麵 Tomato Cream Chicken Pasta",
      "獨享法士達 Personal Fajitas",
      "一口迷你漢堡 Big Mouth Burger Bites",
      "鄉村培根卡薩帝亞 Bacon Ranch Quesadillas",
      "美味享拼法士達 MIX & MATCH FAJITAS",
      "海陸總匯法士達SURF & TURF FAJITAS",
      "蘑菇傑克法士達 MUSHROOM JACK FAJITAS",
      "整份豬肋排 FULL RACK",
      "龍舌蘭蜜培根酪梨漢堡 SWEET BACON AVOCADO BURGER",
    ],
    value: "america",
    checked: false,
  },
  {
    name: [
      "蒼蠅頭",
      "蒜苗炒豬肉",
      "涼拌豬肚",
      "蒜泥白肉",
      "椒麻骨仔肉",
      "蔥爆牛肉",
      "蒜酥小牛牛肋",
      "黑胡椒牛",
      "炸鮮蚵",
      "絲瓜蛤蠣",
      "蒜蓉蒸蝦",
      "五柳枝魚",
      "魚子蝦鬆",
      "菜圃蛋",
      "番茄炒蛋",
      "炒水蓮",
    ],
    value: "tai",
    checked: false,
  },
  {
    name: [
      "安齋らら",
      "高橋しょう子",
      "水卜さくら",
      "凪(なぎ）光",
      "伊藤舞雪 Mayuki Ito",
      "鷲尾芽衣(わしお めい）",
      "水卜櫻(みうら さくら)",
      "葵(あおい)つかさ",
      "篠田ゆう",
    ],
    value: "tea",
    checked: false,
  },
];
if (chinese.checked) {
  // 選擇一個時取消其他按鈕
  west.checked = false;
  france.checked = false;
  america.checked = false;
  tai.checked = false;
  tea.checked = false;
} else if (west.checked) {
  chinese.checked = false;
  france.checked = false;
  america.checked = false;
  tai.checked = false;
  tea.checked = false;
} else if (france.checked) {
  chinese.checked = false;
  west.checked = false;
  america.checked = false;
  tai.checked = false;
  tea.checked = false;
} else if (america.checked) {
  chinese.checked = false;
  france.checked = false;
  west.checked = false;
  tai.checked = false;
  tea.checked = false;
} else if (tai.checked) {
  chinese.checked = false;
  france.checked = false;
  america.checked = false;
  west.checked = false;
  tea.checked = false;
} else if (tea.checked) {
  chinese.checked = false;
  france.checked = false;
  america.checked = false;
  tai.checked = false;
  west.checked = false;
}
// 監聽按鈕點擊事件
btn.addEventListener("click", function () {
  // 過濾選中的選項
  const selectedOptions = options.filter((option) => option.checked);
  if (selectedOptions.length === 0) {
    ptext.innerText = "請至少選擇一個選項";
    return;
  }
  // 隨機選擇一個選項
  const randomIndex = Math.floor(Math.random() * selectedOptions.length);
  const selectedOption = selectedOptions[randomIndex];
  // 隨機選擇該選項的一個餐點名稱
  const randomMealIndex = Math.floor(
    Math.random() * selectedOption.name.length
  );
  const randomMealName = selectedOption.name[randomMealIndex];
  ptext.innerText = `已幫你選擇：${randomMealName}`;
});
// 監聽所有的選項的勾選事件
options.forEach((option) => {
  const checkbox = document.querySelector(`#${option.value}`);
  checkbox.addEventListener("change", function () {
    option.checked = this.checked;

    const randomMealIndex = Math.floor(
      Math.random() * selectedOption.name.length
    );
    const randomMealName = selectedOption.name[randomMealIndex];
    ptext.innerText = `今天午餐推薦：${randomMealName}`;
  });
});
// chinese.addEventListener("change", () => {
//   if (chinese.checked) {
//     // 選擇一個時取消其他按鈕
//     west.checked = false;
//     france.checked = false;
//     america.checked = false;
//     tai.checked = false;
//     tea.checked = false;
//   }
// });
// west.addEventListener("change", () => {
//   if (west.checked) {
//     chinese.checked = false;
//     france.checked = false;
//     america.checked = false;
//     tai.checked = false;
//     tea.checked = false;
//   }
// });
// france.addEventListener("change", () => {
//   if (france.checked) {
//     chinese.checked = false;
//     west.checked = false;
//     america.checked = false;
//     tai.checked = false;
//     tea.checked = false;
//   }
// });
// america.addEventListener("change", () => {
//   if (america.checked) {
//     chinese.checked = false;
//     france.checked = false;
//     west.checked = false;
//     tai.checked = false;
//     tea.checked = false;
//   }
// });
// tai.addEventListener("change", () => {
//   if (tai.checked) {
//     chinese.checked = false;
//     france.checked = false;
//     america.checked = false;
//     west.checked = false;
//     tea.checked = false;
//   }
// });
// tea.addEventListener("change", () => {
//   if (tea.checked) {
//     chinese.checked = false;
//     france.checked = false;
//     america.checked = false;
//     tai.checked = false;
//     west.checked = false;
//   }
// });
