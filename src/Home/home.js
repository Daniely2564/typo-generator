import React,{Component} from 'react';
import SearchBar from '../SearchBar/serachBar';
import Result from '../Result/result';
import Header from '../Header/header';
import SetLength from '../SetLength/setLength';
class Home extends Component{
    state={
        searchValue:'',
        val:'',
        raw:'', 
    }
    setSearchValue = (event)=>{
        let sv = event.target.value
        this.setState({
                        searchValue:sv,            
                        val:sv.substring(sv.length-this.state.number,sv.length),
                        raw:sv.substring(0,sv.length-this.state.number),
        })
        
    }
    setLength = (number)=>{
        let sv = this.state.searchValue;
        this.setState({
                        number:number,
                        raw:sv.slice(0,-number),
                        val:sv.substring(number)
                })
    }
    render(){
        return (
            <div>
                <Header/>
                <SearchBar 
                    searchValue={this.state.searchValue} 
                    setSearchValue={this.setSearchValue}
                
                />
                <SetLength
                    setLength={this.setLength}
                    length={this.state.searchValue.length}
                />
                <Result
                    result={this.state.val}
                    raw={this.state.raw}
                />
            </div>
        )
    }
}

export default Home;