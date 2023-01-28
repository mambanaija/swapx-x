import React, { useState, useEffect }  from 'react';
import Image from 'next/image';

//Internal css style and Image import
import Style from './Token.module.css';
import images from '../../assets';
import { Toggle } from '../index';

const Token = ({ setOpenSetting }) => {
  return (
    <div className={Style.Token}>
        <div className={Style.Token_box}>
            <div className={Style.Token_box_heading}>
            <h4>Settings</h4>
            <Image src={images.close} alt="close-btn" 
                width={50} height={50}
                onClick={() => setOpenSetting(false)} />
            </div>
            <p className={Style.Token_box_para}>
                Slippage tolerance{" "}
            <Image src={images.lock} width={20} height={20} alt="close-btn" />
            </p>
            <div className={Style.Token_box_input}>
                <button>Auto</button>
                <input type="text" placeholder='0.10%' />
            </div>
            <p className={Style.Token_box_para}>
                Slippage tolerance{" "}
                <Image src={images.lock} alt="img" width={20} height={20} />
            </p>
            <div className={Style.Token_box_input}>
                
                <input type="text" placeholder='30' />
                <button>Minutes</button>
            </div>
            <h2>Interface Setting </h2>
            <div className={Style.Token_box_toggle}>
                <p className={Style.Token_box_para}>
                    Transaction deadline
                </p>
                <Toggle label="No" />
            </div>
        </div>
    </div>
  )
}

export default Token;
