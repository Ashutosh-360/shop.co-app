import { useState } from "react";

export default function useNeedToLogin() {
  const [isNeedToLoginPopupOpen, setIsNeedToLoginPopupOpen] = useState(false);

  const showNeedToOpenPopup = (booleanValue) => {
    setIsNeedToLoginPopupOpen(!isNeedToLoginPopupOpen);
  };
  return { isNeedToLoginPopupOpen, showNeedToOpenPopup };
}
