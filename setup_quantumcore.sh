#!/bin/bash

echo "=== Atualizando sistema e instalando Git e SSH ==="
pkg update && pkg upgrade -y
pkg install git openssh -y

echo "=== Configurando Git ==="
git config --global user.name "ReginaldoGonssavre"
git config --global user.email "raviapowersync@gmail.com"

echo "=== Gerando chave SSH (se já existir, pule esta etapa) ==="
if [ ! -f ~/.ssh/id_ed25519 ]; then
  ssh-keygen -t ed25519 -C "raviapowersync@gmail.com" -f ~/.ssh/id_ed25519 -N ""
else
  echo "Chave SSH já existe, pulando geração."
fi

echo "=== Sua chave pública SSH ==="
cat ~/.ssh/id_ed25519.pub
echo "Copie essa chave e adicione no GitHub em https://github.com/settings/keys"
read -p "Pressione Enter para continuar após adicionar a chave no GitHub..."

echo "=== Clonando repositório QuantumCore Finance Web ==="
cd ~
if [ -d "quantumcore-finance-web" ]; then
  echo "Pasta quantumcore-finance-web já existe. Pulando clone."
  cd quantumcore-finance-web
else
  git clone git@github.com:ReginaldoGonssavre/quantumcore-finance-web.git
  cd quantumcore-finance-web || exit
fi

echo "=== Atualizando branch main com rebase para evitar conflitos ==="
git fetch origin main
git rebase origin/main || {
  echo "Detectado conflito, tentando resolver arquivo CNAME automaticamente..."
  # Força manter conteúdo local do CNAME
  git checkout --ours CNAME
  git add CNAME
  git rebase --continue || {
    echo "Não foi possível continuar rebase. Abortando..."
    git rebase --abort
    exit 1
  }
}

echo "=== Enviando alterações para o GitHub ==="
git push origin main

echo "=== Testando conexão SSH com GitHub ==="
ssh -T git@github.com

echo "=== Script finalizado com sucesso! ==="
