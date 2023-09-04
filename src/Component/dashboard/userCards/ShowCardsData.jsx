
const ShowCardsData = ({card}) => {
    const {image, make, model, price, color, items, category} = card || null
    console.log(card);
    return (
        <div className="border p-2 m-4 flex justify-between items-center gap-5">
            <div>
                <img className="w-40" src={image} alt="" />
            </div>
            <div>
                <h3>Category : {category}</h3>
                <h3>Make : {make}</h3>
                <h3>Model : {model}</h3>
            </div>
            <div>
                <h3>Color : {color}</h3>
                <h3>Items : {items}</h3>
                <h3>Price : {price}</h3>
            </div>
            <div>
                <h4 className="border text-center p-1 m-2  cursor-pointer">delete</h4>
                <h4 className="border text-center p-1 m-2  cursor-pointer">checkout</h4>
            </div>
        </div>
    );
};

export default ShowCardsData;