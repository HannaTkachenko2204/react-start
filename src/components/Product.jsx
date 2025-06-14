// export default function Product(props) {
//   return (
//     <>
//       <h2>{props.name}</h2>
// 	  <img src={props.imgUrl} alt={props.name} width="480" />
// 	  <p>Price: {props.price} credits</p>
//     </>
//   );
// };

// патерн деструктуризації
export default function Product({ name, imgUrl, price }) {
  return (
    <div>
      <h2>{name}</h2>
	  <img src={imgUrl} alt={name} width="480" />
	  <p>Price: {price} credits</p>
    </div>
  );
};