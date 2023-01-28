import React, { useEffect,  useContext, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

//importing the style for the navbar
import Style from './NavBar.module.css';
import images from '../../assets';
import { Model,TokenList } from '../index';

const NavBar = () => {
  const menuItems = [
    {
      name: "Swap",
      link: "/"
    },
    {
      name: "Tokens",
      link: "/"
    },
    {
      name: "Pools",
      link: "/"
    },
  ];

  //useState for the navbar section
  const [openModel, setOpenModel] = useState(false);
  const [openTokenBox, setOpenTokenBox] = useState(false);
  const [account, setAccount] = useState(false);

  return (
    <div className={Style.NavBar}>
      <div className={Style.NavBar_box}>
        <div className={Style.NavBar_box_left}>
          <div className={Style.NavBar_box_middle_search_img}>
            {/*Logo image*/}
          <Image src={images.uniswap} alt='logo' width={50} height={50}/>
          </div>
          {/*Menu Items*/}
          <div className={Style.NavBar_box_left_menu}>
            {menuItems.map((el, i) => (
              <Link
              key={i + 1}
              href={{pathname: `${el.name}`, query:`${el.link}` }}
              >
              <p className={Style.NavBar_box_left_menu_item}>{el.name}</p>
              </Link>
            ))}
          </div>
        </div>

        {/*Middle Section*/}
        <div className={Style.NavBar_box_middle}>
          <div className={Style.NavBar_box_middle_search}>
            <div className={Style.NavBar_box_middle_search_img}>
              <Image src={images.search} alt='search' height={20} width={20}/>
            </div>
            {/*Input Section*/}
            <input type="text" placeholder='Search Tokens' />
          </div>
        </div>

        {/*Right Section*/}
        <div className={Style.NavBar_box_right}>
          <div className={Style.NavBar_box_right_box}>
            <div className={Style.NavBar_box_right_box_img}>
            <Image src={images.ether} alt='Network' height={50} width={50}/>
            </div>
            <p>Network Name</p>
          </div>
          {
            account ? (
              <button onClick={() => setOpenModel(true)}>Connect</button>
            ) : (
              <button onClick={() => setOpenTokenBox(true)}>0xW846META94G22...</button>
            )}
          {openModel && (
            <Model setOpenModel={setOpenModel}
            connectWallet="Connect" />
          )}

        </div>
      </div>


      {/*TokenList Component  Section*/}
      {openTokenBox && (
          <TokenList tokenData="hey" setOpenTokenBox={setOpenTokenBox}/>
        )
      }
    </div>
  )
    
  
}

export default NavBar;
