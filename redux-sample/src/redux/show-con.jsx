import { connect } from 'react-redux'
import show from '../screen/show'

const mapStateToProps = state => {
   const { input, count } = state
   return { input, count }
 }
export default connect(mapStateToProps)(show)