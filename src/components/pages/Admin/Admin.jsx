import { Header } from '../../Header/Header';
import { UserTable } from '../../UserTable/UserTable';
import styles from './Admin.module.css';

const users = [
  { name: 'Igor Maurilio', email: 'igor123@senaisp.org.br', role: 'Usuário', status: 'Ativo' },
  { name: 'Marlene', email: 'marlene321@senaisp.org.br', role: 'Admin', status: 'Ativo' },
  { name: 'Ana Paula', email: 'anapaulap87@senaisp.org.br', role: 'Usuário', status: 'Inativo' },
  { name: 'Gustavo Gomes', email: 'gustavogj@senaisp.org.br', role: 'Usuário', status: 'Inativo' },
  { name: 'Atila', email: 'atila.prof@senaisp.org.br', role: 'Admin', status: 'Inativo' },
  { name: 'Fiama', email: 'fiama.prof@senaisp.org.br', role: 'Admin', status: 'Ativo' },
  { name: 'Luis Cantieri', email: 'luis.cantieri@senaisp.org.br', role: 'Usuário', status: 'Ativo' },
  { name: 'Lucas Dorta', email: 'lucas.dorta@senaisp.org.br', role: 'Usuário', status: 'Ativo' },
  { name: 'Julio Cesar', email: 'julio.cesar@senaisp.org.br', role: 'Usuário', status: 'Inativo' },
  { name: 'Chile', email: 'chile.coord@senaisp.org.br', role: 'Admin', status: 'Ativo' },
];

export const Admin = () => {
  return (
    <div className={styles.adminContainer}>
      <Header />
      <UserTable users={users} />
    </div>
  );
};