import fs from 'fs';
import path from 'path';

const componentsDir = path.join(process.cwd(), 'src', 'app', 'components');
const files = fs.readdirSync(componentsDir).filter(f => f.endsWith('.tsx'));

console.log(`🔍 Auditing ${files.length} components in ${componentsDir}...`);

let hasError = false;

// Rule 1: Check for broken/untrusted external URLs
const forbiddenPatterns = [
  'encrypted-tbn0.gstatic.com',
  'i.pinimg.com',
  'alert('
];

for (const file of files) {
  const filePath = path.join(componentsDir, file);
  const content = fs.readFileSync(filePath, 'utf-8');

  for (const pattern of forbiddenPatterns) {
    if (content.includes(pattern)) {
      console.error(`❌ [TEST FAIL] ${file} contains untrusted pattern or raw alert: "${pattern}"`);
      hasError = true;
    }
  }

  // Check if component exports default function
  if (!content.includes('export default function')) {
    console.error(`❌ [TEST FAIL] ${file} does not have a default export function!`);
    hasError = true;
  }
}

if (hasError) {
  console.error('FAILED: Component audit detected issues.');
  process.exit(1);
} else {
  console.log('✅ ALL COMPONENT AUDIT TESTS PASSED SUCCESSFULLY!');
}
