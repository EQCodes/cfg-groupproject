import React from "react";

const Item = ({ item, text, items, setItems }) => {
    //events
    const packItemHandler = () => {
    setItems(items.map(item1 => {
        if(item1.id === item1.id) {
            return {
                ...item1, packed: !item1.packed
            }
        }
        return item1;
        })
    );
};

const deleteItemHandler = () => {
    setItems(items.filter((el) => el.id !== item.id));
};


return (
    <div className="item">
        <button  onClick={packItemHandler}> Complete</button>
        <li >{text}</li>
        <button  onClick={deleteItemHandler}> Delete </button>
        </div>
    );
}

export default Item;