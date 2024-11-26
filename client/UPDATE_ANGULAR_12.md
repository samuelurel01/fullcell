## Baixe e instale o gerenciador NVM

> curl -sL https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh -o install_nvm.sh

> bash install_nvm.sh

#
## Export o binario

> export NVM_DIR="$HOME/.nvm"\
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"                   # This loads nvm\
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion" # This loads nvm bash_completion

#
## Reload seu bash
> source ~/.bashrc

#
## Verifique a versão do nvm
> nvm -v

**Output: 0.39.3**

#
## Install Node 14.21.3
> nvm install 14.21.3

#
## Set default a versão 14.21.3
> nvm alias default 14.21.3

#
## Verifique a versão do Node
> node -v

**Output: v14.21.3**

#
## Apague a node_modules

> sonner-web-angular/node_modules

#
## Execute o script - first-install
> npm run first-install 