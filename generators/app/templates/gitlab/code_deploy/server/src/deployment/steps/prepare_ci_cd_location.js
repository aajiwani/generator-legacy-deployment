var argv = require('minimist')(process.argv.slice(2));

let serverEncryptedKey = argv.input;
let serverDecryptedKey = 

#!/bin/bash
cd server_key
KEY_PATH="$(pwd)"

INPUT_FILE="${KEY_PATH}/aws_key.pem.enc"
OUTPUT_FILE="${KEY_PATH}/aws_key.pem"

openssl aes-256-cbc -d -a -in aws_key.pem.enc -out aws_key.pem -k "${KEYSTORE_ENCRYPTION_PASSWORD}" -md md5

chmod 400 aws_key.pem
printf "Server Key Folder"
SSH_KEY_PATH="${KEY_PATH}/aws_key.pem"
cd -

echo "export SSH_KEY_PATH=${SSH_KEY_PATH}" >> environment_vars.sh
