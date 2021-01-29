(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{165:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return b}));var o=n(0),r=n.n(o);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),s=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},u=function(e){var t=s(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=s(n),m=o,b=u["".concat(i,".").concat(m)]||u[m]||d[m]||a;return n?r.a.createElement(b,p(p({ref:t},l),{},{components:n})):r.a.createElement(b,p({ref:t},l))}));function b(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var l=2;l<a;l++)i[l]=n[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},81:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return p})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return s}));var o=n(2),r=n(6),a=(n(0),n(165)),i={id:"cross_queue_preemption",title:"Cross Queue Preemption"},p={unversionedId:"design/cross_queue_preemption",id:"version-0.9.0/design/cross_queue_preemption",isDocsHomePage:!1,title:"Cross Queue Preemption",description:"\x3c!--",source:"@site/versioned_docs/version-0.9.0/design/cross_queue_preemption.md",slug:"/design/cross_queue_preemption",permalink:"/docs/design/cross_queue_preemption",version:"0.9.0",sidebar:"version-0.9.0/docs",previous:{title:"Kubernetes Shim Design",permalink:"/docs/design/k8shim"},next:{title:"Namespace Resource Quota",permalink:"/docs/design/namespace_resource_quota"}},c=[{value:"Problems:",id:"problems",children:[]},{value:"Answer some questions for design/implementation choices",id:"answer-some-questions-for-designimplementation-choices",children:[]},{value:"Pseudo code",id:"pseudo-code",children:[]}],l={rightToc:c};function s(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"problems"},"Problems:"),Object(a.b)("p",null,"According to lessons we learned from YARN Scheduler preemption. "),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Here're top bad things:")," "),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Preemption is a shotgun instead of a sniper, when a preemption decision is made, nobody knows if preempted resources will go to demanding queue/app/user or not."),Object(a.b)("li",{parentName:"ul"},"Preemption logic and allocation is different, we have to implement (and mimic) what we have done in scheduler allocation logic. ")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Here're top good things:")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Preemption is fast (thanks to the shotgun), reclaiming thousands of containers only takes ~ 1 sec. "),Object(a.b)("li",{parentName:"ul"},"We have understand how painful it is to handle DRF, multiple preemption policies (inter/intra-queue, shotgun/surgical preemption, etc.) And we have developed some good logic\nto make sure better modularization and plug-ability  ")),Object(a.b)("h2",{id:"answer-some-questions-for-designimplementation-choices"},"Answer some questions for design/implementation choices"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"1","."," Do we really want preemption-delay? (Or we just want to control pace)")),Object(a.b)("p",null,"In CS, we have preemption-delay, which select victims in preemption candidates, wait for a certain time before killing it. "),Object(a.b)("p",null,"The purposes of preemption delay are: a. give heads-up time to apps so\nthey can prepare bad things happen (unfortunately no app do anything for these heads up, at least from what I knew). b. control preemption pace.   "),Object(a.b)("p",null,"And in practice, I found it causes a lot of issues, for example when a\ncluster state keep changing, it is very hard to ensure accurate preemption. "),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Proposal:")),Object(a.b)("p",null,"Remove the preemption-delay, keep the logics of controlling preemption pace. (such as ",Object(a.b)("inlineCode",{parentName:"p"},"yarn.resourcemanager.monitor.capacity.preemption\n.total_preemption_per_round"),"). And we can do allocation together with preemption.\nThis don't mean containers will be stopped immediately after preemption issued. Instead, RM can control delays between signal a container and kill a container. Such as grace\ntermination of POD in K8s: ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://kubernetes.io/docs/concepts/workloads/pods/pod/#termination-of-pods"}),"https://kubernetes.io/docs/concepts/workloads/pods/pod/#termination-of-pods"),"   "),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"2","."," Do we want to do preemption for every scheduling logic, or we can do periodically?")),Object(a.b)("p",null,"In CS, we have preemption logic runs periodically, like every 1 sec or 3 sec. "),Object(a.b)("p",null,"Since preemption logic involves some heavy logics, like calculating shares of queues/apps. And when doing accurate preemption, we may need to scan nodes for preemption candidate.\nConsidering this, I propose to have preemption runs periodically. But it is important to note that, we need to try to use as much code as possible for\nallocation-inside-preemption, otherwise there will be too much duplicated logic and very hard to be maintained in the future."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"3","."," Preemption cost and function")),Object(a.b)("p",null,"We found it is helpful to add cost for preemption, such as container live time, priority, type of container. It could be a cost function (Which returns a numeric value) or it\ncould be a comparator (which compare two allocations for preemption ask)."),Object(a.b)("h2",{id:"pseudo-code"},"Pseudo code"),Object(a.b)("p",null,"Logic of allocation (invoked every allocation cycle)"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{}),"input:\n  - nAlloc, allocate N allocations for this allocation cycle.\n\nfor partition: \n  askCandidates := findAskCandidates(nAlloc, preemption=false)\n  \n  allocated, failed_to_allocated := tryAllocate(askCandidates);\n  \n  send-allocated-to-cache-to-commit;\n  \n  update-missed-opportunity (allocated, failed_to_allocated);\n  \n  nAlloc -= len(allocated)   \n")),Object(a.b)("p",null,"Logic of preemption (invoked every preemption cycle)"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{}),"// It has to be done for every preemption-policy because calculation is different.\nfor preemption-policy: \n  preempt_results := policy.preempt()\n  for preempt_results: \n     send-preempt-result-to-cache-to-commit;\n     updated-missed-opportunity (allocated)\n")),Object(a.b)("p",null,"Inside preemption policy"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{}),"inter-queue-preempt-policy:\n  calculate-preemption-quotas;\n  \n  for partitions:\n    total_preempted := resource(0);\n    \n    while total_preempted < partition-limited:\n      // queues will be sorted by allocating - preempting\n      // And ignore any key in preemption_mask\n      askCandidates := findAskCandidates(N, preemption=true)\n      \n      preempt_results := tryAllocate(askCandidates, preemption=true);\n      \n      total_preempted += sigma(preempt_result.allocResource)\n      \n      send-allocated-to-cache-to-commit;\n      \n      update-missed-opportunity (allocated, failed_to_allocated);\n      \n      update-preemption-mask(askCandidates.allocKeys - preempt_results.allocKeys)\n")))}s.isMDXComponent=!0}}]);