
import React from 'react';
import { useAdmin } from '@/hooks/useAdmin';
import { Button } from '@/components/ui/button';
import { LogOut, Settings } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const AdminPanel = () => {
  const { isAdmin, logout } = useAdmin();
  const navigate = useNavigate();

  if (!isAdmin) return null;

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <div className="fixed top-4 right-4 z-50 bg-dark-green text-white p-3 rounded-lg shadow-lg border border-warm-yellow/30">
      <div className="flex items-center gap-3">
        <Settings className="w-4 h-4" />
        <span className="text-sm font-medium">Modo Administração</span>
        <Button
          size="sm"
          variant="outline"
          onClick={handleLogout}
          className="text-dark-green border-white hover:bg-white"
        >
          <LogOut className="w-3 h-3 mr-1" />
          Sair
        </Button>
      </div>
    </div>
  );
};

export default AdminPanel;
