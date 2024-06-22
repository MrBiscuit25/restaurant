import DishCard from "../components/DishCard";
import { useOutletContext } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addDish } from "../slices/orderSlice";
import allDishes from "../data/allDishes.json";

const HotDishes = () => {
  const context: string = useOutletContext();
  const filteredDishes = allDishes["hot_dishes"]?.filter((dish) =>
    dish.name?.toLowerCase().includes(context.toLowerCase()),
  );
  const dispatch = useDispatch();

  return (
    <div className="grid grid-cols-auto-fill-150 gap-x-6 gap-y-14">
      {filteredDishes?.map((dish) => (
        <DishCard
          onClick={() => {
            dispatch(addDish({ category: "hot_dishes", id: dish.id }));
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

export default HotDishes;
