const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  
  page.on('console', msg => console.log('PAGE LOG:', msg.text()));
  page.on('pageerror', err => console.log('PAGE ERROR:', err.message));
  
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle0' });
  
  // Try to find the groups tab and click it
  await page.evaluate(() => {
    showPage('groups');
  });
  
  await new Promise(r => setTimeout(r, 1000));
  
  // Click first group
  await page.evaluate(() => {
    openGroup('tech-talk');
  });
  
  await new Promise(r => setTimeout(r, 1000));
  
  // Override currentUser to simulate login
  await page.evaluate(() => {
    window.currentUser = { name: 'Test', email: 'test@test.com' };
    openCreatePostModal();
  });
  
  await new Promise(r => setTimeout(r, 1000));
  
  // Fill form and submit
  await page.evaluate(() => {
    document.getElementById('new-post-title').value = 'Test Title';
    document.getElementById('new-post-content').value = 'Test Content';
    submitPost();
  });
  
  await new Promise(r => setTimeout(r, 3000));
  
  await browser.close();
})();
