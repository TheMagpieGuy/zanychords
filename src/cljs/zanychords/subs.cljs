(ns zanychords.subs
  (:require
   [re-frame.core :as rf]))

(rf/reg-sub
 ::progressions
 (fn [db]
   (:progressions db)))
