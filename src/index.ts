import { readdir } from 'node:fs/promises'
import { resolve } from 'node:path'

async function* files(dir: string): AsyncIterableIterator<string> {
  const dirents = await readdir(dir, { withFileTypes: true })
  
  for (const dirent of dirents) {
    const res = resolve(dir, dirent.name)

    if (dirent.isDirectory())
      yield* files(res)
    else
      yield res
  }
}

export default files
