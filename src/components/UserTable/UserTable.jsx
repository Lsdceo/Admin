import styles from './UserTable.module.css';

export const UserTable = ({ users }) => {
  return (
    <div className={styles.container}>
      <h2>Usuários</h2>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Name</th>
            <th>E-mail</th>
            <th>Cargo</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
              <td style={{ color: user.status === 'Ativo' ? '#28a745' : '#dc3545', fontWeight: 500 }}>
            {user.status}
            </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};