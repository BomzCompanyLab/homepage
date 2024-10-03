interface IMenu {
    name_ko: string,
    name_en: string,
    url: string
}

const menu:IMenu[] = [
    {
        url: '/cmp',
        name_ko: '회사소개',
        name_en: 'Company'
    },
    {
        url: '/fts',
        name_ko: '기능',
        name_en: 'Features'
    },
    {
        url: '/prc',
        name_ko: '요금 정책',
        name_en: 'Pricing'
    }
];

export default menu;