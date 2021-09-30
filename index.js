import express from "express"

const PORT = process.env.PORT || 5000

const app = express()

app.get('/', (req, res) => {
    res.send("TEST APP");
})

app.listen(PORT, () => console.log(`Server is listing to ${PORT}`))



