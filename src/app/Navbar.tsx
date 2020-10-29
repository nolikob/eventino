/** @jsx jsx */
import React from "react";
import { Link } from "react-router-dom";
import { jsx } from "theme-ui";

const Navbar: React.FC = () => {
    return <nav sx={{
        boxShadow: "0 2px 5px rgba(66, 66, 66, 0.3)",
        height: "5rem",
        backgroundColor: "primary",
        textAlign: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "2rem",
    }}>
        <Link to={"/"} sx={{
            textDecoration: "none",
            color: "text",
            marginLeft: "auto",
            marginRight: "auto",
        }}>Eventino</Link>
        <Link to={"/add-event"} sx={{
            textDecoration: "none",
            color: "text",
            fontSize: "1rem",
            right: "1rem",
            position: "absolute"
        }}>
            Add event
        </Link>
    </nav>
};

export default Navbar;
