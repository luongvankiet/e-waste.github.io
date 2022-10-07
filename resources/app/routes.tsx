import React from 'react'
import { Route, Routes } from 'react-router-dom'
import * as Pages from "./Pages"
import { routers } from './paths'

const getRoutes = (
    r: any,
    parentIndex: number | string = 0,
): React.ReactNode[] => {
    let rs: React.ReactNode[] = []

    r.map((item: any, index: number) => {
        if (item.action && item.element) {
            let key = parentIndex.toString() + index
            rs.push(<Route key={key} path={item.action} element={item.element} />)
            item.items?.length && (rs = rs.concat(getRoutes(item.items, key)))
        }

        return null
    })


    return rs
}

export const RenderRouters = () => {
    return <Routes>{getRoutes(routers)}</Routes>
}

let routes = <Pages.ClientLayout />

if (window.location.href.indexOf("admin") > -1) {
    routes = <Pages.AdminLayout />
}

export {routes};
