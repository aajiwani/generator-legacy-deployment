#!/bin/bash

repeat_string () {
	local OUTPUT=""
    for (( c=1; c<=${2}; c++ ))
    do
        OUTPUT+=${1}
    done
	echo ${OUTPUT}
}

add_heading () {
    local PREPARED_STRING="| ${1} |"
    local HEADING_LENGTH=${#PREPARED_STRING}
    repeat_string "=" ${HEADING_LENGTH}
    echo "${PREPARED_STRING}"
    repeat_string "=" ${HEADING_LENGTH}
    echo ""
}