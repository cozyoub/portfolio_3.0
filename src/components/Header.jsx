import { Link } from "react-router-dom";
export default function Header(){
    return(
        <>
            <header className="header">
                <div className="inner">
                    <Link to="/">
  <h1>Youb Portfolio</h1>
</Link>
                    <nav className="nav">
                        <ul>
                        <li className="nav-itm">
                            <a href="/">Home</a>
                        </li>
                        <li className="nav-itm">
                            <a href="/work">Work</a>
                        </li>
                        <li className="nav-itm">
                            <a href="/project">Development</a>
                        </li>
                    </ul>
                    </nav>
                </div>
            </header>
        </>
    )
}