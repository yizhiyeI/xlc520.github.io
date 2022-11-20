import{_ as l}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as r,c as t,a as n,e as i,b as a,d as s,r as o}from"./app.59ffeed0.js";const p={},c=n("h1",{id:"spring-面试63问",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#spring-面试63问","aria-hidden":"true"},"#"),a(" Spring 面试63问")],-1),d=s('<p>Sping原理</p><p>Spring是一个轻量级Java开发框架，最早有Rod Johnson创建，目的是为了解决企业级应用开发的业务逻辑层和其他各层的耦合问题。它是一个分层的JavaSE/JavaEE full-stack（一站式）轻量级开源框架，为开发Java应用程序提供全面的基础架构支持。Spring负责基础架构，因此Java开发者可以专注于应用程序的开发。</p><p>Spring是一个全面的、企业应用开发一站式的解决方案，贯穿表现层、业务层、持久层。但是它仍然可以和其他的框架无缝整合。</p><h3 id="spring-特点" tabindex="-1"><a class="header-anchor" href="#spring-特点" aria-hidden="true">#</a> Spring 特点</h3><p><strong>轻量级：</strong> 组件大小与开销两方面而言Spring都是轻量的。完整的Spring框架可以在一个大小只有1M多的JAR文件中发布，并且Spring所需的处理开销也是微不足道的。此外，Spring是非侵入式，典型案例，Spring应用中的对象不依赖于Spring特定的类</p><p><strong>控制反转：</strong> Spring通过控制反转（IOC）技术实现解耦。一个对象依赖的其他对象会通过被动的方式传递进来，而不需要对象自己创建或者查找依赖。</p><p><strong>面向切面：</strong> 支持切面（AOP）编程，并且吧应用业务逻辑和系统服务区分开。</p><p><strong>容器：</strong> Spring包含并管理应用对象的配置和生命周期，在这个意义上它是一种容器。可以配置每个bean如何被创建、销毁，bean的作用范围是单例还是每次都生成一个新的实例，以及他们是如何相互关联。</p><p><strong>框架集合：</strong> 将简单的组件配置，组合成为复杂的框架；应用对象被申明式组合；提供许多基础功能（事务管理、持久化框架继承），提供应用逻辑开发接口</p><h3 id="spring-框架优缺点" tabindex="-1"><a class="header-anchor" href="#spring-框架优缺点" aria-hidden="true">#</a> Spring 框架优缺点</h3><h4 id="优点" tabindex="-1"><a class="header-anchor" href="#优点" aria-hidden="true">#</a> 优点</h4><ul><li>方便解耦，简化开发：Spring就是一个大工厂，可以将所有对象的创建和依赖关系的维护，交给Spring管理。</li><li>AOP编程的支持：Spring提供面向切面编程，可以方便的实现对程序进行权限拦截、运行监控等功能。</li><li>声明式事务的支持：只需要通过配置就可以完成对事务的管理，而无需手动编程。</li><li>方便程序的测试：Spring对Junit4支持，可以通过注解方便的测试Spring程序。</li><li>方便集成各种优秀框架：Spring不排斥各种优秀的开源框架，其内部提供了对各种优秀框架的直接支持（如：Struts、Hibernate、MyBatis等）。</li><li>降低JavaEE API的使用难度：Spring对JavaEE开发中非常难用的一些API（JDBC、JavaMail、远程调用等），都提供了封装，使这些API应用难度大大降低。</li></ul><h4 id="缺点" tabindex="-1"><a class="header-anchor" href="#缺点" aria-hidden="true">#</a> 缺点</h4><ul><li>Spring依赖反射，反射影响性能</li><li>使用门槛升高，入门Spring需要较长时间</li></ul><h3 id="spring-框架中都用到了哪些设计模式" tabindex="-1"><a class="header-anchor" href="#spring-框架中都用到了哪些设计模式" aria-hidden="true">#</a> Spring 框架中都用到了哪些设计模式</h3><p>Spring 框架中使用到了大量的设计模式，下面列举了比较有代表性的：</p>',16),v=n("li",null,[n("code",null,"代理模式"),a("—在 AOP 和 remoting 中被用的比较多。")],-1),u={href:"https://blog.csdn.net/sufu1065/article/details/122872239",target:"_blank",rel:"noopener noreferrer"},b=n("code",null,"单例模式",-1),m=s("<li><code>模板方法</code>—用来解决代码重复的问题。比如. RestTemplate, JmsTemplate, JpaTempl ate。</li><li><code>前端控制器</code>—Spring 提供了 DispatcherServlet 来对请求进行分发。</li><li><code>视图帮助(View Helper )</code>—Spring 提供了一系列的 JSP 标签，高效宏来辅助将分散的代码整合在视图里。</li><li><code>依赖注入</code>—贯穿于 BeanFactory / ApplicationContext 接口的核心理念。</li><li><code>工厂模式</code>—BeanFactory 用来创建对象的实例</li>",5),g=s(`<h3 id="spring核心组件" tabindex="-1"><a class="header-anchor" href="#spring核心组件" aria-hidden="true">#</a> Spring核心组件</h3><p>Spring 总共大约有 20 个模块， 由 1300 多个不同的文件构成。而这些组件被分别整合在核心容器（Core Container） 、 AOP（Aspect Oriented Programming）和设备支持（Instrmentation） 、数据访问与集成（Data Access/Integeration） 、 Web、 消息（Messaging） 、 Test等 6 个模块中。以下是 Spring 5 的模块结构图：</p><p><img src="https://img-blog.csdnimg.cn/img_convert/893a32f9ecd60a71e72fd247e0d7bc1c.png" alt="893a32f9ecd60a71e72fd247e0d7bc1c.png"></p><ul><li><code>spring core</code>：提供了框架的基本组成部分，包括控制反转（Inversion of Control，IOC）和依赖注入（Dependency Injection，DI）功能。</li><li><code>spring beans</code>：提供了BeanFactory，是工厂模式的一个经典实现，Spring将管理对象称为Bean。</li><li><code>spring context</code>：构建于 core 封装包基础上的 context 封装包，提供了一种框架式的对象访问方法。</li><li><code>spring jdbc</code>：提供了一个JDBC的抽象层，消除了烦琐的JDBC编码和数据库厂商特有的错误代码解析， 用于简化JDBC。</li><li><code>spring aop</code>：提供了面向切面的编程实现，让你可以自定义拦截器、切点等。</li><li><code>spring Web</code>：提供了针对 Web 开发的集成特性，例如文件上传，利用 servlet listeners 进行 ioc 容器初始化和针对 Web 的 ApplicationContext。</li><li><code>spring test</code>：主要为测试提供支持的，支持使用JUnit或TestNG对Spring组件进行单元测试和集成测试。</li></ul><h3 id="spring-控制反转-ioc" tabindex="-1"><a class="header-anchor" href="#spring-控制反转-ioc" aria-hidden="true">#</a> Spring 控制反转（IOC）</h3><h4 id="控制反转-ioc-概念" tabindex="-1"><a class="header-anchor" href="#控制反转-ioc-概念" aria-hidden="true">#</a> 控制反转（IOC）概念</h4><p>控制反转即IOC (Inversion of Control)，它把传统上由程序代码直接操控的对象的调用权交给容器，通过容器来实现对象组件的装配和管理。</p><p>Spring 通过一个配置文件描述 Bean 及 Bean 之间的依赖关系，利用 Java 语言的反射功能(依赖注入DI)实例化 Bean 并建立 Bean 之间的依赖关系。Spring 的 IoC 容器在完成这些底层工作的基础上，还提供 了 Bean 实例缓存、生命周期管理、 Bean 实例代理、事件发布、资源装载等高级服务。</p><h4 id="spring-容器高层视图" tabindex="-1"><a class="header-anchor" href="#spring-容器高层视图" aria-hidden="true">#</a> Spring 容器高层视图</h4><p>Spring 启动时读取应用程序提供的 Bean 配置信息，并在 Spring 容器中生成一份相应的 Bean 配</p><p>置注册表，然后根据这张注册表实例化 Bean，装配好 Bean 之间的依赖关系，为上层应用提供准</p><p>备就绪的运行环境。其中 Bean 缓存池为 HashMap 实现</p><p><img src="https://img-blog.csdnimg.cn/img_convert/355d105ac37a91dee72b8a4195844e0d.png" alt="355d105ac37a91dee72b8a4195844e0d.png"></p><h3 id="ioc-容器实现" tabindex="-1"><a class="header-anchor" href="#ioc-容器实现" aria-hidden="true">#</a> IOC 容器实现</h3><h4 id="beanfactory-框架基础设施" tabindex="-1"><a class="header-anchor" href="#beanfactory-框架基础设施" aria-hidden="true">#</a> BeanFactory-框架基础设施</h4><p>BeanFactory 是 Spring 框架的基础设施，面向 Spring 本身；</p><p>ApplicationContext 面向使用Spring 框架的开发者，几乎所有的应用场合我们都直接使用 ApplicationContext 而非底层的 BeanFactory。</p><p><img src="https://img-blog.csdnimg.cn/img_convert/ca21e934e8b5c9738300fa4c8003c789.png" alt="ca21e934e8b5c9738300fa4c8003c789.png"></p><ul><li><strong>BeanDefinitionRegistry 注册表</strong>：Spring 配置文件中每一个节点元素在 Spring 容器里都通过一个 BeanDefinition 对象表示，它描述了 Bean 的配置信息。而 BeanDefinitionRegistry 接口提供了向容器手工注册BeanDefinition 对象的方法。</li><li><strong>BeanFactory 顶层接口</strong>：位于类结构树的顶端 ，它最主要的方法就是 getBean(String beanName)，该方法从容器中返回特定名称的 Bean，BeanFactory 的功能通过其他的接口得到不断扩展：</li><li><strong>ListableBeanFactory</strong>：该接口定义了访问容器中 Bean 基本信息的若干方法，如查看 Bean 的个数、获取某一类型Bean 的配置名、查看容器中是否包括某一 Bean 等方法；</li><li><strong>HierarchicalBeanFactory 父子级</strong>：父子级联 IoC 容器的接口，子容器可以通过接口方法访问父容器；通过HierarchicalBeanFactory 接口， Spring 的 IoC 容器可以建立父子层级关联的容器体系，子容器可以访问父容器中的 Bean，但父容器不能访问子容器的 Bean。Spring 使用父子容器实现了很多功能，比如在 Spring MVC 中，展现层 Bean 位于一个子容器中，而业务层和持久层的 Bean 位于父容器中。这样，展现层 Bean 就可以引用业务层和持久层的 Bean，而业务层和持久层的 Bean 则看不到展现层的 Bean。</li><li><strong>ConfigurableBeanFactory</strong>：是一个重要的接口，增强了 IoC 容器的可定制性，它定义了设置类装载器、属性编辑器、容器初始化后置处理器等方法；</li><li><strong>AutowireCapableBeanFactory 自动装配</strong>：定义了将容器中的 Bean 按某种规则（如按名字匹配、按类型匹配等）进行自动装配的方法；</li><li><strong>SingletonBeanRegistry 运行期间注册单例 Bean</strong>：定义了允许在运行期间向容器注册单实例 Bean 的方法；对于单实例（ singleton）的 Bean 来说，BeanFactory 会缓存 Bean 实例，所以第二次使用 getBean() 获取 Bean 时将直接从IoC 容器的缓存中获取 Bean 实例。Spring 在 DefaultSingletonBeanRegistry 类中提供了一个用于缓存单实例 Bean 的缓存器，它是一个用 HashMap 实现的缓存器，单实例的 Bean 以beanName 为键保存在这个 HashMap 中。</li><li><strong>依赖日志框架</strong>：在初始化 BeanFactory 时，必须为其提供一种日志框架，比如使用 Log4J， 即在类路径下提供 Log4J 配置文件，这样启动 Spring 容器才不会报错。</li></ul><h3 id="applicationcontext-面向开发应用" tabindex="-1"><a class="header-anchor" href="#applicationcontext-面向开发应用" aria-hidden="true">#</a> ApplicationContext 面向开发应用</h3><p>ApplicationContext 由 BeanFactory 派生而来，提供了更多面向实际应用的功能。</p><p>ApplicationContext 继承了 HierarchicalBeanFactory 和 ListableBeanFactory 接口，在此基础</p><p>上，还通过多个其他的接口扩展了 BeanFactory 的功能：</p><p><img src="https://gh.xlc520.tk/xlc520/MyImage/raw/main/MdImg/9c9a78edbc6b9d2f3f849cbcfd3917ae.png" alt="9c9a78edbc6b9d2f3f849cbcfd3917ae.png"></p><ul><li>ClassPathXmlApplicationContext：默认从类路径加载配置文件</li><li>FileSystemXmlApplicationContext：默认从文件系统中装载配置文件</li><li>ApplicationEventPublisher：让容器拥有发布应用上下文事件的功能，包括容器启动事件、关闭事件等。</li><li>MessageSource：为应用提供 i18n 国际化消息访问的功能；</li><li>ResourcePatternResolver ：所有 ApplicationContext 实现类都实现了类似于</li><li>PathMatchingResourcePatternResolver：通过带前缀的 Ant 风格的资源文件路径装载 Spring 的配置文件。</li><li>LifeCycle：该接口是 Spring 2.0 加入的，该接口提供了 start()和 stop()两个方法，主要用于控制异步处理过程。在具体使用时，该接口同时被 ApplicationContext 实现及具体Bean 实现， ApplicationContext 会将 start/stop 的信息传递给容器中所有实现了该接口的 Bean，以达到管理和控制 JMX、任务调度等目的。</li><li>ConfigurableApplicationContext ：扩展于 ApplicationContext，它新增加了两个主要的方法：refresh()和 close()，让 ApplicationContext 具有启动、刷新和关闭应用上下文的能力。在应用上下文关闭的情况下调用 refresh()即可启动应用上下文，在已经启动的状态下，调用 refresh()则清除缓存并重新装载配置信息，而调用 close()则可关闭应用上下文。</li></ul><h3 id="beanfactory-和-applicationcontext有什么区别" tabindex="-1"><a class="header-anchor" href="#beanfactory-和-applicationcontext有什么区别" aria-hidden="true">#</a> BeanFactory 和 ApplicationContext有什么区别？</h3><p>BeanFactory和ApplicationContext是Spring的两大核心接口，都可以当做Spring的容器。其中ApplicationContext是BeanFactory的子接口。</p><h4 id="依赖关系" tabindex="-1"><a class="header-anchor" href="#依赖关系" aria-hidden="true">#</a> 依赖关系</h4><p>BeanFactory：是Spring里面最底层的接口，包含了各种Bean的定义，读取bean配置文档，管理bean的加载、实例化，控制bean的生命周期，维护bean之间的依赖关系。</p><p>ApplicationContext：接口作为BeanFactory的派生，除了提供BeanFactory所具有的功能外，还提供了更完整的框架功能：</p><ul><li>继承MessageSource，因此支持国际化。</li><li>统一的资源文件访问方式。</li><li>提供在监听器中注册bean的事件。</li><li>同时加载多个配置文件。</li><li>载入多个（有继承关系）上下文 ，使得每一个上下文都专注于一个特定的层次，比如应用的web层。</li></ul><h4 id="加载方式" tabindex="-1"><a class="header-anchor" href="#加载方式" aria-hidden="true">#</a> 加载方式</h4><p>BeanFactroy：采用的是延迟加载形式来注入Bean的，即只有在使用到某个Bean时(调getBean())，才对该Bean进行加载实例化。这样，我们就不能发现一些存在的Spring的配置问题。如果Bean的某一个属性没有注入，BeanFacotry加载后，直至第一次使用调用getBean方法才会抛出异常。</p><p>ApplicationContext：它是在容器启动时，一次性创建了所有的Bean。这样，在容器启动时，我们就可以发现Spring中存在的配置错误，这样有利于检查所依赖属性是否注入。ApplicationContext启动后预载入所有的单实例Bean，通过预载入单实例bean ,确保当你需要的时候，你就不用等待，因为它们已经创建好了。</p><p>相对于基本的BeanFactory，ApplicationContext 唯一的不足是占用内存空间。当应用程序配置Bean较多时，程序启动较慢。</p><h4 id="创建方式" tabindex="-1"><a class="header-anchor" href="#创建方式" aria-hidden="true">#</a> 创建方式</h4><p>BeanFactory通常以编程的方式被创建，ApplicationContext还能以声明的方式创建，如使用ContextLoader。</p><h4 id="注册方式" tabindex="-1"><a class="header-anchor" href="#注册方式" aria-hidden="true">#</a> 注册方式</h4><p>BeanFactory和ApplicationContext都支持BeanPostProcessor、BeanFactoryPostProcessor的使用，但两者之间的区别是：BeanFactory需要手动注册，而ApplicationContext则是自动注册。</p><h4 id="applicationcontext通常的实现" tabindex="-1"><a class="header-anchor" href="#applicationcontext通常的实现" aria-hidden="true">#</a> ApplicationContext通常的实现</h4><ul><li>FileSystemXmlApplicationContext ：此容器从一个XML文件中加载beans的定义，XML Bean 配置文件的全路径名必须提供给它的构造函数。</li><li>ClassPathXmlApplicationContext：此容器也从一个XML文件中加载beans的定义，这里，你需要正确设置classpath因为这个容器将在classpath里找bean配置。</li><li>WebXmlApplicationContext：此容器加载一个XML文件，此文件定义了一个WEB应用的所有bean。</li></ul><h3 id="spring的依赖注入" tabindex="-1"><a class="header-anchor" href="#spring的依赖注入" aria-hidden="true">#</a> Spring的依赖注入</h3><p>其主要实现方式有两种：依赖注入和依赖查找。</p><p><strong>依赖注入：</strong> 相对于IoC而言，依赖注入(DI)更加准确地描述了IoC的设计理念。所谓依赖注入（Dependency Injection），即组件之间的依赖关系由容器在应用系统运行期来决定，也就是由容器动态地将某种依赖关系的目标对象实例注入到应用系统中的各个关联的组件之中。组件不做定位查询，只提供普通的Java方法让容器去决定依赖关系。</p><h4 id="依赖注入的基本原则" tabindex="-1"><a class="header-anchor" href="#依赖注入的基本原则" aria-hidden="true">#</a> 依赖注入的基本原则</h4><p>应用组件不应该负责查找资源或者其他依赖的协作对象。配置对象的工作应该由IoC容器负责，“查找资源”的逻辑应该从应用组件的代码中抽取出来，交给IoC容器负责。容器全权负责组件的装配，它会把符合依赖关系的对象通过属性（JavaBean中的setter）或者是构造器传递给需要的对象。</p><p><strong>依赖注入优势</strong></p><p>依赖注入之所以更流行是因为它是一种更可取的方式：让容器全权负责依赖查询，受管组件只需要暴露JavaBean的setter方法或者带参数的构造器或者接口，使容器可以在初始化时组装对象的依赖关系。其与依赖查找方式相比，主要优势为：</p><ul><li>查找定位操作与应用代码完全无关</li><li>不依赖于容器的API，可以很容易地在任何容器以外使用应用对象</li><li>不需要特殊的接口，绝大多数对象可以做到完全不必依赖容器</li></ul><p><strong>依赖注入实现方式</strong></p><p>依赖注入是时下最流行的IoC实现方式，依赖注入分为接口注入（Interface Injection），Setter方法注入（Setter Injection）和构造器注入（Constructor Injection）三种方式。其中接口注入由于在灵活性和易用性比较差，现在从Spring4开始已被废弃。</p><ul><li>构造器依赖注入：构造器依赖注入通过容器触发一个类的构造器来实现的，该类有一系列参数，每个参数代表一个对其他类的依赖</li><li>Setter方法注入：Setter方法注入是容器通过调用无参构造器或无参static工厂 方法实例化bean之后，调用该bean的setter方法，即实现了基于setter的依赖注入</li></ul><h3 id="构造器依赖注入和-setter方法注入的区别" tabindex="-1"><a class="header-anchor" href="#构造器依赖注入和-setter方法注入的区别" aria-hidden="true">#</a> 构造器依赖注入和 Setter方法注入的区别</h3><p><img src="https://gh.xlc520.tk/xlc520/MyImage/raw/main/MdImg/59c181416a4997b4f05d2446e3ff6f08.png" alt="59c181416a4997b4f05d2446e3ff6f08.png"></p><p>两种依赖方式都可以使用，构造器注入和Setter方法注入。最好的解决方案是用构造器参数实现强制依赖，setter方法实现可选依赖。</p><h3 id="webapplication-体系架构" tabindex="-1"><a class="header-anchor" href="#webapplication-体系架构" aria-hidden="true">#</a> WebApplication 体系架构</h3><p>WebApplicationContext 是专门为 Web 应用准备的，它允许从相对于 Web 根目录的路径中装载配置文件完成初始化工作。从 WebApplicationContext 中可以获得ServletContext 的引用，整个 Web 应用上下文对象将作为属性放置到 ServletContext 中，以便 Web 应用环境可以访问 Spring 应用上下文。</p><p><img src="https://img-blog.csdnimg.cn/img_convert/0d58667ed73f47e65be170d3a114d94c.png" alt="0d58667ed73f47e65be170d3a114d94c.png"></p><h3 id="spring-bean-定义" tabindex="-1"><a class="header-anchor" href="#spring-bean-定义" aria-hidden="true">#</a> Spring Bean 定义</h3><p>一个Spring Bean 的定义包含容器必知的所有配置元数据，包括如何创建一个bean，它的生命周期详情及它的依赖。</p><ul><li>Spring元数据配置方式</li><li>XML配置文件</li><li>基于注解的配置</li><li>基于java的配置</li></ul><h3 id="spring-bean-作用域" tabindex="-1"><a class="header-anchor" href="#spring-bean-作用域" aria-hidden="true">#</a> Spring Bean 作用域</h3><p>Spring 3 中为 Bean 定义了 5 中作用域，分别为 singleton（单例）、prototype（原型）、request、session 和 global session，5 种作用域说明如下：</p><ul><li><strong>singleton</strong>：单例模式（多线程下不安全）。Spring IoC 容器中只会存在一个共享的 Bean 实例，无论有多少个Bean 引用它，始终指向同一对象。该模式在多线程下是不安全的。Singleton 作用域是Spring 中的缺省作用域，也可以显示的将 Bean 定义为 singleton 模式，配置为：</li><li><strong>prototype</strong>:原型模式每次使用时创建。每次通过 Spring 容器获取 prototype 定义的 bean 时，容器都将创建一个新的 Bean 实例，每个 Bean 实例都有自己的属性和状态，而 singleton 全局只有一个对象。根据经验，对有状态的bean使用prototype作用域，而对无状态的bean使用singleton 作用域。</li><li><strong>Request</strong>：一次 request 一个实例。在一次 Http 请求中，容器会返回该 Bean 的同一实例。而对不同的 Http 请求则会产生新的 Bean，而且该 bean 仅在当前 Http Request 内有效,当前 Http 请求结束，该 bean实例也将会被销毁。</li><li><strong>session</strong>：在一次 Http Session 中，容器会返回该 Bean 的同一实例。而对不同的 Session 请求则会创建新的实例，该 bean 实例仅在当前 Session 内有效。同 Http 请求相同，每一次session 请求创建新的实例，而不同的实例之间不共享属性，且实例仅在自己的 session 请求内有效，请求结束，则实例将被销毁。</li><li><strong>global Session</strong>：在一个全局的 Http Session 中，容器会返回该 Bean 的同一个实例，仅在使用 portlet context 时有效。</li></ul><h3 id="spring处理线程并发问题" tabindex="-1"><a class="header-anchor" href="#spring处理线程并发问题" aria-hidden="true">#</a> Spring处理线程并发问题</h3><p>在一般情况下，只有无状态的Bean才可以在多线程环境下共享，在Spring中，绝大部分Bean都可以声明为singleton作用域，因为Spring对一些Bean中非线程安全状态采用ThreadLocal进行处理，解决线程安全问题。</p><p>ThreadLocal和线程同步机制都是为了解决多线程中相同变量的访问冲突问题。同步机制采用了“时间换空间”的方式，仅提供一份变量，不同的线程在访问前需要获取锁，没获得锁的线程则需要排队。而ThreadLocal采用了“空间换时间”的方式。</p><p>ThreadLocal会为每一个线程提供一个独立的变量副本，从而隔离了多个线程对数据的访问冲突。因为每一个线程都拥有自己的变量副本，从而也就没有必要对该变量进行同步了。ThreadLocal提供了线程安全的共享对象，在编写多线程代码时，可以把不安全的变量封装进ThreadLocal。</p><h3 id="spring-bean-生命周期" tabindex="-1"><a class="header-anchor" href="#spring-bean-生命周期" aria-hidden="true">#</a> Spring Bean 生命周期</h3><p><img src="https://img-blog.csdnimg.cn/img_convert/63a7c3663fa56e9acf085898f0266cd1.png" alt="63a7c3663fa56e9acf085898f0266cd1.png"></p><p><strong>实例化</strong></p><ol><li>实例化一个 Bean，也就是我们常说的 new。</li></ol><p><strong>IOC 依赖注入</strong></p><ol><li>按照 Spring 上下文对实例化的 Bean 进行配置，也就是 IOC 注入。</li></ol><p><strong>setBeanName 实现</strong></p><ol><li>如果这个 Bean 已经实现了 BeanNameAware 接口，会调用它实现的 <code>setBeanName(String)</code>方法，此处传递的就是 Spring 配置文件中 Bean 的 id 值</li></ol><p><strong>BeanFactoryAware 实现</strong></p><ol><li>如果这个 Bean 已经实现了 BeanFactoryAware 接口，会调用它实现的 setBeanFactory，</li></ol><p><code>setBeanFactory(BeanFactory)</code>传递的是 Spring 工厂自身（可以用这个方式来获取其它 Bean，只需在 Spring 配置文件中配置一个普通的 Bean 就可以）。</p><p><strong>ApplicationContextAware 实现</strong></p><ol><li>如果这个 Bean 已经实现了 ApplicationContextAware 接口，会调用<code>setApplicationContext(ApplicationContext)</code>方法，传入 Spring 上下文（同样这个方式也可以实现步骤 4 的内容，但比 4 更好，因为 ApplicationContext 是 BeanFactory 的子接口，有更多的实现方法）</li></ol><p><strong>postProcessBeforeInitialization 接口实现-初始化预处理</strong></p><ol><li>如果这个 Bean 关联了 BeanPostProcessor 接口，将会调用<code>postProcessBeforeInitialization(Object obj, String s)</code>方法，BeanPostProcessor 经常被用作是 Bean 内容的更改，并且由于这个是在 Bean 初始化结束时调用那个的方法，也可以被应用于内存或缓存技术。</li></ol><p><strong>init-method</strong></p><ol><li>如果 Bean 在 Spring 配置文件中配置了 init-method 属性会自动调用其配置的初始化方法。</li></ol><p><strong>postProcessAfterInitialization</strong></p><ol><li>如果这个 Bean 关联了 BeanPostProcessor 接口，将会调用<code>postProcessAfterInitialization(Object obj, String s)</code>方法。</li></ol><blockquote><p>注：以上工作完成以后就可以应用这个 Bean 了，那这个 Bean 是一个 Singleton 的，所以一般情况下我们调用同一个 id 的 Bean 会是在内容地址相同的实例，当然在 Spring 配置文件中也可以配置非 Singleton。</p></blockquote><p><strong>Destroy 过期自动清理阶段</strong></p><ol><li>当 Bean 不再需要时，会经过清理阶段，如果 Bean 实现了 DisposableBean 这个接口，会调用那个其实现的 destroy()方法；</li></ol><p><strong>destroy-method 自配置清理</strong></p><ol><li>最后，如果这个 Bean 的 Spring 配置中配置了 <code>destroy-method</code> 属性，会自动调用其配置的销毁方法。</li></ol><h3 id="bean生命周期方法" tabindex="-1"><a class="header-anchor" href="#bean生命周期方法" aria-hidden="true">#</a> bean生命周期方法</h3><p>bean 标签有两个重要的属性（<code>init-method</code> 和 <code>destroy-method</code>）。用它们你可以自己定制</p><p>初始化和注销方法。它们也有相应的注解（<code>@PostConstruct</code> 和<code>@PreDestroy</code>）。</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token operator">&lt;</span>bean id<span class="token operator">=</span><span class="token string">&quot;&quot;</span> class<span class="token operator">=</span><span class="token string">&quot;&quot;</span> init<span class="token operator">-</span>method<span class="token operator">=</span><span class="token string">&quot;初始化方法&quot;</span> destroy<span class="token operator">-</span>method<span class="token operator">=</span><span class="token string">&quot;销毁方法&quot;</span><span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="什么是spring的内部bean-什么是spring-inner-beans" tabindex="-1"><a class="header-anchor" href="#什么是spring的内部bean-什么是spring-inner-beans" aria-hidden="true">#</a> 什么是Spring的内部bean？什么是Spring inner beans？</h3><p>在Spring框架中，当一个bean仅被用作另一个bean的属性时，它能被声明为一个内部bean。</p><p>内部bean可以用setter注入“属性”和构造方法注入“构造参数”的方式来实现，内部bean通常是匿名的，它们的Scope一般是prototype。</p><p>Spring 依赖注入四种方式构造器注入</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">/*带参数，方便利用构造器进行注入*/</span>



 



 public <span class="token function">CatDaoImpl</span><span class="token punctuation">(</span>String message<span class="token punctuation">)</span><span class="token punctuation">{</span>



 



 this<span class="token punctuation">.</span> message <span class="token operator">=</span> message<span class="token punctuation">;</span>



 



 <span class="token punctuation">}</span>
<span class="token operator">&lt;</span>bean id<span class="token operator">=</span><span class="token string">&quot;CatDaoImpl&quot;</span> class<span class="token operator">=</span><span class="token string">&quot;com.CatDaoImpl&quot;</span><span class="token operator">&gt;</span>



 



<span class="token operator">&lt;</span>constructor<span class="token operator">-</span>arg value<span class="token operator">=</span><span class="token string">&quot; message &quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>constructor<span class="token operator">-</span>arg<span class="token operator">&gt;</span>



 



<span class="token operator">&lt;</span><span class="token operator">/</span>bean<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>setter 方法注入</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code>public class Id <span class="token punctuation">{</span>



 



 private <span class="token builtin">int</span> id<span class="token punctuation">;</span>



 



 public <span class="token builtin">int</span> <span class="token function">getId</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> id<span class="token punctuation">;</span> <span class="token punctuation">}</span>



 



 public void <span class="token function">setId</span><span class="token punctuation">(</span><span class="token builtin">int</span> id<span class="token punctuation">)</span> <span class="token punctuation">{</span> this<span class="token punctuation">.</span>id <span class="token operator">=</span> id<span class="token punctuation">;</span> <span class="token punctuation">}</span>



 



<span class="token punctuation">}</span>
<span class="token operator">&lt;</span>bean id<span class="token operator">=</span><span class="token string">&quot;id&quot;</span> class<span class="token operator">=</span><span class="token string">&quot;com.id &quot;</span><span class="token operator">&gt;</span> <span class="token operator">&lt;</span>property name<span class="token operator">=</span><span class="token string">&quot;id&quot;</span> value<span class="token operator">=</span><span class="token string">&quot;123&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>property<span class="token operator">&gt;</span> <span class="token operator">&lt;</span><span class="token operator">/</span>bean<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>静态工厂注入</p><p>静态工厂顾名思义，就是通过调用静态工厂的方法来获取自己需要的对象，为了让 spring 管理所有对象，我们不能直接通过&quot;工程类.静态方法()&quot;来获取对象，而是依然通过 spring 注入的形式获取：</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code>public class DaoFactory <span class="token punctuation">{</span> <span class="token comment">//静态工厂</span>



 



 public static final FactoryDao <span class="token function">getStaticFactoryDaoImpl</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>



 



 <span class="token keyword">return</span> <span class="token builtin">new</span> <span class="token function">StaticFacotryDaoImpl</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>



 



 <span class="token punctuation">}</span>



 



<span class="token punctuation">}</span>



 



