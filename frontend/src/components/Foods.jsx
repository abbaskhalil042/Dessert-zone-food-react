import React, { useEffect, useState } from "react";
import axios from "axios";
import Shimmer from "./Shimmer";
// import Navbar from "./Navbar";

const Foods = () => {

  const BASE_URL = "./src/cake.png";
  const [data, setData] = useState(null);
  const [originalData, setOriginalData] = useState(null);
  const [filter, setFilter] = useState(null);

  useEffect(() => {
    async function getData() {
      try {
        const res = await axios.get("http://localhost:3000/");
        const json = res.data;
        setData(json);
        setOriginalData(json);
      } catch (error) {
        console.log("Couldn't fetch your data....");
      }
    }
    getData();

    // setTimeout(() => {
    //     getData();
    // }, 100);
  }, []);

  //*filter search
  const handleSearch = (e) => {
    e.preventDefault();
    const searchValue = e.target.value;
    console.log(searchValue)
    if (searchValue === "") {
      setFilter(null);
    } else {
      const filteredData = originalData?.filter((food) =>
        food.name.toLowerCase().includes(searchValue.toLowerCase())
      );
      setFilter(filteredData);
      setData(filteredData)
    }
  };

  //*button filter
  const filterBtns = [
    {
      name: "All",
      type: "all",
    },
    {
      name: "Breakfast",
      type: "breakfast",
    },
    {
      name: "Lunch",
      type: "lunch",
    },
    {
      name: "Dinner",
      type: "dinner",
    },
  ];

  const filterFoodCategory = (type) => {
    console.log("clicked")
    if (type === "all") {
      // Reset to the original data if the type is "all"
      setData(originalData);
      setFilter(null); // Clear the filter when showing all
    } else {
      // Filter the original data based on the provided type
      const filteredData = originalData?.filter((food) =>
        food.type.toLowerCase().includes(type.toLowerCase())
      );
      setFilter(filteredData);
      setData(filteredData)
    
    }
  };


  return (
    <>
      <div className="navbar">
        <h1>Dessert-zone</h1>
        <div className="btn">
          {/* <button onClick={()=>filterFoodCategory("all")}>All</button>
          <button onClick={()=>filterFoodCategory("breakfast")}>Breakfast</button>
          <button onClick={()=>filterFoodCategory("lunch")}>Lunch</button>
          <button onClick={()=>filterFoodCategory("dinner")}>Dinner</button> */}
          {filterBtns.map((value, i) => (
            <div key={value.name}>
              <button onClick={() => filterFoodCategory(value.type)}>
                {value.name}
              </button>
            </div>
          ))}
        </div>
        <div className="search-input">
          <input type="text" placeholder="search...." onChange={handleSearch} />
        </div>
      </div>
      <div className="container">
        {data !== undefined ? (
          data?.map((item, i) => (
            <div key={i} className="items">
              <div className="img">
                <img src={BASE_URL} alt="" />
              </div>

              <div className="text">
                <h2>{item.name}</h2>
                <p>{item.text}</p>
                <span>Price: ${item.price}</span>

                <h5>{item.type}</h5>
              </div>
            </div>
          ))
        ) : (
          <Shimmer />
        )}
      </div>
    </>
  );
};

export default Foods;
