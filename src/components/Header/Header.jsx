import { HeaderStyled, ListStyled, NavLinkStyled  } from "./Header.styled";
// import logo from "../../logo/logo.png"

const Header = () => {
    return (
      <HeaderStyled>
        <nav>
          <ListStyled>
            <li>
              <NavLinkStyled to="/">
                Form
              </NavLinkStyled>
            </li>
            <li>
              <NavLinkStyled to="/not-completed-tasks">
              Not Completed Tasks
              </NavLinkStyled>
            </li>
            <li>
              <NavLinkStyled to="/completed-tasks">
              Completed Tasks
              </NavLinkStyled>
            </li>
          </ListStyled>
        </nav>
      </HeaderStyled>
    );
  };
  
  export default Header;