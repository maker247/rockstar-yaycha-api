const express = require("express")

const app = express()

require("express-ws")(app)

const cors = require("cors")

app.use(cors())

app.use(express.json())

app.use(express.urlencoded({ extended: true }))

const {contentRouter}  = require("./routers/content")

const { userRouter } = require("./routers/user")

const { wsRouter } = require("./routers/ws")

app.use("/content", contentRouter)

app.use("/", wsRouter)

app.use("/", userRouter)

app.get("/info", (req, res) => {
    res.json({ msg: "Yay cha Api"})
})

const server = app.listen(8000, () => {
    console.log("Yay cha api started at 8000")
})

const gracefulShutdown = async () => {
    await prisma.$disconnect()

    server.close(() => {
        console.log("Yay cha api closed.")

        process.exit(0)
    })
}

process.on("SIGTERM", gracefulShutdown)

process.on("SIGINT", gracefulShutdown)