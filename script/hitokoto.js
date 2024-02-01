async function fetchhitokoto() {
  try {
    const response = await fetch('https://v1.hitokoto.cn/?encode=json&charset=utf-8');
    if (response.ok) {
      const data = await response.json();
      const {uuid, hitokoto, from_who, from} = data;
      const hitokotoHtml = document.querySelector('#hitokoto_text');
      hitokotoHtml.href = `https://hitokoto.cn/?uuid=${uuid}`;
      hitokotoHtml.innerText = `${hitokoto}${from || from_who ? '——' : ''}${from_who || ''}${from ? `[${from}]` : ''}`;
    } else {
      console.error('fetch request failed.');
    }
  } catch (error) {
    console.error('error fetching tips:', error);
  }
}
fetchhitokoto();

