import Head from "next/head";
import Header from "../components/Header";
import Banner from "../components/Banner";
import ProductFeed from "../components/ProductFeed";
import { getSession } from "next-auth/react";

export default function Home({products}) {
  return (
    <div className="bg-gray-100">

      <Head>
        <title>Amazon-NEXTJS</title>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4181021014026300"
     crossorigin="anonymous"></script>
      </Head>

      {/* Header */}
      <Header/>
    
      <main className="max-w-screen-2xl mx-auto">
        
        {/* Banner */}
        <Banner/>
        {/* ProductFeed */}
        <ProductFeed products={products}/>
        

      </main>
    
    </div>
  );
}


// Used below code for SSR (Fetching products from FakeStoreAPI)
export async function getServerSideProps(context){
  const session = await getSession(context);
  const products = await fetch("https://fakestoreapi.com/products").then(
    (res) => res.json()
  );
  return {
    props: {
      products,
      session
    },
  };
}

// https://fakestoreapi.com/products