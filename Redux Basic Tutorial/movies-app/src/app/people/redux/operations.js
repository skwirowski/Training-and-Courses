import actions from './actions';

const fetchPeople = async () => {
    const response = await fetch('https://randomuser.me/api/?results=15&nat=gb,us', { method: 'GET'});
    const json = await response.json();

    return json
}

export const getPeople = () => {
    return async (dispatch) => {
        const people = await fetchPeople();
        people.map((person) => dispatch(actions.add(person.gender)))
    }
}