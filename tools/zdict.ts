import { load } from 'cheerio'
import { fetch } from 'ofetch'

export async function getWordInfoFromZDict(word: string) {
  const r = await fetch(`https://www.zdic.net/hans/${word}`)
  const html = await r.text()

  const $ = load(html)
  const explain = $('.gc_sy').text()
  const pinyin = $('.gycd rt').first().text().trim()
    || $('.dicpy').first().text().trim()

  if (!pinyin)
    return

  return {
    word,
    pinyin,
    explain,
  }
}
