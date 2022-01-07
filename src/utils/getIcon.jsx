import {
  CakeIcon,
  CameraIcon,
  CogIcon,
  HashtagIcon,
  LocationMarkerIcon,
  PhotographIcon,
  CalendarIcon,
  OfficeBuildingIcon,
  CurrencyDollarIcon, 
  ViewBoardsIcon,
  ClipboardListIcon,
} from "@heroicons/react/outline";

export default function getIcon(type) {
  switch (type) {
    case "units":
      return <HashtagIcon />;
    case "keys":
      return <HashtagIcon />;
    case "startYear":
      return <CalendarIcon />;
    case "completedYear":
      return <CalendarIcon />;
    case "status":
      return <OfficeBuildingIcon />;
    case "developmentalBudget":
      return <CurrencyDollarIcon />;
    case "location":
      return <LocationMarkerIcon />;
    case "squareFeet":
      return <ViewBoardsIcon />;
    case "type":
      return <ClipboardListIcon />;
    default:
      return <CogIcon />;
  }
}
