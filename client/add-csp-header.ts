const fs = require("fs");

const outputDir = "dist"; // Specify the output directory where the Next.js export is generated

// CSP header configuration
const cspHeader = "<meta http-equiv=\"Content-Security-Policy\" content=\"default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data:; font-src 'self';\">";

// Function to add CSP header to HTML files
const addCspHeader = (filePath: string) => {
	try {
		let html = fs.readFileSync(filePath, "utf-8");
		html = html.replace(/<head>/, `<head>${cspHeader}`);
		fs.writeFileSync(filePath, html);
		console.log(`Added CSP header to ${filePath}`);
	} catch (error) {
		console.error(`Failed to add CSP header to ${filePath}`, error);
	}
};

// Find all HTML files in the output directory and add CSP header
const files: string[] = fs.readdirSync(outputDir);
files.forEach((file) => {
	if (file.endsWith(".html")) {
		const filePath = `${outputDir}/${file}`;
		addCspHeader(filePath);
	}
});
