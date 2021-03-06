import fs from 'fs';
import { join } from 'path';

import matter from 'gray-matter';

import { Item } from '../types/Item';

// 定数
// markdown配置先親ディレクトリ
const contentsParent = join(process.cwd(), 'contents');

// markdown配置先パスを取得
// 構成としては、ディレクトリ＝タイトル、ページは一律index.mdとする（GitBookと同等）
const getMarkdownDirs = () => {
  const markdowns = fs.readdirSync(contentsParent, { withFileTypes: true });
  return markdowns
    .filter((markdown) => markdown.isDirectory())
    .map(({ name }) => name);
};

// 全てのmarkdownコンテンツを取得
export const getAllMarkdowns = (fields: string[] = []) => {
  const markdownDirs = getMarkdownDirs();
  return markdownDirs.map((dir) => {
    return getMarkdownContent(dir, fields);
  });
};

// 単一markdownコンテンツを取得
export const getMarkdownContent = (path: string, fields: string[] = []) => {
  const markdown = fs.readFileSync(
    join(contentsParent, path, 'index.md'),
    'utf-8'
  );
  const { data, content } = matter(markdown);
  const item: Item = {
    path: '',
    title: '',
    status: '',
    tags: [],
    content: '',
  };
  fields.forEach((field) => {
    if (field === 'path') {
      item.path = path;
    } else if (field === 'content') {
      item.content = content;
    } else if (field === 'title' || field === 'status' || field === 'tags') {
      item[field] = data[field];
    }
  });

  return item;
};
