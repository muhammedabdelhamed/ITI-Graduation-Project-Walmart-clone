import Deals from "../../components/Deals";
import Card from "../../components/Card";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductsCat } from "../../store/slices/productCategor";
import React, { useEffect, useState } from "react";


export default function Home2() {
    const { products } = useSelector((state) => state.products);
    const dispatch = useDispatch();
    useEffect(() => {
        const fetchData = async () => {
            await dispatch(fetchProductsCat("Home"));
        };
        fetchData();
    }, [dispatch]);

    const cards = products.map((product) => ({
        photo: product.thumbnail,
        title: product.title,
        price: `$${product.price}`,
        _id: product._id,
    }));
    return (
        <>

        <div className="container mx-auto">
        <div className=" container h-[] w-[80%] relative mx-auto m-8">
            <img src="https://i5.walmartimages.com/dfw/4ff9c6c9-e2ad/k2-_4de43013-971a-444c-b405-4a3d339f0252.v1.jpg?" alt="" />

        </div>


            <div className="flex">

                <div className="w-3/4 mx-auto">
                    <div className="shadow-md border-1 rounded-2xl">
                        <div className="ml-8 md:text-2xl text-sm">
                            <h1 className="text-lg">Perk up your bedroom</h1>
                            <p>A few new pieces will have you primed to seize the day.</p>
                        </div>
                        <div className="container p-4">
                <Deals />
                </div>
                    </div>

                        <div className=" container h-[] w-[100%] relative mx-auto my-8">
            <img className="rounded-md shadow-md" src="https://i5.walmartimages.com/dfw/4ff9c6c9-8e3a/k2-_417f2184-f7fb-4ce0-91b8-89b101436455.v1.jpg?odnHeight=470&odnWidth=1232&odnBg=&odnDynImageQuality=70%201x,%20https://i5.walmartimages.com/dfw/4ff9c6c9-8e3a/k2-_417f2184-f7fb-4ce0-91b8-89b101436455.v1.jpg?odnHeight=940&odnWidth=2464&odnBg=&odnDynImageQuality=70" alt="" />
            <div className="absolute w-full px-4 py-3 md:bottom-20 bottom-0 mt-20 text-sm md:text-3xl">
                <h1 className=""> Your style<br /> at Walmart </h1>
                <p className="">
                Spring forward with fashion <br /> home & beauty inspired <br /> by real life.
                </p>
                <p
                    style={{
                        position: "relative",
                        textAlign: "start",
                        justifyContent: "center",
                        textDecoration: "underline",
                    }}
                >
                    Shop Now
                </p>
            </div>
        </div>
        <div className="container mx-auto my-10">
                        <div className="mx-auto my-8 text-xl font-bold">Refresh your outdoors</div>
                        <div className="grid grid-cols-2 gap-16 md:grid-cols-3">
                            {cards.map((card, index) => (
                                <div key={index}>
                                    <Card
                                        photo={card.photo}
                                        title={card.title}
                                        price={card.price}
                                        id={card._id}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>


                </div>
            </div>
            </div>
        </>
        
    );
}
