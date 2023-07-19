import './App.css';
import { useState } from 'react';



function App() {
  const [wishList, setWishList] = useState([]);
  const [newWish, setNewWish] = useState('');

  const addWish = () => {
    if (newWish.trim() !== '') {
      setWishList([...wishList, { text: newWish, done: false }]);
      setNewWish('');
    }
  };

  const toggleDone = (index) => {
    const updatedWishList = [...wishList];
    updatedWishList[index].done = !updatedWishList[index].done;
    setWishList(updatedWishList);
  };

  const archiveDoneWishes = () => {
    const filteredWishes = wishList.filter((wish) => !wish.done);
    setWishList(filteredWishes);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      addWish();
    }
  };

  return (
    <div className="app">
       <div className="wishlist-icon">
        <img src="../icons8-wishlist-66.png" alt="Wishlist Icon" />
        </div>
      <h1>My Wishlist</h1>
      <fieldset className="wish-input">
        <legend className="wish-input_label">New Wish</legend>
        <input
          className="wish-input_field"
          placeholder="Enter your wish here"
          value={newWish}
          onChange={(e) => setNewWish(e.target.value)}
          onKeyPress={handleKeyPress}
        />
      </fieldset>
      <ul className="wish-list">
        {wishList.map(({ text, done }, i) => (
          <li key={i} className={`wish-list_item ${done ? 'wish-list_item--done' : ''}`}>
            <label htmlFor={`wish_${i}`}>
              <input
                id={`wish_${i}`}
                type="checkbox"
                checked={done}
                onChange={() => toggleDone(i)} 
              />
              {text}
            </label>
          </li>
        ))}
      </ul>
      <button type="button" onClick={archiveDoneWishes}>
        Archive done
      </button>
    </div>
  );
}

export default App;
