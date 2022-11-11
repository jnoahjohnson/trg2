export default function getDisplayName(name) {
  switch (name) {
    case "startYear":
      return "Start Year";
    case "developmentBudget":
      return "Development Budget";
    case "squareFeet":
      return "Square Feet";
    default:
      return name;
  }
}
