import { useNavigate, useLocation } from "react-router-dom"
import {ReactComponent as ExploreIcon} from '../common/svg/explore_.svg'  
import {ReactComponent as PersonOutlineIcon} from '../common/svg/userProfile.svg'
import {ReactComponent as MessageIcon} from '../common/svg/message.svg'
export const Footer = () =>{

    const navigate=useNavigate();
    const location = useLocation(); //current page hook
    const focusIcon = (path) => {
        if(path === location.pathname)
        return true;
    };
           
    return(
    <footer className="footer">
    <nav className="footerNav">
        <ul className="footerListItems">
            <li className="footerListItem" onClick={()=> navigate('/')}>
                <ExploreIcon fill={focusIcon('/explore')  ? '#8f8f8f':'#2c2c2c'} width='36px' height='36px' />
                <p style={focusIcon('/explore') ? {color: '#8f8f8f', fontWeight: 600}:{color:'#2c2c2c' , marginTop: '0.25rem', fontSize: '14px', fontWeight: 600}}>Home</p>
            </li>
            <li className="footerListItem" onClick={()=> navigate('/profile')}>
                <PersonOutlineIcon fill={focusIcon('/profile') ? '#8f8f8f':'#2c2c2c'} width='31px' height='36px' />
                <p style={focusIcon('/profile')  ? {color: '#8f8f8f', fontWeight: 600}:{color:'#2c2c2c' , marginTop: '0.25rem', fontSize: '14px', fontWeight: 600}}>Profile</p>
            </li>
            <li className="footerListItem" onClick={()=> navigate('/messages')}>
                <MessageIcon fill={focusIcon('/messages') ? '#8f8f8f':'#2c2c2c'} width='36px' height='36px' />
                <p style={focusIcon('/messages')  ? {color: '#8f8f8f', fontWeight: 600}:{color:'#2c2c2c' , marginTop: '0.25rem', fontSize: '14px', fontWeight: 600}}>Chat</p>
            </li>
        </ul>
    </nav>
</footer>)
}