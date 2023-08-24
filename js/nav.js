let navItems = [
    {href: '/index.html', title: '首页'},
    {href: 'https://zichenstudio.github.io/blog/', title: 'Blog'},
    {href: '/html/project.html', title: '项目与软件'},
    {href: '/html/tips.html', title: '小提示'},
    {href: '/html/contact.html', title: '联系我们'}
];

let navHtml = `
  <ul>
    ${navItems.map(item => `
      <li>
        <span><a href="${item.href}">${item.title}</a></span>
      </li>
    `).join('')}
  </ul>
`;

$('nav').append(navHtml);

let titleEnd = '|子沉工作室';
$('title').append(titleEnd);
