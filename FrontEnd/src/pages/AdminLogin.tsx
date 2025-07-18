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

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}?rota=login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: username,
          senha: password,
        }),
      });

      const data = await response.json();

      if (data.autenticado === true) {
        sessionStorage.setItem('auth', 'true'); // ativação do modo editor
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
        description: "Não foi possível realizar o login.",
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
