import React from 'react';
import { Input } from 'antd';
import './style.css';

const { Search } = Input;

interface SearchBoxProp {
	handleSearch: (value: string) => void
}

const SearchBox = (props: SearchBoxProp) => {

	const onSearch = (value: string) => {
		if (value && value.trim() !== '') {
			props.handleSearch(value);
		}
	}

	return (
    <Search
      style={{ width: 500 }}
      className="searchbox"
      onSearch={onSearch}
      placeholder="Search a movie"
    />
  );
}

export default SearchBox;