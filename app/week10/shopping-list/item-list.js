"use client";

import { useState } from "react";
import Item from "./item";
import Navigation from "./navigation";
import ExtraOptions from "./extra-options";

export default function ItemList({ items, onItemSelect }) {
  const [sortBy, setSortBy] = useState("name");
  const [groupedByCategory, setGroupedByCategory] = useState(false);

  const [allowSelectMultiple, setAllowSelectMultiple] = useState(false);

  const [selectedItemId, setSelectedItemId] = useState([]);

  const [previousID, setPreviousID] = useState([]);

  const handleOnItemSelect = (item) => {

    if (allowSelectMultiple) {
      if (selectedItemId.includes(item.documentID)) {
        //somehow remove it in the array
        const data = selectedItemId.filter(
          (documentID) => item.documentID !== documentID
        )
        setSelectedItemId(data);
        return;
      }

      setSelectedItemId(
        [
          ...selectedItemId,
          item.documentID
        ]
      )
      return;
    }

    // Unselect id
    if (selectedItemId.length === 1 && selectedItemId.includes(item.documentID)) {
      setSelectedItemId([]);
      onItemSelect("");
      return;
    }
      

    // Select to new ID
    setSelectedItemId([item.documentID]);
    setPreviousID([item.documentID]);
    onItemSelect(item.data);
  };

  const handleOnNavigationSelect = (contentType) => {
    switch (contentType) {
      case "Sort by name":
        setSortBy("name");
        break;
      case "Sort by category":
        setSortBy("category");
        break;
      case "Group by category":
        setGroupedByCategory(!groupedByCategory);
        break;
      default:
        console.error(
          "Error on navigation.",
          contentType,
          " is not valid. Check navigation module."
        );
    }
  };

  const nameComparator = (a, b) => {
    if (a.data.name > b.data.name) return 1;
    else if (a.data.name < b.data.name) return -1;
    else return 0;
  };

  const categoryComparator = (a, b) => {
    if (a.data.category > b.data.category) return 1;
    else if (a.data.category < b.data.category) return -1;
    else return 0;
  };

  let displayedItems = items.sort((a, b) => {
    switch (sortBy) {
      case "name":
        return nameComparator(a, b);
      case "category":
        return categoryComparator(a, b);
      default:
        return 0;
    }
  });

  if (groupedByCategory) {
    displayedItems = displayedItems.reduce((accumulator, currentItem) => {
      const foundIndex = accumulator.findIndex(
        (item) => item.category === currentItem.data.category
      );

      if (foundIndex === -1) {
        accumulator.push({
          category: currentItem.data.category,
          items: [currentItem],
        });
      } else {
        accumulator[foundIndex].items.push(currentItem);
      }

      return accumulator;
    }, []);
  }

  const handleOnOptionSelect = () => {
    setAllowSelectMultiple(!allowSelectMultiple);

    if (allowSelectMultiple) {
      setSelectedItemId(previousID);
    }
  }

  return (
    <div className="mr-4 ml-4">
      <Navigation onItemSelect={handleOnNavigationSelect} />
      <ExtraOptions onOptionClick={handleOnOptionSelect}/>
      <ul className="flex flex-col mb-4 gap-2">
        {groupedByCategory
          ? displayedItems.map((group) => (
              <div key={group.category}>
                <h2 className="text-xl capitalize pl-2 mt-2">{group.category}</h2>
                <ul className="flex flex-col gap-2">
                  {group.items.map((item) => (
                    <Item
                      item={item}
                      key={item.documentID}
                      onItemSelect={handleOnItemSelect}
                      selectedItem={selectedItemId.includes(item.documentID)}
                    />
                  ))}
                </ul>
              </div>
            ))
          : displayedItems.map((item) => (
              <Item
                item={item}
                key={item.documentID}
                onItemSelect={handleOnItemSelect}
                selectedItem={selectedItemId.includes(item.documentID)}
              />
            ))}
      </ul>
    </div>
  );
}
