# Ubuntu 服务器优化



## 内核优化提高并发


### 设置文件打开句柄数
```sh
# 查看系统默认的值
ulimit -n
# 设置最大打开文件数
ulimit -n 1000000

```

```sh 
sudo vim /etc/security/limits.conf
```

通过修改配置文件的方式修改程序最大打开句柄数可以永久有效：
```conf
root soft nofile 1040000
root hard nofile 1040000

root soft nofile 1040000
root hard nproc 1040000

root soft core unlimited
root hard core unlimited

* soft nofile 1040000
* hard nofile 1040000

* soft nofile 1040000
* hard nproc 1040000

* soft core unlimited
* hard core unlimited
```

```sh
~$ sudo vim /etc/security/limits.conf
#root账⼾的资源软限制和硬限制
root soft core unlimited
root hard core unlimited
root soft nproc 1000000
root hard nproc 1000000
root soft nofile 1000000
root hard nofile 1000000
root soft memlock 32000
root hard memlock 32000
root soft msgqueue 8192000
root hard msgqueue 8192000
#其他账⼾的资源软限制和硬限制
* soft core unlimited
* hard core unlimited
* soft nproc 1000000
* hard nproc 1000000
* soft nofile 1000000
* hard nofile 1000000
* soft memlock 32000
* hard memlock 32000
* soft msgqueue 8192000
* hard msgqueue 8192000
```


修改完成以后需要重启机器配置才能生效.



### 设置sockets连接参数


```sh
vim /etc/sysctl.conf
```

```sh
# 配置参考
net.ipv4.tcp_tw_reuse = 1
net.ipv4.ip_local_port_range = 1024 65000
net.ipv4.tcp_mem = 786432 2097152 3145728
net.ipv4.tcp_rmem = 4096 4096 16777216
net.ipv4.tcp_wmem = 4096 4096 16777216

```



### 内核优化

```sh
$ sudo vim /etc/sysctl.conf

# Controls source route verification
net.ipv4.conf.default.rp_filter = 1
net.ipv4.ip_nonlocal_bind = 1
net.ipv4.ip_forward = 1
# Do not accept source routing
net.ipv4.conf.default.accept_source_route = 0
# Controls the System Request debugging functionality of the kernel
kernel.sysrq = 0
# Controls whether core dumps will append the PID to the core filename.
# Useful for debugging multi-threaded applications.
kernel.core_uses_pid = 1
# Controls the use of TCP syncookies
net.ipv4.tcp_syncookies = 1
# Disable netfilter on bridges.
net.bridge.bridge-nf-call-ip6tables = 0
net.bridge.bridge-nf-call-iptables = 0
net.bridge.bridge-nf-call-arptables = 0
# Controls the default maxmimum size of a mesage queue
kernel.msgmnb = 65536
# # Controls the maximum size of a message, in bytes
kernel.msgmax = 65536
# Controls the maximum shared segment size, in bytes
kernel.shmmax = 68719476736
# # Controls the maximum number of shared memory segments, in pages
kernel.shmall = 4294967296
# TCP kernel paramater
net.ipv4.tcp_mem = 786432 1048576 1572864
net.ipv4.tcp_rmem = 4096 87380 4194304
net.ipv4.tcp_wmem = 4096 16384 4194304
net.ipv4.tcp_window_scaling = 1
net.ipv4.tcp_sack = 1
# socket buffer
net.core.wmem_default = 8388608
net.core.rmem_default = 8388608
net.core.rmem_max = 16777216
net.core.wmem_max = 16777216
net.core.netdev_max_backlog = 262144
net.core.somaxconn = 20480
net.core.optmem_max = 81920
# TCP conn
net.ipv4.tcp_max_syn_backlog = 262144
net.ipv4.tcp_syn_retries = 3
net.ipv4.tcp_retries1 = 3
net.ipv4.tcp_retries2 = 15
# tcp conn reuse
net.ipv4.tcp_timestamps = 0
net.ipv4.tcp_tw_reuse = 0
net.ipv4.tcp_tw_recycle = 0
net.ipv4.tcp_fin_timeout = 1
net.ipv4.tcp_max_tw_buckets = 20000
net.ipv4.tcp_max_orphans = 3276800
net.ipv4.tcp_synack_retries = 1
net.ipv4.tcp_syncookies = 1
# keepalive conn
net.ipv4.tcp_keepalive_time = 300
net.ipv4.tcp_keepalive_intvl = 30
net.ipv4.tcp_keepalive_probes = 3
net.ipv4.ip_local_port_range = 10001 65000
# swap
vm.overcommit_memory = 0
vm.swappiness = 10
#net.ipv4.conf.eth1.rp_filter = 0
#net.ipv4.conf.lo.arp_ignore = 1
#net.ipv4.conf.lo.arp_announce = 2
#net.ipv4.conf.all.arp_ignore = 1
#net.ipv4.conf.all.arp_announce = 2

```

