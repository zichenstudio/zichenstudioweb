const upButton = document.querySelector(".up");
upButton.innerHTML = `
  <a href="javascript:void(0);" id="upLink">
    <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100">
      <path style="stroke:none;fill-rule:nonzero;fill:#000;fill-opacity:1" d="m50 41.738 34.023 32.657c.84.82 2.227.8 3.086-.04l5.977-5.84c.86-.84.879-2.206.039-3.027L51.582 25.605A2.039 2.039 0 0 0 50 25.02a2.16 2.16 0 0 0-1.582.585L6.875 65.488c-.84.82-.82 2.188.04 3.028l5.976 5.84c.859.84 2.246.859 3.086.039zm0 0"/>
    </svg>
  </a>
`;

const upLink = document.getElementById('upLink');
upLink.addEventListener('click', () => {
  window.scrollTo({left: 0, top: 0, behavior: 'smooth'});
});

