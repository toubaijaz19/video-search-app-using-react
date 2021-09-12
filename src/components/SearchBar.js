import react from "react";

class SearchBar extends react.Component{
    state = { searchVal : ''};
    onInputChange = event =>{
        this.setState({ searchVal: event.target.value });
        // console.log(event.target.value);
    };

    onFormSubmit = event => {
        event.preventDefault();
        // pass search value to SearchBar tag
        this.props.onSubmit(this.state.searchVal);
    };

    render() {
        return (
          <div>
            <form onSubmit={this.onFormSubmit} className="ui form">
              <div className="field">
                <label>Video Search</label>
                <div className="ui icon input">
                    <input
                        type="text" placeholder="Search..."
                        value={this.state.searchVal}
                        onChange={this.onInputChange}
                    />
                    <i onClick={this.onFormSubmit} className="inverted circular search link red icon"></i>
                </div>
              </div>
            </form>
          </div>
        );
    }
}

export default SearchBar;