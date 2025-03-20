import { FILTER_ACTIONS } from './actions';

//In order to query for multiple sort statements, you have to pass parameters with a structure like this
// /api/users?sort=lastName,desc,firstName,asc
const filter = { criteria: {}, page: 0, size: 10, sort: [], order: [] };
const ORDER_CONSTANTS = { ASC: 'asc', DESC: 'desc' };

const initialState = { filter, ORDER_CONSTANTS };

const filterReducer = (state, action) => {
    switch (action.type) {
        case FILTER_ACTIONS.SET_CRITERIA:
            return {
                ...state,
                filter: { ...state.filter, page: 1, criteria: action.payload.criteria },
            };
        case FILTER_ACTIONS.SET_PAGE:
            return {
                ...state,
                filter: { ...state.filter, page: action.payload.page },
            };
        case FILTER_ACTIONS.SET_SIZE:
            return {
                ...state,
                filter: { ...state.filter, size: action.payload.size },
            };
        case FILTER_ACTIONS.SET_SORT:
            { const sortIndex = state.filter.sort.indexOf(action.payload.sort);
            let newSort, newOrder;

            if (sortIndex === -1) {
                // Add new sort field and its order
                newSort = [...state.filter.sort, action.payload.sort];
                newOrder = [...state.filter.order, action.payload.order || ORDER_CONSTANTS.ASC];
            } else {
                // If sort field exists, either toggle order or remove both
                if (action.payload.order && state.filter.order[sortIndex] !== action.payload.order) {
                    // Update order if explicitly provided and different
                    newSort = [...state.filter.sort];
                    newOrder = [...state.filter.order];
                    newOrder[sortIndex] = action.payload.order;
                } else {
                    // Remove sort and order if no explicit order or same order
                    newSort = state.filter.sort.filter((_, index) => index !== sortIndex);
                    newOrder = state.filter.order.filter((_, index) => index !== sortIndex);
                }
            }

            return {
                ...state,
                filter: {
                    ...state.filter,
                    sort: newSort,
                    order: newOrder,
                },
            }; }
        case FILTER_ACTIONS.SET_ORDER_FOR_ALL_SORTS:
            return {
                ...state,
                filter: {
                    ...state.filter,
                    order: state.filter.sort.map(() => action.payload.order),
                },
            };
        default:
            return state;
    }
};

export { filterReducer, initialState };
