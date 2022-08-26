import { Link } from "react-router-dom";

import classes from "./mainNavMenu.module.css";

function MainNav() {
    return (
        <header className={classes.header}>
            <div>Test Text</div>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Main</Link>
                    </li>
                    <li>
                        <Link to="/test">Test</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default MainNav;
