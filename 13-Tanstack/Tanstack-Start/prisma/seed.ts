import { PrismaPg } from '@prisma/adapter-pg'

import { PrismaClient } from '../src/generated/prisma/client.js'

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL!,
})

const prisma = new PrismaClient({ adapter })

async function main() {
  console.log('🌱 Seeding database...')

  // Clear existing todos (if table exists)
  try {
    await prisma.todo.deleteMany()
  } catch (error: any) {
    // Table might not exist yet, that's okay
    if (error?.code === 'P2021') {
      console.log('⚠️  Table does not exist yet, skipping delete')
    } else {
      throw error
    }
  }

  // Create example todos
  const todos = await prisma.todo.createMany({
    data: [
      { name: 'Buy groceries', isComplete: false },
      { name: 'Read a book', isComplete: false },
      { name: 'Workout', isComplete: false },
    ],
  })

  console.log(`✅ Created ${todos.count} todos`)
}

main()
  .catch((e) => {
    console.error('❌ Error seeding database:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
