import { Navigate } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import { AuthContext } from '@/contexts/AuthContext';
import { useSupabaseAuth } from '@/supabase';

export default function Logout() {
  const { logout } = useSupabaseAuth();
  const { removeUserInfo } = useContext(AuthContext);
  useEffect(() => {
    removeUserInfo();
    logout();
  }, []);

  return <Navigate to="/" />;
}
