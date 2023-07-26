"use client"
import useSWR from 'swr'
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import React, { useContext } from 'react';
import lgo from '../images/lgo.png'
import { useDataContext } from '../context/datas';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowRight,
  faCartShopping,
  faHeart
} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const { data, setCategory } = useDataContext()
  const router = useRouter()
  const getName = (name) => {

    setCategory(name)
  }

  return (
    <>
      <div>

        <div className='navbar  py-3 border border-b-2'>
          <div className='navbar-start'> </div>
          <div className='navbar-center'>
            <div className="">

              <ul className='flex'>
                <li><button className='mr-3' onClick={() => router.push('/')} >Home</button></li>
                <li><button onClick={() => router.push('/about')} >About</button></li>
              </ul>
            </div>

          </div>
          <div className='navbar-end'> </div>
        </div>
      </div>
      <div>
        <div className="navbar shadow-xl m-0 py-0">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
              </label>
              <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] shadow bg-base-100 rounded-box w-52 ">
                <li>
                  <div className="form-control">
                    <input type="text" placeholder="Search" className=" input input-sm" />


                  </div>
                </li>
                <li className='flex items-center'><FontAwesomeIcon icon={faCartShopping} /></li>
                <li className='flex items-center'><FontAwesomeIcon icon={faHeart} /></li>

              </ul>
            </div>
            <div className='flex'>
              <Image

                className='w-16 mr-2'
                //  width="350"
                //  height="300"
                src={lgo}
                alt='/' />
              <h1 className='text-sky-400 font-bold text-2xl flex items-center'>OnShop</h1>
            </div>

          </div>
          <div className="navbar-center hidden lg:flex align-items-center">
            <ul className="menu menu-horizontal px-1 flex items-center">
              <li>
                <div className="form-control">
                  <input type="text" placeholder="Search" className=" input input-sm" />

                </div>
              </li>
              <li className='flex items-center'><FontAwesomeIcon icon={faCartShopping} /></li>
              <li className='flex items-center'><FontAwesomeIcon icon={faHeart} /></li>

            </ul>
          </div>
          <div className="navbar-end">
            <a className="btn">Login</a>
          </div>
        </div>
      </div>


      <div className='mx-2 my-6 lg:flex'>
        <div className='flex items-center mr-2'>
          <h1 className='mr-2 my-2'>Select Category</h1>
          <FontAwesomeIcon icon={faArrowRight} />
        </div>
        <div className='my-2'>
          {data?.map(category => <Link className='mr-3 border border-b-2 p-2 rounded' href={'/category'} onClick={() => getName(category.name)} key={category.i}>{category.name}</Link>)}
        </div>
      </div>

    </>


  );
};

export default Navbar;