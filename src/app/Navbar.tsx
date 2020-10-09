/** @jsx jsx */
import React from "react";
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
        Eventino
    </nav>
};

export default Navbar;
