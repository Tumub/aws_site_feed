#!/bin/bash
set -e

# Backup
sudo cp /etc/nginx/nginx.conf /etc/nginx/nginx.conf.bak.$(date +%s)

# Add map block if not exists
if ! grep -q "map \$remote_addr \$ip_anonymized" /etc/nginx/nginx.conf; then
    sudo sed -i '/http {/a \    map $remote_addr $ip_anonymized {\n        ~(?P<ip>\\d+\\.\\d+\\.\\d+)\\.    $ip.0;\n        ~(?P<ip>[^:]+:[^:]+):       $ip::;\n        default                     0.0.0.0;\n    }\n    log_format anonymized '\''$ip_anonymized - $remote_user [$time_local] "$request" $status $body_bytes_sent "$http_referer" "$http_user_agent"'\'';' /etc/nginx/nginx.conf
fi

# Update access_log
sudo sed -i 's|access_log /var/log/nginx/access.log;|access_log /var/log/nginx/access.log anonymized;|' /etc/nginx/nginx.conf

# Reload
sudo nginx -t
sudo systemctl reload nginx
echo "NGINX_HARDENED"
