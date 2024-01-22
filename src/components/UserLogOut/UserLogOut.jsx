import styles from './UserLogOut.module.css';
import { logOut } from '../../utilities/users-service';
// Contexts
import { UserContext } from '../../contexts/UserContext';
// Hooks
import { useContext } from 'react';

export default function UserLogOut() {
  const { setUser } = useContext(UserContext);
  function handleLogOut() {
    logOut();
    setUser(null);
  }

  return (
    <div className={styles.UserLogOut}>
      <button className='btn-sm' onClick={handleLogOut}>
        LOG OUT
      </button>
    </div>
  );
}
