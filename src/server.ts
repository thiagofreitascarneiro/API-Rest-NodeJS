import fastfy from 'fastify'
import { knex } from './database'
import crypto from 'node:crypto'
import { env } from './env'


const app = fastfy()

app.get('/hello', async () => {
  const transaction = await knex('transactions').insert({
    id: crypto.randomUUID(),
    title: 'Transação de teste',
    amount: 1000,
  }).returning('*')

  return transaction
})

app
  .listen({
    port: env.PORT,
  })
  .then(() => {
    console.log('HTTP Server Running!')
  })
