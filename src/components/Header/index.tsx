import {
    LogoImg,
    Menu,
    MenuItem,
    Nav,
    NavLeft,
    NavRight,
} from "./styled.components";
import Logo from "../../assets/logo.png";

const Header = () => {
    const menuItems = [
        {
            label: "home",
            url: "home",
        },
        {
            label: "about",
            url: "about",
        },
        {
            label: "projects",
            url: "projects",
        },
        {
            label: "contact",
            url: "contact",
        },
    ];

    return (
        <Nav>
            <NavLeft>
                <LogoImg src={Logo} />
            </NavLeft>
            <NavRight>
                <Menu>
                    {menuItems.map((menu, i) => (
                        <MenuItem key={i} href={menu.url}>
                            {menu.label}
                        </MenuItem>
                    ))}
                </Menu>
            </NavRight>
        </Nav>
    );
};

export default Header;
