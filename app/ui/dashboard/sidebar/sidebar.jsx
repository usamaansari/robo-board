import React from 'react'
import styles from "./sidebar.module.css";
import {
    MdDashboard,
    MdSupervisedUserCircle,
    MdShoppingBag,
    MdAttachMoney,
    MdWork,
    MdAnalytics,
    MdPeople,
    MdOutlineSettings,
    MdHelpCenter,
    MdLogout,
    MdOutlineSmartToy,
} from "react-icons/md"
import MenuLink from './menuLink/menuLink';
import Image from 'next/image';
import { auth, signOut } from '@/app/auth';

const menuItems = [
    {
        title: "Pages",
        list: [
            {
                title: "Dashboard",
                path: "/dashboard",
                icon: <MdDashboard/>,
            },
            {
                title: "Users",
                path: "/dashboard/users",
                icon: <MdSupervisedUserCircle/>,
            },
            {
                title: "Products",
                path: "/dashboard/products",
                icon: <MdShoppingBag/>,
            },
            {
                title: "Robots",
                path: "/dashboard/robots",
                icon: <MdOutlineSmartToy/>,
            },

        ],
    },
    {
        title: "Analytics",
        list: [
            {
                title: "Revenue",
                path: "/dashboard/revenue",
                icon: <MdWork/>,
            },
            {
                title: "Reports",
                path: "/dashboard/reports",
                icon: <MdAnalytics/>,
            },
            {
                title: "Teams",
                path: "/dashboard/teams",
                icon: <MdPeople/>,
            },
        ],
    },
    {
        title: "User",
        list: [
            {
                title: "Settings",
                path: "dashboard/settings",
                icon: <MdOutlineSettings />,
            },
            {
                title: "Help",
                path: "dashboard/help",
                icon: <MdHelpCenter />,
            },

        ],
    },
]

const sidebar = async() => {
    const {user} = await auth();
    //console.log(session);
  return (
    <div className={styles.container}>
        <div className={styles.user}>
            <Image src={user.img || "/default-avatar.png"} className={styles.userImage} height="50" width="50" alt="User Image"/>
        
        <div className={styles.userDetail}>
            <span className={styles.username}>
                {user.username}
            </span>
            <span className={styles.userTitle}>
                Adminstrator
            </span>
        </div>
        </div>
          <ul className={styles.list}>
        {menuItems.map(cat => (
         <li key={cat.title}>
            <span className={styles.cat}>{cat.title}</span>

            {cat.list.map((item) => (
                <MenuLink item={item} key={item.title}/>
            ))}
        </li>
        ))}
        </ul> 
        <form
        action={async () => {
          "use server";
          await signOut();
        }}
      >
        <button className={styles.logout}><MdLogout />Logout</button>
    </form>
    </div>
  )
}

export default sidebar