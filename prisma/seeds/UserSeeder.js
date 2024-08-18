const {PrismaClient} = require("@prisma/client")

// import {
//     PrismaClient
// } from "@prisma/client"

const {faker} = require("@faker-js/faker")

// import {
//     faker
// } from "@faker-js/faker"

const bcrypt = require("bcrypt")

// import bcrypt from "bcrypt"

const prisma = new PrismaClient()

async function UserSeeder() {
    const password = await bcrypt.hash("password", 10)

    console.log("User seeder started...")

    for(let i = 0; i < 10; i++) {
        const firstName = faker.person.firstName()
        const lastName = faker.person.lastName()

        const name = `${firstName} ${lastName}`

        const username = `${firstName}${lastName[0]}`.toLocaleLowerCase()

        const bio = faker.person.bio()

        await prisma.user.upsert({
            where: {username},
            update: {},
            create: {
                name,
                username,
                bio,
                password
            }
        })
    }

    console.log("User Seeding done.")
}

module.exports = {UserSeeder}