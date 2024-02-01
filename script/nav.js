let navItems = [
  {href: '/index.html', title: '首页'},
  {href: 'https://zichenstudio.github.io/blog/', title: 'Blog'},
  {href: '/pages/project.html', title: '项目与软件'},
  {href: '/pages/tips.html', title: '小提示'},
  {href: '/pages/contact.html', title: '联系我们'}
];
let nav = document.querySelector('nav');
let ul = document.createElement('ul');
navItems.forEach(item => {
  let li = document.createElement('li');
  let span = document.createElement('span');
  let a = document.createElement('a');
  a.href = item.href;
  a.textContent = item.title;
  span.appendChild(a);
  li.appendChild(span);
  ul.appendChild(li);
});
nav.appendChild(ul);
nav.innerHTML += '<hr>';
document.title += '|子沉工作室';

