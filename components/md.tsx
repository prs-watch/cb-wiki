import { Code } from '@chakra-ui/react';
import ChakraUIRenderer from 'chakra-ui-markdown-renderer';
// @ts-ignore 外部パッケージ側のエラーは無視する
import emoji from 'emoji-dictionary';
import ReactMarkdown from 'react-markdown';
import { Tweet } from 'react-twitter-widgets';
import remarkGfm from 'remark-gfm';

// プロパティ型
type Props = {
  content: string;
};

// 絵文字をUnicodeへ変換する
const convertEmoji = (text: string) => {
  return text.replace(/:\w+:/gi, (name) => emoji.getUnicode(name));
};

// ツイート埋め込みテーマ
const extendTheme = {
  code: (props: any) => {
    const { inline, children, className } = props;
    if (className === 'language-twitter') {
      const tweetId = children[0].replace(/\r?\n/g, '');
      return <Tweet tweetId={tweetId} />;
    } else {
      if (inline) {
        return <Code p={2}>{children}</Code>;
      }
      return (
      <Code
        className={className}
        whiteSpace="break-spaces"
        d="block"
        w="full"
        p={2}
        >
          {children}
        </Code>
      )
    }
  }
}

// markdownレンダリングコンポーネント
const Md = (props: Props) => {
  const content = convertEmoji(props.content);
  return (
    <ReactMarkdown
      components={ChakraUIRenderer(extendTheme)}
      remarkPlugins={[remarkGfm]}
      className='markdown'
      skipHtml
    >
      {content}
    </ReactMarkdown>
  );
};

export default Md;
