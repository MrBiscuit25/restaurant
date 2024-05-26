import DishCard from "../components/DishCard";
import dishes from '../data/dishes.json';
const HotDishes = () => {
  return (
    <div className="grid grid-cols-auto-fill-150 gap-x-6 gap-y-14">
      {dishes.map(dish => (
      <DishCard name={dish.name} image={dish.image} price={dish.price}
          availiable={dish.availiable}/> 
      ))}
    </div>
  )
}

export default HotDishes
