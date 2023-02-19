import React from "react";
import { useStore } from "../context/context";
import { GrClose } from "react-icons/gr";

function Cart() {
  const { cart, setcart, showcart, setshowcart } = useStore();
  const updateInnerCart = (type, id) => {
    const find = cart.find((x) => x.id == id);
    const cartupdate =
      type == "inc" ? setcart(inc(find.id, cart)) : setcart(dec(find, cart));
  };
  const inc = (id, cart) => {
    for (let i = 0; i < cart.length; i++) {
      if (cart[i].id == id) {
        const copy = [...cart];
        copy[i].count += 1;
        copy[i].totalperproduct = copy[i].price*copy[i].count;
        return copy;
      }
    }
  };
  const dec = (data, cart) => {
    if (data.count == 1) {
      const copy = cart.filter((x) => x.id != data.id);
      return copy;
    }
    for (let i = 0; i < cart.length; i++) {
      if (cart[i].id == data.id) {
        const copy = [...cart];
        copy[i].count -= 1;
        copy[i].totalperproduct = (copy[i].totalperproduct)-(copy[i].price);
        return copy;
      }
    }
  };
  return (
    <div>
      {showcart ? (
        <div className="fixed z-10 top-0 sm:right-0 bg-white/40 sm:w-1/2 w-full h-screen">
          <div className="absolute top-5 right-5 cursor-pointer">
            <GrClose
              className="font-bold text-xl"
              onClick={() => setshowcart(!showcart)}
            />
          </div>
          <p className="m-3 text-xl font-semibold bg-white pb-2">Cart</p>
          <ul className="flex flex-col">
            {cart.map((data, i) => {
              return (
                <li key={i} className="bg-slate-200 mx-5 mb-3 h-28 rounded-lg">
                  <div className="flex p-2">
                    <div>
                      <img src={data.imageUrl} width={50} height={50} alt="" />
                    </div>
                    <div className="ml-5">
                      <p>
                        <span className="font-bold">Product Name : </span>
                        {data.name}
                      </p>
                      <p>
                        <span className="font-bold">Price</span>
                        {` Eth ${data.price}`}
                      </p>
                      <div className="flex justify-between bg-white w-16">
                        <button
                          className="px-0.5 border-black border-1"
                          onClick={() => updateInnerCart("inc", data.id)}
                        >
                          +
                        </button>
                        <p className=" border-r-black border-l-black border px-2">
                          {data.count}
                        </p>
                        <button
                          className="px-0.5 border-black border-1"
                          onClick={() => updateInnerCart("dec", data.id)}
                        >
                          -
                        </button>
                      </div>
                    </div>
                    <div>
                    <span className="font-bold">Total Price :{`${data.totalperproduct}`} </span>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default Cart;
