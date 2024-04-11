import { MdDashboard, MdCampaign } from "react-icons/md";
import { GiDonerKebab } from "react-icons/gi";
import { FaUserAlt } from "react-icons/fa";
import { FaFileInvoice } from "react-icons/fa";
import { IoIosSettings } from "react-icons/io";
import { MdSettingsApplications } from "react-icons/md";
import { LiaBlogSolid } from "react-icons/lia";
import { FaMicroblog } from "react-icons/fa6";
import { MdEvent } from "react-icons/md";

export const dashboard_items = [
    {
        title: "Dashboard",
        icon: <MdDashboard />,
        link: "/coordinator_dashboard/dashboard",
    },
    {
        title: "Doner",
        icon: <GiDonerKebab />,
        link: "/coordinator_dashboard/doner",
    },
    {
        title: "Campaign",
        icon: <MdCampaign />,
        link: "/coordinator_dashboard/campaign",
    },
    {
        title: "Our Works",
        icon: <FaUserAlt />,
        link: "/coordinator_dashboard/works",
    },
    {
        title: "Invoice Section",
        icon: <FaFileInvoice />,
        link: "/coordinator_dashboard/invoice",
    },
    {
        title: "Settings",
        icon: <IoIosSettings />,
        link: "/coordinator_dashboard/settings",
    },
    {
        title: "Applications",
        icon: <MdSettingsApplications />,
        link: "/coordinator_dashboard/applications",
    },
    {
        title: "Blogs",
        icon: <LiaBlogSolid />,
        link: "/coordinator_dashboard/blogs",
    },
    {
        title: "New Blog",
        icon: <FaMicroblog />,
        link: "/coordinator_dashboard/new_blogs",
    },
    {
        title: "Up Events",
        icon: <MdEvent />,
        link: "/coordinator_dashboard/events",
    },
];
