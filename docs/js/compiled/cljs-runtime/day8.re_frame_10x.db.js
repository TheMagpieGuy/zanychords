goog.provide('day8.re_frame_10x.db');
goog.require('cljs.core');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core');
goog.require('day8.re_frame_10x.utils.localstorage');
day8.re_frame_10x.db.init_db = (function day8$re_frame_10x$db$init_db(debug_QMARK_){
var panel_width_PERCENT_ = day8.re_frame_10x.utils.localstorage.get.cljs$core$IFn$_invoke$arity$2("panel-width-ratio",0.35);
var show_panel_QMARK_ = day8.re_frame_10x.utils.localstorage.get.cljs$core$IFn$_invoke$arity$2("show-panel",true);
var selected_tab = day8.re_frame_10x.utils.localstorage.get.cljs$core$IFn$_invoke$arity$2("selected-tab",new cljs.core.Keyword(null,"event","event",301435442));
var filter_items = day8.re_frame_10x.utils.localstorage.get.cljs$core$IFn$_invoke$arity$2("filter-items",cljs.core.PersistentVector.EMPTY);
var app_db_paths = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.sorted_map(),day8.re_frame_10x.utils.localstorage.get.cljs$core$IFn$_invoke$arity$2("app-db-paths",cljs.core.PersistentArrayMap.EMPTY));
var json_ml_paths = day8.re_frame_10x.utils.localstorage.get.cljs$core$IFn$_invoke$arity$2("app-db-json-ml-expansions",cljs.core.PersistentHashSet.EMPTY);
var external_window_QMARK_ = day8.re_frame_10x.utils.localstorage.get.cljs$core$IFn$_invoke$arity$2("external-window?",false);
var external_window_dimensions = day8.re_frame_10x.utils.localstorage.get.cljs$core$IFn$_invoke$arity$2("external-window-dimensions",new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"width","width",-384071477),(800),new cljs.core.Keyword(null,"height","height",1025178622),(800),new cljs.core.Keyword(null,"top","top",-1856271961),(0),new cljs.core.Keyword(null,"left","left",-399115937),(0)], null));
var show_epoch_traces_QMARK_ = day8.re_frame_10x.utils.localstorage.get.cljs$core$IFn$_invoke$arity$2("show-epoch-traces?",true);
var using_trace_QMARK_ = day8.re_frame_10x.utils.localstorage.get.cljs$core$IFn$_invoke$arity$2("using-trace?",true);
var ignored_events = day8.re_frame_10x.utils.localstorage.get.cljs$core$IFn$_invoke$arity$2("ignored-events",cljs.core.PersistentArrayMap.EMPTY);
var low_level_trace = day8.re_frame_10x.utils.localstorage.get.cljs$core$IFn$_invoke$arity$2("low-level-trace",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"reagent","reagent",2131627322),true,new cljs.core.Keyword(null,"re-frame","re-frame",-1039473033),true], null));
var filtered_view_trace = day8.re_frame_10x.utils.localstorage.get.cljs$core$IFn$_invoke$arity$2("filtered-view-trace",(function (){var id1 = cljs.core.random_uuid();
var id2 = cljs.core.random_uuid();
return cljs.core.PersistentArrayMap.createAsIfByAssoc([id1,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),id1,new cljs.core.Keyword(null,"ns-str","ns-str",-2062616499),"re-com.box",new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"re-com.box","re-com.box",-858521688,null),new cljs.core.Keyword(null,"sort","sort",953465918),(0)], null),id2,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),id2,new cljs.core.Keyword(null,"ns-str","ns-str",-2062616499),"re-com.input-text",new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"re-com.input-text","re-com.input-text",-1695951110,null),new cljs.core.Keyword(null,"sort","sort",953465918),(1)], null)]);
})());
var num_epochs = day8.re_frame_10x.utils.localstorage.get.cljs$core$IFn$_invoke$arity$2("retained-epochs",(25));
var follows_events_QMARK_ = day8.re_frame_10x.utils.localstorage.get.cljs$core$IFn$_invoke$arity$2("app-db-follows-events?",true);
var categories = day8.re_frame_10x.utils.localstorage.get.cljs$core$IFn$_invoke$arity$2("categories",new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("sub","run","sub/run",-1821315581),null,new cljs.core.Keyword("sub","create","sub/create",-1301317560),null,new cljs.core.Keyword(null,"event","event",301435442),null,new cljs.core.Keyword("sub","dispose","sub/dispose",365440536),null], null), null));
if(cljs.core.truth_(using_trace_QMARK_)){
var G__78126_78165 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("global","enable-tracing","global/enable-tracing",-1791988359)], null);
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__78126_78165) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.dispatch.call(null,G__78126_78165));
} else {
}

