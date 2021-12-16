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
} from "@heroicons/react/outline";

export default function getIcon(type) {
  switch (type) {
    case "units":
      return <HashtagIcon />;
    case "startYear":
      return <CalendarIcon />;
    case "status":
      return <OfficeBuildingIcon />;
    case "developmentalBudget":
      return <CurrencyDollarIcon />;
    case "squareFeet":
      return <ViewBoardsIcon />;
    default:
      return <CogIcon />;
  }
}
