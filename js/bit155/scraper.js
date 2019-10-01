var bit155=bit155||{};bit155.scraper=bit155.scraper||{};
bit155.scraper.viewer=function(a,b){b=b||{};a?0==a.url.indexOf("https://chrome.google.com/extensions")||0==a.url.indexOf("chrome://")?alert("Scraper is not permitted to work on the Google Chrome extensions page for security reasons."):chrome.windows.create({url:chrome.extension.getURL("viewer.html")+"?tab="+a.id+"&options="+encodeURIComponent(JSON.stringify(b)),type:"popup",width:Math.max(650,parseInt(localStorage["viewer.width"]||"960",10)),height:Math.max(250,parseInt(localStorage["viewer.height"]||
"400",10))}):chrome.tabs.getSelected(void 0,function(a){a&&bit155.scraper.viewer(a,b)})};bit155.scraper.presets=bit155.attr({initial:JSON.parse(localStorage.presets||localStorage["viewer.presets"]||"null"),filter:function(a){if(a&&!$.isArray(a))throw Error("Preset must be an array.");return a},callback:function(a){localStorage.presets=a?JSON.stringify(a):null}});
bit155.scraper.xpathForNode=function(a){a=$(a).xpath();for(var b=/^(.*)(\[\d+\])([^\[\]]*)$/,e=/^(\/+[^\/]+)(.*)$/,c,d;c=b.exec(a);){d=bit155.scraper.select(document,a,"xpath");if(1<d.length)break;a=c[1]+c[3]}if(!d)return a;for(;c=e.exec(a);){b=bit155.scraper.select(document,"/"+c[2],"xpath")||[];if(b.length!==d.length)break;a="/"+c[2]}return a};
bit155.scraper.optionsForSelection=function(a,b,e){var c={},d;if((d=b?$([a,b]).commonAncestor():$(a).closest("*"))&&0<d.length)if(b=d.get(0).tagName.toLowerCase(),"table"===b||"tbody"===b||"thead"===b||"tfoot"===b)d=$(a).closest("tr");else if("dl"===b)d=d.find("dt").first();else if("ul"===b||"ol"===b)d=d.find("li").first();c.language="jquery";c.selector="";c.attributes=[];d&&0<d.length&&(a=d.get(0),b=a.tagName.toLowerCase(),$.trim(a.className),c.selector=b,c.language="xpath",c.selector=bit155.scraper.xpathForNode(a),
"tr"===b?(a=function(){var a=d.closest("table"),b=d.children().length,a=a.find("tr").first();return(a&&a.children("th").length==b?a:d).children().map(function(a,b){return"TH"===b.tagName?$(b).text():"Column "+(a+1)})}(),$.each(a,function(a,b){c.attributes.push({xpath:"*["+(a+1)+"]",name:b})}),c.selector+="[td]"):"a"===b?(c.attributes.push({xpath:".",name:"Link"}),c.attributes.push({xpath:"@href",name:"URL"})):"img"===b?(c.attributes.push({xpath:"@title",name:"Title"}),c.attributes.push({xpath:"@src",
name:"Source"})):"dt"===b?(c.attributes.push({xpath:".",name:"Term"}),c.attributes.push({xpath:"./following-sibling::dd",name:"Definition"})):c.attributes.push({xpath:".",name:"Text"}));return c};
bit155.scraper.select=function(a,b,e){if("object"!==typeof a)throw"Context object is required.";if("string"!==typeof b)throw"Selector string is required.";if("xpath"===e){a=document.evaluate(b,a||document,null,XPathResult.ANY_TYPE,null);var c=[];for(b=0;e=a.iterateNext();b++)c.push(e);return $(c)}if("jquery"===e)return $(a).find(b);throw Error("Unsupported selector language: "+e);};
bit155.scraper.scrape=function(a){var b=a.attributes||[],e=a.filters||[],c=[];$.each(b,function(){if(!this.xpath)throw Error("XPath is required for each attribute.");});bit155.scraper.select(document,a.selector,a.language).each(function(a,e){var g=$(e),f=[];b&&$.each(b,function(){f.push(document.evaluate(this.xpath,e,null,XPathResult.STRING_TYPE,null).stringValue)});c.push({xpath:g.xpath(),values:f})});$.each(e,function(a,b){"empty"===b&&(c=c.filter(function(a){for(var b=0;b<a.values.length;b++)if(""!==
$.trim(a.values[b]))return!0;return!1}))});return c};

