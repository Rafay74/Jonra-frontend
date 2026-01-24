import Chart from '@/assets/ChartPieSlice.svg'
import Bag from '@/assets/bag.svg'
import Profile from '@/assets/profile.svg'

export const SIDEBAR_MAIN_MENU_LINKS = [
    {
        name: "Dashboard",
        link: "/dashboard",
        src: Chart,
    },
    {
        name: "RFQ Library",
        link: "/rfq-library",
        src: Bag
    },
    {
        name: "Compliance Check",
        link: "/compliance-check",
        src: Bag
    },
    {
        name: "Proposal Generator",
        link: "/proposal-generator",
        src: Bag
    }
]

export const SIDEBAR_SETTINGS_LINKS = [
    {
        name: "Profile Overview",
        link: "/profile-overview",
        src: Profile
    },
    {
        name: "Settings",
        link: "/settings",
        src: Bag
    },
    {
        name: "Contact Us",
        link: "/contact",
        src: Bag
    },
    
]