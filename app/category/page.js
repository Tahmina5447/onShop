'use client'
import { useEffect, useState } from 'react';
import '../globals.css';
import Image from 'next/image';
import Link from 'next/link';
import { useDataContext } from '../context/datas';
export default function Page() {
  const { category } = useDataContext()
  const [data, setData] = useState(null)
  


  useEffect(() => {
    fetch(`https://comfort-zone-server.vercel.app/allProducts?category=${category}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data)
        setLoading(false)
        
      })
  }, [category])


  return (
    <>
      <div className=' grid lg:grid-cols-3 gap-6 my-12'>
        {
          data?.map(product => <div
            className='border border-sky-400 rounded shadow p-2 flex' key={product._id}>
            <div className='w-5/12'>
              {product?.product?.images.map((img, i) =>
                <Image className='w-20 border m-2 gap-2' width={300} height={300} key={i} src={img} alt='' />)}
            </div>
            <div className='w-7/12'>
              <h1 className='font-bold my-1 text-xl'>
                {
                  product?.product?.name
                }
              </h1>
              <p className='text-sm text-gray-500'> 
                {
                  product?.product?.description
                }
              </p>
              <p className='flex my-4'>
                <p className='font-bold mr-1'>Price:</p>
                {
                  product?.product?.price
                }
              </p>
              <div>
                <Link className='btn btn-sm bg-sky-400 font-bold' href={`/${product._id}`}>Product Details</Link>
              </div>
            </div>



          </div>)
        }
      </div>

    </>
  )
}

