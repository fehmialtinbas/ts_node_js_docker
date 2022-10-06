# TS CYCLE

This application directly returns your request as respond.

# Step 1

Clone Project

# Step 2

docker-compose build

# Step 3

docker-compose up

when your container up you can send request

http://localhost:8088/log/log

<img width="1022" alt="image" src="https://user-images.githubusercontent.com/86653377/194014354-eb1e94e9-2ffe-4e2d-854d-bf7f01d32e21.png">



---------------------------
#Get Docker Image

docker pull mfehmialtinbas/ts_cycle:1.0

#Start service

docker run -p 8088:8088 mfehmialtinbas/ts_cycle:1.0
