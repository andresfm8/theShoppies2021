import NomineeList from "../nominee-list/nominee-list.component";

import { NomineeListContainer } from "./nominee-popup.styles";

const NomineePopup = () => {
  return (
    <NomineeListContainer>
      <NomineeList/>
    </NomineeListContainer>
  )
}

export default NomineePopup;