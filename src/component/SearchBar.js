import React from "react";

class SearchBar extends React.Component{
    state = { term: "" };
   
    onFormSubmit = (e) => {
        e.preventDefault();
        if(this.state.term === ""){
            alert("Required field");
        }
        this.setState({term: ""});
      this.props.onSubmit(this.state.term);
    }
    render(){
        return (
            <div className="ui segment">
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <div className="field">
                        <label>Image search</label>
                    <input type="text" placeholder="Enter" value={this.state.term} onChange={(e) => this.setState({term: e.target.value})} /> 
                    </div>
                </form>
            </div>
           

        );
    }
}
export default SearchBar;