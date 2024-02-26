import { NavLink } from "react-router-dom";

const Header = () => {
    return (
      <headerr>
        <nav>
          <ul>
            <li>
              <NavLink to="/">
                Form
              </NavLink>
            </li>
            <li>
              <NavLink to="/not-completed-tasks">
              Not Completed Tasks
              </NavLink>
            </li>
            <li>
              <NavLink to="/completed-tasks">
              Completed Tasks
              </NavLink>
            </li>
          </ul>
        </nav>
      </headerr>
    );
  };
  
  export default Header;