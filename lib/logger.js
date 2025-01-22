import Errsole from 'errsole';
import ErrsoleMySQL from 'errsole-mysql';

Errsole.initialize({
  storage: new ErrsoleMySQL({
    host: 'localhost',
    user: 'root',
    password: 'admin-password',
    database: 'loggerDB'
  })
});

export default Errsole;
