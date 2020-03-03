import { ADD_TODO } from '../constants';

let nextTodoId = 0
export default text => ({
  type: 'ADD_TODO',
  id: nextTodoId += 1,
  text
});
