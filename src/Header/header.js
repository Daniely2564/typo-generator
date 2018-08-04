import React from 'react';
const Header = ()=>{
    return (
        <div class="bg-primary" style={{height:'50vh'}}>
            <h1 className="text-center text-white display-3 font-weight-bold"
                style={{fontFamily:'Cabin Sketch'}}
            >
                <span style={{top:'25vh',position:'absolute',left:'50vh',right:'50vh'}}>
                    Word Typo Generator
                </span>
            </h1>
            <div>
                <div className="h4 font-weight-bold text-white text-center pt-auto"
                    style={{position:'relative',top:'50vh',transform:'translateY(-110%)'}}    
                >
                    Enter your keywords!
                </div>
            </div>
            
        </div>
    )
}

export default Header;