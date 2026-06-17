const fs = require('fs');
const path = require('path');

const srcFile = path.join(__dirname, 'src', 'pages', 'Railway.tsx');
const originalContent = fs.readFileSync(srcFile, 'utf8');

const industries = [
  { comp: 'Manufacturing', route: '/manufacturing', title: 'Manufacturing' },
  { comp: 'Banking', route: '/banking', title: 'Banking' },
  { comp: 'OilGas', route: '/oil-gas', title: 'Oil & Gas' },
  { comp: 'Logistics', route: '/logistics', title: 'Logistics' },
  { comp: 'Retail', route: '/retail', title: 'Retail' },
  { comp: 'Education', route: '/education', title: 'Education' },
  { comp: 'Healthcare', route: '/healthcare', title: 'Healthcare' }
];

industries.forEach(ind => {
  let newContent = originalContent;
  
  // Replace component definition and export
  newContent = newContent.replace(/const Railway = \(\) => {/g, `const ${ind.comp} = () => {`);
  newContent = newContent.replace(/export default Railway;/g, `export default ${ind.comp};`);
  
  // Mobile nav link replacement
  newContent = newContent.replace(/to="\/railway"([^>]*)>Railways<\/Link>/g, `to="${ind.route}"$1>${ind.title}</Link>`);
  
  // Hero Slide 1
  newContent = newContent.replace(/CamPulse for Railways/g, `CamPulse for ${ind.title}`);
  newContent = newContent.replace(/&amp; Transport Security/g, `Security`);

  // Main Heading
  newContent = newContent.replace(/Railways &amp; Transport <br \/>\r?\n\s*Infrastructure/g, `${ind.title}`);
  newContent = newContent.replace(/Railways &amp; Transport <br \/>\n\s*Infrastructure/g, `${ind.title}`);

  // Section Heading
  newContent = newContent.replace(/How CamPulse powers Railways/g, `How CamPulse powers ${ind.title}`);

  // CTA
  newContent = newContent.replace(/Transform your railways security/g, `Transform your ${ind.title.toLowerCase()} security`);

  fs.writeFileSync(path.join(__dirname, 'src', 'pages', `${ind.comp}.tsx`), newContent);
});

console.log("Pages created successfully.");
