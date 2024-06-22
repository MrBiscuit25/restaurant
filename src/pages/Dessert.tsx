import DishCard from "../components/DishCard";
import allDishes from "../data/allDishes.json";
import { useOutletContext } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addDish } from "../slices/orderSlice";
const Dessert = () => {
  const context: string = useOutletContext();
  const fitleredDishes = allDishes.dessert.filter((dish) =>
    dish.name.toLowerCase().includes(context.toLowerCase()),
  );
  const dispatch = useDispatch();
  return (
    <div className="grid grid-cols-auto-fill-150 gap-x-6 gap-y-14">
      {fitleredDishes.map((dish) => (
        <DishCard
          onClick={() => {
            dispatch(addDish({ category: "dessert", id: dish.id }));
          }}
          key={`${dish.name}-${dish.id}`}
          name={dish.name}
          image={dish.image}
          price={dish.price}
          availiable={dish.availiable}
        />
      ))}
    </div>
  );
};

export default Dessert;
