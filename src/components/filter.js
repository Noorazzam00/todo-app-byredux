// import { useDispatch } from "react-redux";
// import { setFilter } from '../store/taskSlice';

// export default function Filter() {
//   const dispatch = useDispatch();

//   const filterByDone = () => {
//     dispatch(setFilter("done"));
//   };

//   const filterByUndone = () => {
//     dispatch(setFilter("undone"));
//   };

//   const removeFilters = () => {
//     dispatch(setFilter("all"));
//   };

//   return (
//     <div>
//       <button onClick={filterByDone}>filter by done</button>
//       <button onClick={filterByUndone}>filter by undone</button>
//       <button onClick={removeFilters}>Remove filters</button>
//     </div>
//   );
// }