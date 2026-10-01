import { readFileSync, writeFileSync, existsSync } from 'fs'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'
const dir = join(dirname(fileURLToPath(import.meta.url)), '..', 'dist')
const htmlPath = join(dir, 'index.html')
if (existsSync(htmlPath) && readFileSync(htmlPath,'utf8').includes('Pasha Barbershop')) {
  console.log('index.html already present')
  process.exit(0)
}
let b64 = ''
for (let i = 1; ; i++) {
  const p = join(dir, `index.b64.${i}`)
  if (!existsSync(p)) break
  b64 += readFileSync(p, 'utf8').trim()
}
if (!b64) {
  const parts = [1,2,3].map(i => readFileSync(join(dir, `index.part${i}`), 'utf8'))
  writeFileSync(htmlPath, parts.join(''))
  console.log('assembled from parts', parts.reduce((a,b)=>a+b.length,0))
} else {
  writeFileSync(htmlPath, Buffer.from(b64, 'base64').toString('utf8'))
  console.log('assembled from b64', Buffer.from(b64,'base64').length)
}