public class SpringAction <span class="token punctuation">{</span>



 



 private FactoryDao staticFactoryDao<span class="token punctuation">;</span> <span class="token comment">//注入对象</span>



 



 <span class="token comment">//注入对象的 set 方法</span>



 



 public void <span class="token function">setStaticFactoryDao</span><span class="token punctuation">(</span>FactoryDao staticFactoryDao<span class="token punctuation">)</span> <span class="token punctuation">{</span>



 



 this<span class="token punctuation">.</span>staticFactoryDao <span class="token operator">=</span> staticFactoryDao<span class="token punctuation">;</span>



 



 <span class="token punctuation">}</span>



 



<span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span>factory<span class="token operator">-</span>method<span class="token operator">=</span><span class="token string">&quot;getStaticFactoryDaoImpl&quot;</span>指定调用哪个工厂方法<span class="token operator">--</span><span class="token operator">&gt;</span>



 



 <span class="token operator">&lt;</span>bean name<span class="token operator">=</span><span class="token string">&quot;springAction&quot;</span> class<span class="token operator">=</span><span class="token string">&quot; SpringAction&quot;</span> <span class="token operator">&gt;</span>



 



 <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span>使用静态工厂的方法注入对象<span class="token punctuation">,</span>对应下面的配置文件<span class="token operator">--</span><span class="token operator">&gt;</span>



 