内核配置详情

```sh
$ sudo vim /etc/sysctl.conf

#Controls source route verification
#启用源路由核查功能
net.ipv4.conf.default.rp_filter = 1

#允许非本地IP地址socket监听
net.ipv4.ip_nonlocal_bind = 1

#开启IPV4转发
net.ipv4.ip_forward = 1

# Do not accept source routing
# 禁用所有IP源路由
net.ipv4.conf.default.accept_source_route = 0

# Controls the System Request debugging functionality of the kernel
#关闭sysrq组合键
kernel.sysrq = 0

# Controls whether core dumps will append the PID to the core filename.
# Useful for debugging multi-threaded applications
#控制core文件的文件名是否添加pid作为扩展
kernel.core_uses_pid = 1

# Controls the use of TCP syncookies
#与性能无关。用于解决TCP的SYN攻击
net.ipv4.tcp_syncookies = 1

# Controls the default maxmimum size of a mesage queue, in bytes
#每个消息队列的大小限制（单位：字节）
kernel.msgmnb = 65536

# Controls the maximum size of a message, in bytes
#整个系统最大消息队列数量限制
kernel.msgmax = 65536

# Controls the maximum shared segment size, in bytes
#单个共享内存段大小（单位：字节）
kernel.shmmax = 68719476736

# Controls the maximum number of shared memory segments, in pages
#所有内存大小（单位：页）
kernel.shmall = 4294967296


# TCP kernel paramater
#1st低于此值，TCP没有内存压力，2nd进入内存压力阶段，3rd TCP拒绝分配socket（单位：内存页）
net.ipv4.tcp_mem = 786432 1048576 1572864

#定义TCP接受socket请求缓存的内存最小值、默认值、较大值
net.ipv4.tcp_rmem = 4096 87380 4194304

#定义TCP发送缓存的最小值、默认值、最大值
net.ipv4.tcp_wmem = 4096 16384 4194304

#支持更大的TCP窗口，如果TCP窗口最大超过65535（64K），必须设置该数值为1
net.ipv4.tcp_window_scaling = 1

#开启有选择应答
net.ipv4.tcp_sack = 1


# socket buffer
#表示内核套接字接受缓存区默认大小
net.core.wmem_default = 8388608

#表示内核套接字发送缓存区默认大小
net.core.rmem_default = 8388608

#表示内核套接字接受缓存区较大大小
net.core.rmem_max = 16777216

#表示内核套接字发送缓存区较大大小
net.core.wmem_max = 16777216

#当网卡接收数据包的速度大于内核处理速度时，会有一个队列保存这些数据。这个参数表示该队列的较大值
net.core.netdev_max_backlog = 262144

#默认值128，这个参数用于调节系统同时发起TCP连接数，在高并发的请求中，默认值可能会导致连接超时或者重传，因此需要结合高并发请求数来调整此值
net.core.somaxconn = 20480
net.core.optmem_max = 81920

# TCP conn
#这个参数表示TCP三次握手建立阶段接受SYN请求队列的较大长度，默认1024，将其设置大一些可使出现nginx繁忙来不及accept新连接，linux不至于丢失客户端发起的连接请求
net.ipv4.tcp_max_syn_backlog = 262144

#该变量设置放弃回应一个tcp连接请求前，需要进行多少次重试。
net.ipv4.tcp_retries1 = 3

#控制内核向已经建立连接的远程主机重新发送数据的次数，低值可以更早的检测到与远程主机失效的连接，因此服务器可以更快的释放该连接，可以修改为5
net.ipv4.tcp_retries2 = 15

#快速回收TIME_WAIT状态，用于大量TIME_OUT场景
net.ipv4.tcp_tw_recycle = 0


# tcp conn reuse
#是否开启数据包时间戳
net.ipv4.tcp_timestamps = 0

#端口复用，参数值设置为1，表示允许将TIME_WAIT的状态socket重新用于新的TCP连接，这对于服务器来说意义重大，因为总是有大量TIME_WAIT状态的连接存在
net.ipv4.tcp_tw_reuse = 0

#当服务器主动关闭连接时，socket保持在FIN_WAIT_2状态的较大时间
net.ipv4.tcp_fin_timeout = 1

#表示操作系统允许TIME_WAIT套接字数量的最大值，如果超过此值，TIME_WAIT套接字将立刻被清除并打印警告信息默认为8000，过多的TIME_WAIT套接字会使web服务变慢
net.ipv4.tcp_max_tw_buckets = 20000

#选项用于设置系统中最多有多少个TCP套接字不被关联到任何一个用户句柄上。如果超过这个数字，孤立连接数将立即被复位并输出警告信息。这个限制只是为了防止简单DOS攻击不用过分依靠这个限制，甚至认为减小这个值 ，更多的情况是增加这个值
net.ipv4.tcp_max_orphans = 3276800

#表示应用程序进行connect()系统调用时，在对方不返回SYN + ACK的情况下(也就是超时的情况下)，第一次发送之后，内核最多重试几次发送SYN包;
net.ipv4.tcp_synack_retries = 1

#开启SYN Cookies，当出现SYN等待队列溢出时，启用cookies来处理
net.ipv4.tcp_syncookies = 1


# keepalive conn
#当keepalive启动时，TCP发送keepalive消息的频度，默认2小时，将其设置为5分钟，可更快的清理无效连接
net.ipv4.tcp_keepalive_time = 300

#当探测没有确认时，重新发送探测的频度。缺省是75秒。
net.ipv4.tcp_keepalive_intvl = 30

#在认定连接失效之前，发送多少个TCP的keepalive探测包。缺省值是9。这个值乘以tcp_keepalive_intvl之后决定了，一个连接发送了keepalive之后可以有多少时间没有回应
net.ipv4.tcp_keepalive_probes = 3

#定义UDP和TCP连接的本地端口的取值范围
net.ipv4.ip_local_port_range = 10001 65000


# swap
#0， 表示内核将检查是否有足够的可用内存供应用进程使用；如果有足够的可用内存，内存申请允许；否则，内存申请失败，并把错误返回给应用进程。1， 表示内核允许分配所有的物理内存，而不管当前的内存状态如何。2， 表示内核允许分配超过所有物理内存和交换空间总和的内存
vm.overcommit_memory = 0

#数值可设置范围在0到100之间。 低参数值会让内核尽量少用交换，更高参数值会使内核更多的去使用交换空间。默认值为60。当系统存在足够内存时，推荐设置为该值以提高性能。
vm.swappiness = 10

# 表示单个进程可以打开的句柄数
fs.file-max = 1000000
```



### 优化工具

```sh
$ sudo apt install tuned
```

静态调优方法：

```
tuned-adm list // 列出所有的默认的调优策略
tuned-adm active //查看现在生效的调优策略
tuned-adm recommand //查看tuned目前推荐使用的策略
tuned-adm profile 方案名称 // 修改调优方案，使用新的调优策略
tuned-adm off //关闭调优策略
```




## mysql 优化

```sh
$ sudo vim /etc/mysql/mysql.conf.d/mysqld.cnf
$ sudo systemctl restart mysql.service
$ ./mysqltuner.pl --user root --pass='VQnK7Kz@dTr#pu2s7'
```









## 系统优化

![Linux](/images/linux/1.png)
![Linux](/images/linux/2.png)
![Linux](/images/linux/3.png)
![Linux](/images/linux/4.png)
![Linux](/images/linux/5.png)
![Linux](/images/linux/6.png)
![Linux](/images/linux/7.png)
![Linux](/images/linux/8.png)
![Linux](/images/linux/9.png)
