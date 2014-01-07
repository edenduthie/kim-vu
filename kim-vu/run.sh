#!/bin/bash
cd /root/code/kim-vu/kim-vu
export PATH=$PATH:/usr/local/bin
export HOME=/root
nohup /usr/local/bin/meteor --port 8023 >/dev/null 2>&1 &