 <span class="token operator">&lt;</span>property name<span class="token operator">=</span><span class="token string">&quot;staticFactoryDao&quot;</span> ref<span class="token operator">=</span><span class="token string">&quot;staticFactoryDao&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>property<span class="token operator">&gt;</span>



 



 <span class="token operator">&lt;</span><span class="token operator">/</span>bean<span class="token operator">&gt;</span>



 



 <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span>此处获取对象的方式是从工厂类中获取静态方法<span class="token operator">--</span><span class="token operator">&gt;</span>



 



<span class="token operator">&lt;</span>bean name<span class="token operator">=</span><span class="token string">&quot;staticFactoryDao&quot;</span> class<span class="token operator">=</span><span class="token string">&quot;DaoFactory&quot;</span>



 



factory<span class="token operator">-</span>method<span class="token operator">=</span><span class="token string">&quot;getStaticFactoryDaoImpl&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>bean<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>实例工厂</p><p>实例工厂的意思是获取对象实例的方法不是静态的，所以你需要首先 new 工厂类，再调用普通的实例方法：</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code>public class DaoFactory <span class="token punctuation">{</span> <span class="token comment">//实例工厂</span>



 



 public FactoryDao <span class="token function">getFactoryDaoImpl</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>



 



 <span class="token keyword">return</span> <span class="token builtin">new</span> <span class="token function">FactoryDaoImpl</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>



 



 



 <span class="token punctuation">}</span>



 



<span class="token punctuation">}</span>



 



