const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Serve static images from the 'public/images' directory
// app.use("/images", express.static(path.join(__dirname, "../public/images")));
app.use(express.static(path.join(__dirname, "../public")));



app.get('/',(req,res)=>{

    const foodData = [
        {
          name: "Boilded Egg",
          price: 10,
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
          image: "/images/cake.png",
          type: "breakfast",
        },
        {
          name: "RAMEN",
          price: 25,
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
          image: "/images/cake.png",
          type: "lunch",
        },
        {
          name: "GRILLED CHICKEN",
          price: 45,
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
          image: "/images/cake.png",
          type: "dinner",
        },
        {
          name: "CAKE",
          price: 18,
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
          image: "/images/cake.png",
          type: "breakfast",
        },
        {
          name: "BURGER",
          price: 23,
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
          image: "/images/cake.png",
          type: "lunch",
        },
        {
          name: "PANCAKE",
          price: 25,
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
          image: "/images/cake.png",
          type: "dinner",
        },
        {
          name: "BIRYANI",
          price: 25,
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
          image: "/images/cake.png",
          type: "dinner",
        },
        {
          name: "PIZZA",
          price: 25,
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
          image: "/images/cake.png",
          type: "lunch",
        },
        {
          name: "ROLL",
          price: 25,
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
          image: "/images/cake.png",
          type: "breakfast",
        }
      ];
    
      res.json(foodData);
})

app.listen(PORT,()=>{
    console.log(`app is running on port ${PORT}`)
})

