(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{"7aLo":function(e,t,n){"use strict";var i=n("CcnG"),a=n("Nwml"),l=n("xPTU"),o=n("ZYCi"),r=function(){function e(){this.orientation="horizontal",this.init=new i.n,this.itemsInitialized=0,this.itemsTotal=1}return e.prototype.ngOnInit=function(){var e=this;this.columns.forEach(function(t,n){return e.updateColumn(t,n)})},e.prototype.onLayoutInit=function(e){this.fireOninit()},e.prototype.updateColumn=function(e,t){var n=this;this.itemsTotal+=e.items.length,e.component=l.a,e.initializer=function(i){n.name&&(i.name=n.name+"-column"+t),i.orientation="vertical",i.items=e.items,i.init.subscribe(function(e){return n.fireOninit()})}},e.prototype.fireOninit=function(){this.itemsInitialized++,this.itemsInitialized===this.itemsTotal&&this.init.emit({items:this.columns,instance:this})},e}(),u=i.Ua({encapsulation:2,styles:[],data:{}});function s(e){return i.qb(0,[(e()(),i.Wa(0,0,null,null,1,"ti-layout",[],null,[[null,"init"]],function(e,t,n){var i=!0;return"init"===t&&(i=!1!==e.component.onLayoutInit(n)&&i),i},a.c,a.b)),i.Va(1,4440064,null,0,l.a,[o.a,o.o],{name:[0,"name"],orientation:[1,"orientation"],items:[2,"items"]},{init:"init"})],function(e,t){var n=t.component;e(t,1,0,n.name,n.orientation,n.columns)},null)}n("iAMZ"),n.d(t,"a",function(){return c}),n.d(t,"b",function(){return d});var c=i.Ua({encapsulation:0,styles:[[""]],data:{}});function d(e){return i.qb(0,[(e()(),i.Wa(0,0,null,null,1,"ti-layout-table",[],null,[[null,"init"]],function(e,t,n){var i=!0;return"init"===t&&(i=!1!==e.component.onLayoutInit(n)&&i),i},s,u)),i.Va(1,114688,null,0,r,[],{name:[0,"name"],columns:[1,"columns"]},{init:"init"})],function(e,t){var n=t.component;e(t,1,0,n.name,n.columns)},null)}},Almv:function(e,t,n){"use strict";n.d(t,"a",function(){return l}),n.d(t,"b",function(){return w});var i=n("CcnG"),a=n("Ip0R"),l=(n("OHd8"),n("2R3+"),n("dfm8"),n("MZ/Y"),i.Ua({encapsulation:2,styles:[],data:{animation:[{type:7,name:"state",definitions:[{type:0,name:"active",styles:{type:6,styles:{opacity:1},offset:null},options:void 0},{type:1,expr:"* => active",animation:[{type:6,styles:{opacity:0},offset:null},{type:4,styles:null,timings:"400ms ease-in"}],options:null}],options:{}}]}}));function o(e){return i.qb(0,[(e()(),i.Wa(0,0,null,null,0,null,null,null,null,null,null,null))],null,null)}function r(e){return i.qb(0,[(e()(),i.Wa(0,0,null,null,0,null,null,null,null,null,null,null))],null,null)}function u(e){return i.qb(0,[(e()(),i.Wa(0,0,null,null,4,null,null,null,null,null,null,null)),(e()(),i.Na(16777216,null,null,1,null,o)),i.Va(2,540672,null,0,a.t,[i.T],{ngTemplateOutlet:[0,"ngTemplateOutlet"]},null),(e()(),i.Na(16777216,null,null,1,null,r)),i.Va(4,540672,null,0,a.t,[i.T],{ngTemplateOutlet:[0,"ngTemplateOutlet"]},null),(e()(),i.Na(0,null,null,0))],function(e,t){e(t,2,0,i.gb(t.parent,5)),e(t,4,0,i.gb(t.parent,6))},null)}function s(e){return i.qb(0,[(e()(),i.Wa(0,0,null,null,0,null,null,null,null,null,null,null))],null,null)}function c(e){return i.qb(0,[(e()(),i.Wa(0,0,null,null,0,null,null,null,null,null,null,null))],null,null)}function d(e){return i.qb(0,[(e()(),i.Wa(0,0,null,null,4,null,null,null,null,null,null,null)),(e()(),i.Na(16777216,null,null,1,null,s)),i.Va(2,540672,null,0,a.t,[i.T],{ngTemplateOutlet:[0,"ngTemplateOutlet"]},null),(e()(),i.Na(16777216,null,null,1,null,c)),i.Va(4,540672,null,0,a.t,[i.T],{ngTemplateOutlet:[0,"ngTemplateOutlet"]},null),(e()(),i.Na(0,null,null,0))],function(e,t){e(t,2,0,i.gb(t.parent,6)),e(t,4,0,i.gb(t.parent,5))},null)}function b(e){return i.qb(0,[(e()(),i.Na(0,null,null,0))],null,null)}function p(e){return i.qb(0,[(e()(),i.Wa(0,0,null,null,4,"li",[["role","tab"]],[[8,"id",0],[2,"k-item",null],[2,"k-state-default",null],[2,"k-state-active",null],[2,"k-state-disabled",null],[1,"aria-selected",0],[1,"aria-controls",0],[1,"aria-disabled",0]],[[null,"click"]],function(e,t,n){var i=!0;return"click"===t&&(i=!1!==e.component.selectTab(e.context.index)&&i),i},null,null)),(e()(),i.Wa(1,0,null,null,3,"span",[["class","k-link"]],null,null,null,null,null)),(e()(),i.ob(2,null,["",""])),(e()(),i.Na(16777216,null,null,1,null,b)),i.Va(4,540672,null,0,a.t,[i.T],{ngTemplateOutlet:[0,"ngTemplateOutlet"]},null)],function(e,t){e(t,4,0,null==t.context.$implicit.tabTitle?null:t.context.$implicit.tabTitle.templateRef)},function(e,t){e(t,0,0,t.component.tabId(t.context.index),!0,!0,t.context.$implicit.active,t.context.$implicit.disabled,t.context.$implicit.active,t.context.$implicit.tabPanelId,t.context.$implicit.disabled),e(t,2,0,t.context.$implicit.title)})}function f(e){return i.qb(0,[(e()(),i.Wa(0,0,[[1,0],["tablist",1]],null,2,"ul",[["class","k-reset k-tabstrip-items"],["role","tablist"]],[[8,"tabIndex",0]],[[null,"keydown"]],function(e,t,n){var i=!0;return"keydown"===t&&(i=!1!==e.component.onKeyDown(n)&&i),i},null,null)),(e()(),i.Na(16777216,null,null,1,null,p)),i.Va(2,278528,null,0,a.l,[i.T,i.Q,i.u],{ngForOf:[0,"ngForOf"]},null)],function(e,t){e(t,2,0,t.component.tabs)},function(e,t){e(t,0,0,0)})}function m(e){return i.qb(0,[(e()(),i.Na(0,null,null,0))],null,null)}function g(e){return i.qb(0,[(e()(),i.Wa(0,0,null,null,3,"div",[["role","tabpanel"]],[[24,"@state",0],[8,"id",0],[1,"aria-hidden",0],[1,"aria-expanded",0],[1,"aria-labelledby",0],[1,"aria-disabled",0]],null,null,null,null)),i.Va(1,278528,null,0,a.k,[i.u,i.v,i.l,i.H],{ngClass:[0,"ngClass"]},null),(e()(),i.Na(16777216,null,null,1,null,m)),i.Va(3,540672,null,0,a.t,[i.T],{ngTemplateOutlet:[0,"ngTemplateOutlet"]},null)],function(e,t){e(t,1,0,t.component.contentClass(t.parent.context.$implicit.active)),e(t,3,0,null==t.parent.context.$implicit.tabContent?null:t.parent.context.$implicit.tabContent.templateRef)},function(e,t){var n=t.component;e(t,0,0,t.parent.context.$implicit.active&&n._animate?"active":"inactive",n.tabPanelId(t.parent.context.index),!t.parent.context.$implicit.active,t.parent.context.$implicit.active,n.tabId(t.parent.context.index),t.parent.context.$implicit.disabled)})}function h(e){return i.qb(0,[(e()(),i.Na(16777216,null,null,1,null,g)),i.Va(1,16384,null,0,a.m,[i.T,i.Q],{ngIf:[0,"ngIf"]},null),(e()(),i.Na(0,null,null,0))],function(e,t){e(t,1,0,t.context.$implicit.active||t.component.keepTabContent)},null)}function v(e){return i.qb(0,[(e()(),i.Na(16777216,null,null,1,null,h)),i.Va(1,278528,null,0,a.l,[i.T,i.Q,i.u],{ngForOf:[0,"ngForOf"]},null),(e()(),i.Na(0,null,null,0))],function(e,t){e(t,1,0,t.component.tabs)},null)}function w(e){return i.qb(0,[i.mb(671088640,1,{tablist:0}),(e()(),i.Na(16777216,null,null,1,null,u)),i.Va(2,16384,null,0,a.m,[i.T,i.Q],{ngIf:[0,"ngIf"]},null),(e()(),i.Na(16777216,null,null,1,null,d)),i.Va(4,16384,null,0,a.m,[i.T,i.Q],{ngIf:[0,"ngIf"]},null),(e()(),i.Na(0,[["heading",2]],null,0,null,f)),(e()(),i.Na(0,[["content",2]],null,0,null,v))],function(e,t){var n=t.component;e(t,2,0,!n.tabsAtBottom),e(t,4,0,n.tabsAtBottom)},null)}},JkaZ:function(e,t,n){"use strict";n.d(t,"a",function(){return a}),n.d(t,"b",function(){return l});var i=n("CcnG"),a=(n("o0qz"),i.Ua({encapsulation:2,styles:[],data:{}}));function l(e){return i.qb(0,[],null,null)}},O4PX:function(e,t,n){"use strict";n.d(t,"a",function(){return l});var i=n("CcnG"),a=n("ZcX7"),l=(n("bMLP"),function(){function e(){var e=this;this.columns=[],this.init=new i.n,this.viewChange=new i.n,this.gridSelectionChange=new i.n,this.gridRowDbClick=new i.n,this.state={layout:null,viewSelectorState:null,gridRequestParams:null,gridItemsSelected:[],grid:null,refreshGrid:function(t){void 0===t?e.grid.instance.refresh():(e.state.gridRequestParams=t.params,e.grid.instance.dataOptions=t)}},this.grid={component:a.a,initializer:this.onGridInit.bind(this)}}return e.prototype.ngOnInit=function(){this.columns.splice(0,0,{items:[this.grid,this.additionalGrid].filter(function(e){return e})})},e.prototype.onLayoutInit=function(e){this.state.layout=e,this.init.emit(this.state)},e.prototype.updateToolbar=function(){this.toolbar&&this.toolbar.update(this.state)},e.prototype.onViewChange=function(e){var t=this;this.state.viewSelectorState=e,this.state.gridItemsSelected=[],this.updateToolbar(),setTimeout(function(){var e=t.gridDataOptionsGetter(t.state);t.state.gridRequestParams=e?e.params:null,t.grid.instance.dataOptions=e,t.gridDetailsGetter&&(t.grid.instance.detailsOptions=t.gridDetailsGetter(t.state)),t.gridToolbarGetter&&(t.grid.instance.toolbarOptions=t.gridToolbarGetter(t.state)),t.gridViewOptionsGetter&&(t.grid.instance.viewOptions=t.gridViewOptionsGetter(t.state)),t.gridContextMenuGetter&&(t.grid.instance.contextMenu=t.gridContextMenuGetter(t.state))},0),this.viewChange.emit(this.state)},e.prototype.onGridInit=function(e,t){var n=this;this.state.grid=e,e.select.subscribe(function(e){n.state.gridItemsSelected=e||[],n.updateToolbar(),n.gridSelectionChange.emit(n.state)}),e.onDoubleClick.subscribe(function(e){return n.gridRowDbClick.emit(n.state)})},e}())},iAMZ:function(e,t,n){"use strict";n.d(t,"a",function(){return l});var i=n("CcnG"),a=n("5m1U"),l=function(){function e(){this.collapsed=!1,this.init=new i.n,this.viewChange=new i.n,this.viewSelector={component:a.a,initializer:this.onViewSelectorInit.bind(this),updater:this.onViewSelectorChange.bind(this)}}return e.prototype.ngOnInit=function(){this.columns.splice(0,0,{collapsed:this.collapsed,collapsible:!0,resizable:!0,iconClass:"fa-folder-open",label:"viewSelector",size:"25rem",items:[this.viewSelector,this.additionalView].filter(function(e){return e})})},e.prototype.onLayoutInit=function(e){this.init.emit(e)},e.prototype.parseViewQeryParams=function(e){var t=(e.expanded_folders||"").trim(),n=(e.selected_folder||"").trim();return{vm:e.vm?e.vm.trim():null,selectedNodes:n?[n]:[],expandedNodes:""===t?[]:t.split(",")}},e.prototype.viewSelectorStateToQueryParams=function(e){return{vm:e.selectedView.id,selected_folder:e.selectedKeys.length?e.selectedKeys[0]:"",expanded_folders:e.expandedKeys.join()}},e.prototype.onViewSelectorChange=function(e,t,n){var i=this.parseViewQeryParams(t);e.state.update({selectedKeys:i.selectedNodes,expandedKeys:i.expandedNodes}),i.vm&&null!==i.vm&&e.state.selectedView.id!==i.vm&&e.setView(function(e){return e.id===i.vm}),n(this.viewSelectorStateToQueryParams(e.state))},e.prototype.onViewSelectorInit=function(e,t,n){var i=this,a=this.parseViewQeryParams(t);null!==a.vm&&(e.defaultState={selectedKeys:a.selectedNodes,expandedKeys:a.expandedNodes},e.defaultViewGetter=function(e){return e.id===a.vm}),e.title=this.viewSelectorTitle,e.defaultViewStorageName=this.name,e.items=this.views,e.expand.subscribe(function(e){n(i.viewSelectorStateToQueryParams(e))}),e.select.subscribe(function(e){i.onViewChange(e),n(i.viewSelectorStateToQueryParams(e))});var l=!0;e.change.subscribe(function(e){i.onViewChange(e),l||n(i.viewSelectorStateToQueryParams(e)),l=!1})},e.prototype.onViewChange=function(e){this.viewChange.emit(e)},e}()},v2Tm:function(e,t,n){"use strict";n.r(t);var i=n("CcnG"),a=function(){},l=n("rbCk"),o=n("2b4T"),r=n("7+zM"),u=n("P3h3"),s=n("XBGS"),c=n("M3gA"),d=n("9wIo"),b=n("hK40"),p=n("iqq2"),f=n("Bf5N"),m=n("G4eV"),g=n("GjZc"),h=n("ehBM"),v=n("dHVX"),w=n("aB14"),y=n("9wZe"),C=n("6hd/"),V=n("CGpk"),S=n("mQIw"),T=n("xLiy"),x=n("2xaA"),G=n("X5C5"),O=n("Cl6a"),k=n("Pezs"),I=n("r/Dy"),A=n("ebYH"),N=n("fG4a"),P=n("EIKv"),q=n("Nwml"),M=n("W4xK"),R=n("NUF1"),D=n("qNE8"),z=n("8RQO"),F=n("Eico"),B=n("gIBI"),Q=n("mL1h"),U=n("KU+T"),j=n("Al0e"),K=n("5qzS"),W=n("5bxV"),L=n("zgOQ"),X=n("wYBG"),$=n("XFNF"),Z=n("bxzw"),H=n("g9Lp"),E=n("Vhiz"),J=n("31PW"),Y=n("WqFe"),_=n("xnsJ"),ee=n("m8ZB"),te=n("jI09"),ne=n("+jVa"),ie=n("ccVT"),ae=n("eZPM"),le=n("ZQ/8"),oe=n("V46V"),re=n("A/VZ"),ue=n("SyiL"),se=n("tq3R"),ce=n("l33T"),de=n("3dhK"),be=n("cAyq"),pe=n("fAKO"),fe=n("pMnS"),me=n("vORS"),ge=n("O4PX"),he=n("U2xB"),ve=n("9oGk"),we=n("6QGf"),ye=n("S9/K"),Ce=n("o3mN"),Ve=n("2HtA"),Se=n("vJjD"),Te=n("pDRj"),xe=n("ofia"),Ge=n("yg+0"),Oe=n("pTjd"),ke=n("SVYi"),Ie=function(){function e(e,t,n,i,a){var l=this;this.treeDataService=e,this.sessionService=t,this.gridDataService=n,this.tasksGridActionsService=i,this.gridViewActionsService=a,this.codingConfig={component:we.a,initializer:this.onCodingInit.bind(this)},this.views=[this.createView(1,"My Tasks"),this.createView(2,"By Status"),this.createView(3,"By Owner"),this.createView(4,"By Category")],this.getGridOptions=function(e){var t=1===e.viewSelectorState.selectedNodes.length?e.viewSelectorState.selectedNodes[0]:null;return t?{dynamicPageSize:!0,params:{siteId:l.sessionService.currentRoomId,viewFilter:t.data.ViewFilterId,viewMode:t.data.ViewMode},dataService:l.gridDataService,viewOptions:{id:"TasksModule-"+(t.data.ViewMode||0),topicTypes:[Oe.b.CalendarTask],columnsFromTopicTypeTopicFields:[Oe.b.CalendarTask],columns:[{system:!0,locked:!0,name:"$$__Files__$$",renderer:{component:he.a,dataConverter:function(e){return e.Attachments.map(function(e){return e.FileName})},updater:function(e,t){e.files=t.Attachments.map(function(e){return e.FileName})}}}],topicTypeRenderers:[{topicTypeName:Oe.b.CalendarTask,fieldName:ke.a.Tasks.CompletePercent,renderer:{component:ve.a,updater:function(e,t){e.value=t}}},{topicTypeName:Oe.b.CalendarTask,fieldName:ke.a.Tasks.Status,renderer:{component:Se.a,updater:function(e,t){e.status=t}}},{topicTypeName:Oe.b.CalendarTask,fieldName:ke.a.Tasks.Priority,renderer:{component:Te.a,updater:function(e,t){e.priority=t}}}]}}:null},this.getGridViewOptions=function(e){return{}},this.actions=[this.gridViewActionsService.getGridViewMenuAction(null,function(e){return e.grid.viewHelper}),this.tasksGridActionsService.getCreateTaskAction(function(e){return l.refreshGridOnSuccess(e.cancel)}),this.tasksGridActionsService.getEditTaskAction(function(e){return l.refreshGridOnSuccess(e.cancel)}),this.tasksGridActionsService.getDeleteTaskAction(function(e){return l.refreshGridOnSuccess(e.cancel)}),this.tasksGridActionsService.getExportAction()]}return e.prototype.onViewChange=function(e){this.state=e,this.codingConfig.instance.refresh()},e.prototype.onGridSelectionChange=function(e){this.codingConfig.instance.refresh(1===e.gridItemsSelected.length?e.gridItemsSelected[0]:null)},e.prototype.getGridContextMenu=function(e){var t=this;return{items:this.tasksGridActionsService.getContextMenuActions(),dataGetter:function(){return t.state}}},e.prototype.onCodingInit=function(e,t){var n=this;e.onTaskChange.subscribe(function(e){return n.refreshGridOnSuccess(!1)})},e.prototype.createView=function(e,t){return{id:""+e,text:t,value:e,nodes:this.treeDataService.getData({siteId:this.sessionService.currentRoomId,viewMode:e})}},e.prototype.refreshGridOnSuccess=function(e){e||(this.state.refreshGrid(),this.codingConfig.instance.clear(),this.state.gridItemsSelected=[])},e}(),Ae=i.Ua({encapsulation:2,styles:[],data:{}});function Ne(e){return i.qb(0,[(e()(),i.Wa(0,0,null,null,4,"ti-layout-views-with-grid",[["name","tasks"],["viewSelectorTitle","View Tasks By"]],null,[[null,"viewChange"],[null,"gridSelectionChange"]],function(e,t,n){var i=!0,a=e.component;return"viewChange"===t&&(i=!1!==a.onViewChange(n)&&i),"gridSelectionChange"===t&&(i=!1!==a.onGridSelectionChange(n)&&i),i},me.b,me.a)),i.Va(1,114688,null,0,ge.a,[],{name:[0,"name"],viewSelectorTitle:[1,"viewSelectorTitle"],views:[2,"views"],columns:[3,"columns"],actions:[4,"actions"],gridDataOptionsGetter:[5,"gridDataOptionsGetter"],gridViewOptionsGetter:[6,"gridViewOptionsGetter"],gridContextMenuGetter:[7,"gridContextMenuGetter"]},{viewChange:"viewChange",gridSelectionChange:"gridSelectionChange"}),i.hb(2,1),i.jb(3,{items:0,resizable:1,collapsible:2,iconClass:3}),i.hb(4,1)],function(e,t){var n=t.component;e(t,1,0,"tasks","View Tasks By",n.views,e(t,4,0,e(t,3,0,e(t,2,0,n.codingConfig),!0,!0,"fa-list-ul")),n.actions,n.getGridOptions,n.getGridViewOptions,n.getGridContextMenu.bind(n))},null)}var Pe=i.Sa("ti-tasks",Ie,function(e){return i.qb(0,[(e()(),i.Wa(0,0,null,null,1,"ti-tasks",[],null,null,null,Ne,Ae)),i.Va(1,49152,null,0,Ie,[ye.a,Ce.a,Ve.a,xe.a,Ge.a],null,null)],null,null)},{},{},[]),qe=n("Ip0R"),Me=n("gIcY"),Re=n("zxHt"),De=n("CJJj"),ze=n("2p5q"),Fe=n("xJPi"),Be=n("U6sj"),Qe=n("2Ha9"),Ue=n("j8AP"),je=n("wTlH"),Ke=n("gq6R"),We=n("5MaI"),Le=n("fQDQ"),Xe=n("jn5y"),$e=n("3M87"),Ze=n("/g4K"),He=n("xSTm"),Ee=n("sk7M"),Je=n("LczP"),Ye=n("0T5p"),_e=n("Uoga"),et=n("Hm5d"),tt=n("E22/"),nt=n("YpUA"),it=n("WFE3"),at=n("guRe"),lt=n("HTDv"),ot=n("+GOS"),rt=n("pyGY"),ut=n("PqSV"),st=n("g1fl"),ct=n("kcpl"),dt=n("2JDD"),bt=n("lfEX"),pt=n("tQ91"),ft=n("B1F0"),mt=n("eRMz"),gt=n("iFL/"),ht=n("RGa9"),vt=n("HXRl"),wt=n("h4+K"),yt=n("yn/1"),Ct=n("dPR2"),Vt=n("Gc3/"),St=n("8GOV"),Tt=n("0tA1"),xt=n("RyQ+"),Gt=n("u3HK"),Ot=n("jU+G"),kt=n("8tIk"),It=n("r9sr"),At=n("UrX+"),Nt=n("e2Dx"),Pt=n("0Y0Y"),qt=n("9htR"),Mt=n("fVRx"),Rt=n("5LWV"),Dt=n("A7o+"),zt=n("POXt"),Ft=n("qC0M"),Bt=n("Irjs"),Qt=n("RnjK"),Ut=n("gfPm"),jt=n("O2lw"),Kt=n("kWPD"),Wt=n("ojDI"),Lt=n("bg8N"),Xt=n("zOby"),$t=n("udGD"),Zt=n("5f06"),Ht=n("hELX"),Et=n("1uHb"),Jt=n("F9x3"),Yt=n("ADBN"),_t=n("snQI"),en=n("VX0W"),tn=n("jcGS"),nn=n("1El9"),an=n("lUJE"),ln=n("7hUL"),on=n("wbXX"),rn=n("J2Gx"),un=n("hKyp"),sn=n("k4Ja"),cn=n("gfrq"),dn=n("ME+v"),bn=n("hhUG"),pn=n("B867"),fn=n("aAMI"),mn=n("BoO4"),gn=n("ZSOd"),hn=n("FtkP"),vn=n("BSOv"),wn=n("9Uug"),yn=n("nOw9"),Cn=n("qUHd"),Vn=n("0pig"),Sn=n("Fu7j"),Tn=n("hDPV"),xn=n("ir8p"),Gn=n("rc5j"),On=n("yzCr"),kn=n("9r48"),In=n("eoU7"),An=n("YhHH"),Nn=n("6yt0"),Pn=n("in/w"),qn=n("qznT"),Mn=n("4RC2"),Rn=n("xyfB"),Dn=n("/KY2"),zn=n("MmM2"),Fn=n("OKoB"),Bn=n("CfQI"),Qn=n("kQRx"),Un=n("s5Fc"),jn=n("uqoq"),Kn=n("b43N"),Wn=n("nJ89"),Ln=n("7i1d"),Xn=n("ZXLx"),$n=n("+tO3"),Zn=n("PvKs"),Hn=n("FJZI"),En=n("0zaF"),Jn=n("ZYCi");n.d(t,"TasksModuleNgFactory",function(){return Yn});var Yn=i.Ta(a,[],function(e){return i.db([i.eb(512,i.k,i.Ga,[[8,[l.a,o.a,r.a,r.b,u.a,s.m,s.d,s.v,s.b,s.n,s.e,s.c,s.a,r.i,r.j,c.a,d.a,b.a,p.a,f.a,m.a,g.a,h.a,v.b,w.a,y.a,C.b,V.a,S.a,T.b,T.a,x.a,G.a,O.a,k.a,I.a,A.a,N.a,P.b,q.a,M.b,R.a,D.a,z.b,F.a,B.a,Q.a,U.a,j.a,K.a,W.a,L.a,X.a,$.a,Z.a,H.a,E.b,J.a,Y.b,_.a,ee.a,te.a,ne.a,ie.a,ae.a,le.a,oe.a,re.a,ue.a,se.a,ce.a,de.a,be.a,pe.a,fe.a,Pe]],[3,i.k],i.z]),i.eb(4608,qe.o,qe.n,[i.w,[2,qe.B]]),i.eb(4608,Me.A,Me.A,[]),i.eb(4608,Me.f,Me.f,[]),i.eb(4608,Re.a,Re.a,[]),i.eb(4608,Fe.a,Fe.a,[]),i.eb(4608,Be.a,Be.a,[i.k,Fe.a]),i.eb(4608,We.a,Le.a,[i.w]),i.eb(4608,Je.a,Je.a,[]),i.eb(4608,tt.a,tt.a,[]),i.eb(4608,$e.a,$e.a,[]),i.eb(4608,_e.a,_e.a,[We.a]),i.eb(4608,nt.a,nt.a,[We.a]),i.eb(4608,rt.a,rt.a,[We.a]),i.eb(4608,ut.b,ut.b,[i.g,i.k,i.s,[2,ut.a]]),i.eb(135680,ct.a,ct.a,[i.B]),i.eb(4608,bt.a,bt.a,[]),i.eb(4608,De.a,De.a,[]),i.eb(4608,ze.a,ze.a,[i.k,De.a]),i.eb(4608,pt.a,pt.a,[ft.a,Ce.a]),i.eb(4608,mt.a,mt.a,[Ce.a,gt.a,ht.a,vt.a,wt.a,pt.a]),i.eb(4608,yt.a,yt.a,[mt.a]),i.eb(4608,Ct.a,Ct.a,[Vt.a,Ce.a]),i.eb(4608,St.a,St.a,[]),i.eb(4608,Tt.a,Tt.a,[xt.a]),i.eb(4608,ye.a,ye.a,[Gt.a]),i.eb(4608,Ve.a,Ve.a,[Gt.a,wt.a,Ce.a]),i.eb(4608,xe.a,xe.a,[Ot.a,Ce.a,Gt.a,kt.a]),i.eb(4608,It.a,It.a,[]),i.eb(4608,At.a,At.a,[]),i.eb(4608,Nt.a,Nt.a,[Ce.a,wt.a,At.a]),i.eb(1073742336,qe.c,qe.c,[]),i.eb(1073742336,Me.y,Me.y,[]),i.eb(1073742336,Me.l,Me.l,[]),i.eb(1073742336,Me.v,Me.v,[]),i.eb(1073742336,Pt.a,Pt.a,[]),i.eb(1073742336,qt.a,qt.a,[]),i.eb(1073742336,Mt.a,Mt.a,[]),i.eb(1073742336,Rt.a,Rt.a,[]),i.eb(1073742336,Dt.g,Dt.g,[]),i.eb(1073742336,zt.a,zt.a,[]),i.eb(1073742336,Ft.a,Ft.a,[]),i.eb(1073742336,Bt.a,Bt.a,[]),i.eb(1073742336,Ut.a,Ut.a,[]),i.eb(1073742336,Xt.a,Xt.a,[]),i.eb(1073742336,$t.a,$t.a,[]),i.eb(1073742336,Ke.a,Ke.a,[]),i.eb(1073742336,Qe.a,Qe.a,[]),i.eb(1073742336,ln.a,ln.a,[]),i.eb(1073742336,Yt.a,Yt.a,[]),i.eb(1073742336,Jt.a,Jt.a,[]),i.eb(1073742336,sn.a,sn.a,[]),i.eb(1073742336,un.a,un.a,[]),i.eb(1073742336,Xe.a,Xe.a,[]),i.eb(1073742336,Ye.a,Ye.a,[]),i.eb(1073742336,Ee.a,Ee.a,[]),i.eb(1073742336,Ze.a,Ze.a,[]),i.eb(1073742336,lt.a,lt.a,[]),i.eb(1073742336,et.a,et.a,[]),i.eb(1073742336,He.a,He.a,[]),i.eb(1073742336,st.a,st.a,[]),i.eb(1073742336,at.a,at.a,[]),i.eb(1073742336,en.a,en.a,[]),i.eb(1073742336,dt.a,dt.a,[]),i.eb(1073742336,mn.a,mn.a,[]),i.eb(1073742336,Cn.a,Cn.a,[]),i.eb(1073742336,yn.a,yn.a,[]),i.eb(1073742336,vn.a,vn.a,[]),i.eb(1073742336,cn.a,cn.a,[]),i.eb(1073742336,dn.a,dn.a,[]),i.eb(1073742336,bn.a,bn.a,[]),i.eb(1073742336,pn.a,pn.a,[]),i.eb(1073742336,rn.a,rn.a,[]),i.eb(1073742336,fn.a,fn.a,[]),i.eb(1073742336,_t.a,_t.a,[]),i.eb(1073742336,tn.a,tn.a,[]),i.eb(1073742336,nn.a,nn.a,[]),i.eb(1073742336,an.a,an.a,[]),i.eb(1073742336,on.a,on.a,[]),i.eb(1073742336,Zt.a,Zt.a,[]),i.eb(1073742336,Et.a,Et.a,[]),i.eb(1073742336,Ht.a,Ht.a,[]),i.eb(1073742336,Sn.a,Sn.a,[]),i.eb(1073742336,je.a,je.a,[]),i.eb(1073742336,Ue.a,Ue.a,[]),i.eb(1073742336,wn.a,wn.a,[]),i.eb(1073742336,Tn.a,Tn.a,[]),i.eb(1073742336,xn.a,xn.a,[]),i.eb(1073742336,Gn.a,Gn.a,[]),i.eb(1073742336,On.a,On.a,[]),i.eb(1073742336,kn.a,kn.a,[]),i.eb(1073742336,An.a,An.a,[]),i.eb(1073742336,In.a,In.a,[]),i.eb(1073742336,Nn.a,Nn.a,[]),i.eb(1073742336,gn.a,gn.a,[]),i.eb(1073742336,Pn.a,Pn.a,[]),i.eb(1073742336,qn.a,qn.a,[]),i.eb(1073742336,Mn.a,Mn.a,[]),i.eb(1073742336,Rn.a,Rn.a,[]),i.eb(1073742336,Dn.a,Dn.a,[]),i.eb(1073742336,zn.a,zn.a,[]),i.eb(1073742336,Fn.a,Fn.a,[]),i.eb(1073742336,Bn.a,Bn.a,[]),i.eb(1073742336,Qt.a,Qt.a,[]),i.eb(1073742336,jt.a,jt.a,[]),i.eb(1073742336,Lt.a,Lt.a,[]),i.eb(1073742336,Wt.a,Wt.a,[]),i.eb(1073742336,Kt.a,Kt.a,[]),i.eb(1073742336,Qn.a,Qn.a,[]),i.eb(1073742336,Un.a,Un.a,[]),i.eb(1073742336,jn.a,jn.a,[]),i.eb(1073742336,Kn.a,Kn.a,[]),i.eb(1073742336,Wn.a,Wn.a,[]),i.eb(1073742336,Ln.a,Ln.a,[]),i.eb(1073742336,Xn.a,Xn.a,[]),i.eb(1073742336,$n.a,$n.a,[]),i.eb(1073742336,Zn.a,Zn.a,[]),i.eb(1073742336,Hn.a,Hn.a,[]),i.eb(1073742336,En.a,En.a,[]),i.eb(1073742336,Jn.s,Jn.s,[[2,Jn.y],[2,Jn.o]]),i.eb(1073742336,a,a,[]),i.eb(256,it.a,ot.a,[]),i.eb(256,Vn.a,hn.a,[]),i.eb(1024,Jn.m,function(){return[[{path:"",component:Ie}]]},[])])})},vORS:function(e,t,n){"use strict";var i=n("CcnG"),a=n("dHVX"),l=n("jU+G"),o=n("bMLP"),r=n("Ip0R"),u=n("7aLo"),s=n("iAMZ");n("O4PX"),n.d(t,"a",function(){return c}),n.d(t,"b",function(){return b});var c=i.Ua({encapsulation:0,styles:[["[_nghost-%COMP%]{display:block;height:100%}ti-toolbar[_ngcontent-%COMP%]{display:block;height:3rem;overflow:hidden;background-color:#f9fdf8}ti-layout-views[_ngcontent-%COMP%]{display:block;height:100%}ti-layout-views.with-actions[_ngcontent-%COMP%]{height:calc(100% - 3rem)}"]],data:{}});function d(e){return i.qb(0,[(e()(),i.Wa(0,0,null,null,2,"ti-toolbar",[],null,null,null,a.c,a.a)),i.lb(131584,null,l.a,l.a,[i.k,i.g,i.s]),i.Va(2,4243456,[[1,4]],0,o.a,[l.a,i.i],{actions:[0,"actions"]},null)],function(e,t){e(t,2,0,t.component.actions)},null)}function b(e){return i.qb(0,[i.mb(671088640,1,{toolbar:0}),(e()(),i.Na(16777216,null,null,1,null,d)),i.Va(2,16384,null,0,r.m,[i.T,i.Q],{ngIf:[0,"ngIf"]},null),(e()(),i.Wa(3,0,null,null,1,"ti-layout-views",[],[[2,"with-actions",null]],[[null,"init"],[null,"viewChange"]],function(e,t,n){var i=!0,a=e.component;return"init"===t&&(i=!1!==a.onLayoutInit(n)&&i),"viewChange"===t&&(i=!1!==a.onViewChange(n)&&i),i},u.b,u.a)),i.Va(4,114688,null,0,s.a,[],{name:[0,"name"],viewSelectorTitle:[1,"viewSelectorTitle"],views:[2,"views"],additionalView:[3,"additionalView"],columns:[4,"columns"]},{init:"init",viewChange:"viewChange"})],function(e,t){var n=t.component;e(t,2,0,n.actions),e(t,4,0,n.name,n.viewSelectorTitle,n.views,n.additionalView,n.columns)},function(e,t){e(t,3,0,!!t.component.actions)})}},"yg+0":function(e,t,n){"use strict";n.d(t,"a",function(){return d});var i=n("ZvKB"),a=n("gCqT"),l=n("mdxD"),o=n("6blF"),r=n("+u11"),u=n("Xkg1"),s=n("WdNZ"),c=n("CcnG"),d=function(){function e(e){this.gridSettingsService=e,this.strings=tiStrings.shared.grid.services.gridViewActionsService}return e.prototype.getGridViewMenuAction=function(e,t){var n=this;return{icon:"fa fa-eye",text:"",itemsGetter:function(i){return o.a.create(function(a){n.gridSettingsService.getViews(t(i).id).subscribe(function(i){var l=[[n.getSaveViewAction(e,t),n.getRevertDefaultViewAction(e,t)],[n.getShowAllViewsAction(e,t)],[n.getConfigurationAction(e,t),n.getAddFilterAction(e,t)]];i&&l.push(i.map(function(i){return n.getViewAction(i,e,t)})),a.next(l)})})}}},e.prototype.getSaveViewAction=function(e,t){return{icon:"fa fa-save",text:this.strings.saveView,dialogComponent:l.a,dialogInitializer:function(e,n,i){var a=t(n),l=a.prepareCurrentViewForUpdate();e.canSaveAsNew=!!l.id,e.onlyCanSaveAsNew=!l.isCreatedByCurrentUser,e.data=l.data,e.close.subscribe(function(t){if(!t)return i({cancel:!0,close:!0,data:t});e.isLoading=!0,a.saveCurrentView(t.data,t.saveAsNew).subscribe(function(){i({cancel:!t,close:!0,data:t})})})},resultReceiver:e,updater:function(e,n){var i=t(n);e.disabled=!i.id||!i.currentView}}},e.prototype.getRevertDefaultViewAction=function(e,t){return{icon:"fa fa-undo",text:this.strings.revertToDefault,disabled:!0,handler:function(e){return new Promise(function(n){t(e).revertToDefaultView(),n({cancel:!1})})},resultReceiver:e,updater:function(e,n){var i=t(n);e.disabled=!i.id||!i.currentView||!i.currentView.id}}},e.prototype.getShowAllViewsAction=function(e,t){return{icon:"fa fa-list-ul",text:this.strings.showAllViews,dialogComponent:a.a,dialogInitializer:function(e,n,i){var a=t(n);e.category=a.id,e.close.subscribe(function(e){e&&a.setViewAsCurrent(e.id),i({cancel:!e,close:!0,data:e})})},resultReceiver:e,updater:function(e,n){var i=t(n);e.disabled=!i.id}}},e.prototype.getConfigurationAction=function(e,t){return{icon:"fa fa-columns",text:this.strings.updateColumns,dialogComponent:i.a,resultReceiver:e,dialogInitializer:function(e,n,i){var a=t(n),l=a.currentView,o=[],r=[];a.allColumns.forEach(function(e){if(!e.system){r.push({name:e.name,title:e.originalTitle,width:e.width});var t=(l.columns||[]).find(function(t){return t.name===e.name});t&&((t=Object.assign({},t)).title=t.title||e.originalTitle,null==t.width&&null!==e.width&&(t.width=e.width),o.push(t))}}),e.availableColumns=r,e.selectedColumns=o,e.close.subscribe(function(e){e&&(l.columns=e,a.refresh()),i({cancel:!e,close:!0,data:e})})},updater:function(e,n){var i=t(n);e.disabled=!i.id}}},e.prototype.getAddFilterAction=function(e,t){return{icon:"fa fa-filter",text:this.strings.updateFilter,dialogComponent:u.a,resultReceiver:e,dialogInitializer:function(e,n,i){var a=t(n),l=a.currentView;e.items=a.allFilters,e.value=l.filter,e.close.subscribe(function(e){e&&(l.filter=e,a.refresh()),i({cancel:!e,close:!0,data:e})})},updater:function(e,n){var i=t(n);e.disabled=!i.id}}},e.prototype.getViewAction=function(e,t,n){return{icon:"fa fa-eye",text:Object(s.b)(this.strings.view,e.title),group:"views",handler:function(t,i){return new Promise(function(a){n(t).setViewAsCurrent(e.id),i(!0),a({cancel:!1,data:e})})},resultReceiver:t,updater:function(t,i){var a=n(i);t.selected=a.currentView&&a.currentView.id===e.id}}},e.ngInjectableDef=c.X({factory:function(){return new e(c.Ba(r.a))},token:e,providedIn:"root"}),e}()}}]);