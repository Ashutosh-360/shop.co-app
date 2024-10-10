import { useDispatch, useSelector } from "react-redux";
import { changeLoadingStateHandler, Utility } from "../../Store/Slices/UtilitySlice";

export default function useLoader() {
  const { isLoading } = useSelector(Utility);
  const dispatch = useDispatch();
  const showLoader = (booleanValue) => {
    dispatch(changeLoadingStateHandler(booleanValue));
  };
  return { isLoading, showLoader };
}
