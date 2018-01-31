import filtersReducer from '../../reducers/filters';
import moment from 'moment'

test('should setuo default filter values', () => {
    const state = filtersReducer(undefined, {type: '@@INIT'});
    const defaultState = {
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    }
    expect(state).toEqual(defaultState);
});

test('should set sort by amount', () => {
   const state = filtersReducer(undefined, {type: 'SORT_BY_AMOUNT'});
   expect(state.sortBy).toBe('amount');
});

test('should set sort to by date', () => {
   const currenState = {
    text: '',
    startDate: undefined,
    endDate: undefined,
    sortBy: 'amount'
   };
   const action = {type: 'SORT_BY_DATE'};
   const state = filtersReducer(currenState, action);
   expect(state.sortBy).toBe('date');
})

test('should set text filter', () => {
    const action = {type: 'SET_TEXT_FILTER', text: 'test text'};
    const state = filtersReducer(undefined, action);
    expect(state.text).toBe('test text');
});

test('should set startDate filter', () => {
    const currentMoment = moment();
    const action = {type: 'SET_START_DATE', startDate: currentMoment};
    const state = filtersReducer(undefined, action);
    expect(state.startDate).toEqual(currentMoment);
});

test('should set endDate filter', () => {
    const currentMoment = moment();
    const action = {type: 'SET_END_DATE', endDate: currentMoment};
    const state = filtersReducer(undefined, action);

    expect(state.endDate).toEqual(currentMoment);
});