var G__78127_78166 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","panel-width%","settings/panel-width%",-1897072808),panel_width_PERCENT_], null);
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__78127_78166) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.dispatch.call(null,G__78127_78166));

var G__78128_78167 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","show-panel?","settings/show-panel?",-194286945),show_panel_QMARK_], null);
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__78128_78167) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.dispatch.call(null,G__78128_78167));

var G__78135_78168 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","selected-tab","settings/selected-tab",-124010089),selected_tab], null);
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__78135_78168) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.dispatch.call(null,G__78135_78168));

var G__78136_78169 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","set-ignored-events","settings/set-ignored-events",-10379659),ignored_events], null);
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__78136_78169) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.dispatch.call(null,G__78136_78169));

var G__78137_78170 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","set-filtered-view-trace","settings/set-filtered-view-trace",-803299732),filtered_view_trace], null);
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__78137_78170) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.dispatch.call(null,G__78137_78170));

var G__78138_78171 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","set-low-level-trace","settings/set-low-level-trace",-664705158),low_level_trace], null);
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__78138_78171) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.dispatch.call(null,G__78138_78171));

var G__78139_78172 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","set-number-of-retained-epochs","settings/set-number-of-retained-epochs",-1910736736),num_epochs], null);
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__78139_78172) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.dispatch.call(null,G__78139_78172));

var G__78140_78173 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","app-db-follows-events?","settings/app-db-follows-events?",-115495889),follows_events_QMARK_], null);
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__78140_78173) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.dispatch.call(null,G__78140_78173));

var G__78141_78174 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","debug?","settings/debug?",-128490920),debug_QMARK_], null);
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__78141_78174) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.dispatch.call(null,G__78141_78174));

var G__78144_78175 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","external-window-dimensions","settings/external-window-dimensions",-501632461),external_window_dimensions], null);
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__78144_78175) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.dispatch.call(null,G__78144_78175));

if(cljs.core.truth_(external_window_QMARK_)){
var G__78145_78176 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("global","launch-external","global/launch-external",821773827)], null);
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__78145_78176) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.dispatch.call(null,G__78145_78176));
} else {
}

var G__78148_78177 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","filter-items","traces/filter-items",977390347),filter_items], null);
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__78148_78177) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.dispatch.call(null,G__78148_78177));

var G__78151_78178 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","set-categories","traces/set-categories",-1873940666),categories], null);
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__78151_78178) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.dispatch.call(null,G__78151_78178));

var G__78152_78179 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("trace-panel","update-show-epoch-traces?","trace-panel/update-show-epoch-traces?",-1935503516),show_epoch_traces_QMARK_], null);
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__78152_78179) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.dispatch.call(null,G__78152_78179));

var G__78153_78180 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app-db","paths","app-db/paths",-1600032730),app_db_paths], null);
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__78153_78180) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.dispatch.call(null,G__78153_78180));

var G__78156_78181 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app-db","set-json-ml-paths","app-db/set-json-ml-paths",582043654),json_ml_paths], null);
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__78156_78181) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.dispatch.call(null,G__78156_78181));

var G__78157_78182 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("global","add-unload-hook","global/add-unload-hook",1304719430)], null);
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__78157_78182) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.dispatch.call(null,G__78157_78182));

var G__78162 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app-db","reagent-id","app-db/reagent-id",916858371)], null);
return (day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__78162) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.dispatch.call(null,G__78162));
});

//# sourceMappingURL=day8.re_frame_10x.db.js.map
