import RandomColor from "../components/RandomColor";
import ShoppingList from "../components/ShoppingList";
import ShoppingListForm from "../components/ShoppingListForm";
const colors = [
  "#E53935",
  "#E91E63",
  "#9C27B0",
  "#673AB7",
  "#3F51B5",
  "#2196F3",
  "#03A9F4",
  "#00BCD4",
  "#009688",
  "#4CAF50",
  "#8BC34A",
  "#CDDC39",
  "#FFEB3B",
  "#FFC107",
  "#FF9800",
  "#FF5722",
];

export default function Home() {
  return (
    <div className="flex h-screen justify-center items-center flex-col ">
      {/* <ShoppingList /> */}
      {/* <ShoppingListForm/> */}
      <div className="flex justify-center flex-wrap w-96 h-80 m-20">
        {colors.map((color, index) => (
          <RandomColor key={index} colors={colors} />
        ))}
      </div>
    </div>
  );
}
