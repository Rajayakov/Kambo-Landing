// One-off image optimization pass: JPEG/PNG -> WebP, capped to real display size.
// Run with: node scripts/convert-images.mjs
import sharp from 'sharp'
import { readdirSync, statSync } from 'fs'
import path from 'path'

const PUBLIC_DIR = path.join(process.cwd(), 'public')

// maxWidth: cap based on the largest real CSS display size (accounting for ~1.6-2x DPR).
// og-image.png is exempt (exact OG spec size, re-encoded only, not resized).
const CONFIG = {
  'hero-kambo.jpg':          { maxWidth: 1600, quality: 80 },
  'jungle-bg.jpg':           { maxWidth: 1920, quality: 78 },
  'amazon-rainforest-bg.jpg':{ maxWidth: 1920, quality: 76 },
  'kambo-frog.jpg':          { maxWidth: 1400, quality: 80 },
  'kambo-ceremony.jpg':      { maxWidth: 1100, quality: 80 },
  'kambo-tools.jpg':         { maxWidth: 1100, quality: 80 },
  'yakov-guide.png':         { maxWidth: 1200, quality: 82 },
}

async function main() {
  const files = readdirSync(PUBLIC_DIR)
  let totalBefore = 0
  let totalAfter = 0

  for (const file of files) {
    const cfg = CONFIG[file]
    if (!cfg) continue

    const srcPath = path.join(PUBLIC_DIR, file)
    const before = statSync(srcPath).size
    const outName = file.replace(/\.(jpg|jpeg|png)$/i, '.webp')
    const outPath = path.join(PUBLIC_DIR, outName)

    const img = sharp(srcPath)
    const meta = await img.metadata()
    const width = meta.width && meta.width > cfg.maxWidth ? cfg.maxWidth : undefined

    await img
      .resize(width ? { width } : undefined)
      .webp({ quality: cfg.quality })
      .toFile(outPath)

    const after = statSync(outPath).size
    totalBefore += before
    totalAfter += after
    console.log(
      `${file} -> ${outName}: ${(before / 1024).toFixed(0)}KB -> ${(after / 1024).toFixed(0)}KB` +
      (width ? ` (resized to ${width}px wide)` : ' (kept original resolution)')
    )
  }

  console.log(`\nTOTAL: ${(totalBefore / 1024 / 1024).toFixed(2)}MB -> ${(totalAfter / 1024 / 1024).toFixed(2)}MB`)
  console.log(`Saved: ${((totalBefore - totalAfter) / 1024 / 1024).toFixed(2)}MB`)
}

main()
