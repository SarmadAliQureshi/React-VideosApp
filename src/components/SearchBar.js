import React from 'react'

class SearchBar extends React.Component{

state = {searchTerm : ''}

onInputChange = (e) =>{
this.setState({searchTerm : e.target.value})
// console.log('terms', this.state.searchTerm);
}

onFormSubmit = (e)=>{
    e.preventDefault()
    console.log(this.state.searchTerm)
}

render(){
    return(
        <div className = "search-bar ui segment">
            <form onSubmit = {this.onFormSubmit} className = "ui form">
                <div className= "field">
                    <label>Video Search</label>
                    <input type="text" onChange = {this.onInputChange} value={this.state.searchTerm}></input>
                </div>
            </form>
        </div>
    )
}
}

export default SearchBar;