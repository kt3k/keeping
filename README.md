# keeping v0.1.0
> A tool for measuring round-trip time of http requests under a Keep-Alived connection.

## Usage

```sh
$ npm install -g keeping
$ keeping http://www.example.com/
```

sample output is:
```
$ keeping http://www.example.com/
pinging to http://www.example.com/
status=200 rtt=254ms body=<!doctype html>...(length=1270B)
status=200 rtt=118ms body=<!doctype html>...(length=1270B)
status=200 rtt=117ms body=<!doctype html>...(length=1270B)
status=200 rtt=117ms body=<!doctype html>...(length=1270B)
status=200 rtt=117ms body=<!doctype html>...(length=1270B)
status=200 rtt=117ms body=<!doctype html>...(length=1270B)
status=200 rtt=121ms body=<!doctype html>...(length=1270B)
status=200 rtt=117ms body=<!doctype html>...(length=1270B)
status=200 rtt=116ms body=<!doctype html>...(length=1270B)
status=200 rtt=117ms body=<!doctype html>...(length=1270B)
avg=131.1ms
avg[1:]=117.44444444444444ms
```
