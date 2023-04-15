import { NavBarWrapper, NavItems } from "../styles/helpers/Navbar.styled";
import { VscGear } from "react-icons/vsc";
import ToolTip from '@mui/material/Tooltip';
import { Link } from "react-router-dom";

import { ButtonLogout } from "./ButtonLogout";
import Auth from '../../utils/auth'

const linkStyle = {
    fontFamily: 'Orbitron',
    marginRight: '20px',
    borderRadius: '50px',
    padding: '10px 20px',
    backgroundColor: '#fff',
    color: '#000',
    textDecoration: 'none',
    transition: 'background-color 0.3s ease-in-out',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)'
}


export const NavBar = () => {
    if (!Auth.loggedIn()) {
        return (
            <>
                <NavBarWrapper>
                    <div style={{ display: "flex", alignItems: "center", marginRight: "auto" }}>
                        <Link to="/" style={{ ...linkStyle, marginRight: "20px" }}>Home</Link>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "flex-end" }}>
                        <Link to="/showcase" style={linkStyle}>Showcase</Link>
                        <Link to="/about" style={linkStyle}>About us</Link>
                    </div>
                    <NavItems>
                        <ToolTip title={<h2 style={{ fontFamily: 'Orbitron' }}>Click to Login or Register</h2>} placement="left" arrow>
                            <Link to="/login"><VscGear /></Link>
                        </ToolTip>
                    </NavItems>
                </NavBarWrapper>
            </>
        )
    } else {
        return (
            <>
                <NavBarWrapper>
                    <div style={{ display: "flex", alignItems: "center", marginRight: "auto" }}>
                        <Link to="/" style={{ ...linkStyle, marginRight: "20px" }}>Home</Link>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "flex-end" }}>
                        <Link to="/showcase" style={linkStyle}>Showcase</Link>
                        <Link to="/about" style={linkStyle}>About us</Link>
                        {Auth.loggedIn() && <ButtonLogout />}
                    </div>
                    <NavItems>
                        <ToolTip title={<h2 style={{ fontFamily: 'Orbitron' }}>Click to Login or Register</h2>} placement="left" arrow>
                            <Link to="/login"><VscGear /></Link>
                        </ToolTip>
                    </NavItems>
                </NavBarWrapper>
            </>
        )
    }
}

