---
path: '/docs'
title: 'Punch CLI Reference Guide'
nav:
  - name: 'Setup'
    href: '#setup-top'
    routes:      
      - name: 'Setup Command'
        href: '#setup'
      - name: 'Login'
        href: '#login'
      - name: 'Generate key'
        href: '#generate-key'
  - name: 'Subdomain'
    href: '#subdomain'
    routes:
      - name: 'List'
        href: '#list'
      - name: 'Reserve'
        href: '#reserve'
      - name: 'Release'
        href: '#release'
  - name: 'Tunnels'
    href: '#tunnels'
    routes:
      - name: 'HTTP'
        href: '#http'
      - name: 'HTTPS'
        href: '#https'
      - name: 'Multiple ports'
        href: '#it'
  - name: 'Update'
    href: '#update'
  - name: 'Cleanup'
    href: '#cleanup'
---

<a name="setup-top"></a>

# Setup

<a name="setup"></a>

## Setup Command

Setup punch (run this first)

### Synopsis

Sets up punch for usage.

This will ask you for your holepunch credentials and help you create pub/priv keys if needed.

`punch setup [flags]`

### Options

`  -h, --help   help for setup`

<a name="login"></a>

## Login

Login to holepunch.

### Synopsis

Will prompt you for username and password, or you can provide them as optional arguments.

If this is your first time using punch, you should use `punch setup` instead of `punch login`.

`punch login [flags]`

### Options

`  -h, --help              help for login`

`  -p, --password string   Your holepunch.io password`

`  -u, --username string   Your holepunch.io username`

<a name="generate-key"></a>

## Generate Key

Generates a pub/priv keypair at the specified location

### Synopsis

Generates a pub/priv keypair at the specified location otherwise defaults to current directory.

You can also specify a name for it using the `-n` flag.

`punch generate-key [directory] [flags]`

### Options

`  -n, --filename string   The name your new key files will have (default "holepunch_key")`

`  -h, --help              help for generate-key`

<a name="subdomain"></a>

# Subdomain 

<a name="list"></a>

## List

List your subdomains

### Synopsis

List subdomains you have previously reserved or that are currently in use by you.

`punch list [flags]`

### Options

`  -h, --help   help for list`

<a name="reserve"></a>

## Reserve

Reserve a subdomain

### Synopsis

Reserve a subdomain to secure the subdomain for future use.

Once reserved only you can use it.

`punch reserve <subdomain> [flags]`

### Options

`  -h, --help   help for reserve`

<a name="release"></a>

## Release

Release subdomain

### Synopsis

Release a subdomain you have reserved.

`punch release <subdomain> [flags]`

### Options

`  -h, --help   help for release`

<a name="tunnels"></a>

# Tunnels 

<a name="http"></a>

## HTTP

Expose a local web server on the port you specify

### Synopsis

Expose a local web server on the port you specify.

Example: `punch http 8080` will expose a local web server running on port 8080.

You can provide an optional 2nd argument to specify the name of a reserved subdomain you want to associate this with.

Example: `punch http 8080 mydomain` will expose a local web server running on port 8080 via "http://mydomain.holepunch.io".

Otherwise it will default to using a new unreserved subdomain.

`punch http <port> [subdomain] [flags]`

### Options

`  -h, --help   help for http`

<a name="https"></a>

## HTTPS

Expose a local https web server on the port you specify

### Synopsis

Expose a local https server on the port you specify.

Example: `punch https 8443` will expose a local https web server running on port 8443.

You can provide an optional 2nd argument to specify the name of a reserved subdomain you want to associate this with.

Example: `punch https 8443 mydomain` will expose a local https web server running on port 8443 via "https://mydomain.holepunch.io".

Otherwise it will default to using a new unreserved subdomain.

`punch https <port> [subdomain] [flags]`

### Options

`  -h, --help   help for https`

<a name="it"></a>

## It

Expose a local web server on the ports you specify

### Synopsis

Expose a local web server on the ports you specify.

Example: `punch it http:8080 https:8443` will expose a local web server running on port 8080 and an https web server running on port 8443.

You can provide an optional argument to specify the name of a reserved subdomain you want to associate this with.

Example: `punch it http:8080 https:8443 mydomain` will expose a local web server running on port 8080 via "http://mydomain.holepunch.io" and an https web server running on port 8443 via "https://mydomain.holepunch.io".

Otherwise it will default to using a new unreserved subdomain.

`punch it <type:port>... [subdomain] [flags]`

### Options

`  -h, --help   help for it`

<a name="update"></a>

## Update

Update CLI version

### Synopsis

Update CLI to latest release on github.

`punch update [flags]`

### Options

`  -h, --help   help for update`

<a name="cleanup"></a>

## Cleanup

Cleanup a subdomain that is incorrectly marked as "In Use"

### Synopsis

Cleanup a subdomain that is incorrectly marked as "In Use".

This closes the tunnel from our end and updates the subdomain database.

`punch cleanup <subdomain> [flags]`

### Options

`  -h, --help   help for cleanup`

