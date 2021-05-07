import Card from "react-bootstrap/Card";
import NomineeList from "../nominee-list/nominee-list.component";

const NomineePopup = () => {
  return (
    <Card 
      style={{ 
        width: '18rem',
        position: 'fixed',
        bottom: '3rem',
        right:'2vw'
      }}>
      <NomineeList/>
    </Card>
  )
}

export default NomineePopup;