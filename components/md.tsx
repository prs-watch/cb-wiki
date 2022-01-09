import ChakraUIRenderer from 'chakra-ui-markdown-renderer';
// @ts-ignore 外部パッケージ側のエラーは無視する
import emoji from 'emoji-dictionary';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

// プロパティ型
type Props = {
  content: string;
};

// 絵文字をUnicodeへ変換する
const convertEmoji = (text: string) => {
  return text.replace(/:\w+:/gi, (name) => emoji.getUnicode(name));
};

// markdownレンダリングコンポーネント
const Md = (props: Props) => {
  const content = convertEmoji(props.content);
  return (
    <ReactMarkdown
      components={ChakraUIRenderer()}
      remarkPlugins={[remarkGfm]}
      className='markdown-body'
      skipHtml
    >
      {content}
    </ReactMarkdown>
  );
};

export default Md;
