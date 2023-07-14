import React from 'react';
import { connect } from 'react-redux';
import { setFilter } from '../../redux/filterSlice';
import '../Filter/filter.css';

const Filter = ({ filterValue, setFilterValue }) => (
  <label className="filter-label">
    Find contacts by name
    <input
      className="filter-input"
      type="text"
      value={filterValue}
      onChange={(event) => setFilterValue(event.target.value)}
    />
  </label>
);

const mapStateToProps = (state) => ({
  filterValue: state.filter,
});

const mapDispatchToProps = (dispatch) => ({
  setFilterValue: (value) => dispatch(setFilter(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
