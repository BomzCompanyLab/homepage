'use client'

import { useMemo } from 'react';
import Link from 'next/link';

import menus from "./menus";
import './css/footer.css';
import { usePathname } from 'next/navigation';


const Footer = () => {

    const path = usePathname();

    // 이용약관 메뉴
    const plcMenu = useMemo(()=> menus.find(m=> m.url === '/plc'), []);
    // 개인정보이용약관 메뉴
    const pvcMenu = useMemo(()=> menus.find(m=> m.url === '/pvc'), []);

    return (
    <footer>

        { (path !== '/plc' && path !== '/pvc') &&
        <section className="top">
            <article className="line">{ /** 사선 배경 부분 */}</article>
        </section>
        }

        <section className="box between">
            <article>
                <div>
                    <h4 className="big m-block">고객센터</h4>
                </div>
                <div>
                    <h1 className="big m-block">cs@bomz.app</h1>
                </div>
                <div className="m-center m-top24">
                    <h4>
                        <Link href={pvcMenu?.url || '/'}>{pvcMenu?.name_ko || '개인정보이용약관'}</Link>
                    </h4>
                    <h4 className="sep">|</h4>
                    <h4>
                        <Link href={plcMenu?.url || '/'}>{plcMenu?.name_ko || '이용약관'}</Link>
                    </h4>
                </div>
            </article>
            <article>
                <div className="m-center">
                    <h4>사업자 봄즈</h4>
                    <h4 className="sep">|</h4>
                    <h4>대표 조용철</h4>
                </div>
                <div className="m-center">
                    <h4>이메일 bom@bomz.app</h4>
                    <h4 className="sep">|</h4>
                    <h4>사업자등록번호 891-28-00244</h4>
                </div>
                <div className="m-center">
                    <h4>주소 경기도 고양시 일산동구 무궁화로 8-38</h4>
                </div>
                <div className="m-center m-top24">
                    <h4>ⓒ BOMZ. All Right Reserved.</h4>
                </div>
            </article>
        </section>
    </footer>
    )
}

export default Footer;