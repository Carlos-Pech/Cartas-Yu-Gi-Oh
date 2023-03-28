import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import CardInfo from '../Components/CardInfo.jsx';


const CardPage = () => {
  const { cardId } = useParams();
  const [cards, setCards] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://db.ygoprodeck.com/api/v7/cardinfo.php?cardset=metal%20raiders&num=8&offset=0`
      )
      .then((response) => {
        setCards(response.data.data);
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [cardId]);

  return (
    <h1 className='text-center mt-2 mb-4 text-3xl font-bold text-purple-700'>
      Cartas <span className="text-yellow-500">Yu-Gi-Oh</span>
    <div className="min-h-screen body-font text-gray-600 -m-4 flex flex-wrap">
      {cards.length > 0 ? (
        cards.map((card) => <CardInfo card={card} key={card.id} />)
      ) : (
        <p>Loading...</p>
      )}
    </div>
    </h1>
  );
};

export default CardPage;
