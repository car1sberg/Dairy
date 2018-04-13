
import React from 'react';
import { Link } from "react-router-dom";



const Sidebar = () => {
    return (
        <aside className="aside">
            <h1><Link to="/">dairy app</Link></h1>
            <p>Comment with no sense</p>
        </aside>
    )
}

export default Sidebar;