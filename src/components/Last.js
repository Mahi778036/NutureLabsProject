import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';

import "./Last.css";

const Last = (props) => {
    return <section className="last">
        <div className='last_button'>
        <div className="last_button_ava">
            <img src="https://raw.githubusercontent.com/akshita151199/APIs/main/avax.png" alt="avax" />
            <p>Avalanche</p>
            <KeyboardArrowDownIcon style={{
                color:"#FFFF"
            }} />
        </div>
        <div className='last_button_money'>
            <AccountBalanceWalletIcon style={{
                color:"#3772FF"
            }} />
            <p> OXF6....1353</p>
            <KeyboardArrowDownIcon style={{
                color:"#FFFF"
            }} />
        </div>
        </div>
        <div className='last_arrow'>
            <KeyboardBackspaceIcon style={{
                color:"#FFFF"
            }}/>
            <h3>Custom link</h3>
        </div>
        <div className='last_link'>
            <a href='#'>https://testnet.xyz.xyz/trade?ref=</a>
        </div>
        <div className='last_input'>
            <input placeholder='ENTER' />
        </div>
        <div className='last_buttons'>
            <div className='last_custom_buttons'>
              <ArrowUpwardIcon style={{
                  color:"#FFFF",
                  fontSize:"12px"
              }} />
              <p>Custom link</p>
            </div>
            <div className='last_custom_buttons_right'>
              <ArrowRightAltIcon style={{
                  color:"#FFFF",
                  fontSize:"12px"
              }} />
              <p>Custom link</p>
            </div>
        </div>
    </section>
}
export default Last;