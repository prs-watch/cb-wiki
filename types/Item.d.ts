// markdownコンテンツ格納型
export type Item = {
  path: string;
  title: string;
  date: string;
  tags: string[];
  content: string;
};