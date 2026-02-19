import app from './server.js'
import connection from './database.js'

connection()

if (process.env.NODE_ENV !== 'production') {
  app.listen(app.get('port'), () => {
    console.log(`Server ok on http://localhost:${app.get('port')}`)
  })
}

export default app
