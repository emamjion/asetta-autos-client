import React from 'react';
import { PiHeart } from 'react-icons/pi';

const CarContent = ({cars}) => { 
    return (
        <div>
            {
                cars.slice(0,3).map(car => <div
                    key={car._id}
                >
                    <div>
                        <img src={car.image} />
                    </div>
                    <div>
                        <h1>{car.make} {car.model}</h1>
                        <div>
                            <span>< PiHeart /></span>
                        </div>
                    </div>
                </div>)
            }
        </div>
    );
};

export default CarContent;