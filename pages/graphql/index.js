import React from "react";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import Display from "../../components/common/display/Display";
import Image from "next/image";
import { Center } from "../../styles/style";
import plus from "../../assets/plus.svg";
import minus from "../../assets/minus.svg";
import Button from "../../components/basic/button/Button";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../../redux/slices/cartSlice";

export default function Products({ fetchedData }) {
  const { cartList } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const ids = cartList?.map((i) => i.id);

  return (
    <div>
      <h4 className="mb-10 text-primary-500  ">
        {" "}
        Display Articles fetched by{" "}
        <span className="text-secondary-800">Graphql </span>
      </h4>

      <Display>
        {fetchedData.locations?.map((item) => {
          return (
            <div
              key={item.id}
              className="w-52 p-2 bg-primary-700 shadow-sm shadow-primary-800"
            >
              <div className="h-52">
                <center>
                  <Image
                    width={160}
                    height={150}
                    src={item.photo}
                    alt="image"
                  />
                </center>
                <h5 className="text-primary-300 leading-5">{item.name}</h5>
              </div>
              {!ids?.includes(item.id) ? (
                <div
                  onClick={() => dispatch(addToCart(item))}
                  className="bg-primary-600  w-full h-9 cursor-pointer hover:opacity-80  "
                >
                  <Button>
                    {/* <Image src={plus} width={16} height={16} alt="" /> */}
                    <h6 className="text-secondary-500 hover:text-secondary-600">
                      Add To Card
                    </h6>
                  </Button>
                </div>
              ) : (
                <div
                  onClick={() => dispatch(removeFromCart({ id: item.id }))}
                  className="bg-primary-600  w-full h-9 cursor-pointer hover:opacity-80 "
                >
                  <Button>
                    <Image src={minus} width={24} height={24} alt="" />
                  </Button>
                </div>
              )}
            </div>
          );
        })}
      </Display>
    </div>
  );
}

export const getStaticProps = async () => {
  const client = new ApolloClient({
    uri: "https://flyby-gateway.herokuapp.com/",
    cache: new InMemoryCache(),
  });
  const { data } = await client.query({
    query: gql`
      query GetLocations {
        locations {
          id
          name
          description
          photo
        }
      }
    `,
  });
  return {
    props: {
      fetchedData: data,
    },
  };
};
