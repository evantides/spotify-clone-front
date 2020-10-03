import React from "react";

function NavBar(props) {
    let navBarItems = [];
    if (localStorage.getItem("loggedIn")) {
        navBarItems.push(
            <li key={2}>
                <a href="/" onClick={props.handleLogOut}>
                    Log Out
                </a>
            </li>
        );
    } else {
        navBarItems.push(
            <li key={3}>
                <a href="https://www.spotify.com/signup/">Sign Up</a>
            </li>
        );
        navBarItems.push(
            <li key={4}>
                <a
                    href="http://localhost:8888/login" onClick={props.handleLogIn}
                >
                    Log In
                </a>
            </li>
        );
    }

    return (
        <>
            <nav>
                <h1>Spotify</h1>
                {/*<a href="/">*/}
                {/*    <i className="lni-home"></i> Home*/}
                {/*</a>*/}
                {/*<a href="#">*/}
                {/*    <i className="lni-search"></i> Search*/}
                {/*</a>*/}
                <ul>{navBarItems}</ul>
            </nav>
        </>
    );
}

export default NavBar;
