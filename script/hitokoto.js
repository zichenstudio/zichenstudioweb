async function fetchHitokoto() {
    try {
        const response = await fetch('https://v1.hitokoto.cn/?encode=json&charset=utf-8');
        if (response.ok) {
            const data = await response.json();
            const {uuid, hitokoto, from_who, from} = data;
            const hitokotoHTML = document.querySelector('#hitokoto_text');
            hitokotoHTML.href = `https://hitokoto.cn/?uuid=${uuid}`;
            hitokotoHTML.innerText = `${hitokoto}${from || from_who ? '——' : ''}${from_who || ''}${from ? `[${from}]` : ''}`;
        } else {
            console.error('Fetch request failed.');
        }
    } catch (error) {
        console.error('Error fetching tips:', error);
    }
}
fetchHitokoto();
