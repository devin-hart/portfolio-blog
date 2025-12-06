import fs from 'fs';
import path from 'path';

type Metadata = {
  title: string;
  publishedAt: string;
  summary: string;
  image?: string;
};

function parseFrontmatter(fileContent: string) {
  const frontmatterRegex = /---\s*([\s\S]*?)\s*---/;
  const match = frontmatterRegex.exec(fileContent);

  // Gracefully handle files with no frontmatter
  if (!match) {
    console.warn('File has no frontmatter. Using default metadata.');
    return { metadata: { title: 'Untitled Post', publishedAt: '', summary: '' } as Metadata, content: fileContent };
  }

  const frontMatterBlock = match[1];
  const content = fileContent.replace(frontmatterRegex, '').trim();
  const frontMatterLines = frontMatterBlock.trim().split('\n');
  const metadata: Partial<Metadata> = {};

  frontMatterLines.forEach((line) => {
    const [key, ...valueArr] = line.split(': ');
    if (key && valueArr.length > 0) {
      let value = valueArr.join(': ').trim();
      value = value.replace(/^['"](.*)['"]$/, '$1'); // Remove quotes
      metadata[key.trim() as keyof Metadata] = value;
    }
  });

  return { metadata: metadata as Metadata, content };
}

function getMDXFiles(dir: string) {
  if (!fs.existsSync(dir)) {
    console.warn(`[Warning] Directory not found: ${dir}. Returning no posts.`);
    return [];
  }
  return fs.readdirSync(dir).filter((file) => path.extname(file) === '.mdx');
}

function readMDXFile(filePath: string) {
  try {
    const rawContent = fs.readFileSync(filePath, 'utf-8');
    return parseFrontmatter(rawContent);
  } catch (error) {
    console.error(`[Error] Failed to read file: ${filePath}`, error);
    // Return null to be filtered out later
    return null;
  }
}

export function getPosts(sourceDirectory: string) {
  const dir = path.join(process.cwd(), sourceDirectory);
  const mdxFiles = getMDXFiles(dir);
  return mdxFiles
    .map((file) => {
      const postData = readMDXFile(path.join(dir, file));
      if (!postData) return null;

      const { metadata, content } = postData;
      const slug = path.basename(file, path.extname(file));

      return {
        metadata,
        slug,
        content,
      };
    })
    .filter(Boolean); // Filter out any null results from failed file reads
}

export function formatDate(date: string, includeRelative = false) {
  // ... (Your existing formatDate function can be moved here)
  let currentDate = new Date();
  if (!date.includes('T')) {
    date = `${date}T00:00:00`;
  }
  let targetDate = new Date(date);

  // Your date formatting logic...
  let fullDate = targetDate.toLocaleString('en-us', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

  // ...etc.

  return fullDate;
}