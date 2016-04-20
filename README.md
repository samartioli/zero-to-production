# Zero to Production in 60

#### Services

- [Google Domains](https://domains.google.com/registrar#sp&chp=sp)
- [Cloud Flare](https://www.cloudflare.com)
- [Digital Ocean](https://www.digitalocean.com/)
- [App Dynamics](https://www.appdynamics.com)

#### Technologies and Frameworks

- [Node.js](https://nodejs.org/en/)
- [Docker](https://docs.docker.com/)
- [Ionic](ionicframework.com)
___

## Steps

#### Step 1: Find a domain at [Google Domains](https://domains.google.com/registrar#sp&chp=sp)

#### Step 2: Set up Name Servers at [Cloud Flare](https://www.cloudflare.com)

#### Step 3: Start up a Docker Machine
Docker has great resources for [Docker Machine](https://docs.docker.com/machine/get-started-cloud/)

    docker-machine create \
        --driver digitalocean \
        --digitalocean-access-token \
        `cat do.token` \
        talkie
    docker-machine env talkie

#### Step 4: Test Docker Machine

    docker build -t test .
    docker run --name test -d -p 8080:80 test
    docker-machine ip talkie

### Step 5: Point domain to ip
Set up the DNS A and CNAME records at [Cloud Flare](https://www.cloudflare.com)
    http://ands.io:8080/

### Step 6: Create Ionic App
Great Documentation <http://ionicframework.com/getting-started/>

    ionic start walkie-client blank
    ionic start

### Step 7: Add Libraries

    bower install --save moment lodash

    <script type="text/javascript" src="https://cdn.socket.io/socket.io-1.4.5.js"></script>

### Step 8: Add Code

### Step 9: Create Server

    mkdir walkie-server
    npm init
    npm install --save socket.io lodash

## Things I left out
- Unit Testing
- Build Phase
- CI/CD
