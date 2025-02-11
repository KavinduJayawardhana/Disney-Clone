import React, { useState } from 'react';
import logo from './../assets/Images/logo.png';
import { HiHome, HiMagnifyingGlass, HiStar, HiPlayCircle, HiTv } from "react-icons/hi2";
import { HiPlus, HiDotsVertical } from 'react-icons/hi';
import man from './../assets/Images/man.png';
import HeaderItem from './HeaderItem';

const Header = () => {
  const[toggle,setToggle]=useState(false);
  const menu = [
    {
      name: 'Home',
      icon: HiHome
    },
    {
      name: 'SEARCH',
      icon: HiMagnifyingGlass
    },
    {
      name: 'WATCH LIST',
      icon: HiPlus
    },
    {
      name: 'ORIGINALS',
      icon: HiStar
    },
    {
      name: 'MOVIES',
      icon: HiPlayCircle
    },
    {
      name: 'SERIES',
      icon: HiTv
    }
  ];

  return (
    <div className='flex items-center justify-between p-5'>
      <div className='flex gap-8 items-center'>
        <img src={logo} className='w-[80px] md:w-[115px] object-cover' />
        <div className='hidden md:flex gap-8'>
          {menu.map((item) => (
            <HeaderItem name={item.name} Icon={item.icon} key={item.name} />
          ))}
        </div>
        <div className='flex md:hidden gap-8'>
          {menu.map((item,index) => index<3&&(
            <HeaderItem name={''} Icon={item.icon} key={item.name} />
          ))}
          {/* add three dots when screen is small */}
          <div className="md:hidden" onClick={()=>setToggle(!toggle)}>
            <HeaderItem name={''} Icon={HiDotsVertical}/>
            {toggle?<div className='absolute mt-3 bg-[#121212] border-[1px] border-gray-700 p-3 px-5 py-4'>
              {menu.map((item,index) => index>2&&(
              <HeaderItem name={item.name} Icon={item.icon} key={item.name} />
              ))}
            </div>:null}
          </div>
        </div>
      </div>
      <div className='flex items-center'>
        <img src={man} className='w-[40px] rounded-full' />
      </div>
    </div>
  );
};

export default Header;