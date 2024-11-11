import Header from './header';
import Footer from './footer';
import '../assets/stylesGlobal.css';

function Layout({ children }) {
    return (
        <div className="layout">
            <Header />
            <main className="content">
                {children}
            </main>
            <Footer />
        </div>
    );
}

export default Layout;
