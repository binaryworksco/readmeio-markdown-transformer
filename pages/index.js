import Head from 'next/head'
import { Inter } from 'next/font/google'
// import MarkdownTransformer from "@/components/MarkdownTransformer";
import MarkdownRenderer from "@/components/MarkdownRenderer";

const inter = Inter({ subsets: ['latin'] })

const markdownFile = '/markdown/sample.md';

export default function Home() {
  return (
    <>
      <Head>
        <title>Readme.io Markdown Transformer</title>
        <meta name="description" content="React app that transforms readme.io markdown into HTML" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <div>
            <MarkdownRenderer markdownFile={markdownFile}/>
        </div>
      </main>
    </>
  )
}
