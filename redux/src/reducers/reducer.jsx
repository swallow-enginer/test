// ステート初期化用
const initialState = {
  hogehoge:1
}
 
// リデューサーを定義 
export default function reducer(state = initialState, action) {
  // 引数のアクションタイプ別で処理を切り替える。該当しなければ何もせずそのままstateを返す
  switch(action.type) {
    case 'INC':
      return {hogehoge: state.hogehoge + 1} //Object.assign({}, state,state.hogehoge + 1)
    case 'DEC':
      return Object.assign({}, state,state.hogehoge - 1)
    default:
      return state
  }
}