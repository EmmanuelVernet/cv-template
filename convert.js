const puppeteer = require('puppeteer');
const path = require('path');

(async () => {
  console.log('Starting PDF conversion...');
  
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  
  const page = await browser.newPage();
  
  // Set viewport for consistent rendering
  await page.setViewport({ width: 1280, height: 720 });
  
  // Path to your HTML file
  const htmlPath = path.join(__dirname, 'your_resume_file_path.extension_name');
  const fileUrl = `file://${htmlPath}`;
  
  console.log(`Loading: ${fileUrl}`);
  
  await page.goto(fileUrl, {
    waitUntil: 'networkidle0',
    timeout: 30000
  });
  
  // Wait for content to load
  await new Promise(resolve => setTimeout(resolve, 2000));
  
  console.log('Generating PDF...');
  
  // Get content dimensions
  const dimensions = await page.evaluate(() => {
    const container = document.querySelector('.resume-container');
    if (container) {
      const rect = container.getBoundingClientRect();
      return {
        width: Math.ceil(rect.width),
        height: Math.ceil(rect.height)
      };
    }
    return {
      width: Math.ceil(document.body.scrollWidth),
      height: Math.ceil(document.body.scrollHeight)
    };
  });
  
  console.log(`Content dimensions: ${dimensions.width}x${dimensions.height}`);
  
  await page.pdf({
    path: 'resume.pdf',
    width: `${dimensions.width}px`,
    height: `${dimensions.height}px`,
    printBackground: true,
    margin: { top: '0', bottom: '0', left: '0', right: '0' },
    pageRanges: '1',
    displayHeaderFooter: false
  });
  
  await browser.close();
  
  console.log('PDF created successfully: resume.pdf');
})().catch(error => {
  console.error('Error:', error);
  process.exit(1);
});