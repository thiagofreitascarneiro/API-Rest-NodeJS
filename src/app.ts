import fastfy from 'fastify'

import { transactionRoutes } from './routes/transactions'
import cookie from '@fastify/cookie'


export const app = fastfy()

app.register(cookie)

app.register(transactionRoutes, {
  prefix: 'transactions',
})