import React from 'react';
import {connect} from 'react-redux';
import {setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate} from '../actions/filters';
import 'react-dates/initialize';
import {DateRangePicker} from 'react-dates';
// import 'react-dates/lib/css/_datepicker.css';

export class ExpenseListFilters extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            calendarFocused: null
        };
    }

    onDatesChange = ({startDate, endDate}) => {
        this.props.setStartDate(startDate);
        this.props.setEndDate(endDate);
    }

    onFocusChange = (calendarFocused) => {
        this.setState( () => ({calendarFocused}));
    };

    onSortChange = (e) => {
        const selectorValue = e.target.value;
        if (selectorValue === 'date') {
            this.props.sortByDate();
        } else if (selectorValue === 'amount') {
            this.props.sortByAmount();
        }
    }

    onTextChange = (e) => {
        this.props.setTextFilter(e.target.value);
    }

    render() {
        return (
            <div>
                <input type="text" value={this.props.filters.text} onChange={this.onTextChange} />
                <select value={this.props.filters.sortBy} onChange={this.onSortChange}>
                    <option value="date">Date</option>
                    <option value="amount">Amount</option>
                </select>
                <DateRangePicker
                    startDate = {this.props.filters.startDate}
                    startDateId = "start"
                    endDate = {this.props.filters.endDate}
                    endDateId = "end"
                    onDatesChange = {this.onDatesChange}
                    focusedInput = {this.state.calendarFocused}
                    onFocusChange = {this.onFocusChange} 
                    numberOfMonths = {1}
                    isOutsideRange = { () => (false)}
                    showClearDates = {true}
                    />
         </div> 
        )
    }
}

const mapStateToProps = (state) => {
    return {
        filters: state.filters
    };
};

const mapDispatchToProps = (dispatch) => (
    {
        setTextFilter: (text) => {
            dispatch(setTextFilter(text));
        },
        sortByDate: () => {
            dispatch(sortByDate());
        },
        sortByAmount: () => {
            dispatch(sortByAmount());
        },
        setStartDate: (startDate) => {
            dispatch(setStartDate(startDate));
        },
        setEndDate: (endDate) => {
            dispatch(setEndDate(endDate));
        }
    }
);

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters);