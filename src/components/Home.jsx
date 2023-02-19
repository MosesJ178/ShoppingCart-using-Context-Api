import React from "react";
import { useStore } from "../context/context";
import Cart from "./Cart";

function Home() {
  const { nftArray, cart, setcart, showcart, setshowcart } = useStore();
  const cartupdate = (item, cart) => {
    for (let i = 0; i < cart.length; i++) {
      if (cart[i].id == item.id) {
        const copy = [...cart];
        copy[i].count += 1;
        copy[i].totalperproduct = copy[i].price*copy[i].count;
        return copy;
      }
    }
    return cart;
  };

  const addCrt = (id) => {
    const filter = nftArray.find((data) => data.id == id);
    const checkcart = Boolean(cart.find((data) => data.id == id));
    const update = checkcart
      ? setcart(cartupdate(filter, cart))
      : setcart([...cart, { ...filter, count: 1,totalperproduct:filter.price}]);
  };

  return (
    <div>


      <img
        className="fixed w-full h-screen blur"
        src="https://i.seadn.io/gae/qwnNTSRrf9CVq4LGawMcg7i2KZhD9I5LHA4uSNnB43-UAniBBgpNMSIz013HCKtrB9KFjrJUIRwpGbTzzNA4srJV39t3LnW3vaugmB8?auto=format&w=1920"
        alt="bft bg image"
      />

      
      <ul className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 place-items-center p-1 mt-12">
        {nftArray.map((data, index) => {
          const { id, name, imageUrl, price } = data;
          return (
            <li
              key={index}
              className="w-60 card group my-5 relative overflow-hidden h-72 flex bg-slate-50 shadow-lg rounded-lg flex-col justify-center items-center"
            >
              <div className="w-2/3 h-3/4 flex bg-white">
                <img
                  src={imageUrl}
                  alt={name}
                  className="w-full group-hover:scale-105 h-full transform transition duration-500"
                />
              </div>
              <div className="flex flex-col h-2/5 cursor-pointer  items-center bg-white w-full">
                <p className="font-semibold" name={id}>
                  {name}
                </p>
                <p
                  className="font-semibold"
                  name={id}
                >{`Price : ETH${price}`}</p>
              </div>
              <div className="w-full bottom-0 absolute">
                <button
                  onClick={() => addCrt(id)}
                  className="w-full bg-blue-500 absolute -bottom-10 group-hover:-bottom-0 group-hover:transition-all"
                >
                  Cart
                </button>
              </div>
            </li>
          );
        })}
      </ul>


      {(showcart) ? (
        <div>
          <Cart />
        </div>
      ) : (
        ""
      )}


    </div>
  );
}

export default Home;
