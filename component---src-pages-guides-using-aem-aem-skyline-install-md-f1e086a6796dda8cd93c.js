(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[5623],{2096:function(e,a,t){"use strict";t.r(a),t.d(a,{_frontmatter:function(){return p},default:function(){return m}});var n=t(22122),i=t(19756),o=(t(15007),t(64983)),s=t(99536),d=["components"],p={},r={_frontmatter:p},l=s.Z;function m(e){var a=e.components,t=(0,i.Z)(e,d);return(0,o.mdx)(l,(0,n.Z)({},r,t,{components:a,mdxType:"MDXLayout"}),(0,o.mdx)("h1",{id:"integrate-with-aem-as-a-cloud-service"},"Integrate with AEM as a Cloud Service"),(0,o.mdx)("p",null,"This documentation has instructions to set up I/O Events integrations with AEM as a Cloud Service set up."),(0,o.mdx)("p",null,"To integrate with AEM On Premise, please refer to the other associated ",(0,o.mdx)("a",{parentName:"p",href:"aem_on_premise_install_6.5.md"},"documentation"),"."),(0,o.mdx)("h2",{id:"deploy-adobe-io-events-integration-using-cloud-manager"},"Deploy Adobe I/O Events integration using Cloud Manager"),(0,o.mdx)("p",null,"The Adobe I/O Events integration is currently being exposed through an integration package which requires you to follow the below deployment instructions. This configuration will change in future once Adobe I/O Events is exposed as a configuration in AEM as a Cloud Service. "),(0,o.mdx)("ol",null,(0,o.mdx)("li",{parentName:"ol"},(0,o.mdx)("p",{parentName:"li"},(0,o.mdx)("a",{parentName:"p",href:"https://github.com/AdobeDocs/adobeio-events/releases/tag/2020_07_20_13_00"},"Download the code"),". Please download the latest version of the package. ")),(0,o.mdx)("li",{parentName:"ol"},(0,o.mdx)("p",{parentName:"li"},"Unzip this archive, and merge it with your own existing Cloud Manager git repo, see ",(0,o.mdx)("a",{parentName:"p",href:"https://experienceleague.adobe.com/docs/experience-manager-cloud-manager/using/managing-code/setup-cloud-manager-git-integration.html"},"Experience Manager Cloud Manager - Help - Accessing Git ")," for further instructions")),(0,o.mdx)("li",{parentName:"ol"},(0,o.mdx)("p",{parentName:"li"},(0,o.mdx)("a",{parentName:"p",href:"aem_keystore_setup.md"},"prepare the Adobe I/O Events service user keystore")," ")),(0,o.mdx)("li",{parentName:"ol"},(0,o.mdx)("p",{parentName:"li"},(0,o.mdx)("a",{parentName:"p",href:"aem_console_setup.md"},"set up your workspace in the Adobe Developer Console, and as OSGI configuration"))),(0,o.mdx)("li",{parentName:"ol"},(0,o.mdx)("p",{parentName:"li"},(0,o.mdx)("a",{parentName:"p",href:"https://docs.adobe.com/content/help/en/experience-manager-cloud-manager/using/how-to-use/deploying-code.html"},"Deploy the code"))),(0,o.mdx)("li",{parentName:"ol"},(0,o.mdx)("p",{parentName:"li"},(0,o.mdx)("a",{parentName:"p",href:"aem_ims_config.md"},"Finalize the Adobe IMS configuration in AEM"))),(0,o.mdx)("li",{parentName:"ol"},(0,o.mdx)("p",{parentName:"li"},(0,o.mdx)("a",{parentName:"p",href:"aem_healthcheck_servlet.md"},"Trigger the final Adobe I/O Events health checks")))),(0,o.mdx)("h2",{id:"verify-your-aem-cloud-service-is-showing-in-the-adobe-developer-console"},"Verify your AEM Cloud Service is showing in the Adobe Developer Console"),(0,o.mdx)("p",null,"Once the previous steps are completed, a new AEM as a Cloud Service provider should appear in the Events Providers list in the Adobe Developer Console.\nPlease refer to the Adobe Developer Console documentation on how to ",(0,o.mdx)("a",{parentName:"p",href:"/adobe-io-events/console/docs/guides/services/services-add-event/"},"add Events to a project")," if you are new to this."),(0,o.mdx)("p",null,"  ",(0,o.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"344px"}},"\n      ",(0,o.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"79.6875%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,o.mdx)("picture",{parentName:"span"},"\n          ",(0,o.mdx)("source",{parentName:"picture",srcSet:["/adobe-io-events/static/b5c4f33796832447b8d32273df05e1c5/cb523/add_skyline_event_provider.webp 320w","/adobe-io-events/static/b5c4f33796832447b8d32273df05e1c5/c4476/add_skyline_event_provider.webp 344w"],sizes:"(max-width: 344px) 100vw, 344px",type:"image/webp"}),"\n          ",(0,o.mdx)("source",{parentName:"picture",srcSet:["/adobe-io-events/static/b5c4f33796832447b8d32273df05e1c5/72799/add_skyline_event_provider.png 320w","/adobe-io-events/static/b5c4f33796832447b8d32273df05e1c5/75d93/add_skyline_event_provider.png 344w"],sizes:"(max-width: 344px) 100vw, 344px",type:"image/png"}),"\n          ",(0,o.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/adobe-io-events/static/b5c4f33796832447b8d32273df05e1c5/75d93/add_skyline_event_provider.png",alt:"Adobe Developer Console showing an AEM Events Provider",title:"Adobe Developer Console showing an AEM Events Provider",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,o.mdx)("h2",{id:"verify-events-are-being-emitted-from-aem-as-a-cloud-service"},"Verify Events are being emitted from 'AEM as a Cloud Service'"),(0,o.mdx)("p",null,"Now you can start verifying that your AEM as a Cloud Service environment is emitting events to Adobe I/O.\nTo do that register a new ",(0,o.mdx)("a",{parentName:"p",href:"../../index.md"},"webhook")," or start pulling events from this new source using the ",(0,o.mdx)("a",{parentName:"p",href:"../api/journaling_api.md"},"journaling API"),"."),(0,o.mdx)("p",null,"Make sure you register to receive ",(0,o.mdx)("inlineCode",{parentName:"p"},"OSGI Ping Event")),(0,o.mdx)("p",null,"   ",(0,o.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1280px"}},"\n      ",(0,o.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"33.4375%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,o.mdx)("picture",{parentName:"span"},"\n          ",(0,o.mdx)("source",{parentName:"picture",srcSet:["/adobe-io-events/static/291918173bfce6880aa1a599ba94847a/cb523/select_osgi_ping_event.webp 320w","/adobe-io-events/static/291918173bfce6880aa1a599ba94847a/797b9/select_osgi_ping_event.webp 640w","/adobe-io-events/static/291918173bfce6880aa1a599ba94847a/4b075/select_osgi_ping_event.webp 1280w","/adobe-io-events/static/291918173bfce6880aa1a599ba94847a/cb7fb/select_osgi_ping_event.webp 1321w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/webp"}),"\n          ",(0,o.mdx)("source",{parentName:"picture",srcSet:["/adobe-io-events/static/291918173bfce6880aa1a599ba94847a/72799/select_osgi_ping_event.png 320w","/adobe-io-events/static/291918173bfce6880aa1a599ba94847a/6af66/select_osgi_ping_event.png 640w","/adobe-io-events/static/291918173bfce6880aa1a599ba94847a/21b4d/select_osgi_ping_event.png 1280w","/adobe-io-events/static/291918173bfce6880aa1a599ba94847a/60a1a/select_osgi_ping_event.png 1321w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/png"}),"\n          ",(0,o.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/adobe-io-events/static/291918173bfce6880aa1a599ba94847a/21b4d/select_osgi_ping_event.png",alt:"Select OSGI Ping Event",title:"Select OSGI Ping Event",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,o.mdx)("p",null,"If your webhook registration is active, every minute or so, you should see ping events showing up in the debug tracing tab:"),(0,o.mdx)("p",null,"   ",(0,o.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"995px"}},"\n      ",(0,o.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"59.375%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,o.mdx)("picture",{parentName:"span"},"\n          ",(0,o.mdx)("source",{parentName:"picture",srcSet:["/adobe-io-events/static/1ed7ae5aa8136ef5622e3ed38ff6f8c5/cb523/debug_tracing_osgi_ping_event.webp 320w","/adobe-io-events/static/1ed7ae5aa8136ef5622e3ed38ff6f8c5/797b9/debug_tracing_osgi_ping_event.webp 640w","/adobe-io-events/static/1ed7ae5aa8136ef5622e3ed38ff6f8c5/63123/debug_tracing_osgi_ping_event.webp 995w"],sizes:"(max-width: 995px) 100vw, 995px",type:"image/webp"}),"\n          ",(0,o.mdx)("source",{parentName:"picture",srcSet:["/adobe-io-events/static/1ed7ae5aa8136ef5622e3ed38ff6f8c5/72799/debug_tracing_osgi_ping_event.png 320w","/adobe-io-events/static/1ed7ae5aa8136ef5622e3ed38ff6f8c5/6af66/debug_tracing_osgi_ping_event.png 640w","/adobe-io-events/static/1ed7ae5aa8136ef5622e3ed38ff6f8c5/4cdf7/debug_tracing_osgi_ping_event.png 995w"],sizes:"(max-width: 995px) 100vw, 995px",type:"image/png"}),"\n          ",(0,o.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/adobe-io-events/static/1ed7ae5aa8136ef5622e3ed38ff6f8c5/4cdf7/debug_tracing_osgi_ping_event.png",alt:"ping events showing up in the debug tracing tab",title:"ping events showing up in the debug tracing tab",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,o.mdx)("p",null,"If not, ",(0,o.mdx)("a",{parentName:"p",href:"https://docs.adobe.com/content/help/en/experience-manager-learn/cloud-service/debugging/debugging-aem-as-a-cloud-service/logs.html"},"have a look at your logs"),", and look for ",(0,o.mdx)("inlineCode",{parentName:"p"},"com.day.cq.dam.eventproxy")," in the error logs to better identify the issue."),(0,o.mdx)("p",null,"  ",(0,o.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"706px"}},"\n      ",(0,o.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"54.6875%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,o.mdx)("picture",{parentName:"span"},"\n          ",(0,o.mdx)("source",{parentName:"picture",srcSet:["/adobe-io-events/static/03d06fd5740281e0a4c68901699e4dfe/cb523/cloudmanager_download_log.webp 320w","/adobe-io-events/static/03d06fd5740281e0a4c68901699e4dfe/797b9/cloudmanager_download_log.webp 640w","/adobe-io-events/static/03d06fd5740281e0a4c68901699e4dfe/52234/cloudmanager_download_log.webp 706w"],sizes:"(max-width: 706px) 100vw, 706px",type:"image/webp"}),"\n          ",(0,o.mdx)("source",{parentName:"picture",srcSet:["/adobe-io-events/static/03d06fd5740281e0a4c68901699e4dfe/72799/cloudmanager_download_log.png 320w","/adobe-io-events/static/03d06fd5740281e0a4c68901699e4dfe/6af66/cloudmanager_download_log.png 640w","/adobe-io-events/static/03d06fd5740281e0a4c68901699e4dfe/9f21b/cloudmanager_download_log.png 706w"],sizes:"(max-width: 706px) 100vw, 706px",type:"image/png"}),"\n          ",(0,o.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/adobe-io-events/static/03d06fd5740281e0a4c68901699e4dfe/9f21b/cloudmanager_download_log.png",alt:"Cloud Manager download log",title:"Cloud Manager download log",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,o.mdx)("p",null,"You can also use the ",(0,o.mdx)("a",{parentName:"p",href:"https://docs.adobe.com/content/help/en/experience-manager-learn/cloud-service/debugging/debugging-aem-as-a-cloud-service/developer-console.html"},"developer console")," to verify the state of the ",(0,o.mdx)("inlineCode",{parentName:"p"},"aem-event-proxy")," bundle."),(0,o.mdx)("p",null,"Note that if you using a localhost instance for test, developement purpose you may also perform a few ",(0,o.mdx)("a",{parentName:"p",href:"aem_healthcheck_6.4.md"},"health checks"),"\nor even ",(0,o.mdx)("a",{parentName:"p",href:"aem_advanced_configurations.md"},"configuration fine tuning"),"."))}m.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-guides-using-aem-aem-skyline-install-md-f1e086a6796dda8cd93c.js.map