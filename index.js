import { ChemicalServer } from "chemicaljs";
import express from "express";

const [app, listen] = new ChemicalServer();
const port = process.env.PORT || 3000;

app.use(express.json());

app.use(express.static("public", {
    index: "index.html",
    extensions: ["html"]
}));

app.post('/c', (req, res) => {
    const searchQuery = req.body.query;
    console.log('Search submitted:', searchQuery);
    res.sendStatus(200);
});

app.serveChemical();

listen(port, () => {
    console.log(`Listening on port ${port}`);
});
