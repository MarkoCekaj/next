import NavbarTop from "../Navbar/NavbarTop";
import { useRouter } from 'next/router'
import HomeNavbar from '../HomeNavbar/HomeNavbar'
const Layout = (props) => {
    const router = useRouter();
    if (router.pathname === "/") {
        return (
            <div>
                <HomeNavbar />

                <main>{props.children}</main>
            </div>
        )
    }
    else {
        return (
            <div>
                <NavbarTop />
                <main>{props.children}</main>
            </div>
        )
    }

}
export default Layout;