import React from 'react';
import Link from "next/link";
import Image from "next/image";

import menus from "@/app/menus";
import '@/app/css/header.css';

import imgLogo from '/public/images/logo.png';

const Header = ()=>{
    return <header >
        <h1 style={{marginLeft:"30px"}}>
            <Link href="/" style={{"display":"flex", "alignItems":"center"}}><Image src={imgLogo} className="logo" alt="BOMZ" title="BOMZ"/>Bomz</Link>
        </h1>
        <nav style={{marginRight:"30px"}}>
            { menus.filter(mn=>mn.header).map(mn=><Link key={mn.url} href={mn.url}>{mn.name_ko}</Link>)}
            
            <Link href="https://bora.bomz.app" target="_blank" className="m-hide">
                <button className="bombora-link" style={{marginTop:'0px'}}>봄보라 이용하기</button>
            </Link>
        </nav>
    </header>
}

export default Header;