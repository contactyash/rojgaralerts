import Head from "next/head";
const SetDocumentTitle = props => (
  <div>
    <Head>
      <title>{props.title}</title>
    </Head>
    {props.children}
  </div>
);
export default SetDocumentTitle;
