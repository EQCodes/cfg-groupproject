import React from "react";
import Item from "./Item";
//import CategoriesDict2 from "../Categories";

var categoriesDictThree = {
    category1: "clothes",
    category2: "electrics",
};

function ListItems ( { items, setItems }) {


    return (
        <div>
            <ul>
                {items.map(item => (
                    <Item 
                        items={items}
                        setItems={setItems} 
                        text={item.item} 
                        key={item.id}
                        item={item}
                    />
                ))}
            </ul>
            {
                        Object.entries(categoriesDictThree)
                        .map( ([key, value]) => <h1 key={key}>{value}</h1> )
                    }
           {/* HARD CODED  
           category is based off category name - so if same categories then would show up twice!
           need to find way to replace hard coded electrics with dynamic!
           */}

           <div>
                {items.filter(item => item.category == "electrics").map(filteredItem => (
                    <li>
                    {filteredItem.item}
                    </li>
                ))}
            </div>
      </div>
    );
};

export default ListItems;