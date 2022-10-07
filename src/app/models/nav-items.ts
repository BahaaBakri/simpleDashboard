import { faBook, faChartArea, faChartSimple, faFilter, faGears, faHands, faHandshake, faHome, faMagic, faMicrophone, faObjectGroup, faPager, faUsers, faVolumeHigh, IconDefinition } from "@fortawesome/free-solid-svg-icons"

export interface NavItem {
    id:number,
    name:string,
    icon:IconDefinition,
    url:string
}
export const navItems:NavItem[] = [
    {
        id: 1,
        name:'Home',
        icon:faObjectGroup,
        url: '/pages/home'
    },
    {
        id: 2,
        name:'Contacts',
        icon:faFilter,
        url: '/pages/contacts'
    },
    {
        id: 3,
        name:'Communications',
        icon:faHandshake,
        url: '/pages/communications'
    },
    {
        id: 4,
        name:'Community',
        icon:faUsers,
        url: '/pages/community'
    },
    {
        id: 5,
        name:'Data',
        icon:faBook,
        url: '/pages/data'
    },
    {
        id: 6,
        name:'Statistics',
        icon:faChartArea,
        url: '/pages/statistics'
    },
    {
        id: 7,
        name:'Activites',
        icon:faVolumeHigh,
        url: '/pages/activites'
    },
    {
        id: 8,
        name:'Setting',
        icon:faGears,
        url: '/pages/setting'
    }
]