(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{165:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return f}));var n=r(0),c=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,c=function(e,t){if(null==e)return{};var r,n,c={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(c[r]=e[r]);return c}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(c[r]=e[r])}return c}var l=c.a.createContext({}),u=function(e){var t=c.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return c.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},b=c.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(r),b=n,f=p["".concat(o,".").concat(b)]||p[b]||m[b]||a;return r?c.a.createElement(f,i(i({ref:t},l),{},{components:r})):c.a.createElement(f,i({ref:t},l))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,o=new Array(a);o[0]=b;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var l=2;l<a;l++)o[l]=r[l];return c.a.createElement.apply(null,o)}return c.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},55:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return i})),r.d(t,"rightToc",(function(){return s})),r.d(t,"default",(function(){return u}));var n=r(2),c=r(6),a=(r(0),r(165)),o={id:"metrics",title:"Scheduler Metrics",keywords:["metrics"]},i={unversionedId:"performance/metrics",id:"performance/metrics",isDocsHomePage:!1,title:"Scheduler Metrics",description:"\x3c!--",source:"@site/docs/performance/metrics.md",slug:"/performance/metrics",permalink:"/docs/next/performance/metrics",version:"current",sidebar:"docs",previous:{title:"Evaluate YuniKorn function & performance with Kubemark",permalink:"/docs/next/performance/evaluate_perf_function_with_kubemark"},next:{title:"Profiling",permalink:"/docs/next/performance/profiling"}},s=[{value:"Access Metrics",id:"access-metrics",children:[]},{value:"Aggregate Metrics to Prometheus",id:"aggregate-metrics-to-prometheus",children:[]}],l={rightToc:s};function u(e){var t=e.components,r=Object(c.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"YuniKorn leverages ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://prometheus.io/"}),"Prometheus")," to record metrics. The metrics system keeps tracking of\nscheduler's critical execution paths, to reveal potential performance bottlenecks. Currently, there are two categories\nfor these metrics:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"scheduler: generic metrics of the scheduler, such as allocation latency, num of apps etc."),Object(a.b)("li",{parentName:"ul"},"queue: each queue has its own metrics sub-system, tracking queue status.")),Object(a.b)("p",null,"all metrics are declared in ",Object(a.b)("inlineCode",{parentName:"p"},"yunikorn")," namespace."),Object(a.b)("h2",{id:"access-metrics"},"Access Metrics"),Object(a.b)("p",null,"YuniKorn metrics are collected through Prometheus client library, and exposed via scheduler restful service.\nOnce started, they can be accessed via endpoint http://localhost:9080/ws/v1/metrics."),Object(a.b)("h2",{id:"aggregate-metrics-to-prometheus"},"Aggregate Metrics to Prometheus"),Object(a.b)("p",null,"It's simple to setup a Prometheus server to grab YuniKorn metrics periodically. Follow these steps:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"Setup Prometheus (read more from ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://prometheus.io/docs/prometheus/latest/installation/"}),"Prometheus docs"),")")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"Configure Prometheus rules: a sample configuration "))),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"global:\n  scrape_interval:     3s\n  evaluation_interval: 15s\n\nscrape_configs:\n  - job_name: 'yunikorn'\n    scrape_interval: 1s\n    metrics_path: '/ws/v1/metrics'\n    static_configs:\n    - targets: ['docker.for.mac.host.internal:9080']\n")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"start Prometheus")),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell",metastring:"script",script:!0}),"docker pull prom/prometheus:latest\ndocker run -p 9090:9090 -v /path/to/prometheus.yml:/etc/prometheus/prometheus.yml prom/prometheus\n")),Object(a.b)("p",null,"Use ",Object(a.b)("inlineCode",{parentName:"p"},"docker.for.mac.host.internal")," instead of ",Object(a.b)("inlineCode",{parentName:"p"},"localhost")," if you are running Prometheus in a local docker container\non Mac OS. Once started, open Prometheus web UI: http://localhost:9090/graph. You'll see all available metrics from\nYuniKorn scheduler."))}u.isMDXComponent=!0}}]);