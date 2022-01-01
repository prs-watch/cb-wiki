// markdownサポートUtils
import { join } from "path"
import fs from "fs"
import matter from "gray-matter"
import { remark } from "remark"
import html from "remark-html"

// 定数
const contentsParent = join(process.cwd(), "contents")

// markdown情報型
type Item = {
    path: string,
    title: string,
    date: string,
    tags: string[],
    content: string
}

// markdown配置先パスを取得
// 構成としては、ディレクトリ＝タイトル、ページは一律index.mdとする（GitBookと同等）
const getMarkdownDirs = () => {
    const markdowns = fs.readdirSync(contentsParent, { withFileTypes: true })
    return markdowns.filter((markdown) => markdown.isDirectory()).map(({ name }) => name)
}

export const getAllMarkdowns = (fields: string[] = []) => {
    const markdownDirs = getMarkdownDirs()
    return markdownDirs.map((dir) => { return getMarkdownContent(dir, fields) })
}

// markdown（contents/XXX/index.md）の中身を取得
export const getMarkdownContent = (path: string, fields: string[] = []) => {
    const markdown = fs.readFileSync(join(contentsParent, path, "index.md"), "utf-8")
    const { data, content } = matter(markdown)
    const item: Item = {
        path: "",
        title: "",
        date: "",
        tags: [],
        content: ""
    }
    fields.forEach((field) => {
        if (field === "path") {
            item.path = path
        } else if (field === "content") {
            item.content = content
        } else if (field === "title" || field === "date" || field === "tags") {
            item[field] = data[field]
        }
    })

    return item
}

export const markdownToHTML = async (content: string) => {
    const resp = await remark().use(html).process(content)
    return resp.toString()
}