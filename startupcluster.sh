kind create cluster --name milestone2cluster-bs --config=/vagrant/kindconfig_bs
kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/master/deploy/static/provider/kind/deploy.yaml
kubectl wait --namespace ingress-nginx --for=condition=ready pod --selector=app.kubernetes.io/component=controller --timeout=120s
kubectl apply -f /vagrant/deploymentnginx_bs.yaml
kubectl apply -f /vagrant/deploymentnode_bs.yaml
kubectl apply -f /vagrant/volumes/pvc.yaml
kubectl apply -f /vagrant/deploymentpostgresql_bs.yaml
kubectl apply -f /vagrant/servicenginx_bs.yaml
kubectl apply -f /vagrant/servicenode_bs.yaml
kubectl apply -f /vagrant/servicepostgresql_bs.yaml
kubectl apply -f /vagrant/ingress/nginx-ingress.yaml
kubectl apply -f /vagrant/ingress/node-ingress.yaml