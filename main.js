const Fullpage = require('fullpage.js');
new Fullpage('#fullpage', {
  //options here
  autoScrolling: true,
  scrollHorizontally: true,
  licenseKey: ''
});
const resume = document.querySelector('#btn_resume');
resume.addEventListener('click', () => {
  window.location = 'resume_v1.pdf';
});
