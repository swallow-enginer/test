import { connect } from 'react-redux'
import { setInput } from './action'
import click from '../screen/click'

const mapStateToProps = state => {
   const { input, count } = state
   return { input, count }
 }
 
 const mapDispatchToProps = dispatch => {
   return {
    setInputClick: (input) => { 
      dispatch(setInput(input));
      alert(`「${input}」がセットされました！`)
    }
   }
 }
 
export default connect(mapStateToProps,mapDispatchToProps)(click)