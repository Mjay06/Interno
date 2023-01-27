const Navbar = () => {
    return ( 
        <div className="navbar">
            <div className="logo">
            <div className="logs"><svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 34.0003H13.4588V24.499C13.4588 22.4853 15.0898 20.8543 17.1035 20.8543C19.1172 20.8543 20.7482 22.4853 20.7482 24.499V34.0003H33.9975V0C15.2211 0 0 15.2211 0 34.0003Z" fill="#CDA274"/>
</svg>
</div>
             <h4>Interno</h4>
            </div>
            <div className="links">
                <h6>Home</h6>
                <h6>Pages</h6>
                <h6>Services</h6>
                <h6>Project</h6>
                <h6>Blog</h6>
                <h6>Contact</h6>
             <div className="search">   <svg width="23" height="24" viewBox="0 0 23 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.8">
<path d="M16.6837 17.1844L21.9994 22.5001M19.375 10.6875C19.375 15.7616 15.2616 19.875 10.1875 19.875C5.11338 19.875 1 15.7616 1 10.6875C1 5.61338 5.11338 1.5 10.1875 1.5C15.2616 1.5 19.375 5.61338 19.375 10.6875Z" stroke="#141414" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</g>
</svg></div>

            </div>
        </div>
     );
}
 
export default Navbar;