import MainNavigation from './MainNavigation';
// import classes from './Layout.module.css'

function Layout(props){  
    return <div>
        <MainNavigation />
        <main>  
        {props.children}
        </main>
    </div>;
}

export default Layout;