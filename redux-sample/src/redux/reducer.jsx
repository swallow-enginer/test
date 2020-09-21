// ステート初期化
const initialState = {
  count:0,
  input:null
}
 
// リデューサーを定義 
export default function reducer(state = initialState, action) {
  switch(action.type) {
    case 'SET_INPUT':
      return {
          count:   state.count + 1
          , input: action.input
        }
    default:
      return state
  }
}