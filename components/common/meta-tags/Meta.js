import Head from "next/head";

export default function Meta(props) {
  const { title, description } = props;
  const metaObject = {
    title: title || "warcart --exam Md Amanullah Sayeem",
    description: description || "This Demo project for warcart exam",
  };
  return (
    <Head>
      <title>{metaObject.title}</title>
      <meta name="description" content={metaObject.description} />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
}
