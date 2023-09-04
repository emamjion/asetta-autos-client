import { useContext, useEffect, useState } from "react";
import { AuthContex } from "../../Providers/Authprovider";
import ShowCardsData from "./ShowCardsData";

const UserCards = () => {
    const {user} = useContext(AuthContex)
    const [cards, setCards] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/cards')
        .then(res => res.json())
        .then(data => setCards(data))
    }, [])


    const myCards = cards.filter(card=>card?.email === user?.email)
    // console.log(myCards);


    return (
        <div className="px-4 xl:px-[140px] 2xl:px-[240px] py-10 border">
        <h2 className="uppercase text-center text-xl md:text-4xl font-bold">My Cards</h2>
        <div className="border my-5 p-2 md:p-20">
            {
                myCards.map(card=><ShowCardsData key={card?._id} card={card}></ShowCardsData>)
            }
        </div>
    </div>
    );
};

export default UserCards;