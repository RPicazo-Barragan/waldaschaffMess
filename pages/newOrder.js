import Head from "next/head";
import NewOrder from '../src/components/newOrderC.jsx';

function newOrderView() {
  return (
    <>
      <Head>
        <title>Waldaschaff-New Order</title>
      </Head>
      <NewOrder />
    </>
  );
}

export default newOrderView;