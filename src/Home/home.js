import React,{Component} from 'react';
import SearchBar from '../SearchBar/serachBar';
import Result from '../Result/result';
import Header from '../Header/header';
class Home extends Component{
    state={
        searchValue:'',
        range:[0,0]
    }
    setSearchValue = (event)=>{
        this.setState({searchValue:event.target.value,range:[0,event.target.value.length]})
    }
    setRange = () => {
        console.log(this.state.range[1])
    }
    render(){
        return (
            <div>
                <Header/>
                <SearchBar 
                    searchValue={this.state.searchValue} 
                    setSearchValue={this.setSearchValue}
                
                />
                <Result
                    result={this.state.searchValue}
                />
            </div>
        )
    }
}

export default Home;