public class SpringAction <span class="token punctuation">{</span>



 



 private FactoryDao factoryDao<span class="token punctuation">;</span> <span class="token comment">//注入对象</span>



 



 public void <span class="token function">setFactoryDao</span><span class="token punctuation">(</span>FactoryDao factoryDao<span class="token punctuation">)</span> <span class="token punctuation">{</span>



 



 this<span class="token punctuation">.</span>factoryDao <span class="token operator">=</span> factoryDao<span class="token punctuation">;</span>



 



 <span class="token punctuation">}</span>



 



<span class="token punctuation">}</span>
<span class="token operator">&lt;</span>bean name<span class="token operator">=</span><span class="token string">&quot;springAction&quot;</span> class<span class="token operator">=</span><span class="token string">&quot;SpringAction&quot;</span><span class="token operator">&gt;</span>



 



 <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span>使用实例工厂的方法注入对象<span class="token punctuation">,</span>对应下面的配置文件<span class="token operator">--</span><span class="token operator">&gt;</span>



 



 <span class="token operator">&lt;</span>property name<span class="token operator">=</span><span class="token string">&quot;factoryDao&quot;</span> ref<span class="token operator">=</span><span class="token string">&quot;factoryDao&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>property<span class="token operator">&gt;</span>



 



 <span class="token operator">&lt;</span><span class="token operator">/</span>bean<span class="token operator">&gt;</span>



 



 <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span>此处获取对象的方式是从工厂类中获取实例方法<span class="token operator">--</span><span class="token operator">&gt;</span>



 



<span class="token operator">&lt;</span>bean name<span class="token operator">=</span><span class="token string">&quot;daoFactory&quot;</span> class<span class="token operator">=</span><span class="token string">&quot;com.DaoFactory&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>bean<span class="token operator">&gt;</span>



 



<span class="token operator">&lt;</span>bean name<span class="token operator">=</span><span class="token string">&quot;factoryDao&quot;</span> factory<span class="token operator">-</span>bean<span class="token operator">=</span><span class="token string">&quot;daoFactory&quot;</span>



 



