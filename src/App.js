import React, { useState } from 'react';
import './App.css';
import 'tailwindcss/tailwind.css';
import { useDrag, useDrop } from 'react-dnd';

const ItemType = 'LIST_ITEM';

const ListItem = ({ item, index, moveItem }) => {
  const [, ref] = useDrag({
    type: ItemType,
    item: { index },
  });

  const [, drop] = useDrop({
    accept: ItemType,
    hover: (draggedItem) => {
      if (draggedItem.index !== index) {
        moveItem(draggedItem.index, index);
        draggedItem.index = index;
      }
    },
  });

  return (
    <div ref={(node) => ref(drop(node))} className="p-2 border border-gray-300 rounded bg-white shadow-sm mb-2">
      {item.name}
    </div>
  );
};

const TabContent = ({ items, moveItem }) => (
  <div>
    {items.map((item, index) => (
      <ListItem key={index} item={item} index={index} moveItem={moveItem} />
    ))}
  </div>
);

const App = () => {
  const [input, setInput] = useState('');
  const [allItems, setAllItems] = useState([]);
  const [currentTab, setCurrentTab] = useState('allItems');
  const [areas, setAreas] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const listsArr = input.split('#');
    const newLists = {};
    const allItems = [];
    const newAreas = []

    console.log(listsArr, 'what is here now?')

    for (const list of listsArr) {
      if (!list.length) continue;
      const parsedList = list.split('\n').filter(item => item);

      const title = parsedList.shift().slice(1).trim();
      newLists[title] = parsedList;

      newAreas.push(title)

      for (const foodItem of parsedList) {
        
        const [prefix, itemName] = foodItem.split('.');
        allItems.push({
          "name": foodItem, 
          "area": title, 
          "perishable": prefix.includes('c') && itemName ? true : null,
          "low stock": prefix.includes('l') && itemName ? true : null,
          "spoiled": prefix.includes('b') && itemName ? true : null,
          "nearly spoiled" : prefix.includes('s') && itemName ? true : null,
          "expiration date" : null
        });

      }
    }

    newAreas.push('Perishables', 'Low Stock', 'Spoiled', 'Nearly Spoiled')

    setAreas(newAreas);
    setAllItems(allItems);
  };

  const moveItem = (fromIndex, toIndex) => {
    const updatedItem = [...allItems];
    const [movedItem] = updatedItem.splice(fromIndex, 1);
    updatedItem.splice(toIndex, 0, movedItem);
    setAllItems(updatedItem);
  };

  const displayItems = (currentTab) => {
    if (currentTab === 'Perishables') {
      return allItems.filter(item => item['perishable'])
    }
    else if (currentTab === 'Low Stock') {
      return allItems.filter(item => item['low stock'])
    }
    else if (currentTab === 'Spoiled') {
      return allItems.filter(item => item['spoiled'])
    }
    else if (currentTab === 'Nearly Spoiled') {
      return allItems.filter(item => item['nearly spoiled'])
    } else {
      return allItems.filter(item => item.area === currentTab)
    }
  }

  return (
    <div className="bg-gray-100 p-4 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">List Household Food Items</h1>
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md mb-4">
        <div className="mb-4">
          <label
            htmlFor="multiline-input"
            className="block text-sm font-medium text-gray-700"
          >
            Your List
          </label>
          <textarea
            id="multiline-input"
            name="multiline-input"
            rows="5"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          ></textarea>
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Submit
        </button>
      </form>
      <div className="tabs flex mb-4">
        {allItems.length ? <button
          onClick={() => setCurrentTab('allItems')}
          className={`px-4 py-2 mr-2 rounded ${currentTab === 'allItems' ? 'bg-blue-500 text-white' : 'bg-white text-gray-700'}`}
        >
          All Items
        </button> : null}
        {areas.map((listName) => (
          <button
            key={listName}
            onClick={() => setCurrentTab(listName)}
            className={`px-4 py-2 mr-2 rounded ${currentTab === listName ? 'bg-blue-500 text-white' : 'bg-white text-gray-700'}`}
          >
            {listName}
          </button>
        ))}
      </div>
      <div className="tab-content mt-4">
        {currentTab === 'allItems' ? (
          <TabContent items={allItems} moveItem={moveItem} />
        ) : (
          <TabContent items={displayItems(currentTab)} moveItem={() => {}} />
        )}
      </div>
    </div>
  );
};

export default App;
