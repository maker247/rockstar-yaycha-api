const {PrismaClient} = require("@prisma/client")

// import {
//     PrismaClient
// } from "@prisma/client"

const {faker} = require("@faker-js/faker")

// import {
//     faker
// } from "@faker-js/faker"

const prisma = new PrismaClient()

async function PostSeeder() {

    const data = []

    for(let i = 0; i < 20; i++) {
        const content = faker.lorem.paragraph()

        const userId = faker.number.int({min: 1, max: 10})

        data.push({content, userId})
    }

    console.log("Post seeder started...")

    await prisma.post
        .createMany({data})

    console.log("Post Seeding done.")
}

module.exports = {PostSeeder}