import React from 'react'
import * as Pages from "./Pages"

export const views = {
    orderDetail: {
        name: 'Orders Detail',
        action: '/admin/orders/:id',
        element: <Pages.OrderDetail/>,
        isRoute: true,
    },
    orders: {
        name: 'Orders',
        action: '/admin/orders',
        element: <Pages.Orders/>,
        isRoute: true,
    },
    products: {
        name: 'Products',
        action: '/admin/products',
        element: <Pages.Products/>,
        isRoute: true,
    },
    productDetail: {
        name: 'Product Detail',
        action: '/admin/products/:id',
        element: <Pages.ProductDetail/>,
        isRoute: true,
    },
    categories: {
        name: 'Categories',
        action: '/admin/categories',
        element: <Pages.Categories/>,
        isRoute: true,
    },
    categoryDetail: {
        name: 'Category Detail',
        action: '/admin/categories/:id',
        element: <Pages.CategoryDetail/>,
        isRoute: true,
    },
    dashboard: {
        name: 'Dashboard',
        action: '/admin',
        element: <Pages.Dashboard/>,
        isRoute: true,
    },
    contact: {
        name: 'Contact',
        action: '/contact',
        element: <Pages.ClientContact/>,
        isRoute: true,
    },
    about: {
        name: 'About',
        action: '/about',
        element: <Pages.ClientAbout/>,
        isRoute: true,
    },
    shops: {
        name: 'Shops',
        action: '/shops',
        element: <Pages.Shops/>,
        isRoute: true,
    },
    clientProductDetail: {
        name: 'Product Detail',
        action: '/products/:id',
        element: <Pages.ClientProductDetail/>,
        isRoute: true,
    },
    home: {
        name: 'Home',
        action: '/',
        element: <Pages.ClientHomePage/>,
        isRoute: true,
    },
    blog: {
        name: 'blog',
        action: '/blog',
        element: <Pages.ClientBlog/>,
        isRoute: true,
    }
}

export const routers: any = [
    views.dashboard,
    views.orders,
    views.orderDetail,
    views.products,
    views.productDetail,
    views.categories,
    views.categoryDetail,
    views.contact,
    views.about,
    views.home,
    views.shops,
    views.clientProductDetail,
    views.blog
];
