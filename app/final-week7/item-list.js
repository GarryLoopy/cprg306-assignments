import Item from "./item"

export default function ItemList( {items} ) {
    return (
        <div>
            {
                items.map(
                    (item) => <Item item={item} key={item.id}/>
                )
            }
        </div>
    )
}