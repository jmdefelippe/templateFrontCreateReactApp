import React from 'react';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';

const Layout = ({children}) => {
    
    const title = "Algoritmos";
    
    return ( 
        <div>
            <Header />
            <div className="bg-purple-900 min-h-screen">
                <div className="container mx-auto bg-purple-500">
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