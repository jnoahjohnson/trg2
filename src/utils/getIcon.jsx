import {
  CakeIcon,
  CameraIcon,
  CogIcon,
  HashtagIcon,
  LocationMarkerIcon,
  PhotographIcon,
} from "@heroicons/react/outline";

export default function getIcon(type) {
  switch (type) {
    case "units":
      return <HashtagIcon />;
    case "startYear":
      return <LocationMarkerIcon />;
    case "status":
      return <CameraIcon />;
    default:
      return <CogIcon />;
  }
}
