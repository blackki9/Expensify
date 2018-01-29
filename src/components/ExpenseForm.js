import React from 'react';
import moment from 'moment';
import 'react-dates/initialize';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

export default class ExpenseForm extends React.Component {
    state = {
        description: '',
        note: '',
        amount: '',
        createdAt: moment(),
        calendarFocused: false
    };

    onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState( () => ({ description }));
    };

    onDateChange = (createdAt) => {
        this.setState(() => ({createdAt}));
    };

    onFocusChanged = ({ focused }) => {
        this.setState( () => ({calendarFocused: focused}));
    };

    onNoteChange = (e) => {
        const note = e.target.value;
        this.setState( () => ( { note } ));
    };

    onAmountChange = (e) => {
        const amount = e.target.value;
        if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
            this.setState( () => ({amount}));
        }
    };

    render() {
        return (
            <div>
                <form>
                    <input
                         type="text"
                         placeholder="Description"
                         autoFocus
                         value={this.state.description}
                         onChange={this.onDescriptionChange}
                    />
                    <input
                         type="text" 
                         value={this.state.amount}
                         onChange={this.onAmountChange}
                         placeholder="Amount" />
                    <SingleDatePicker 
                        date = {this.state.createdAt}
                        onDateChange ={ this.onDateChange}
                        focused = {this.state.calendarFocused}
                        onFocusChange = {this.onFocusChanged}
                        numberOfMonths = {1}
                        isOutsideRange= {(day) => false}
                    />
                    <textarea 
                        value={this.state.note}
                        onChange={this.onNoteChange}
                        placeholder="Add note for your expense"> 

                    </textarea>
                    <button> Add Expense </button>
                </form>

            </div>
        )
    }
}