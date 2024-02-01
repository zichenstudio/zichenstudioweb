async function fetchhitokoto() {
  try {
    const response = await fetch('https://v1.hitokoto.cn/?encode=json&charset=utf-8');
    if (response.ok) {
      const data = await response.json();
      const {uuid, hitokoto, from_who, from} = data;
      const hitokotohtml = document.querySelector('#hitokoto_text');
      hitokotohtml.href = `https://hitokoto.cn/?uuid=${uuid}`;
      hitokotohtml.innerText = `${hitokoto}${from || from_who ? '——' : ''}${from_who || ''}${from ? `[${from}]` : ''}`;
    } else {
      console.error('fetch request failed.');
    }
  } catch (error) {
    console.error('error fetching tips:', error);
  }
}
fetchhitokoto();

