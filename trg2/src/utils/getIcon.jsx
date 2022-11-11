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
  VideoCameraIcon,
} from "@heroicons/react/outline";

export default function getIcon(type) {
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
      return <OfficeBuildingIcon />;
    case "developmentalBudget":
      return <CurrencyDollarIcon />;
    case "location":
      return <LocationMarkerIcon />;
    case "squareFeet":
      return <ViewBoardsIcon />;
    case "type":
      return <ClipboardListIcon />;
    case "liveVideo":
      return <VideoCameraIcon />; 
    default:
      return <CogIcon />;
  }
}
