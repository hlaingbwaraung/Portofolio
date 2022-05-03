import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Detail from "../views/Detail.vue"
import Create from "../views/Create.vue"
import Tag from "../views/Tag.vue"
import Blog from "../views/Blog.vue"
import Contact from "../views/Contact.vue"
import Chat from "../views/Chat.vue"
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
        component: Create,

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
        component: Chat
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router