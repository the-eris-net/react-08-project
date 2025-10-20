import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import styles from './Layout.module.css';

export default function Layout() {
    return (
        <div>
            <NavBar />
            <div className={styles.layoutContent}>
                <Outlet />
            </div>
        </div>
    )
}