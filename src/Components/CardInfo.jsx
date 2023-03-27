import React from "react";

const CardInfo = ({ card }) => {
return (
<div class="xl:w-1/3 md:w-1/2 p-4">
    <div class="c-card block  shadow-md hover:shadow-xl rounded-lg overflow-hidden bg-black">
    <div class="flex">
        <img
        src={card.card_images[0].image_url}
        alt={card.name}
        class="w-1/2 object-cover"
        />
        <div class="p-4 w-1/2">
        <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">
            {card.type}
        </h3>
        <h2 class="text-lg text-white font-medium title-font mb-4 whitespace-nowrap truncate">
            {card.name}
        </h2>
        <p class="text-white">{card.desc}</p>
        <div class="py-4 border-t border-b text-xs text-white">
            <div class="grid grid-cols-6 gap-1">
            <div class="col-span-2">
                Atributo:
                <span
                class="-block ml-1  inline-flex
            items-center
            justify-center
            px-2
            py-1
            text-xs
            font-bold
            leading-none
            text-white
            bg-blue-400
            rounded-full"
                >
                {card.attribute}
                </span>
            </div>
            <div class="col-span-2">
                Nivel:
                <span class="inline-block ml-1 font-bold">
                {card.level}{" "}
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/7/7b/Starball_Red.svg"
                    height="20"
                    width="20"
                    alt=""
                />
                </span>
            </div>
            <div class="col-span-2">
                Ataque:
                <span
                class=" ml-1 font-bold  inline-flex
            items-center
            justify-center
            px-2
            py-1
            text-xs
        
            leading-none
            text-white
            bg-red-600
            rounded-full"
                >
                {card.atk}
                </span>
            </div>
            <div class="col-span-2">
                Defensa:
                <span
                class="  ml-1 font-bold  inline-flex
            items-center
            justify-center
            px-2
            py-1
            text-xs
        
            leading-none
            text-white
            bg-blue-600
            rounded-full"
                >
                {card.def}
                </span>
            </div>
            <div className="col-span-2">
                Arquetipo:
                <span className="inline-block ml-1 font-bold">
                {card.archetype ? card.archetype : "N/A"}
                </span>
            </div>

            <div class="col-span-2">
                Tipo de Cuadro:
                <span
                class=" ml-1 font-bold  inline-flex
            items-center
            justify-center
            px-2
            py-1
            text-xs
        
            leading-none
            text-white
            bg-blue-500
            rounded-full"
                >
                {card.race}
                </span>
            </div>
            </div>
        </div>

        <div class="flex justify-between items-center">
            <div>
            <span class="inline-block mr-1 text-white">Juego de Cartas:</span>
            <span
                class=" ml-1 font-bold  inline-flex
            items-center
            justify-center
            px-2
            py-1
            text-xs
        
            leading-none
            text-white
            rounded-full
            bg-yellow-400"
            >
                {card.card_sets[0].set_name}
            </span>
            <span
                class=" ml-1 font-bold  inline-flex
            items-center
            justify-center
            px-2
            py-1
            text-xs
        
            leading-none
            text-white
            rounded-full
            bg-yellow-400"
            >
                {card.card_sets[1].set_name}
            </span>
            <span
                class=" ml-1 font-bold  inline-flex
            items-center
            justify-center
            px-2
            py-1
            text-xs
        
            leading-none
            text-white
            rounded-full
            bg-yellow-400"
            >
                {card.card_sets[2].set_name}
            </span>
            </div>
            <div>
            <span class="inline-block mr-1 text-white">Precio:</span>
            <span class="inline-block font-bold text-white">
                ${card.card_prices[0].tcgplayer_price}
            </span>
            </div>
        </div>
        </div>
    </div>
    </div>
</div>
);
};

export default CardInfo;
