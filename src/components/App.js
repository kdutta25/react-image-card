import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';
import ImageList from './ImageList';



class App extends React.Component {
    
    state = {images: []};

         onSearchSubmit = async (term) =>{
            const response = await axios.get('https://api.unsplash.com/photos/?client_id=rZRQtJ_-YNPk63JFl2yv4kAZgY21CHit3hbVpM_TDtI',{
            params:{query: term }
            // headers:{
            //     Authorization:'Cient-ID rZRQtJ_-YNPk63JFl2yv4kAZgY21CHit3hbVpM_TDtI'
            // }
        });
        //console.log ((response.data));
        this.setState ({images:response.data})
        
    }
    render(){
        return(
            <div className="ui container" style= {{marginTop: '10 px'}}>
               <SearchBar onSubmit={this.onSearchSubmit}/>
               Found: {this.state.images.length } images
               <ImageList images={this.state.images}/>
            </div>
           );
    };
}
export default App;