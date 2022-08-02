import { resolve } from 'node:path'
import files from '.'

test('files', async () => {
  const f: string[] = []

  for await (const file of files('./src'))
    f.push(file)

  expect(f).toEqual([
    // resolve absolute path of files
    resolve('./src/index.test.ts'),
    resolve('./src/index.ts')
  ])
})
