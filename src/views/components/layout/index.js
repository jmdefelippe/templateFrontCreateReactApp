import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout = ({children}) => {
    
    const title = "Algoritmos";
    
    return ( 
        <div>
            <Header />
            <div className="bg-purple-900 min-h-screen">
                <div className="container mx-auto">
                    <main className="py-1">
                        {children}
                    </main>
                </div>
            </div>
            
            <Footer
                title={title}
            />
        </div>
     );
}
 
export default Layout;