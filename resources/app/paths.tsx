import React from 'react'
import * as Pages from "./Pages"

export const views = {
    dashboard: {
        name: 'Dashboard',
        action: '/',
        element: <Pages.Dashboard/>,
        isRoute: true,
    }
}

export const routers: any = [
    views.dashboard
];
