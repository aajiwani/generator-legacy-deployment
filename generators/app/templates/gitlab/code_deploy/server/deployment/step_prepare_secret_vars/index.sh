#!/bin/bash
echo "#!/bin/bash" >> secret_var.sh

# Private vars
DIR_HASH=$(printf '%s' "${CI_COMMIT_REF_NAME}" | md5sum | cut -d ' ' -f 1)

# Project URL
echo "export PROJECT_URL=${BASE_URL}" >> secret_var.sh
echo "export PROJECT_DEPLOY_PATH=${PROJECT_DEPLOY_PATH}" >> secret_var.sh
echo "export GITLAB_CURR_CI_PATH=${SERVER_CI_PATH}/${CI_PROJECT_NAME}/${CI_JOB_ID}" >> secret_var.sh
echo "export BASE_URL=${BASE_URL}" >> secret_var.sh
echo "export HOST_DIR=${DIR_HASH}" >> secret_var.sh
echo "export DB_DATABASE=${DB_DATABASE}" >> secret_var.sh
echo "export DB_USERNAME=${DB_USERNAME}" >> secret_var.sh
echo "export DB_PASSWORD=${DB_PASSWORD}" >> secret_var.sh

echo "export MAIL_HOST=${MAIL_HOST}" >> secret_var.sh
echo "export MAIL_PORT=${MAIL_PORT}" >> secret_var.sh
echo "export MAIL_USERNAME=${MAIL_USERNAME}" >> secret_var.sh
echo "export MAIL_PASSWORD=${MAIL_PASSWORD}" >> secret_var.sh

echo "export FACEBOOK_CLIENT_ID=${FACEBOOK_CLIENT_ID}" >> secret_var.sh
echo "export FACEBOOK_CLIENT_SECRET=${FACEBOOK_CLIENT_SECRET}" >> secret_var.sh
echo "export FACEBOOK_CALLBACK_URL=${FACEBOOK_CALLBACK_URL}" >> secret_var.sh
echo "export GOOGLE_CLIENT_ID=${GOOGLE_CLIENT_ID}" >> secret_var.sh
echo "export GOOGLE_CLIENT_SECRET=${GOOGLE_CLIENT_SECRET}" >> secret_var.sh
echo "export GOOGLE_CALLBACK_URL=${GOOGLE_CALLBACK_URL}" >> secret_var.sh

chmod +x secret_var.sh
