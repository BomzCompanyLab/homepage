interface IMenu {
    name_ko: string,
    name_en: string,
    url: string,
    header: boolean
}

const menu:IMenu[] = [
    {
        url: '/prc',
        name_ko: '요금 정책',
        name_en: 'Pricing',
        header: true
    },
    {
        url: '/plc',
        name_ko: '이용약관',
        name_en: 'Policy',
        header: false
    },
    {
        url: '/pvc',
        name_ko: '개인정보처리방침',
        name_en: 'Privacy',
        header: false
    }
];

export default menu;