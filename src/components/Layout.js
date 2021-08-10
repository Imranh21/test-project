const { default: Sidebar } = require("./sidebar/Sidebar");
const { default: Navbar } = require("./navbar/Navbar");

function Layout({children}) {
    return <div>
            <Sidebar />
                {children}
            <Navbar />
        </div>
    
}

export default Layout
