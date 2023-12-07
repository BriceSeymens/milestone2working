wget -O docker.sh https://get.docker.com/
bash docker.sh
sudo usermod -aG docker vagrant
newgrp docker