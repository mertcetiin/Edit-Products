import React, { useState } from "react";

function CarsInfo({ cars }) {
    const [editPrice, setEditPrice] = useState('');
    const [editPriceIndex, setEditPriceIndex] = useState(-1);

    const handlePriceEdit = (index) => {
        setEditPriceIndex(index);
        setEditPrice(cars[index].price);
    };

    const handleSavePrice = (index) => {
        const updatedCars = [...cars];
        updatedCars[index].price = editPrice;
        setEditPriceIndex(-1);
    };

    return (
        <div className="cardDiv">
            {cars.map((item, id) => (
                <div key={id}>
                    <h2>{item.name}</h2>
                    <img src={item.img}></img>
                    <p>Kilometre: {item.km} Km</p>
                    {editPriceIndex === id ? (
                        <div className="card">
                            <input
                                type="number"
                                value={editPrice}
                                onChange={(e) => setEditPrice(e.target.value)}
                            />
                            <button onClick={() => handleSavePrice(id)}>Save</button>
                        </div>
                    ) : (
                        <div>
                            <p>Fiyatı: {item.price}.000 TL</p>
                            <button onClick={() => handlePriceEdit(id)}>Edit</button>
                        </div>
                    )}
                </div>
            ))
            }
        </div>
    )
}

export default CarsInfo;
