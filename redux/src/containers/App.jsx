import { connect } from 'react-redux'
import { plusHogeProcess } from '../actions/action'
import App from '../components/App'
const mapStateToProps = state => {
   const { hogehoge } = state
   return { hogehoge }
 }
 
 const mapDispatchToProps = dispatch => {
   return {
    handleClick: () => { dispatch(plusHogeProcess()) }
   }
 }
 
export default connect(mapStateToProps,mapDispatchToProps)(App)