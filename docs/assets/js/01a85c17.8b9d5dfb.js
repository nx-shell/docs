"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[13],{399:(e,t,a)=>{a.d(t,{Z:()=>E});var n=a(3366),r=a(7294),l=a(8642),s=a(6405),c=a(6742);const i="sidebar_2-wG",o="sidebarItemTitle_2x3I",m="sidebarItemList_GFWq",d="sidebarItem_2f4k",u="sidebarItemLink_1UTh",f="sidebarItemLinkActive_2RDx";var v=a(4973);function g(e){var t=e.sidebar;return 0===t.items.length?null:r.createElement("nav",{className:(0,l.Z)(i,"thin-scrollbar"),"aria-label":(0,v.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},r.createElement("div",{className:(0,l.Z)(o,"margin-bottom--md")},t.title),r.createElement("ul",{className:m},t.items.map((function(e){return r.createElement("li",{key:e.permalink,className:d},r.createElement(c.Z,{isNavLink:!0,to:e.permalink,className:u,activeClassName:f},e.title))}))))}var b=a(7230),h=["sidebar","toc","children"];const E=function(e){var t=e.sidebar,a=e.toc,c=e.children,i=(0,n.Z)(e,h),o=t&&t.items.length>0;return r.createElement(s.Z,i,r.createElement("div",{className:"container margin-vert--lg"},r.createElement("div",{className:"row"},o&&r.createElement("aside",{className:"col col--3"},r.createElement(g,{sidebar:t})),r.createElement("main",{className:(0,l.Z)("col",{"col--7":o,"col--9 col--offset-1":!o})},c),a&&r.createElement("div",{className:"col col--2"},r.createElement(b.Z,{toc:a})))))}},8664:(e,t,a)=>{a.r(t),a.d(t,{default:()=>i});var n=a(7294),r=a(6742),l=a(399),s=a(4973),c=a(2583);const i=function(e){var t=e.tags,a=e.sidebar,i=(0,s.I)({id:"theme.tags.tagsPageTitle",message:"Tags",description:"The title of the tag list page"}),o={};Object.keys(t).forEach((function(e){var t=function(e){return e[0].toUpperCase()}(e);o[t]=o[t]||[],o[t].push(e)}));var m=Object.entries(o).sort((function(e,t){var a=e[0],n=t[0];return a.localeCompare(n)})).map((function(e){var a=e[0],l=e[1];return n.createElement("article",{key:a},n.createElement("h2",null,a),l.map((function(e){return n.createElement(r.Z,{className:"padding-right--md",href:t[e].permalink,key:e},t[e].name," (",t[e].count,")")})),n.createElement("hr",null))})).filter((function(e){return null!=e}));return n.createElement(l.Z,{title:i,wrapperClassName:c.kM.wrapper.blogPages,pageClassName:c.kM.page.blogTagsListPage,searchMetadatas:{tag:"blog_tags_list"},sidebar:a},n.createElement("h1",null,i),n.createElement("section",{className:"margin-vert--lg"},m))}},7230:(e,t,a)=>{a.d(t,{r:()=>i,Z:()=>o});var n=a(7294),r=a(8642);const l=function(e,t,a){var r=(0,n.useState)(void 0),l=r[0],s=r[1];(0,n.useEffect)((function(){function n(){var n=function(){var e=Array.from(document.getElementsByClassName("anchor")),t=e.find((function(e){return e.getBoundingClientRect().top>=a}));if(t){if(t.getBoundingClientRect().top>=a){var n=e[e.indexOf(t)-1];return null!=n?n:t}return t}return e[e.length-1]}();if(n)for(var r=0,c=!1,i=document.getElementsByClassName(e);r<i.length&&!c;){var o=i[r],m=o.href,d=decodeURIComponent(m.substring(m.indexOf("#")+1));n.id===d&&(l&&l.classList.remove(t),o.classList.add(t),s(o),c=!0),r+=1}}return document.addEventListener("scroll",n),document.addEventListener("resize",n),n(),function(){document.removeEventListener("scroll",n),document.removeEventListener("resize",n)}}))},s="tableOfContents_2pwG";var c="table-of-contents__link";function i(e){var t=e.toc,a=e.isChild;return t.length?n.createElement("ul",{className:a?"":"table-of-contents table-of-contents__left-border"},t.map((function(e){return n.createElement("li",{key:e.id},n.createElement("a",{href:"#"+e.id,className:c,dangerouslySetInnerHTML:{__html:e.value}}),n.createElement(i,{isChild:!0,toc:e.children}))}))):null}const o=function(e){var t=e.toc;return l(c,"table-of-contents__link--active",100),n.createElement("div",{className:(0,r.Z)(s,"thin-scrollbar")},n.createElement(i,{toc:t}))}}}]);