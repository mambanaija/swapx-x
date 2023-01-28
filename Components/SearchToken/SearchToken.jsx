import React, { useState } from 'react';
import Image from 'next/image';

//Internal Import
import Style from './SearchToken.module.css';
import images from '../../assets';

const SearchToken = ( {openToken, tokens, tokenData} ) => {
  //useState active section which will enable people to select any token after they are connected to their account
  const [active, setActive] = useState(1);

  const coin = [
    {
      img: images.ether,
      name:"ETH"
    },
    {
      img: images.ether,
      name:"DAI"
    },
    {
      img: images.ether,
      name:"DOG"
    },
    {
      img: images.ether,
      name:"FUN"
    },
    {
      img: images.ether,
      name:"WETH9"
    },
    {
      img: images.ether,
      name:"UNI"
    },
    {
      img: images.ether,
      name:"TIME"
    },
    {
      img: images.ether,
      name:"LOO"
    },
    {
      img: images.ether,
      name:"OOO"
    },
    {
      img: images.ether,
      name:"HEY"
    }
  ]
  return (
    <div className={Style.SearchToken}>
      <div className={Style.SearchToken_box}>
        <div className={Style.SearchToken_box_heading}>
          <h4>Select Token</h4>
          <Image src={images.close} alt='close-btn' width={50} height={50}
          onClick={() => openToken(false)}
          />
        </div>

        <div className={Style.SearchToken_box_search}>
          <div className={Style.SearchToken_box_search_img}>
            <Image src={images.search} alt='search icon' width={20} height={20}/>
          </div>
          <input type="text" placeholder='Search name and paste the address' />
        </div>

        <div className={Style.SearchToken_box_tokens}>
          {coin.map((el, i) => (
            <span key={i + 1} 
            className={active == 
              i + 1 ? `${Style.active}` : " "}
              onClick={() => (
              setActive(i + 1), 
              tokens({name: el.name, image: el.img})
              )}
            >
              <Image src={el.img || images.ether} 
              alt='image'
              width={30}
              height={30}
              />
              {el.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchToken;
