const handlePending = state => {
  state.isLoading = true;
  state.error = null;
};

const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

const getItems = (state, { payload }) => {
  state.items = payload;
  state.isLoading = false;
};

const addItem = (state, { payload }) => {
  state.items.push(payload);
  state.isLoading = false;
};

const updateItem = (state, { payload }) => {
  state.items = state.items.map(item =>
    item._id === payload._id ? payload : item
  );
  state.isLoading = false;
};

const deleteItem = (state, { payload }) => {
  state.items = state.items.filter(item => item._id !== payload);
  state.isLoading = false;
};

export const handleReducer = {
  handlePending,
  handleRejected,
  getItems,
  addItem,
  updateItem,
  deleteItem,
};
