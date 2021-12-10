import Head from "next/head";
import NewOperator from '../src/components/newOperatorForm.jsx';

function newOperatorView() {
  return (
    <>
      <Head>
        <title>Waldaschaff-New Operator</title>
      </Head>
      <NewOperator/>
    </>
  );
}

export default newOperatorView;