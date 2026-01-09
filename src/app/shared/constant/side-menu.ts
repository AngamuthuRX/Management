import { LABEL } from "./label";

export const CONFIG = {
    SIDE_MENU: [
        {
            label: LABEL.DASHBOARD,
            icon: 'faDashboard',
            route: '/dashboard'
        },
        {
            label: LABEL.PROJECTS,
            icon: 'faMoneyBill',
            route: '/projects'
        },
        {
            label: LABEL.CLIENTS,
            icon: 'faContactBook',
            route: '/clients'
        },
        {
            label: LABEL.USER_MANAGEMENT,
            icon: 'faUsers',
            route: '/user-management'
        },
        {
            label: LABEL.CALENDAR,
            icon: 'faLocation',
            route: '/calendar'
        },
        {
            label: LABEL.REPORTS,
            icon: 'faChartBar',
            route: '/reports'
        },
        {
            label: LABEL.SUPPORT,
            icon: 'faHand',
            route: '/support'
        },
    ]
};