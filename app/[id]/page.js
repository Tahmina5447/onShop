import Image from 'next/image'
import '../globals.css'
async function getData(id) {
    const res = await fetch(`https://comfort-zone-server.vercel.app/allProduct/${id}`)
    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    return res.json()
}


export default async function ProductDetails({ params }) {
    const id = params.id
    const data = await getData(id)
    return (
        <>


            <div className='my-12 border border-sky-400 rounded-xl w-10/12 mx-auto p-4'>

                <div className='flex gap-2'>

                    <div className='w-1/2 mx-auto lg:flex'>
                            {data?.product?.images?.map((img, i) =>
                                <Image className='w-24 mx-auto border m-2 gap-2' width={300} height={300} key={i} src={img} alt='' />)}
                        </div>

                    
                    {/* <div className='w-1/2 mx-auto lg:flex'>
                            {data?.product?.images?.map((img, i) =>
                                <ReactImageMagnify key={i} {...{
                        smallImage: {
                            alt: 'Wristwatch by Ted Baker London',
                            isFluidWidth: true,
                            src: img
                        },
                        largeImage: {
                            src: img,
                            width: 1200,
                            height: 1800
                        }
                    }} />)}
                        </div> */}
                    <div className='w-1/2 mx-auto'>
                        <h1 className=' font-bold text-2xl pb-3'>{data?.product?.name}</h1>
                        <p>{data?.product?.description}</p>
                        <div className='flex text-xl'>
                            <p className='font-bold mr-2'>Price: </p>
                            <p className='text-sky-400'>{data?.product?.price}</p>
                        </div>
                        <div className='lg:flex'>
                            <p className='font-bold mr-2'>Available Colors: </p>
                            <p className='flex'>{data?.product?.colors?.map((c, i) => <p className='mr-2 ' key={i}>{c},</p>)}</p>
                        </div>
                        <div className='lg:flex'>
                            <p className='font-bold mr-2'>Available Sizes: </p>
                            <p className='flex'>{data?.product?.sizes?.map((s, i) => <p className='mr-2 ' key={i}>{s},</p>)}</p>
                        </div>

                    </div>
                </div>
                <div>
                    <h1 className='font-bold text-2xl py-6'>Reviews:</h1>
                    <div className=''>
                        {
                            data?.reviews?.map((r, i) => <div className='border rounded-xl p-2' key={i}>
                                <div className='flex'>
                                    <p className='font-bold mr-2'>Name: </p>
                                    <p >{r.username}</p>
                                </div>
                                <div className='flex'>
                                    <p className='font-bold mr-2'>Comment: </p>
                                    <p >{r.comment}</p>
                                </div>
                                <div className='flex'>
                                    <p className='font-bold mr-2'>Rating: </p>
                                    <p >{r.rating}</p>
                                </div>
                            </div>)
                        }

                    </div>
                </div>
            </div>


        </>
    )
}