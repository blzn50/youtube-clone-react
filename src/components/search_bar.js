import React from 'react';

class SearchBar extends React.Component {
  state = {
    term: ''
  };

  onInputChange = e => {
    const val = e.target.value;
    this.setState({
      term: val
    });
    this.props.onSearch(this.state.term);
  };

  render() {
    return (
      <div className="search-bar">
        <input
          type="text"
          value={this.state.term}
          onChange={this.onInputChange}
          placeholder="Search videos..."
        />
      </div>
    );
  }
}

export default SearchBar;
