import shortid from "shortid";

export const getAllColumns = ({ columns }) => columns;
export const getColumnsByList = ({ columns }, listId) => columns.filter(column => column.listId === listId);

const createActionName = actionName => `app/columns/${actionName}`;
const ADD_COLUMN = createActionName('ADD_COLUMN')

const columnsReducer = (statePart = [], action) => {
    switch(action.type) {
      case ADD_COLUMN:
        return [...statePart, { ...action.payload, id: shortid() }];
      default:
        return statePart;
    }
  }
export default columnsReducer;