let initialState = { contactList: [], keyword: "" }; //초기 값으로 contactList이름의 빈배열

function reducer(state = initialState, action) {
  let { type, payload } = action; //action 재분해 이용
  switch (type) {
    case "ADD_CONTACT":
      state.contactList.push({
        name: payload.name,
        phoneNumber: payload.phoneNumber,
      });
      break;

    case "SEARCH_BY_NAME":
      state.keyword = payload.keyword;
      break;
  }
  return { ...state };
}

export default reducer;
