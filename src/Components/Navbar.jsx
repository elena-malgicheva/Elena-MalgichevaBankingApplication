
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from "react-router-dom";

// Icons
import { TbMoodDollar } from 'react-icons/tb'
import { RiUserAddFill } from 'react-icons/ri';
import { FaPiggyBank } from 'react-icons/fa';
import { BsCardList } from 'react-icons/bs';
import { RiMoneyDollarCircleFill } from 'react-icons/ri'

function AppNavbar() {
  let NavLinkClasses = 'nav-item';
  let NavLogoClasses = 'logo';
  
  return (

     <Navbar>     
      <Navbar.Brand className='justify-start p-1'>
        <Nav.Link >
        <NavLink className={(navData) => navData.isActive ?  NavLogoClasses +' active' : NavLogoClasses } to="Elena-MalgichevaBankingApplication/welcome">
          <TbMoodDollar className='icon' />
          Good Bank
        </NavLink>
        </Nav.Link>
      </Navbar.Brand>

      <Navbar.Toggle />
        
      <Navbar.Collapse className="justify-content-end">
        <NavLink className={(navData) => navData.isActive ?  NavLinkClasses +' active' : NavLinkClasses } to="Elena-MalgichevaBankingApplication/register"><RiUserAddFill className='icon' /> CREATE ACCOUNT</NavLink>
        <NavLink className={(navData) => navData.isActive ?  NavLinkClasses +' active' : NavLinkClasses } to="Elena-MalgichevaBankingApplication/deposit" ><FaPiggyBank className='icon' /> DEPOSIT</NavLink>
        <NavLink className={(navData) => navData.isActive ?  NavLinkClasses +' active' : NavLinkClasses } to="Elena-MalgichevaBankingApplication/withdraw"><RiMoneyDollarCircleFill className='icon' /> WITHDRAW</NavLink>
        <NavLink className={(navData) => navData.isActive ?  NavLinkClasses +' active' : NavLinkClasses } to="Elena-MalgichevaBankingApplication/alldata"><BsCardList className='icon' /> ALL DATA</NavLink>
      </Navbar.Collapse> 
       
     </Navbar>
   
  );
}

export default AppNavbar;
