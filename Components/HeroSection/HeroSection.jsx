import React, {useState, useContext} from 'react';
import Image from 'next/image';

//Internal CSS Import
import Style from '../HeroSection/HeroSection.module.css';
import images from '../../assets';
import { Token, SearchToken } from '../index';

const HeroSection = ({accounts,tokenData}) => {
   //UseState
    const [openSetting, setOpenSetting] = useState(false);
    const [openToken, setOpenToken] = useState(false);
    const[openTokensTwo, setOpenTokensTwo] = useState(false);

      //Token 1
  const [tokenOne, setTokenOne] = useState({
    name:" ",
    image:" ",
  });

    //Token 2
    const [tokenTwo, setTokenTwo] = useState({
      name:" ",
      image:" ",
    });

    //JSX FILE
  return (
    <div className={Style.HeroSection}>
      <div className={Style.HeroSection_box}>
      <div className={Style.HeroSection_box_heading}>
          <p>Swap</p>
          <div className={Style.HeroSection_box_heading_img}>
            <Image src={images.close} height={50} width={50} alt='Hero Image'
            onClick={() => setOpenSetting(true)}
            />
          </div>
        </div>
        <div className={Style.HeroSection_box_input}>
          <input type="text" placeholder='0' />
          <button onClick={() => setOpenToken(true)}>
          <Image src={images.tokenOne || images.etherlogo} width={20} height={20} alt='ether logo'/>
          {tokenOne.name || "ETH"}
          <small>1759</small>
          </button>
        </div>
        <div className={Style.HeroSection_box_input}>
          <input type="text" placeholder='0' />
          <button onClick={() => setOpenTokensTwo(true)}>
          <Image src={images.tokenTwo || images.etherlogo} width={20} height={20} alt='ether logo'/>
          {tokenTwo.name || "ETH"}
          <small>1988</small>
          </button>
        </div>
        
        {accounts ? (
          <button className={Style.HeroSection_box_btn}>Connect Wallet</button>
        ): (
          <button className={Style.HeroSection_box_btn} 
          onClick={() => {}}>Swap</button>
        )}
      </div> 

      {openSetting && <Token setOpenSetting={ setOpenSetting } />}

      {openToken && (
      <SearchToken 
      openToken={setOpenToken}
      tokens={setTokenOne}
      tokenData={tokenData}
      />
  )}

    {openTokensTwo && (
      <SearchToken 
      openToken={setOpenTokensTwo}
      tokens={setTokenTwo}
      tokenData={tokenData}
      />
)}
    </div>
  )
}

export default HeroSection;
