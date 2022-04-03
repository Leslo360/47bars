import type { NextPage } from 'next'
import { useAddress, useDisconnect, useMetamask } from "@thirdweb-dev/react";

import Head from 'next/head'

function NftDropPage() {

// Auth
const connectWithMetamask = useMetamask();
const address = useAddress();
const disconnect = useDisconnect()

  return (
    <div className="flex flex-col h-screen lg:grid lg:grid-cols-10 ">
      <Head>
        <title>Drops</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* left */}
      <div className='bg-gradient-to-br from-cyan-800 to-rose-500 lg:col-span-4'>
        <div className="flex flex-col items-center justify-center py-2 lg:min-h-screen ">
            <div className="p-2 bg-gradient-to-br from-yellow-400 to-purple-400 rounded-xl">

            <img className='object-cover w-44 rounded-xl lg:h-96 lg:w-72' src="https://links.papareact.com/8sg" alt="nft" />
            </div>
            <div className="p-5 space-y-2 text-center">
              <h1 className='text-4xl font-bold text-white'>Leslo Apes</h1>
              <h2 className='text-xl text-gray-300'>A collection of leslo apes </h2>
            </div>
        </div>

      </div>
      {/* right */}
      <div className='flex flex-col flex-1 p-12 lg:col-span-6'>
        {/* header */}
        <header className='flex items-center justify-between'>
          <h1 className='text-xl cursor-pointer w-52 font-extralight sm:w-80'>The <span className='font-extrabold underline decoration-pink-600/50'>47Bars</span> NFT Marketplace</h1>
          <button onClick={() => (address ? disconnect() : connectWithMetamask())} className='px-4 py-3 font-bold text-white rounded-full bg-rose-400 text:xs lg:px-5 lg:py-3 lg:text-base'>
            {!address ? "Sign In" : "Sign Out"}
          </button>
        </header>
        <hr className='my-2 border '/>
        {address && (
          <p className='text-sm text-center text-rose-400'>You're logged in with wallet {address.substring(0,5)}...{address.substring(address.length - 5)}</p>
        )}

        {/* Content */}
        <div className="flex flex-col items-center flex-1 mt-10 space-y-6 lg:space-x-0 lg:justify-center">
          <img className='object-cover pb-10 w-80 lg:h-40' src="https://links.papareact.com/bdy" alt="" />
          <h1 className='text-3xl font-bold lg:text-5xl lg:font-extrabold'>New Event Ticket | NFT </h1>
          <p className='pt-2 text-xl text-green-500'>13 / 21 NFT's claimed</p>
        </div>
        {/* Mint button */}
        <button className="w-full h-16 mt-6 font-bold text-white bg-red-600 rounded-full">Mint NFT (0.01 ETH)</button>
      </div>
    </div>
  )
}


export default NftDropPage