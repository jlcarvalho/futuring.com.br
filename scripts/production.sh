URL=$(echo $(now open -t $ZEIT_TOKEN) | grep -Eo 'https://[^ >]+' | head -1)
echo "Running simple check on $URL"
curl --silent -i -L $URL
now alias $URL futuring.com.br -t $ZEIT_TOKEN
now alias $URL www.futuring.com.br -t $ZEIT_TOKEN
now alias $URL futuring -t $ZEIT_TOKEN