import express from "express";
import path from "path";
import favicon from "serve-favicon";
import cors from "cors";
import "./config/dotenv.js";

import EventRouter from "./routes/events.js";
import LocationRouter from "./routes/locations.js";

const PORT = process.env.PORT || 3000;

const app = express();

app.use(cors());
app.use(express.json());

if (process.env.NODE_ENV === "development") {
  app.use(favicon(path.resolve("../", "client", "public", "party.png")));
} else if (process.env.NODE_ENV === "production") {
  app.use(favicon(path.resolve("public", "party.png")));
  app.use(express.static("public"));
}

app.use("/events", EventRouter);
app.use("/", LocationRouter);
app.get("/", (_, res) =>
  res
    .status(200)
    .send(
      '<h1 style="text-align: center; margin-top: 50px;">UnityGrid Plaza Server</h1>'
    )
);

if (process.env.NODE_ENV === "production") {
  app.get("/*", (_, res) => res.sendFile(path.resolve("public", "index.html")));
}

app.listen(PORT, () => {
  console.log(`server listening on http://localhost:${PORT}`);
});
