const tipsTextElement = document.querySelector(".tips-text");
const tipsTextEggElement = document.querySelector('.tips-text-egg');
let clickCount = 0;
async function fetchTips() {
  const URL = window.location.origin;
  try {
    const response = await fetch(`${URL}/script/tipstext.json`);
    const data = await response.json();
    const randomIndex = Math.floor(Math.random() * data.length);
    const randomTip = data[randomIndex];
    tipsTextElement.innerHTML = randomTip;
  } catch (error) {
    console.error('Error fetching tips:', error);
  }
}
function handleDoubleClick() {
  fetchTips();
  clickCount++;
  if (clickCount === 100) {
    tipsTextEggElement.innerHTML = '<span style="color:#FF0000">已经100条了，还不够吗？</span>';
  }
}
fetchTips();
tipsTextElement.addEventListener("dblclick", handleDoubleClick);

