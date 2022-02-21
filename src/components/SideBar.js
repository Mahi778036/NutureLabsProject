import './SideBar.css';
import Button from "@material-ui/core/Button";
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import HomeIcon from '@material-ui/icons/Home';
import AssessmentIcon from '@material-ui/icons/Assessment';
import BarChartIcon from '@material-ui/icons/BarChart';
import PieChartIcon from '@material-ui/icons/PieChart';
import MessageIcon from '@material-ui/icons/Message';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import ShareIcon from '@material-ui/icons/Share';
import AssignmentIcon from '@material-ui/icons/Assignment';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import LanguageIcon from '@material-ui/icons/Language';
import NightsStayIcon from '@material-ui/icons/NightsStay';

const SideBar = (props) => {

 
    return <div className="navigation_menu">
        <div className="navigation_menu-title">
           <div className="navigation_menu-title-logo">
               N
           </div>
           <h2>Name</h2>
           <KeyboardBackspaceIcon style={{
               color:"#FFFF",
               margin:"10px",
               margin: "3px 0px 0 85px",
               fontSize: "25px",
           }} />
        </div> 
        <button className='navigation_menu-button'><HomeIcon />Home</button>
        <button className='navigation_menu-button'><AssessmentIcon />Section 1</button>
        <button className='navigation_menu-button'><AttachFileIcon />Section 2</button>
        <button className='navigation_menu-button'><MessageIcon />Section 3</button>
        <button className='navigation_menu-button'><MonetizationOnIcon />Section 4</button>
        <button className='navigation_menu-button'><HomeIcon />Section 5</button>
        <button className='navigation_menu-button'><PieChartIcon />Section 6</button>
        <button className='navigation_menu-button'><BarChartIcon />Section 7</button>
        <button className='navigation_menu-button'><ShareIcon />Section 8</button>
        <button className='navigation_menu-button'><AssignmentIcon />Documentaion</button>
        <div className='footer'>
            <button className='footer_button'>
            <div className="navigation_menu_footer-logo">
               N
           </div> 
           $0.90
            </button>
            <button className='footer_buy_button'>
                Buy $XYZ
            </button>
        </div>
        <div className='footer_icons'>
            <div className='footer_icons-first'>
              <LanguageIcon style={{
                  color:"#808191",
                  
              }}/>
            </div>
            <div className='footer_icons-second'>
              
                <div  className="navigation_menu_footer-logo"></div> 
                 <NightsStayIcon style={{
                  color:"#808191",
              }}  />
              
           </div>
        </div>
       
        
        
    </div>

   
}

export default SideBar;