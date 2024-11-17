---
title: Setup a git repo on server
description: How to setup and access a git repository on a server
pubDate: Nov 17 2024
---

I want to setup a remote git repository on my Raspberry Pi home server. I want to access it from my desktop computer to be able to push code to it. In the next step I will be using git to trigger deploys on my home server, but that will be covered in another article. 

Let us se what we have to do!

## What steps do we need to take?

- [ ] Install Git
- [ ] Setup dedicated git user (optional, but recommended)
- [ ] Setup SSH
- [ ] Add SSH key (optional, but recommended) 🔑
- [ ] Try it out and celebrate! 🥳

## Install Git and setup dedicated user

The following command will update list of available packages and install git:

``` bash
sudo apt update 
sudo apt install git -y
```

Add a new user named `git`:

``` bash
sudo adduser git
```

When running the command you will be asked to set a password and enter some information about the new user. Most fields are optional, so you can just enter whatever you want.

Now to switch to the `git` user:

``` bash
sudo su - git
```
## Setup SSH and add SSH key

On the desktop machine we have to generate a SSH key pair. This can be done by running the following command and follow the instructions:

``` bash
ssh-keygen -t rsa -b 4096
```

On you server, when acting as the new user `git`, create a new `.ssh` with a file `authorized_keys`:

``` bash
mkdir ~/.ssh
touch ~/.ssh/authorized_keys
```

Look down permissions so that only the `git` user have access:

``` bash
chmod 700 ~/.ssh
chmod 600 ~/.ssh/authorized_keys
```

Open the `authorized_keys` file with nano, and add the key from the `id_rsa.pub` file on your desktop (probably found under `C:\Users\YourUsername\.ssh`):

``` bash
nano ~/.ssh/authorized_keys
```

If everything is correctly setup you should be able to access your server with the `git` user using SSH, without any password, from you desktop like this:

``` bash
ssh git@your-server-hostname-or-ip
```

And it works form me (and I hope for you too)! 🍺

- [x] Install Git ✅
- [x] Setup dedicated git user (optional, but recommended) ✅
- [x] Setup SSH ✅
- [x] Add SSH key (optional, but recommended) 🔑 ✅
## Lets try to create a repo

Now, I would also like to verify that with this setup I am able to work with a repository found on my server on my desktop computer. Let us see how it turns out!
### Create a new repo on the server

I will first create a common folder for repositories in the home catalog of the `git` user:

``` bash
mkdir -p ~/repos
sudo chown -R git:git ~/repos
```

After that I add a new folder under `repos` for my new git repo:

``` bash
mkdir -p ~/repos/ThisIsProject.git
```

Go to the new folder and initialize a git repo:

``` bash
cd ~/repos/ThisIsProject.git
git init --bare
```

### Clone the new repository from the desktop

Form my desktop I can now clone the new repository like this:

``` bash
git clone git@your-server-hostname-or-ip:/home/git/repos/ThisIsProject.git
```

When doing this I got the following in my terminal:

``` bash
Cloning into 'ThisIsProject'...
warning: You appear to have cloned an empty repository.
```

As another test I added a textfile and pushed it. It all seems to work, so time for celebration! 🎉

- [x] Try it out and celebrate! 🥳 ✅

Thank you for reading!
