import React from 'react';
import Link from "next/link";

import menus from "./menus";

const Header = ()=>{
    return <header>
        <h1>
            <Link href="/">Bomz</Link>
        </h1>
        <nav>
            { menus.map(mn=><Link key={mn.url} href={mn.url}>{mn.name_ko}</Link>)}
            
            <Link href="https://bora.bomz.app" target="_blank">
                <button className="bombora-link">봄보라 이용하기</button>
            </Link>
        </nav>
    </header>
}

export default Header;