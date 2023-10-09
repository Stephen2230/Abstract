const express = require("express");
const path = require("path");
const app = express();

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname + "/index.html"));
})

const server = app.listen(5000);
const portNumber = server.address().port;
console.log(`port is open on ${portNumber}`);

const changeWord = async () => {
    const myEntry = document.getElementById("inputArea").value;
    await window.contract.methods.updateData(myEntry).send({ from: account });

    // Get the climate data from the smart contract (modify this line according to your contract structure)
    const climateData = await window.contract.methods.getData().call();

    // Create a Blob containing the climate data
    const blob = new Blob([climateData], { type: "text/plain;charset=utf-8" });

    // Save the Blob as a file using FileSaver.js
    saveAs(blob, "climate_data.txt");
}
