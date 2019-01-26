#!/bin/bash

append_to_environment() {
    local ENV_FILE=$3
    local KEY=$1
    local VALUE=$2

    echo "export ${KEY}='${VALUE}'" >> ${ENV_FILE}
}