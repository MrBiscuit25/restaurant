import DishCard from "../components/DishCard";
import allDishes from "../data/allDishes.json";
import { useOutletContext } from "react-router-dom";
const Soup = () => {
  const context: string = useOutletContext();
  const fitleredDishes = allDishes.soup.filter((dish) =>
    dish.name.toLowerCase().includes(context.toLowerCase()),
  );
  return (
    <div className="grid grid-cols-auto-fill-150 gap-x-6 gap-y-14">
      {fitleredDishes.map((dish) => (
        <DishCard
          key={dish.id}
          name={dish.name}
          image={dish.image}
          price={dish.price}
          availiable={dish.availiable}
        />
      ))}
    </div>
  );
};

export default Soup;
