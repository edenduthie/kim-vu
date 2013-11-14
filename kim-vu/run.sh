#!/bin/bash
cd /root/code/kim-vu/kim-vu
export PATH=$PATH:/usr/local/bin
export HOME=/root
set >> ya.txt
nohup /usr/local/bin/meteor --port 80 >/dev/null 2>&1 &
