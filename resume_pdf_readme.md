# ⚠️ Important notes:
For full transparency:
- The project JS script, README file and HTML template have been AI generated for the most part.
- I have tested and arranged them to my liking on my machine with no issues.

# 📄 HTML Resume to PDF Converter

A simple and efficient tool to convert HTML/CSS resume templates to high-quality PDF documents using Puppeteer.

## ✨ Features

- **High-quality PDF output** with preserved styling and colors
- **Single-page PDF generation** - perfect for resumes
- **Image support** including profile photos
- **Custom CSS handling** with print media query support
- **Zero margins** for clean, professional output

## 🚀 Quick Start

### Prerequisites

Make sure you have Node.js and npm installed on your system:

```bash
node --version
npm --version
```

If you don't have them installed, download from [nodejs.org](https://nodejs.org/).

### Installation

1. **Navigate to your project directory:**
   ```bash
   cd "your_repo_path"
   ```

2. **Create a converter project folder (optional but recommended):**
   ```bash
   mkdir pdf-converter
   cd pdf-converter
   ```

3. **Initialize the project and install Puppeteer:**
   ```bash
   npm init -y
   npm install puppeteer
   ```
   > ⏳ This may take a few minutes as Puppeteer downloads Chromium

### Setup

4. **Create the conversion script:**
   
   Create a file named `convert.js` and paste the conversion script content, or use the provided `convert.js` file from this repository.

5. **Configure file paths:**
   
   ⚠️ **Important:** Update the file path in `convert.js` to match your HTML file location:
   
   ```javascript
   // Update this line with your actual file path
   const htmlPath = path.join(__dirname, 'your_file_path.file_extension');
   ```

6. **Prepare your HTML file:**
   
   Make sure your HTML resume has:
   - ✅ Relative paths for images (e.g., `src="photo.jpg"` instead of absolute paths)
   - ✅ Proper print media queries for color preservation
   - ✅ All linked resources are accessible

## 🎯 Usage

Run the conversion script:

```bash
node convert.js
```

**Expected output:**
```
Starting PDF conversion...
Loading: file:///path/to/your/resume.html
Content dimensions: 1200x1600
PDF created successfully: resume.pdf
```

Your PDF will be generated in the same directory as `resume.pdf`.

## ⚙️ Customization

### Adjusting Output Settings

You can modify the PDF generation settings in `convert.js`:

```javascript
await page.pdf({
  path: 'resume.pdf',              // Output filename
  width: `${dimensions.width}px`,   // Custom width
  height: `${dimensions.height}px`, // Custom height
  printBackground: true,           // Include backgrounds
  margin: { top: '0', bottom: '0', left: '0', right: '0' }, // Margins
  pageRanges: '1',                 // Page range
  displayHeaderFooter: false       // Headers/footers
});
```

## 🔧 Troubleshooting

### Possible Issues

**❌ Images not loading**
- Use relative paths for images (e.g., `src="./photo.jpg"`)
- Ensure image files are in the correct relative location
- Check image file permissions

## 📁 Project Structure

```
your-project/
├── dev/
│   ├── myresume.html    # Your HTML resume
│   ├── photo-id.jpg              # Profile photo
│   └── style.css (optional)      # External CSS
├── pdf-converter/
│   ├── convert.js                # Conversion script
│   ├── package.json              # Node.js dependencies
│   ├── node_modules/             # Installed packages
│   └── resume.pdf               # Generated PDF output
└── README.md
```

## 🎨 Tips for Best Results

- **Use web-safe fonts** or include Google Fonts links
- **Test your HTML** in a browser first to ensure proper rendering  
- **Optimize images** for web to reduce file size
- **Keep layouts simple** for better PDF compatibility
- **Use semantic HTML** for better structure
- **Test print styles** using browser print preview

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

---

**🎉 Enjoy your professional PDF resume!**

> **Pro tip:** You can also use this converter for other HTML documents like cover letters, portfolios, or any single-page layouts.
