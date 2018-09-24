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
  };

  render() {
    return (
      <input
        type="text"
        value={this.state.term}
        onChange={this.onInputChange}
        placeholder="Search videos..."
      />
    );
  }
}

export default SearchBar;
