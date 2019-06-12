import types from './types';

const add = (item) => ({
    type: types.ADD_PERSON,
    item
});
const reset = (item) => ({
    type: types.RESET_PEOPLE,
    item
});

export default {
    add,
    reset
}