import React,{Component} from 'react';
import SearchBar from '../SearchBar/serachBar';

class Home extends Component{
    state={
        searchValue:'',
        range:[0,0]
    }
    setSearchValue = (event)=>{
        this.setState({searchValue:event.target.value})
    }
    setRange = ()
    render(){
        return (
            <div>
                <SearchBar searchValue={this.state.searchValue} setSearchValue={this.setSearchValue}/>
                <div>{this.state.range[0]}</div>
            </div>
        )
    }
}

export default Home;