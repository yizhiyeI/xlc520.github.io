const e=JSON.parse('{"key":"v-49d04651","path":"/linux/%E8%AF%A6%E8%A7%A3K8S%E9%AB%98%E5%8F%AF%E7%94%A8%E9%83%A8%E7%BD%B2.html","title":"详解 K8S 高可用部署","lang":"zh-CN","frontmatter":{"author":"xlc520","title":"详解 K8S 高可用部署","description":"详解 K8S 高可用部署 一、前言 二、基础环境部署 1）前期准备（所有节点） 2）安装容器 docker（所有节点） 3）配置 k8s yum 源（所有节点） 4）将 sandbox_image 镜像源设置为阿里云 google_containers 镜像源（所有节点） 5）配置 containerd cgroup 驱动程序 systemd（所有节点） 6）开始安装 kubeadm，kubelet 和 kubectl（master 节点） 7）使用 kubeadm 初始化集群（master 节点） 8）安装 Pod 网络插件（CNI：Container Network Interface）(master) 9）node 节点加入 k8s 集群 10）配置 IPVS 11）集群高可用配置 12）部署 Nginx+Keepalived 高可用负载均衡器","date":"2022-11-05T00:00:00.000Z","category":"Linux","tag":["Linux","k8s"],"article":true,"timeline":true,"icon":"linux","head":[["meta",{"property":"og:url","content":"https://blog.ciberviler.top/linux/%E8%AF%A6%E8%A7%A3K8S%E9%AB%98%E5%8F%AF%E7%94%A8%E9%83%A8%E7%BD%B2.html"}],["meta",{"property":"og:site_name","content":"StudyNote"}],["meta",{"property":"og:title","content":"详解 K8S 高可用部署"}],["meta",{"property":"og:description","content":"详解 K8S 高可用部署 一、前言 二、基础环境部署 1）前期准备（所有节点） 2）安装容器 docker（所有节点） 3）配置 k8s yum 源（所有节点） 4）将 sandbox_image 镜像源设置为阿里云 google_containers 镜像源（所有节点） 5）配置 containerd cgroup 驱动程序 systemd（所有节点） 6）开始安装 kubeadm，kubelet 和 kubectl（master 节点） 7）使用 kubeadm 初始化集群（master 节点） 8）安装 Pod 网络插件（CNI：Container Network Interface）(master) 9）node 节点加入 k8s 集群 10）配置 IPVS 11）集群高可用配置 12）部署 Nginx+Keepalived 高可用负载均衡器"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-08-01T15:10:28.000Z"}],["meta",{"property":"article:author","content":"xlc520"}],["meta",{"property":"article:tag","content":"Linux"}],["meta",{"property":"article:tag","content":"k8s"}],["meta",{"property":"article:published_time","content":"2022-11-05T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-08-01T15:10:28.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"详解 K8S 高可用部署\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-11-05T00:00:00.000Z\\",\\"dateModified\\":\\"2023-08-01T15:10:28.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"xlc520\\"}]}"]]},"headers":[{"level":3,"title":"一、前言","slug":"一、前言","link":"#一、前言","children":[]},{"level":3,"title":"二、基础环境部署","slug":"二、基础环境部署","link":"#二、基础环境部署","children":[]},{"level":3,"title":"三、k8s 管理平台 dashboard 环境部署","slug":"三、k8s-管理平台-dashboard-环境部署","link":"#三、k8s-管理平台-dashboard-环境部署","children":[]},{"level":3,"title":"四、k8s 镜像仓库 harbor 环境部署","slug":"四、k8s-镜像仓库-harbor-环境部署","link":"#四、k8s-镜像仓库-harbor-环境部署","children":[]},{"level":3,"title":"4）安装 ingress","slug":"_4-安装-ingress","link":"#_4-安装-ingress","children":[]},{"level":3,"title":"6）创建 nfs provisioner 和持久化存储 SC","slug":"_6-创建-nfs-provisioner-和持久化存储-sc","link":"#_6-创建-nfs-provisioner-和持久化存储-sc","children":[]},{"level":3,"title":"5、ingress 没有 ADDRESS 问题解决","slug":"_5、ingress-没有-address-问题解决","link":"#_5、ingress-没有-address-问题解决","children":[]},{"level":3,"title":"6、卸载重新部署","slug":"_6、卸载重新部署","link":"#_6、卸载重新部署","children":[]}],"git":{"createdTime":1668948234000,"updatedTime":1690902628000,"contributors":[{"name":"xlc520","email":"2215400217@qq.com","commits":4}]},"readingTime":{"minutes":30.68,"words":9204},"filePathRelative":"linux/详解K8S高可用部署.md","localizedDate":"2022年11月5日","excerpt":"<h1> 详解 K8S 高可用部署</h1>\\n<p>一、前言</p>\\n<p>二、基础环境部署</p>\\n<ul>\\n<li>1）前期准备（所有节点）</li>\\n<li>2）安装容器 docker（所有节点）</li>\\n<li>3）配置 k8s yum 源（所有节点）</li>\\n<li>4）将 sandbox_image 镜像源设置为阿里云 google_containers 镜像源（所有节点）</li>\\n<li>5）配置 containerd cgroup 驱动程序 systemd（所有节点）</li>\\n<li>6）开始安装 kubeadm，kubelet 和 kubectl（master 节点）</li>\\n<li>7）使用 kubeadm 初始化集群（master 节点）</li>\\n<li>8）安装 Pod 网络插件（CNI：Container Network Interface）(master)</li>\\n<li>9）node 节点加入 k8s 集群</li>\\n<li>10）配置 IPVS</li>\\n<li>11）集群高可用配置</li>\\n<li>12）部署 Nginx+Keepalived 高可用负载均衡器</li>\\n</ul>","autoDesc":true}');export{e as data};