factory<span class="token operator">-</span>method<span class="token operator">=</span><span class="token string">&quot;getFactoryDaoImpl&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>bean<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-种不同方式的自动装配" tabindex="-1"><a class="header-anchor" href="#_5-种不同方式的自动装配" aria-hidden="true">#</a> 5 种不同方式的自动装配</h3><p>Spring 装配包括手动装配和自动装配，手动装配是有基于 xml 装配、构造方法、setter 方法等自动装配有五种自动装配的方式，可以用来指导 Spring 容器用自动装配方式来进行依赖注入。</p><ul><li><code>no</code>：默认的方式是不进行自动装配，通过显式设置 ref 属性来进行装配。</li><li><code>byName</code>：通过参数名 自动装配，Spring 容器在配置文件中发现 bean 的 autowire 属性被设置成 byName，之后容器试图匹配、装配和该 bean 的属性具有相同名字的 bean。</li><li><code>byType</code>：通过参数类型自动装配，Spring 容器在配置文件中发现 bean 的 autowire 属性被设置成 byType，之后容器试图匹配、装配和该 bean 的属性具有相同类型的 bean。如果有多个 bean 符合条件，则抛出错误。</li><li><code>constructor</code>：这个方式类似于 byType， 但是要提供给构造器参数，如果没有确定的带参数的构造器参数类型，将会抛出异常。</li><li><code>autodetect</code>：首先尝试使用 constructor 来自动装配，如果无法工作，则使用 byType 方式。</li></ul><h3 id="spring-中注入一个-java-collection" tabindex="-1"><a class="header-anchor" href="#spring-中注入一个-java-collection" aria-hidden="true">#</a> Spring 中注入一个 Java Collection</h3><p>Spring 提供了以下四种集合类的配置元素：</p><ul><li><code>&lt;list&gt;</code> : 该标签用来装配可重复的 list 值。</li><li><code>&lt;set&gt;</code> : 该标签用来装配没有重复的 set 值。</li><li><code>&lt;map&gt;</code>: 该标签可用来注入键和值可以为任何类型的键值对。</li><li><code>&lt;props&gt;</code> : 该标签支持注入键和值都是字符串类型的键值对。</li></ul><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token operator">&lt;</span>beans<span class="token operator">&gt;</span> 



 <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> Definition <span class="token keyword">for</span> javaCollection <span class="token operator">--</span><span class="token operator">&gt;</span> 



 <span class="token operator">&lt;</span>bean id<span class="token operator">=</span><span class="token string">&quot;javaCollection&quot;</span> class<span class="token operator">=</span><span class="token string">&quot;com.howtodoinjava.JavaCollection&quot;</span><span class="token operator">&gt;</span> 



 <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> java<span class="token punctuation">.</span>util<span class="token punctuation">.</span>List <span class="token operator">--</span><span class="token operator">&gt;</span> 



 <span class="token operator">&lt;</span>property name<span class="token operator">=</span><span class="token string">&quot;customList&quot;</span><span class="token operator">&gt;</span> 



 <span class="token operator">&lt;</span>list<span class="token operator">&gt;</span> 



 <span class="token operator">&lt;</span>value<span class="token operator">&gt;</span>INDIA<span class="token operator">&lt;</span><span class="token operator">/</span>value<span class="token operator">&gt;</span> 



 <span class="token operator">&lt;</span>value<span class="token operator">&gt;</span>Pakistan<span class="token operator">&lt;</span><span class="token operator">/</span>value<span class="token operator">&gt;</span> 



 <span class="token operator">&lt;</span>value<span class="token operator">&gt;</span>USA<span class="token operator">&lt;</span><span class="token operator">/</span>value<span class="token operator">&gt;</span> 



 <span class="token operator">&lt;</span>value<span class="token operator">&gt;</span>UK<span class="token operator">&lt;</span><span class="token operator">/</span>value<span class="token operator">&gt;</span> 



 <span class="token operator">&lt;</span><span class="token operator">/</span>list<span class="token operator">&gt;</span> 



 <span class="token operator">&lt;</span><span class="token operator">/</span>property<span class="token operator">&gt;</span> 



 



 <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> java<span class="token punctuation">.</span>util<span class="token punctuation">.</span>Set <span class="token operator">--</span><span class="token operator">&gt;</span> 



 <span class="token operator">&lt;</span>property name<span class="token operator">=</span><span class="token string">&quot;customSet&quot;</span><span class="token operator">&gt;</span> 



 <span class="token operator">&lt;</span>set<span class="token operator">&gt;</span> 



 <span class="token operator">&lt;</span>value<span class="token operator">&gt;</span>INDIA<span class="token operator">&lt;</span><span class="token operator">/</span>value<span class="token operator">&gt;</span> 



 <span class="token operator">&lt;</span>value<span class="token operator">&gt;</span>Pakistan<span class="token operator">&lt;</span><span class="token operator">/</span>value<span class="token operator">&gt;</span> 



 <span class="token operator">&lt;</span>value<span class="token operator">&gt;</span>USA<span class="token operator">&lt;</span><span class="token operator">/</span>value<span class="token operator">&gt;</span> 



 <span class="token operator">&lt;</span>value<span class="token operator">&gt;</span>UK<span class="token operator">&lt;</span><span class="token operator">/</span>value<span class="token operator">&gt;</span> 



 <span class="token operator">&lt;</span><span class="token operator">/</span>set<span class="token operator">&gt;</span> 



 <span class="token operator">&lt;</span><span class="token operator">/</span>property<span class="token operator">&gt;</span> 



 



 <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> java<span class="token punctuation">.</span>util<span class="token punctuation">.</span>Map <span class="token operator">--</span><span class="token operator">&gt;</span> 



 <span class="token operator">&lt;</span>property name<span class="token operator">=</span><span class="token string">&quot;customMap&quot;</span><span class="token operator">&gt;</span> 



 <span class="token operator">&lt;</span><span class="token keyword">map</span><span class="token operator">&gt;</span> 



 <span class="token operator">&lt;</span>entry key<span class="token operator">=</span><span class="token string">&quot;1&quot;</span> value<span class="token operator">=</span><span class="token string">&quot;INDIA&quot;</span><span class="token operator">/</span><span class="token operator">&gt;</span> 



 <span class="token operator">&lt;</span>entry key<span class="token operator">=</span><span class="token string">&quot;2&quot;</span> value<span class="token operator">=</span><span class="token string">&quot;Pakistan&quot;</span><span class="token operator">/</span><span class="token operator">&gt;</span> 



 <span class="token operator">&lt;</span>entry key<span class="token operator">=</span><span class="token string">&quot;3&quot;</span> value<span class="token operator">=</span><span class="token string">&quot;USA&quot;</span><span class="token operator">/</span><span class="token operator">&gt;</span> 



 <span class="token operator">&lt;</span>entry key<span class="token operator">=</span><span class="token string">&quot;4&quot;</span> value<span class="token operator">=</span><span class="token string">&quot;UK&quot;</span><span class="token operator">/</span><span class="token operator">&gt;</span> 



 <span class="token operator">&lt;</span><span class="token operator">/</span><span class="token keyword">map</span><span class="token operator">&gt;</span> 



 <span class="token operator">&lt;</span><span class="token operator">/</span>property<span class="token operator">&gt;</span> 



 



 <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> java<span class="token punctuation">.</span>util<span class="token punctuation">.</span>Properties <span class="token operator">--</span><span class="token operator">&gt;</span> 



 <span class="token operator">&lt;</span>property name<span class="token operator">=</span><span class="token string">&quot;customProperies&quot;</span><span class="token operator">&gt;</span> 



 <span class="token operator">&lt;</span>props<span class="token operator">&gt;</span> 



 <span class="token operator">&lt;</span>prop key<span class="token operator">=</span><span class="token string">&quot;admin&quot;</span><span class="token operator">&gt;</span>admin@nospam<span class="token punctuation">.</span>com<span class="token operator">&lt;</span><span class="token operator">/</span>prop<span class="token operator">&gt;</span> 



 <span class="token operator">&lt;</span>prop key<span class="token operator">=</span><span class="token string">&quot;support&quot;</span><span class="token operator">&gt;</span>support@nospam<span class="token punctuation">.</span>com<span class="token operator">&lt;</span><span class="token operator">/</span>prop<span class="token operator">&gt;</span> 



 <span class="token operator">&lt;</span><span class="token operator">/</span>props<span class="token operator">&gt;</span> 



 <span class="token operator">&lt;</span><span class="token operator">/</span>property<span class="token operator">&gt;</span> 



 



 <span class="token operator">&lt;</span><span class="token operator">/</span>bean<span class="token operator">&gt;</span> 



