import React from 'react';

class SearchBar extends React.Component{

    // onInputChange (event){
    //     console.log(event.target.value)
    // }
    // onInputClick(event){
    //     console.log('there were clicks on the screen')
    // }
    onFormSubmit=(event)=>{
        event.preventDefault();
        this.props.onSubmit(this.state.term);
        
    }

    state ={term:''};

    render(){
        
        return(
            <div className="ui segment"  >
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <div className="field">
                        <label>Image Search</label>
                        {/*input type ="text" onChange={this.onInputChange}></input>*/}
                        {/*<input type="text" onChange = {(event)=>console.log(event.target.value)}/>*/}
                        <input type="text" value={this.state.term} onChange = {event=>this.setState({term:event.target.value})}/>
                        
                    </div>
                    <h1>{this.state.term}</h1>
                </form>
            </div>
        ); 
        
    }

}
export default SearchBar;