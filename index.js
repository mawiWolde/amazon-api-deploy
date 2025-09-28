const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();

const stripe = require("stripe")(process.env.STRIPE_KEY);

const app = express();

app.use(cors({ origin: "*" }));
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({ message: "Success!" });
});

app.post("/payment/create", async (req, res) => {
  try {
    const { total } = req.body;

    if (!total || total <= 0) {
      return res
        .status(403)
        .json({ message: "Payment must be greater than zero" });
    }

    const paymentIntent = await stripe.paymentIntents.create({
      amount: total,
      currency: "usd"
    });

    res.status(201).json({
      clientSecret: paymentIntent.client_secret
    });
  } catch (error) {
    console.error("Stripe error:", error.message);
    res.status(500).json({ error: error.message });
  }
});

app.listen(5300, (err) => {
  if (err) throw err;
  console.log("Amazon Server running on http://localhost:5300");
});

// const express = require("express");
// const cors = require("cors");
// const dotenv = require("dotenv");
// const stripe = require("stripe")(process.env.STRIPE_KEY);

// dotenv.config();

// const app = express();
// // cors origin may be deprcated
// app.use(cors({ origin: true }));

// app.use(express.json());

// app.get("/", (req, res) => {
//   res.status(200).json({
//     mesage: "Success !"
//   });
// });

// app.post("/payment/create", async (req, res) => {
//   const total = req.query.total;
//   if (total > 0) {
//     // console.log("payment recived", total);
//     res.send(total);

//     const paymentIntent = await stripe.paymentIntents.create({
//       amount: total,
//       currency: "usd"
//     });

//     res.status(201).json({
//       clientSecret: paymentIntent.client_secret
//     });
//   } else {
//     res.status(403).json({ message: "Payment must be greater than zero" });
//   }
// });

// app.listen(5300, (err) => {
//   if (err) throw err;
//   console.log("Amazon Server running on port:2025, http://localhost:5300");
// });
