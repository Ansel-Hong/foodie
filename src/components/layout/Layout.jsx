import MainNavigation from './MainNavigation';
import BottomNav from './BottomNav';
// import classes from './Layout.module.css'

function Layout(props){  
    return <div>
        <MainNavigation />
        <main>  
        {props.children}
        </main>
        <BottomNav />
    </div>;
}

export default Layout;