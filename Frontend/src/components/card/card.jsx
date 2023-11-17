import styles from '../card/card.module.css';
import { connect } from 'react-redux';


function Card(props) {
   


   return (
      
      <div className={styles.DivCard}>
         
         
      </div>
      
   );
}

function mapDispatchToProps(dispatch) {
   return {
   }
}

function mapStateToProps(state) {
   return {
   }
}

export default connect(mapStateToProps,mapDispatchToProps)(Card)

