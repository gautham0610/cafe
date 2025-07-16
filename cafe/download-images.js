import https from 'https';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const images = [
  {
    name: 'hero-coffee.jpg',
    url: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1200&h=800&fit=crop'
  },
  {
    name: 'espresso.jpg',
    url: 'https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?w=600&h=400&fit=crop'
  },
  {
    name: 'cappuccino.jpg',
    url: 'https://images.unsplash.com/photo-1534778101976-62847782c213?w=600&h=400&fit=crop'
  },
  {
    name: 'croissant.jpg',
    url: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=600&h=400&fit=crop'
  },
  {
    name: 'chocolate-cake.jpg',
    url: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&h=400&fit=crop'
  },
  {
    name: 'cafe-interior.jpg',
    url: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=1200&h=800&fit=crop'
  }
];

const downloadImage = (url, filepath) => {
  return new Promise((resolve, reject) => {
    https.get(url, (response) => {
      if (response.statusCode !== 200) {
        reject(new Error(`Failed to download ${url}: ${response.statusCode}`));
        return;
      }

      const writeStream = fs.createWriteStream(filepath);
      response.pipe(writeStream);

      writeStream.on('finish', () => {
        writeStream.close();
        resolve();
      });

      writeStream.on('error', reject);
    }).on('error', reject);
  });
};

async function downloadAllImages() {
  const imagesDir = path.join(__dirname, 'public', 'images');

  // Create images directory if it doesn't exist
  if (!fs.existsSync(imagesDir)) {
    fs.mkdirSync(imagesDir, { recursive: true });
  }

  console.log('Downloading images...');
  
  for (const image of images) {
    const filepath = path.join(imagesDir, image.name);
    console.log(`Downloading ${image.name}...`);
    try {
      await downloadImage(image.url, filepath);
      console.log(`✓ Downloaded ${image.name}`);
    } catch (error) {
      console.error(`✗ Failed to download ${image.name}:`, error.message);
    }
  }

  console.log('All downloads completed!');
}

downloadAllImages(); 