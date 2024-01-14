import 'dotenv/config';
import env from '../util/validatEnv';
import app from './app';
const Port = env.PORT;
app.listen(Port, () => {
  console.log('server is running on port ' + Port);
}); ///

export default app;
