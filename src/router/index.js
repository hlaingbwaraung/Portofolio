import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Detail from "../views/Detail.vue"
import Tag from "../views/Tag.vue"
import Blog from "../views/Blog.vue"
import Contact from "../views/Contact.vue"
import Chat from "../views/Chat.vue"
import Chatroom from "../views/Chatroom.vue"
import Admin from "../views/AdminPanel/Admin.vue"
import Edit from "../views/AdminPanel/Edit.vue"
import Create from "../views/AdminPanel/Create.vue"



import { auth } from "../firebase/config"

import "../assets/global.css"

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/blog',
        name: 'Blog',
        component: Blog
    },
    {
        path: '/contact',
        name: 'Contact',
        component: Contact
    },
    {
        path: '/posts/:id',
        name: 'Detail',
        component: Detail,
        props: true
    },
    {
        path: '/create',
        name: 'Create',
        component: Create
    },
    {
        path: '/edit/:id',
        name: 'Edit',
        component: Edit,
        props: true
    },
    {
        path: '/admin',
        name: 'Admin',
        component: Admin
    },
    {
        path: '/tags/:tag',
        name: 'Tag',
        component: Tag,
        props: true

    },
    {
        path: '/chat',
        name: 'Chat',
        component: Chat,
        beforeEnter(to, from, next) {
            let user = auth.currentUser;

            if (!user) {
                next();
            } else [
                next({ name: "Chatroom" })
            ]
        }
    },
    {
        path: '/chatroom',
        name: 'Chatroom',
        component: Chatroom,
        beforeEnter(to, from, next) {
            let user = auth.currentUser;

            if (user) {
                next();
            } else [
                next({ name: "Chat" })
            ]
        }
    }

]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router