import DishCard from "../components/DishCard";
import { useOutletContext } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addDish } from "../slices/orderSlice";
import allDishes from "../data/allDishes.json";
import { useEffect, useState } from "react";

const HotDishes = () => {
  // const [data, setData] = useState(null);
  // useEffect(() => {
  //   fetch("http://localhost:3000/hot_dishes")
  //     .then((res) => res.json())
  //     .then((json) => setData(json))
  //     .catch((err) => console.error(err));
  // }, []);

  // const [currentDishId, setCurrentDishId] = useState(null);

  // const currentDish = data ? data[currentDishId - 1] : "";

  // const decrementAvaliable = () => {
  //   const updateData = {
  //     id: currentDish?.id,
  //     name: currentDish?.name,
  //     image: currentDish?.image,
  //     price: currentDish?.price,
  //     availiable: currentDish?.availiable - 1,
  //   };
  //   console.log(currentDish);
  //   console.log(updateData);
  //   console.log(currentDishId);
  // const requestOptions = {
  //   method: "PUT",
  //   headers: { "Content-Type": "application/json" },
  //   body: JSON.stringify(updateData),
  // };
  // if (updateData) {
  //   fetch(`http://localhost:3000/hot_dishes/${currentDishId}`, requestOptions)
  //     .then((res) => res.json())
  //     .then((data) => console.log(data))
  //     .catch((err) => console.error(err));
  // }
  // };

  // const data = useSelector((state) => state.order);
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
            // setCurrentDishId(dish?.id);
            // if (currentDishId) {
            //   decrementAvaliable();
            // }
          }}
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

export default HotDishes;
