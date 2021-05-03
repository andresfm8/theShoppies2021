import { useSelector } from "react-redux";
import { selectNomineeList } from "../redux/nominee-list/nominee-list.selectors";
import CustomButton from "./custom-button.component";

const NomineeList = () => {


  const nomineeList =  useSelector(state => selectNomineeList(state));
  const checkSize = () => {
    // checkk size is max 5, if so then dispatch to lock all add buttons
  }


  return (
    <div>
      <CustomButton>
        Print Nominees
      </CustomButton>
    </div>
  );
}

export default NomineeList;