<span class="token operator">&lt;</span><span class="token operator">/</span>beans<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="使用-autowired注解自动装配的过程" tabindex="-1"><a class="header-anchor" href="#使用-autowired注解自动装配的过程" aria-hidden="true">#</a> 使用@Autowired注解自动装配的过程</h3><p>在使用@Autowired注解之前需要在Spring配置文件进行配置，<code>&lt;context:annotation-config /&gt;</code>。</p><p>在启动spring IoC时，容器自动装载了一个<code>AutowiredAnnotationBeanPostProcessor</code>后置处理器，当容器扫描到<code>@Autowied</code>、<code>@Resource</code>或<code>@Inject</code>时，就会在IoC容器自动查找需要的bean，并装配给该对象的属性。在使用<code>@Autowired</code>时，首先在容器中查询对应类型的bean：</p><ul><li>如果查询结果刚好为一个，就将该bean装配给<code>@Autowired</code>指定的数据；</li><li>如果查询的结果不止一个，那么<code>@Autowired</code>会根据名称来查找；</li><li>如果上述查找的结果为空，那么会抛出异常。解决方法时，使用<code>required=false</code>。</li></ul><h2 id="spring-aop" tabindex="-1"><a class="header-anchor" href="#spring-aop" aria-hidden="true">#</a> Spring AOP</h2><h3 id="aop原理" tabindex="-1"><a class="header-anchor" href="#aop原理" aria-hidden="true">#</a> AOP原理</h3><p>OOP(Object-Oriented Programming)面向对象编程，允许开发者定义纵向的关系，但并适用于定义横向的关系，导致了大量代码的重复，而不利于各个模块的重用。</p><p>AOP(Aspect-Oriented Programming)，一般称为面向切面编程，作为面向对象的一种补充，用于将那些与业务无关，但却对多个对象产生影响的公共行为和逻辑，抽取并封装为一个可重用的模块，这个模块被命名为“切面”（Aspect），减少系统中的重复代码，降低了模块间的耦合度，同时提高了系统的可维护性。</p><p>AOP 主要应用场景有</p><ul><li>Authentication 权限</li><li>Caching 缓存</li><li>Context passing 内容传递</li><li>Error handling 错误处理</li><li>Lazy loading 懒加载</li><li>Debugging 调试</li><li>logging, tracing, profiling and monitoring 记录跟踪 优化 校准</li><li>Performance optimization 性能优化</li><li>Persistence 持久化</li><li>Resource pooling 资源池</li><li>Synchronization 同步</li><li>Transactions 事务</li></ul><h3 id="aop-核心概念" tabindex="-1"><a class="header-anchor" href="#aop-核心概念" aria-hidden="true">#</a> AOP 核心概念</h3><ul><li>切面（aspect）：类是对物体特征的抽象，切面就是对横切关注点的抽象</li><li>横切关注点：对哪些方法进行拦截，拦截后怎么处理，这些关注点称之为横切关注点</li><li>连接点（joinpoint）：被拦截到的点，因为 Spring 只支持方法类型的连接点，所以在 Spring中连接点指的就是被拦截到的方法，实际上连接点还可以是字段或者构造器</li><li>切入点（pointcut）：对连接点进行拦截的定义</li><li>通知（advice）：所谓通知指的就是指拦截到连接点之后要执行的代码，通知分为前置、后置、异常、最终、环绕通知五类</li><li>目标对象：代理的目标对象</li><li>织入（weave）：将切面应用到目标对象并导致代理对象创建的过程 <ul><li>编译期：切面在目标类编译时被织入。AspectJ的织入编译器是以这种方式织入切面的；</li><li>类加载期：切面在目标类加载到JVM时被织入。需要特殊的类加载器，它可以在目标类被引入应用之前增强该目标类的字节码。AspectJ5的加载时织入就支持以这种方式织入切面；</li><li>运行期：切面在应用运行的某个时刻被织入。一般情况下，在织入切面时，AOP容器会为目标对象动态地创建一个代理对象。SpringAOP就是以这种方式织入切面。</li></ul></li><li>引入（introduction）：在不修改代码的前提下，引入可以在运行期为类动态地添加一些方法或字段</li></ul><h3 id="spring-中的代理" tabindex="-1"><a class="header-anchor" href="#spring-中的代理" aria-hidden="true">#</a> Spring 中的代理</h3><p>将 Advice 应用于目标对象后创建的对象称为代理。在客户端对象的情况下，目标对象和代理对象是相同的。</p><blockquote><p>Advice + Target Object = Proxy</p></blockquote><h3 id="aop-实现方式" tabindex="-1"><a class="header-anchor" href="#aop-实现方式" aria-hidden="true">#</a> AOP 实现方式</h3><p>AOP实现的关键在于代理模式，AOP代理主要分为静态代理和动态代理。</p><ul><li>AspectJ 静态代理的增强，所谓静态代理，就是AOP框架会在编译阶段生成AOP代理类，因此也称为编译时增强，他会在编译阶段将AspectJ(切面)织入到Java字节码中，运行的时候就是增强之后的AOP对象。</li><li>Spring AOP使用的动态代理，所谓的动态代理就是说AOP框架不会去修改字节码，而是每次运行时在内存中临时为方法生成一个AOP对象，这个AOP对象包含了目标对象的全部方法，并且在特定的切点做了增强处理，并回调原对象的方法。</li></ul><h3 id="aop-两种代理方式" tabindex="-1"><a class="header-anchor" href="#aop-两种代理方式" aria-hidden="true">#</a> AOP 两种代理方式</h3><p>Spring 提供了两种方式来生成代理对象: JDK Proxy 和 Cglib，具体使用哪种方式生成由AopProxyFactory 根据 AdvisedSupport 对象的配置来决定。默认的策略是如果目标类是接口，则使用 JDK 动态代理技术，否则使用 Cglib 来生成代理。</p><h3 id="jdk-动态接口代理" tabindex="-1"><a class="header-anchor" href="#jdk-动态接口代理" aria-hidden="true">#</a> JDK 动态接口代理</h3><p>JDK 动态代理主要涉及到 java.lang.reflect 包中的两个类：Proxy 和 InvocationHandler。</p><p>InvocationHandler是一个接口，通过实现该接口定义横切逻辑，并通过反射机制调用目标类的代码，动态将横切逻辑和业务逻辑编制在一起。</p><p>Proxy 利用 InvocationHandler 动态创建一个符合某一接口的实例，生成目标类的代理对象。</p><h3 id="cglib-动态代理" tabindex="-1"><a class="header-anchor" href="#cglib-动态代理" aria-hidden="true">#</a> CGLib 动态代理</h3><p>CGLib 全称为 Code Generation Library，是一个强大的高性能，高质量的代码生成类库，可以在运行期扩展 Java 类与实现 Java 接口，CGLib 封装了 asm，可以再运行期动态生成新的 class。和 JDK 动态代理相比较：JDK 创建代理有一个限制，就是只能为接口创建代理实例，而对于没有通过接口定义业务方法的类，则可以通过 CGLib 创建动态代理。</p><p>实现原理</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code>@Aspect

public class TransactionDemo <span class="token punctuation">{</span>



 



 @<span class="token function">Pointcut</span><span class="token punctuation">(</span>value<span class="token operator">=</span><span class="token string">&quot;execution(* com.yangxin.core.service.*.*.*(..))&quot;</span><span class="token punctuation">)</span>



 



 public void <span class="token function">point</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>



 



