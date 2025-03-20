const initialState = {
    account: {
        name: null,
        email: null,
        phone: null,
        address: null,
        imageUrl: null,
        coverUrl: null,
        roles: null,
    },
    token: {
        value: null,
        isValid: false,
        isRefreshing: false,
    },
    isAuthenicated: false,
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN':
            return {
                ...state,
                account: {
                    name: action.payload.account.name,
                    email: action.payload.account.email,
                    phone: action.payload.account.phone,
                    birthdate: action.payload.account.birthdate,
                    address: action.payload.account.address,
                    imageUrl: action.payload.account.imageUrl,
                    coverUrl: action.payload.account.coverUrl,
                    roles: action.payload.account.roles,
                    ...action.payload.account,
                },
                token: {
                    value: action.payload.token,
                    isValid: true,
                    isRefreshing: false,
                },
                isAuthenicated: action.payload.isAuthenicated,
            };
        case 'LOGOUT':
            return { ...state, account: null, token: null, isAuthenicated: false };
        case 'UPDATE_TOKEN':
            return { ...state, token: { value: action.payload.token, isValid: true, isRefreshing: false } };
        case 'MODIFY_TOKEN_STATE':
            return { ...state, token: { ...state.token, ...action.payload } };
        default:
            return state;
    }
};

export { authReducer, initialState };
