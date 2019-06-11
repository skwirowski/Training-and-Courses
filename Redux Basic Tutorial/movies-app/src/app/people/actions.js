import types from './types';

const add = (item) => ({
    type: types.ADD_PERSON,
    item
});
const remove = (item) => ({
    type: types.REMOVE_PERSON,
    item
});
const reset = (item) => ({
    type: types.RESET_PEOPLE,
    item
});

export default {
    add,
    remove,
    reset
}