 <span class="token punctuation">}</span>



 



 @<span class="token function">Before</span><span class="token punctuation">(</span>value<span class="token operator">=</span><span class="token string">&quot;point()&quot;</span><span class="token punctuation">)</span>



 



 public void <span class="token function">before</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>



 



 System<span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;transaction begin&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>



 



 <span class="token punctuation">}</span>



 



 @<span class="token function">AfterReturning</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token string">&quot;point()&quot;</span><span class="token punctuation">)</span>



 



 public void <span class="token function">after</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>



 



 System<span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;transaction commit&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>



 



 <span class="token punctuation">}</span>



 



 @<span class="token function">Around</span><span class="token punctuation">(</span><span class="token string">&quot;point()&quot;</span><span class="token punctuation">)</span>



 



 public void <span class="token function">around</span><span class="token punctuation">(</span>ProceedingJoinPoint joinPoint<span class="token punctuation">)</span> throws Throwable<span class="token punctuation">{</span>



 



 System<span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;transaction begin&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>



 



 joinPoint<span class="token punctuation">.</span><span class="token function">proceed</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>



 



 System<span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;transaction commit&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>



 



 <span class="token punctuation">}</span> <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="spring在运行时通知对象" tabindex="-1"><a class="header-anchor" href="#spring在运行时通知对象" aria-hidden="true">#</a> Spring在运行时通知对象</h3><p>通过在代理类中包裹切面，Spring在运行期把切面织入到Spring管理的bean中。代理封装了目标类，并拦截被通知方法的调用，再把调用转发给真正的目标bean。当代理拦截到方法调用时，在调用目标bean方法之前，会执行切面逻辑。</p><p>直到应用需要被代理的bean时，Spring才创建代理对象。如果使用的是ApplicationContext的话，在ApplicationContext从BeanFactory中加载所有bean的时候，Spring才会创建被代理的对象。因为Spring运行时才创建代理对象，所以我们不需要特殊的编译器来织入SpringAOP的切面。</p><h3 id="spring只支持方法级别的连接点" tabindex="-1"><a class="header-anchor" href="#spring只支持方法级别的连接点" aria-hidden="true">#</a> Spring只支持方法级别的连接点</h3><p>因为Spring基于动态代理，所以Spring只支持方法连接点。Spring缺少对字段连接点的支持，而且它不支持构造器连接点。方法之外的连接点拦截功能，我们可以利用Aspect来补充。</p><p>在Spring AOP 中，关注点和横切关注的区别是什么？在 spring aop 中 concern 和 cross-cutting concern 的不同之处</p><p>关注点（concern）是应用中一个模块的行为，一个关注点可能会被定义成一个我们想实现的一个功能。</p><p>横切关注点（cross-cutting concern）是一个关注点，此关注点是整个应用都会使用的功能，并影响整个应用，比如日志，安全和数据传输，几乎应用的每个模块都需要的功能。因此这些都属于横切关注点。</p><h3 id="spring通知类型" tabindex="-1"><a class="header-anchor" href="#spring通知类型" aria-hidden="true">#</a> Spring通知类型</h3><p>在AOP术语中，切面的工作被称为通知，实际上是程序执行时要通过SpringAOP框架触发的代码段。Spring切面可以应用5种类型的通知：</p><ul><li>前置通知（Before）：在目标方法被调用之前调用通知功能；</li><li>后置通知（After）：在目标方法完成之后调用通知，此时不会关心方法的输出是什么；</li><li>返回通知（After-returning ）：在目标方法成功执行之后调用通知；</li><li>异常通知（After-throwing）：在目标方法抛出异常后调用通知；</li><li>环绕通知（Around）：通知包裹了被通知的方法，在被通知的方法调用之前和调用之后执行自定义的行为。</li></ul><h4 id="同一个aspect-不同advice的执行顺序" tabindex="-1"><a class="header-anchor" href="#同一个aspect-不同advice的执行顺序" aria-hidden="true">#</a> 同一个aspect，不同advice的执行顺序：</h4><p>没有异常情况下的执行顺序：</p><ul><li>around before advice</li><li>before advice</li><li>target method 执行</li><li>around after advice</li><li>after advice</li><li>afterReturning</li></ul><p>有异常情况下的执行顺序：</p><ul><li>around before advice</li><li>before advice</li><li>target method 执行</li><li>around after advice</li><li>after advice</li><li>afterThrowing:异常发生</li><li>java.lang.RuntimeException: 异常发生</li></ul><h2 id="spring-mvc" tabindex="-1"><a class="header-anchor" href="#spring-mvc" aria-hidden="true">#</a> Spring MVC</h2><h3 id="spring-mvc-原理" tabindex="-1"><a class="header-anchor" href="#spring-mvc-原理" aria-hidden="true">#</a> Spring MVC 原理</h3><p>Spring 的模型-视图-控制器（MVC）框架是围绕一个 DispatcherServlet 来设计的，这个 Servlet会把请求分发给各个处理器，并支持可配置的处理器映射、视图渲染、本地化、时区与主题渲染等，甚至还能支持文件上传。</p><p><img src="https://gh.xlc520.tk/xlc520/MyImage/raw/main/MdImg/73ee5a65e7e6e8a0733e3730a486a6e8.png" alt="73ee5a65e7e6e8a0733e3730a486a6e8.png"></p><p><strong>Http 请求到 DispatcherServlet</strong></p><p>(1) 客户端请求提交到 DispatcherServlet。</p><p><strong>HandlerMapping 寻找处理器</strong></p><p>(2) 由 DispatcherServlet 控制器查询一个或多个 HandlerMapping，找到处理请求的Controller。</p><p><strong>调用处理器 Controller</strong></p><p>(3) DispatcherServlet 将请求提交到 Controller。</p><p><strong>Controller 调用业务逻辑处理后，返回 ModelAndView</strong></p><p>(4)(5)调用业务处理和返回结果：Controller 调用业务逻辑处理后，返回 ModelAndView。</p><p><strong>DispatcherServlet 查询 ModelAndView</strong></p><p>(6)(7)处理视图映射并返回模型：DispatcherServlet 查询一个或多个 ViewResoler 视图解析器，找到 ModelAndView 指定的视图。</p><p><strong>ModelAndView 反馈浏览器 HTTP</strong></p><p>(8) Http 响应：视图负责将结果显示到客户端。</p><h2 id="spring-data" tabindex="-1"><a class="header-anchor" href="#spring-data" aria-hidden="true">#</a> Spring DATA</h2><h3 id="spring-orm理解" tabindex="-1"><a class="header-anchor" href="#spring-orm理解" aria-hidden="true">#</a> Spring ORM理解</h3><p>Spring 通过提供ORM模块，支持我们在直接JDBC之上使用一个对象/关系映射映射(ORM)工具，Spring 支持集成主流的ORM框架，如Hiberate，JDO和 iBATIS，JPA，TopLink，JDO，OJB 。Spring的事务管理同样支持以上所有ORM框架及JDBC。</p><p><strong>解释JDBC抽象和DAO模块</strong></p><p>通过使用JDBC抽象和DAO模块，保证数据库代码的简洁，并能避免数据库资源错误关闭导致的问题，它在各种不同的数据库的错误信息之上，提供了一个统一的异常访问层。它还利用Spring的AOP 模块给Spring应用中的对象提供事务管理服务。</p><h3 id="spring-dao-的支持" tabindex="-1"><a class="header-anchor" href="#spring-dao-的支持" aria-hidden="true">#</a> Spring DAO 的支持</h3><p>Spring DAO（数据访问对象） 使得 JDBC，Hibernate 或 JDO 这样的数据访问技术更容易以一种统一的方式工作。这使得用户容易在持久性技术之间切换。它还允许您在编写代码时，无需考虑捕获每种技术不同的异常。</p><h3 id="spring-jdbc-api" tabindex="-1"><a class="header-anchor" href="#spring-jdbc-api" aria-hidden="true">#</a> Spring JDBC API</h3><ul><li>JdbcTemplate</li><li>SimpleJdbcTemplate</li><li>NamedParameterJdbcTemplate</li><li>SimpleJdbcInsert</li><li>SimpleJdbcCall</li></ul><h3 id="jdbctemplate是什么" tabindex="-1"><a class="header-anchor" href="#jdbctemplate是什么" aria-hidden="true">#</a> JdbcTemplate是什么</h3><p>JdbcTemplate 类提供了很多便利的方法解决诸如把数据库数据转变成基本数据类型或对象，执行写好的或可调用的数据库操作语句，提供自定义的数据错误处理。</p><h3 id="使用spring通过什么方式访问hibernate" tabindex="-1"><a class="header-anchor" href="#使用spring通过什么方式访问hibernate" aria-hidden="true">#</a> 使用Spring通过什么方式访问Hibernate？</h3><p>有两种方式访问Hibernate：</p><ul><li>使用 Hibernate 模板和回调进行控制反转</li><li>扩展 HibernateDAOSupport 并应用 AOP 拦截器节点</li></ul><h3 id="spring-支持的-orm" tabindex="-1"><a class="header-anchor" href="#spring-支持的-orm" aria-hidden="true">#</a> Spring 支持的 ORM</h3><p>Spring 支持以下 ORM：</p><ul><li>Hibernate</li><li>iBatis</li><li>JPA (Java Persistence API)</li><li>TopLink</li><li>JDO (Java Data Objects)</li><li>OJB</li></ul><p><strong>如何通过 HibernateDaoSupport 将 Spring 和 Hibernate 结合起来？</strong></p><p>用 Spring 的 SessionFactory 调用 LocalSessionFactory。集成过程分三步：</p><ul><li>配置 the Hibernate SessionFactory</li><li>继承 HibernateDaoSupport</li><li>实现一个 DAO 在 AOP 支持的事务中装配</li></ul><h3 id="spring-支持的事务管理类型" tabindex="-1"><a class="header-anchor" href="#spring-支持的事务管理类型" aria-hidden="true">#</a> Spring 支持的事务管理类型</h3><p>Spring 支持两种类型的事务管理：</p><ul><li>编程式事务管理：这意味你通过编程的方式管理事务，给你带来极大的灵活性，但是 难维护。</li><li>声明式事务管理：这意味着你可以将业务代码和事务管理分离，你只需用注解和 XML 配置来管理事务。</li></ul><h3 id="spring-框架的事务管理有哪些优点" tabindex="-1"><a class="header-anchor" href="#spring-框架的事务管理有哪些优点" aria-hidden="true">#</a> Spring 框架的事务管理有哪些优点？</h3><p>它为不同的事务 API 如 JTA，JDBC，Hibernate，JPA 和 JDO，提供一个不变 的编程模式。</p><p>它为编程式事务管理提供了一套简单的 API 而不是一些复杂的事务 API 如 它支持声明式事务管理。它和 Spring 各种数据访问抽象层很好得集成。</p><h3 id="你更倾向用那种事务管理类型" tabindex="-1"><a class="header-anchor" href="#你更倾向用那种事务管理类型" aria-hidden="true">#</a> 你更倾向用那种事务管理类型？</h3>`,203),h={href:"https://blog.csdn.net/sufu1065/article/details/122872239",target:"_blank",rel:"noopener noreferrer"},k=s('<h3 id="spring常用注解" tabindex="-1"><a class="header-anchor" href="#spring常用注解" aria-hidden="true">#</a> Spring常用注解</h3><h4 id="声明bean的注解" tabindex="-1"><a class="header-anchor" href="#声明bean的注解" aria-hidden="true">#</a> 声明bean的注解</h4><ul><li><code>@Component</code> ：组件，没有明确的角色</li><li><code>@Service</code> ：在业务逻辑层使用</li><li><code>@Repository</code> ：在数据访问层使用</li><li><code>@Controller</code> ：在展现层使用，控制层的声明</li><li><code>@RestController</code> ：<code>@Controller</code>和<code>@ResponseBody</code>组合，，控制层的声明</li></ul><h4 id="注入bean的注解" tabindex="-1"><a class="header-anchor" href="#注入bean的注解" aria-hidden="true">#</a> 注入bean的注解</h4><ul><li><code>@Autowired</code>：</li></ul><p>Spring自带的注解，通过<code>AutowiredAnnotationBeanPostProcessor</code> 类实现的依赖注入，作用在CONSTRUCTOR、METHOD、PARAMETER、FIELD、ANNOTATION_TYPE。默认是根据类型（byType ）进行自动装配的。如果有多个类型一样的Bean候选者，需要指定按照名称（byName ）进行装配，则需要配合@Qualifier。</p><p>指定名称后，如果Spring IOC容器中没有对应的组件bean抛出NoSuchBeanDefinitionException。也可以将@Autowired中required配置为false，如果配置为false之后，当没有找到相应bean的时候，系统不会抛异常</p><ul><li><code>@Inject</code>：</li></ul><p>JSR330 (Dependency Injection for Java)中的规范，需要导入javax.inject.Inject jar包 ，才能实现注入 作用CONSTRUCTOR、METHOD、FIELD上</p><p>根据类型进行自动装配的，如果需要按名称进行装配，则需要配合@Named</p><ul><li><code>@Resource</code>：</li></ul><p>JSR250规范的实现，在javax.annotation包下，作用TYPE、FIELD、METHOD上。</p><p>默认根据属性名称进行自动装配的，如果有多个类型一样的Bean候选者，则可以通过name进行指定进行注入</p><h4 id="java配置类相关注解" tabindex="-1"><a class="header-anchor" href="#java配置类相关注解" aria-hidden="true">#</a> java配置类相关注解</h4><ul><li><code>@Configuration</code> ：声明当前类为配置类，相当于xml形式的Spring配置（类上），声明当前类为配置类，其中内部组合了@Component注解，表明这个类是一个bean（类上）</li><li><code>@Bean</code> ：注解在方法上，声明当前方法的返回值为一个bean，替代xml中的方式（方法上）</li><li><code>@ComponentScan</code> ：用于对Component进行扫描，相当于xml中的（类上）</li><li><code>@WishlyConfiguration</code> ：为@Configuration与@ComponentScan的组合注解，可以替代这两个注解</li></ul><h4 id="切面-aop-相关注解" tabindex="-1"><a class="header-anchor" href="#切面-aop-相关注解" aria-hidden="true">#</a> 切面（AOP）相关注解</h4><p>Spring支持AspectJ的注解式切面编程</p><ul><li><code>@Aspect</code>：声明一个切面（类上），使用@After、@Before、@Around定义建言（advice），可直接将拦截规则（切点）作为参数。</li><li><code>@After</code> ：在方法执行之后执行（方法上）</li><li><code>@Before</code> ：在方法执行之前执行（方法上）</li><li><code>@Around</code> ：在方法执行之前与之后执行（方法上）</li><li><code>@PointCut</code> ：声明切点在java配置类中使用@EnableAspectJAutoProxy注解开启Spring对AspectJ代理的支持（类上）</li></ul><h3 id="bean的属性支持" tabindex="-1"><a class="header-anchor" href="#bean的属性支持" aria-hidden="true">#</a> @Bean的属性支持</h3><p>@Scope 设置Spring容器如何新建Bean实例（方法上，得有@Bean），其设置类型包括：</p><ul><li><code>Singleton</code>：单例,一个Spring容器中只有一个bean实例，默认模式</li><li><code>Protetype</code>：每次调用新建一个bean</li><li><code>Request</code>：web项目中，给每个http request新建一个bean</li><li><code>Session</code> ：web项目中，给每个http session新建一个bean</li><li><code>Global</code>：Session给每一个 global http session新建一个Bean实例</li><li><code>@StepScope</code>：在Spring Batch中还有涉及(Spring Batch 之 背景框架简介_vincent-CSDN博客)</li><li><code>@PostConstruct</code> ：由JSR-250提供，在构造函数执行完之后执行，等价于xml配置文件中bean的initMethod</li><li><code>@PreDestory</code> ：由JSR-250提供，在Bean销毁之前执行，等价于xml配置文件中bean的destroyMethod</li></ul><h3 id="value注解" tabindex="-1"><a class="header-anchor" href="#value注解" aria-hidden="true">#</a> @Value注解</h3><p>为属性注入值,支持如下方式的注入：</p><p>注入普通字符</p><p><img src="https://img-blog.csdnimg.cn/img_convert/37a5272847ff6ca86690a2e1d3f4dfaa.png" alt="37a5272847ff6ca86690a2e1d3f4dfaa.png"></p><p>注入操作系统属性</p><p><img src="https://img-blog.csdnimg.cn/img_convert/e4803c07763e1811c00d4c7e602ce0a5.png" alt="e4803c07763e1811c00d4c7e602ce0a5.png"></p><p>注入表达式结果</p><p><img src="https://gh.xlc520.tk/xlc520/MyImage/raw/main/MdImg/0a1da82128f379c30ad8a617633e8dbe.png" alt="0a1da82128f379c30ad8a617633e8dbe.png"></p><p>注入其它bean属性</p><p><img src="https://gh.xlc520.tk/xlc520/MyImage/raw/main/MdImg/73e51190ca79d307501ca874efee2e3b.png" alt="73e51190ca79d307501ca874efee2e3b.png"></p><p>注入文件资源</p><p><img src="https://img-blog.csdnimg.cn/img_convert/9bd391199c575bbc9d4f158a881c7d18.png" alt="9bd391199c575bbc9d4f158a881c7d18.png"></p><p>注入网站资源</p><p><img src="https://gh.xlc520.tk/xlc520/MyImage/raw/main/MdImg/cdaf29b32bdc7f7835aec018fecc3f50.png" alt="cdaf29b32bdc7f7835aec018fecc3f50.png"></p><p>注入配置文件</p><p><img src="https://img-blog.csdnimg.cn/img_convert/08a820d9676736e45563568e57f708da.png" alt="08a820d9676736e45563568e57f708da.png"></p><p><code>@PropertySource</code> 加载配置文件(类上)，还需配置一个<code>PropertySourcesPlaceholderConfigurer</code>的bean。</p><h3 id="环境切换" tabindex="-1"><a class="header-anchor" href="#环境切换" aria-hidden="true">#</a> 环境切换</h3><ul><li><code>@Profile</code> ：通过设定Environment的ActiveProfiles来设定当前context需要使用的配置环境。（类或方法上）</li><li><code>@Conditional</code>：Spring4中可以使用此注解定义条件话的bean，通过实现Condition接口，并重写matches方法，从而决定该bean是否被实例化。（方法上）</li></ul><h3 id="异步相关" tabindex="-1"><a class="header-anchor" href="#异步相关" aria-hidden="true">#</a> 异步相关</h3><ul><li><code>@EnableAsync</code>：配置类中，通过此注解开启对异步任务的支持，叙事性AsyncConfigurer接口（类上）</li><li><code>@Async</code>：在实际执行的bean方法使用该注解来申明其是一个异步任务（方法上或类上所有的方法都将异步，需要@EnableAsync开启异步任务）</li></ul><h3 id="定时任务相关" tabindex="-1"><a class="header-anchor" href="#定时任务相关" aria-hidden="true">#</a> 定时任务相关</h3><ul><li><code>@EnableScheduling</code> ：在配置类上使用，开启计划任务的支持（类上）</li><li><code>@Scheduled</code> ：来申明这是一个任务，包括cron,fixDelay,fixRate等类型（方法上，需先开启计划任务的支持）</li></ul><h3 id="enable-注解说明" tabindex="-1"><a class="header-anchor" href="#enable-注解说明" aria-hidden="true">#</a> @Enable 注解说明</h3><p>这些注解主要用来开启对xxx的支持。</p><ul><li><code>@EnableAspectJAutoProxy</code> ：开启对AspectJ自动代理的支持</li><li><code>@EnableAsync</code> ：开启异步方法的支持</li><li><code>@EnableScheduling</code> ：开启计划任务的支持</li><li><code>@EnableWebMvc</code> ：开启Web MVC的配置支持</li><li><code>@EnableConfigurationProperties</code> ：开启对@ConfigurationProperties注解配置Bean的支持</li><li><code>@EnableJpaRepositories</code> ：开启对SpringData JPA Repository的支持</li><li><code>@EnableTransactionManagement</code> ：开启注解式事务的支持</li><li><code>@EnableCaching</code> ：开启注解式的缓存支持</li></ul><h3 id="测试相关注解" tabindex="-1"><a class="header-anchor" href="#测试相关注解" aria-hidden="true">#</a> 测试相关注解</h3><ul><li><code>@RunWith</code> ：运行器，Spring中通常用于对JUnit的支持</li><li><code>@ContextConfiguration</code>：用来加载配置ApplicationContext，其中classes属性用来加载配置类</li></ul><h3 id="springmvc部分" tabindex="-1"><a class="header-anchor" href="#springmvc部分" aria-hidden="true">#</a> SpringMVC部分</h3><ul><li><code>@EnableWebMvc</code> ：在配置类中开启Web MVC的配置支持，如一些ViewResolver或者MessageConverter等，若无此句，重写WebMvcConfigurerAdapter方法（用于对SpringMVC的配置）。</li><li><code>@Controller</code> ：声明该类为SpringMVC中的Controller</li><li><code>@RequestMapping</code> ：用于映射Web请求，包括访问路径和参数（类或方法上）</li><li><code>@ResponseBody</code> ：支持将返回值放在response内，而不是一个页面，通常用户返回json数据（返回值旁或方法上）</li><li><code>@RequestBody</code> ：允许request的参数在request体中，而不是在直接连接在地址后面。（放在参数前）</li><li><code>@PathVariable</code> ：用于接收路径参数，比如@RequestMapping(“/hello/{name}”)申明的路径，将注解放在参数中前，即可获取该值，通常作为Restful的接口实现方法。</li><li><code>@RestController</code> ：该注解为一个组合注解，相当于@Controller和@ResponseBody的组合，注解在类上，意味着，该Controller的所有方法都默认加上了@ResponseBody。</li><li><code>@ControllerAdvice</code> ：通过该注解，我们可以将对于控制器的全局配置放置在同一个位置，注解了@Controller的类的方法可使用@ExceptionHandler、@InitBinder、@ModelAttribute注解到方法上，这对所有注解了 @RequestMapping的控制器内的方法有效。</li><li><code>@ExceptionHandler</code> ：用于全局处理控制器里的异常</li><li><code>@InitBinder</code> ：用来设置WebDataBinder，WebDataBinder用来自动绑定前台请求参数到Model中。</li><li><code>@ModelAttribute</code> ：本来的作用是绑定键值对到Model里，在@ControllerAdvice中是让全局的@RequestMapping：都能获得在此处设置的键值对。</li></ul>',51);function S(f,y){const e=o("ExternalLinkIcon");return r(),t("div",null,[c,n("ul",null,[n("li",null,[d,n("ul",null,[v,n("li",null,[n("a",u,[b,i(e)]),a("—在 spring 配置文件中定义的 bean 默认为单例模式。")]),m]),g,n("p",null,[a("大多数 Spring 框架的用户选择声明式事务管理，因为它对应用代码的影响最小，因 此更符合一个无侵入的"),n("a",h,[a("轻量级容器"),i(e)]),a("的思想。声明式事务管理要优于编程式事务管理， 虽然比编程式事务管理（这种方式允许你通过代码控制事务）少了一点灵活性。")]),k])])])}const x=l(p,[["render",S],["__file","Spring 面试63问.html.vue"]]);export{x as default};
