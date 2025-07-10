
#!/bin/bash

echo "=== QuantumCore Finance - Script de Configuração Automática ==="
echo "Configurando para: ReginaldoGonssavre (raviapowersync@gmail.com)"
echo ""

echo "=== Atualizando sistema e instalando dependências ==="
pkg update && pkg upgrade -y
pkg install git openssh nodejs-lts -y

echo "=== Configurando Git globalmente ==="
git config --global user.name "ReginaldoGonssavre"
git config --global user.email "raviapowersync@gmail.com"
git config --global init.defaultBranch main

echo "=== Verificando configuração do Git ==="
echo "Nome: $(git config --global user.name)"
echo "Email: $(git config --global user.email)"
echo ""

echo "=== Configurando chave SSH para GitHub ==="
if [ ! -f ~/.ssh/id_ed25519 ]; then
  echo "Gerando nova chave SSH..."
  ssh-keygen -t ed25519 -C "raviapowersync@gmail.com" -f ~/.ssh/id_ed25519 -N ""
  
  # Configurar SSH agent
  eval "$(ssh-agent -s)"
  ssh-add ~/.ssh/id_ed25519
  
  echo ""
  echo "=== SUA CHAVE PÚBLICA SSH (COPIE ESTA CHAVE) ==="
  echo "=============================================="
  cat ~/.ssh/id_ed25519.pub
  echo "=============================================="
  echo ""
  echo "📋 INSTRUÇÕES:"
  echo "1. Copie a chave SSH acima"
  echo "2. Vá para: https://github.com/settings/keys"
  echo "3. Clique em 'New SSH key'"
  echo "4. Cole a chave e salve"
  echo ""
  read -p "⏸️  Pressione ENTER após adicionar a chave no GitHub..."
else
  echo "✅ Chave SSH já existe, pulando geração."
  eval "$(ssh-agent -s)"
  ssh-add ~/.ssh/id_ed25519
fi

echo ""
echo "=== Testando conexão SSH com GitHub ==="
ssh -T git@github.com 2>&1 | head -n 1

echo ""
echo "=== Configurando diretório de trabalho ==="
cd ~ || exit
mkdir -p ~/projetos
cd ~/projetos || exit

if [ -d "quantumcore-finance-web" ]; then
  echo "📁 Pasta quantumcore-finance-web já existe."
  cd quantumcore-finance-web || exit
  
  echo "🔄 Atualizando repositório existente..."
  git fetch origin main
  git pull origin main
else
  echo "📥 Clonando repositório QuantumCore Finance..."
  git clone git@github.com:ReginaldoGonssavre/quantumcore-finance-web.git
  cd quantumcore-finance-web || exit
fi

echo ""
echo "=== Instalando dependências do projeto ==="
if [ -f "package.json" ]; then
  echo "📦 Instalando dependências Node.js..."
  npm install
else
  echo "⚠️  Arquivo package.json não encontrado"
fi

echo ""
echo "=== Configuração concluída! ==="
echo "✅ Git configurado para ReginaldoGonssavre"
echo "✅ SSH configurado para GitHub"
echo "✅ Repositório clonado/atualizado"
echo "✅ Dependências instaladas"
echo ""
echo "📍 Localização do projeto: ~/projetos/quantumcore-finance-web"
echo ""
echo "🚀 Comandos úteis:"
echo "   cd ~/projetos/quantumcore-finance-web  # Navegar para o projeto"
echo "   npm run dev                            # Iniciar servidor de desenvolvimento"
echo "   npm run build                          # Fazer build do projeto"
echo "   git status                             # Ver status do repositório"
echo "   git add . && git commit -m 'mensagem'  # Fazer commit"
echo "   git push origin main                   # Enviar para GitHub"
echo ""
echo "✨ QuantumCore Finance configurado com sucesso!"
