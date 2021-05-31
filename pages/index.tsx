import Head from "next/head";

const CardLink = ({ href, title, content }) => {
  return (
    <a
      href={href}
      className="p-6 m-4 text-left no-underline transition-colors ease-in-out border border-gray-100 rounded-md hover:text-blue-500 hover:border-blue-500"
    >
      <h3 className="mb-4 font-serif text-2xl font-bold">{title}</h3>
      <p className="m-0 text-xl font-light">{content}</p>
    </a>
  );
};

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center px-1 py-10 sm:h-screen sm:py-0 ">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=PT+Serif:wght@400;700&family=Poppins:wght@200;300;500;700;800&display=swap"
          rel="stylesheet"
        />
      </Head>

      <main className="flex flex-col items-center justify-center py-20">
        <h1 className="m-0 text-4xl leading-loose text-center sm:text-6xl sm:leading-relaxed">
          Welcome to{" "}
          <a
            className="text-center text-blue-600 no-underline hover:underline focus:underline active:underline"
            href="https://nextjs.org"
          >
            Next.js!
          </a>
        </h1>

        <p className="text-center sm:text-2xl">
          Get started by editing{" "}
          <code className="p-2 font-mono bg-gray-100 rounded-sm text-md">
            pages/index.js
          </code>
        </p>

        <div className="grid max-w-3xl mt-10 sm:grid-cols-2">
          <CardLink
            href="https://nextjs.org/docs"
            title="Documentation &rarr;"
            content="Find in-depth information about Next.js features and API."
          />

          <CardLink
            href="https://nextjs.org/learn"
            title="Learn &rarr;"
            content="Learn about Next.js in an interactive course with quizzes!"
          />

          <CardLink
            href="https://github.com/vercel/next.js/tree/master/examples"
            title="Examples &rarr;"
            content="Discover and deploy boilerplate example Next.js projects."
          />

          <CardLink
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            title="Deploy &rarr;"
            content="Instantly deploy your Next.js site to a public URL with Vercel."
          />
        </div>
      </main>

      <footer className="flex flex-col items-center justify-center flex-1 w-full h-full pt-6 border-t-2 border-gray-100">
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center"
        >
          <p>Powered by</p>
          <img src="/vercel.svg" alt="Vercel Logo" className="h-4 mt-1" />
        </a>
      </footer>
    </div>
  );
}
