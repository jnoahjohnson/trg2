import {
  BuildingOfficeIcon,
  CalendarIcon,
  ClipboardDocumentListIcon,
  CogIcon,
  CurrencyDollarIcon,
  HashtagIcon,
  MapPinIcon,
  Squares2X2Icon,
  VideoCameraIcon,
} from "@heroicons/react/24/outline/esm/index";

export const getIcon = (type: any) => {
  switch (type) {
    case "units":
      return <HashtagIcon />;
    case "keys":
      return <HashtagIcon />;
    case "yearStarted":
      return <CalendarIcon />;
    case "yearCompleted":
      return <CalendarIcon />;
    case "status":
      return <BuildingOfficeIcon />;
    case "developmentalBudget":
      return <CurrencyDollarIcon />;
    case "location":
      return <MapPinIcon />;
    case "squareFeet":
      return <Squares2X2Icon />;
    case "type":
      return <ClipboardDocumentListIcon />;
    case "liveVideo":
      return <VideoCameraIcon />;
    default:
      return <CogIcon />;
  }
};
