# 问题列表
* 开发中， 或环境上出现的问题，原因及解决办法列表
## 通用

### 开发相关

### 环境相关
### 配置相关


## Thaicloud
## LMG

### 开发相关
#### 调用API 随机出现 Connection reset 异常 
* 环境： AWS 
* 问题描述： 系统在调用客户api 时，spring rest template 随机出现 connection reset 异常
* 问题原因：
We had a similar problem when migrating to AWS/Kubernetes. I've found out why.

You're using a connection pool. The default behavior of the PoolingHttpClientConnectionManager is that it will reuse connections. So connections will not be closed immediately when your request is done. This will save resources by not having to reconnect all the time.

A Kubernetes cluster uses a NAT (Network Address Translation) for outgoing connections. When a connection is not used for a certain amount of time, the connection will be removed from the NAT-table, and the connection will be broken. This causes the seemingly random SSLExceptions.

On AWS, connections will be removed from the NAT-table when it is Idle for 350 seconds. Other Kubernetes instances might have other settings.
https://stackoverflow.com/questions/64810671/spring-boot-random-sslexception-connection-reset-in-kubernetes-with-jdk11

* 解决办法： 
Disable connection-reuse:
``` java
final CloseableHttpClient closeableHttpClient = HttpClients.custom()
    .setConnectionReuseStrategy(NoConnectionReuseStrategy.INSTANCE)
    .setConnectionManager(poolingHttpClientConnectionManager)
    .build();
```
Or, let the httpClient evict connections that are idle for too long:

``` java
return HttpClients.custom()
            .evictIdleConnections(300, TimeUnit.SECONDS)  //Read the javadocs, may not be used when the instance of HttpClient is created inside an EJB container.
            .setConnectionManager(poolingHttpClientConnectionManager)
            .build();
```

 