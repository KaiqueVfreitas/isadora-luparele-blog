import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

const AdminLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  // Mock de credenciais válidas (remova isso em produção!)
  const MOCK_CREDENTIALS = {
    username: 'admin',
    password: 'admin123'
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulando delay de rede
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    try {
      // Verificação mockada
      const isValid = username === MOCK_CREDENTIALS.username && 
                     password === MOCK_CREDENTIALS.password;
      
      if (isValid) {
        // Mock da sessão admin (armazena no localStorage)
        localStorage.setItem('isAdmin', 'true');
        
        toast({
          title: "Login realizado com sucesso!",
          description: "Modo de edição ativado.",
        });
        navigate('/');
      } else {
        toast({
          title: "Erro de autenticação",
          description: "Usuário ou senha incorretos.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Erro no servidor",
        description: "Ocorreu um erro durante o login. Tente novamente.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-soft-green flex items-center justify-center px-4">
      <div className="bg-white rounded-xl shadow-xl p-8 w-full max-w-md border border-dark-green/10">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-dark-green mb-2">
            Área Administrativa
          </h1>
          <p className="text-gray-600">
            Acesso restrito para administradores
          </p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-dark-green mb-2">
              Usuário
            </label>
            <Input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Digite seu usuário"
              className="border-dark-green/30 focus:border-warm-yellow"
              required
              disabled={isLoading}
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-dark-green mb-2">
              Senha
            </label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Digite sua senha"
              className="border-dark-green/30 focus:border-warm-yellow"
              required
              disabled={isLoading}
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-dark-green hover:bg-warm-yellow hover:text-dark-green transition-colors"
            disabled={isLoading}
          >
            {isLoading ? "Verificando..." : "Entrar"}
          </Button>
        </form>

        <div className="mt-6 text-center">
          <button
            onClick={() => navigate('/')}
            className="text-sm text-gray-500 hover:text-dark-green transition-colors"
            disabled={isLoading}
          >
            ← Voltar ao site
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;