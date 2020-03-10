goog.provide('kee_frame.spec');
goog.require('cljs.core');
goog.require('re_frame.interceptor');
goog.require('re_frame.core');
goog.require('cljs.spec.alpha');
goog.require('re_chain.core');
goog.require('expound.alpha');
goog.require('kee_frame.api');
cljs.spec.alpha.def_impl(new cljs.core.Keyword("kee-frame.spec","params","kee-frame.spec/params",-1102720091),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"path-vector","path-vector",-649624256),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Symbol("cljs.core","fn?","cljs.core/fn?",71876239,null)),cljs.spec.alpha.or_spec_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path-vector","path-vector",-649624256),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),new cljs.core.Symbol("cljs.core","fn?","cljs.core/fn?",71876239,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.vector_QMARK_,cljs.core.fn_QMARK_], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("kee-frame.spec","start","kee-frame.spec/start",1302848841),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"vector","vector",1902966158),new cljs.core.Keyword("kee-frame.spec","event-vector","kee-frame.spec/event-vector",-1240954896),new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Symbol("cljs.core","fn?","cljs.core/fn?",71876239,null)),cljs.spec.alpha.or_spec_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vector","vector",1902966158),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("kee-frame.spec","event-vector","kee-frame.spec/event-vector",-1240954896),new cljs.core.Symbol("cljs.core","fn?","cljs.core/fn?",71876239,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("kee-frame.spec","event-vector","kee-frame.spec/event-vector",-1240954896),cljs.core.fn_QMARK_], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("kee-frame.spec","stop","kee-frame.spec/stop",-316121488),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"vector","vector",1902966158),new cljs.core.Keyword("kee-frame.spec","event-vector","kee-frame.spec/event-vector",-1240954896),new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Symbol("cljs.core","fn?","cljs.core/fn?",71876239,null)),cljs.spec.alpha.or_spec_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vector","vector",1902966158),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("kee-frame.spec","event-vector","kee-frame.spec/event-vector",-1240954896),new cljs.core.Symbol("cljs.core","fn?","cljs.core/fn?",71876239,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("kee-frame.spec","event-vector","kee-frame.spec/event-vector",-1240954896),cljs.core.fn_QMARK_], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("kee-frame.spec","controller","kee-frame.spec/controller",70465085),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("kee-frame.spec","params","kee-frame.spec/params",-1102720091),new cljs.core.Keyword("kee-frame.spec","start","kee-frame.spec/start",1302848841)], null),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("kee-frame.spec","stop","kee-frame.spec/stop",-316121488)], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("kee-frame.spec","params","kee-frame.spec/params",-1102720091),new cljs.core.Keyword("kee-frame.spec","start","kee-frame.spec/start",1302848841)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("kee-frame.spec","stop","kee-frame.spec/stop",-316121488)], null),null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__55883){
return cljs.core.map_QMARK_(G__55883);
}),(function (G__55883){
return cljs.core.contains_QMARK_(G__55883,new cljs.core.Keyword(null,"params","params",710516235));
}),(function (G__55883){
return cljs.core.contains_QMARK_(G__55883,new cljs.core.Keyword(null,"start","start",-355208981));
})], null),(function (G__55883){
return ((cljs.core.map_QMARK_(G__55883)) && (cljs.core.contains_QMARK_(G__55883,new cljs.core.Keyword(null,"params","params",710516235))) && (cljs.core.contains_QMARK_(G__55883,new cljs.core.Keyword(null,"start","start",-355208981))));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stop","stop",-2140911342)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("kee-frame.spec","params","kee-frame.spec/params",-1102720091),new cljs.core.Keyword("kee-frame.spec","start","kee-frame.spec/start",1302848841)], null),null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"start","start",-355208981)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("kee-frame.spec","stop","kee-frame.spec/stop",-316121488)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"params","params",710516235))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"start","start",-355208981)))], null),null])));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("kee-frame.spec","event-vector","kee-frame.spec/event-vector",-1240954896),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"event-key","event-key",2089664830),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null),new cljs.core.Keyword(null,"event-args","event-args",-1293669051),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","*","cljs.spec.alpha/*",-1238084288,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null))),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"event-key","event-key",2089664830),new cljs.core.Keyword(null,"event-args","event-args",-1293669051)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword_QMARK_,cljs.spec.alpha.rep_impl(new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","*","cljs.spec.alpha/*",-1238084288,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null))], null)));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("kee-frame.spec","routes","kee-frame.spec/routes",1060582440),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("kee-frame.spec","router","kee-frame.spec/router",1666807468),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","satisfies?","cljs.core/satisfies?",-1074798682,null),new cljs.core.Symbol("kee-frame.api","Router","kee-frame.api/Router",1417655163,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),(function (p1__55905_SHARP_){
if((!((p1__55905_SHARP_ == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === p1__55905_SHARP_.kee_frame$api$Router$)))){
return true;
} else {
if((!p1__55905_SHARP_.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(kee_frame.api.Router,p1__55905_SHARP_);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(kee_frame.api.Router,p1__55905_SHARP_);
}
}));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("kee-frame.spec","hash-routing?","kee-frame.spec/hash-routing?",935654730),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","nilable","cljs.spec.alpha/nilable",1628308748,null),new cljs.core.Symbol("cljs.core","boolean?","cljs.core/boolean?",1400713761,null)),cljs.spec.alpha.nilable_impl(new cljs.core.Symbol("cljs.core","boolean?","cljs.core/boolean?",1400713761,null),cljs.core.boolean_QMARK_,null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("kee-frame.spec","root-component","kee-frame.spec/root-component",-248605897),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","nilable","cljs.spec.alpha/nilable",1628308748,null),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null)),cljs.spec.alpha.nilable_impl(new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),cljs.core.vector_QMARK_,null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("kee-frame.spec","initial-db","kee-frame.spec/initial-db",1491854724),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","nilable","cljs.spec.alpha/nilable",1628308748,null),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null)),cljs.spec.alpha.nilable_impl(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),cljs.core.map_QMARK_,null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("kee-frame.spec","app-db-spec","kee-frame.spec/app-db-spec",511083432),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","nilable","cljs.spec.alpha/nilable",1628308748,null),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null)),cljs.spec.alpha.nilable_impl(new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null),cljs.core.keyword_QMARK_,null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("kee-frame.spec","blacklist","kee-frame.spec/blacklist",-1634826088),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","set?","cljs.core/set?",-1176684971,null)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Symbol(null,"keyword?","keyword?",1917797069,null),cljs.core.keyword_QMARK_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","set?","cljs.core/set?",-1176684971,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__55910){
return cljs.core.set_QMARK_(G__55910);
}),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.set_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","set?","cljs.core/set?",-1176684971,null))], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("kee-frame.spec","skip-events?","kee-frame.spec/skip-events?",-1801379267),new cljs.core.Symbol("cljs.core","boolean?","cljs.core/boolean?",1400713761,null),cljs.core.boolean_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("kee-frame.spec","skip-controllers?","kee-frame.spec/skip-controllers?",-549364614),new cljs.core.Symbol("cljs.core","boolean?","cljs.core/boolean?",1400713761,null),cljs.core.boolean_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("kee-frame.spec","skip-routes?","kee-frame.spec/skip-routes?",467064746),new cljs.core.Symbol("cljs.core","boolean?","cljs.core/boolean?",1400713761,null),cljs.core.boolean_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("kee-frame.spec","skip-overwrites?","kee-frame.spec/skip-overwrites?",246560751),new cljs.core.Symbol("cljs.core","boolean?","cljs.core/boolean?",1400713761,null),cljs.core.boolean_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("kee-frame.spec","debug?","kee-frame.spec/debug?",-957499119),new cljs.core.Symbol("cljs.core","boolean?","cljs.core/boolean?",1400713761,null),cljs.core.boolean_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("kee-frame.spec","debug-config","kee-frame.spec/debug-config",1196147295),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","nilable","cljs.spec.alpha/nilable",1628308748,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("kee-frame.spec","blacklist","kee-frame.spec/blacklist",-1634826088),new cljs.core.Keyword("kee-frame.spec","events?","kee-frame.spec/events?",2104930100),new cljs.core.Keyword("kee-frame.spec","controllers?","kee-frame.spec/controllers?",-460505621),new cljs.core.Keyword("kee-frame.spec","routes?","kee-frame.spec/routes?",-1874846230),new cljs.core.Keyword("kee-frame.spec","overwrites?","kee-frame.spec/overwrites?",-226667094)], null))),cljs.spec.alpha.nilable_impl(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("kee-frame.spec","blacklist","kee-frame.spec/blacklist",-1634826088),new cljs.core.Keyword("kee-frame.spec","events?","kee-frame.spec/events?",2104930100),new cljs.core.Keyword("kee-frame.spec","controllers?","kee-frame.spec/controllers?",-460505621),new cljs.core.Keyword("kee-frame.spec","routes?","kee-frame.spec/routes?",-1874846230),new cljs.core.Keyword("kee-frame.spec","overwrites?","kee-frame.spec/overwrites?",-226667094)], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("kee-frame.spec","blacklist","kee-frame.spec/blacklist",-1634826088),new cljs.core.Keyword("kee-frame.spec","events?","kee-frame.spec/events?",2104930100),new cljs.core.Keyword("kee-frame.spec","controllers?","kee-frame.spec/controllers?",-460505621),new cljs.core.Keyword("kee-frame.spec","routes?","kee-frame.spec/routes?",-1874846230),new cljs.core.Keyword("kee-frame.spec","overwrites?","kee-frame.spec/overwrites?",-226667094)], null),null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__55911){
return cljs.core.map_QMARK_(G__55911);
})], null),(function (G__55911){
return cljs.core.map_QMARK_(G__55911);
}),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"blacklist","blacklist",1248093170),new cljs.core.Keyword(null,"events?","events?",-780512682),new cljs.core.Keyword(null,"controllers?","controllers?",-2009030071),new cljs.core.Keyword(null,"routes?","routes?",-1257506224),new cljs.core.Keyword(null,"overwrites?","overwrites?",-1906761528)], null),cljs.core.PersistentVector.EMPTY,null,cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("kee-frame.spec","blacklist","kee-frame.spec/blacklist",-1634826088),new cljs.core.Keyword("kee-frame.spec","events?","kee-frame.spec/events?",2104930100),new cljs.core.Keyword("kee-frame.spec","controllers?","kee-frame.spec/controllers?",-460505621),new cljs.core.Keyword("kee-frame.spec","routes?","kee-frame.spec/routes?",-1874846230),new cljs.core.Keyword("kee-frame.spec","overwrites?","kee-frame.spec/overwrites?",-226667094)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null)))], null),null])),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("kee-frame.spec","chain-links","kee-frame.spec/chain-links",-992776370),new cljs.core.Keyword("re-chain.core","links","re-chain.core/links",1676670008),new cljs.core.Keyword("re-chain.core","links","re-chain.core/links",1676670008));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("kee-frame.spec","breakpoints","kee-frame.spec/breakpoints",-1864597447),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),cljs.core.vector_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("kee-frame.spec","debounce-ms","kee-frame.spec/debounce-ms",1535342567),new cljs.core.Symbol("cljs.core","number?","cljs.core/number?",-811857295,null),cljs.core.number_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("kee-frame.spec","scroll","kee-frame.spec/scroll",97319057),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","nilable","cljs.spec.alpha/nilable",1628308748,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"boolean","boolean",-1919418404),new cljs.core.Symbol("cljs.core","boolean?","cljs.core/boolean?",1400713761,null),new cljs.core.Keyword(null,"config","config",994861415),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("scroll","timeout","scroll/timeout",-819451737)], null)))),cljs.spec.alpha.nilable_impl(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"boolean","boolean",-1919418404),new cljs.core.Symbol("cljs.core","boolean?","cljs.core/boolean?",1400713761,null),new cljs.core.Keyword(null,"config","config",994861415),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("scroll","timeout","scroll/timeout",-819451737)], null))),cljs.spec.alpha.or_spec_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boolean","boolean",-1919418404),new cljs.core.Keyword(null,"config","config",994861415)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","boolean?","cljs.core/boolean?",1400713761,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("scroll","timeout","scroll/timeout",-819451737)], null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.boolean_QMARK_,cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("scroll","timeout","scroll/timeout",-819451737)], null),null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__55912){
return cljs.core.map_QMARK_(G__55912);
})], null),(function (G__55912){
return cljs.core.map_QMARK_(G__55912);
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"timeout","timeout",-318625318)], null),cljs.core.PersistentVector.EMPTY,null,cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("scroll","timeout","scroll/timeout",-819451737)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null)))], null),null]))], null),null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("kee-frame.spec","screen","kee-frame.spec/screen",432128774),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","nilable","cljs.spec.alpha/nilable",1628308748,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"boolean","boolean",-1919418404),new cljs.core.Symbol("cljs.core","boolean?","cljs.core/boolean?",1400713761,null),new cljs.core.Keyword(null,"config","config",994861415),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("kee-frame.spec","breakpoints","kee-frame.spec/breakpoints",-1864597447),new cljs.core.Keyword("kee-frame.spec","debounce-ms","kee-frame.spec/debounce-ms",1535342567)], null)))),cljs.spec.alpha.nilable_impl(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"boolean","boolean",-1919418404),new cljs.core.Symbol("cljs.core","boolean?","cljs.core/boolean?",1400713761,null),new cljs.core.Keyword(null,"config","config",994861415),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("kee-frame.spec","breakpoints","kee-frame.spec/breakpoints",-1864597447),new cljs.core.Keyword("kee-frame.spec","debounce-ms","kee-frame.spec/debounce-ms",1535342567)], null))),cljs.spec.alpha.or_spec_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boolean","boolean",-1919418404),new cljs.core.Keyword(null,"config","config",994861415)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","boolean?","cljs.core/boolean?",1400713761,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("kee-frame.spec","breakpoints","kee-frame.spec/breakpoints",-1864597447),new cljs.core.Keyword("kee-frame.spec","debounce-ms","kee-frame.spec/debounce-ms",1535342567)], null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.boolean_QMARK_,cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("kee-frame.spec","breakpoints","kee-frame.spec/breakpoints",-1864597447),new cljs.core.Keyword("kee-frame.spec","debounce-ms","kee-frame.spec/debounce-ms",1535342567)], null),null,null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__55913){
return cljs.core.map_QMARK_(G__55913);
}),(function (G__55913){
return cljs.core.contains_QMARK_(G__55913,new cljs.core.Keyword(null,"breakpoints","breakpoints",1018731739));
}),(function (G__55913){
return cljs.core.contains_QMARK_(G__55913,new cljs.core.Keyword(null,"debounce-ms","debounce-ms",-1127263167));
})], null),(function (G__55913){
return ((cljs.core.map_QMARK_(G__55913)) && (cljs.core.contains_QMARK_(G__55913,new cljs.core.Keyword(null,"breakpoints","breakpoints",1018731739))) && (cljs.core.contains_QMARK_(G__55913,new cljs.core.Keyword(null,"debounce-ms","debounce-ms",-1127263167))));
}),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("kee-frame.spec","breakpoints","kee-frame.spec/breakpoints",-1864597447),new cljs.core.Keyword("kee-frame.spec","debounce-ms","kee-frame.spec/debounce-ms",1535342567)], null),null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"breakpoints","breakpoints",1018731739),new cljs.core.Keyword(null,"debounce-ms","debounce-ms",-1127263167)], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"breakpoints","breakpoints",1018731739))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"debounce-ms","debounce-ms",-1127263167)))], null),null]))], null),null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("kee-frame.spec","start-options","kee-frame.spec/start-options",-1456248968),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("kee-frame.spec","routes","kee-frame.spec/routes",1060582440),new cljs.core.Keyword("kee-frame.spec","router","kee-frame.spec/router",1666807468),new cljs.core.Keyword("kee-frame.spec","hash-routing?","kee-frame.spec/hash-routing?",935654730),new cljs.core.Keyword("kee-frame.spec","root-component","kee-frame.spec/root-component",-248605897),new cljs.core.Keyword("kee-frame.spec","initial-db","kee-frame.spec/initial-db",1491854724),new cljs.core.Keyword("kee-frame.spec","app-db-spec","kee-frame.spec/app-db-spec",511083432),new cljs.core.Keyword("kee-frame.spec","debug?","kee-frame.spec/debug?",-957499119),new cljs.core.Keyword("kee-frame.spec","debug-config","kee-frame.spec/debug-config",1196147295),new cljs.core.Keyword("kee-frame.spec","chain-links","kee-frame.spec/chain-links",-992776370),new cljs.core.Keyword("kee-frame.spec","screen","kee-frame.spec/screen",432128774),new cljs.core.Keyword("kee-frame.spec","scroll","kee-frame.spec/scroll",97319057)], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("kee-frame.spec","routes","kee-frame.spec/routes",1060582440),new cljs.core.Keyword("kee-frame.spec","router","kee-frame.spec/router",1666807468),new cljs.core.Keyword("kee-frame.spec","hash-routing?","kee-frame.spec/hash-routing?",935654730),new cljs.core.Keyword("kee-frame.spec","root-component","kee-frame.spec/root-component",-248605897),new cljs.core.Keyword("kee-frame.spec","initial-db","kee-frame.spec/initial-db",1491854724),new cljs.core.Keyword("kee-frame.spec","app-db-spec","kee-frame.spec/app-db-spec",511083432),new cljs.core.Keyword("kee-frame.spec","debug?","kee-frame.spec/debug?",-957499119),new cljs.core.Keyword("kee-frame.spec","debug-config","kee-frame.spec/debug-config",1196147295),new cljs.core.Keyword("kee-frame.spec","chain-links","kee-frame.spec/chain-links",-992776370),new cljs.core.Keyword("kee-frame.spec","screen","kee-frame.spec/screen",432128774),new cljs.core.Keyword("kee-frame.spec","scroll","kee-frame.spec/scroll",97319057)], null),null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__55914){
return cljs.core.map_QMARK_(G__55914);
})], null),(function (G__55914){
return cljs.core.map_QMARK_(G__55914);
}),new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"routes","routes",457900162),new cljs.core.Keyword(null,"router","router",1091916230),new cljs.core.Keyword(null,"hash-routing?","hash-routing?",471914732),new cljs.core.Keyword(null,"root-component","root-component",-1807026475),new cljs.core.Keyword(null,"initial-db","initial-db",1939835102),new cljs.core.Keyword(null,"app-db-spec","app-db-spec",-1030582586),new cljs.core.Keyword(null,"debug?","debug?",-1831756173),new cljs.core.Keyword(null,"debug-config","debug-config",329260673),new cljs.core.Keyword(null,"chain-links","chain-links",951542256),new cljs.core.Keyword(null,"screen","screen",1990059748),new cljs.core.Keyword(null,"scroll","scroll",971553779)], null),cljs.core.PersistentVector.EMPTY,null,cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("kee-frame.spec","routes","kee-frame.spec/routes",1060582440),new cljs.core.Keyword("kee-frame.spec","router","kee-frame.spec/router",1666807468),new cljs.core.Keyword("kee-frame.spec","hash-routing?","kee-frame.spec/hash-routing?",935654730),new cljs.core.Keyword("kee-frame.spec","root-component","kee-frame.spec/root-component",-248605897),new cljs.core.Keyword("kee-frame.spec","initial-db","kee-frame.spec/initial-db",1491854724),new cljs.core.Keyword("kee-frame.spec","app-db-spec","kee-frame.spec/app-db-spec",511083432),new cljs.core.Keyword("kee-frame.spec","debug?","kee-frame.spec/debug?",-957499119),new cljs.core.Keyword("kee-frame.spec","debug-config","kee-frame.spec/debug-config",1196147295),new cljs.core.Keyword("kee-frame.spec","chain-links","kee-frame.spec/chain-links",-992776370),new cljs.core.Keyword("kee-frame.spec","screen","kee-frame.spec/screen",432128774),new cljs.core.Keyword("kee-frame.spec","scroll","kee-frame.spec/scroll",97319057)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null)))], null),null])));
kee_frame.spec.log_spec_error = (function kee_frame$spec$log_spec_error(new_db,spec){
var G__55915_55999 = new cljs.core.Keyword(null,"group","group",582596132);
var G__55916_56000 = "*** Spec error when updating DB, rolling back ***";
(re_frame.core.console.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.console.cljs$core$IFn$_invoke$arity$2(G__55915_55999,G__55916_56000) : re_frame.core.console.call(null,G__55915_55999,G__55916_56000));

expound.alpha.expound(spec,new_db);

var G__55917 = new cljs.core.Keyword(null,"groupEnd","groupEnd",-337721382);
var G__55918 = "*****************************";
return (re_frame.core.console.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.console.cljs$core$IFn$_invoke$arity$2(G__55917,G__55918) : re_frame.core.console.call(null,G__55917,G__55918));
});
kee_frame.spec.rollback = (function kee_frame$spec$rollback(context,new_db,db_spec){
kee_frame.spec.log_spec_error(new_db,db_spec);

return re_frame.interceptor.assoc_effect(context,new cljs.core.Keyword(null,"db","db",993250759),re_frame.interceptor.get_coeffect.cljs$core$IFn$_invoke$arity$2(context,new cljs.core.Keyword(null,"db","db",993250759)));
});
kee_frame.spec.spec_interceptor = (function kee_frame$spec$spec_interceptor(db_spec_atom){
return re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"spec","spec",347520401),new cljs.core.Keyword(null,"after","after",594996914),(function (context){
var new_db = re_frame.interceptor.get_effect.cljs$core$IFn$_invoke$arity$2(context,new cljs.core.Keyword(null,"db","db",993250759));
if(cljs.core.truth_((function (){var and__4174__auto__ = cljs.core.deref(db_spec_atom);
if(cljs.core.truth_(and__4174__auto__)){
var and__4174__auto____$1 = new_db;
if(cljs.core.truth_(and__4174__auto____$1)){
return (!(cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(db_spec_atom),new_db)));
} else {
return and__4174__auto____$1;
}
} else {
return and__4174__auto__;
}
})())){
return kee_frame.spec.rollback(context,new_db,cljs.core.deref(db_spec_atom));
} else {
return context;
}
})], 0));
});

//# sourceMappingURL=kee_frame.spec.js.map
