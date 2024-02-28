import { HeaderStyled, ListStyled, NavLinkStyled } from './Header.styled';
import { ROUTE_PATHES } from 'constants/constants';

const Header = () => {
  return (
    <HeaderStyled>
      <nav>
        <ListStyled>
          <li>
            <NavLinkStyled to={ROUTE_PATHES.form}>Form</NavLinkStyled>
          </li>
          <li>
            <NavLinkStyled to={ROUTE_PATHES.notCompletedTasks}>
              Not Completed Tasks
            </NavLinkStyled>
          </li>
          <li>
            <NavLinkStyled to={ROUTE_PATHES.completedTasks}>
              Completed Tasks
            </NavLinkStyled>
          </li>
        </ListStyled>
      </nav>
    </HeaderStyled>
  );
};

export default Header;
