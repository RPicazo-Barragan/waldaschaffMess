import Head from "next/head";
import OperatorProfile from '../src/components/operatorProfile.jsx'

function OperatorProfileView() {
  return (
    <>
      <Head>
        <title>Waldaschaff-OverView</title>
      </Head>
      <OperatorProfile />
    </>
  );
}

export default OperatorProfileView;