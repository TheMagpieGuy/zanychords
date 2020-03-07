(ns zanychords.views
  (:require
   [re-frame.core :as rf]
   [reagent.core :as r]
   [zanychords.subs :as subs]
   [zanychords.events :as events]
   [clojure.string :as str]
   ["@material-ui/core/AppBar" :default AppBar]
   ["@material-ui/core/Tabs" :default Tabs]
   ["@material-ui/core/Tab" :default Tab]
   ["@material-ui/core/Fab" :default Fab]
   ["@material-ui/core/Dialog" :default Dialog]
   ["@material-ui/core/DialogTitle" :default DialogTitle]
   ["@material-ui/core/List" :default List]
   ["@material-ui/core/ListItem" :default ListItem]
   ["@material-ui/core/ListItemText" :default ListItemText]
   ["@material-ui/core/Divider" :default Divider]
   ["@material-ui/core/Paper" :default Paper]
   ["@material-ui/core/Card" :default Card]
   ["@material-ui/core/CardContent" :default CardContent]
   ["@material-ui/core/TextField" :default TextField]
   ["@material-ui/core/Button" :default Button]
   ["@material-ui/core/Grid" :default Grid]
   ["@material-ui/icons/Add" :default AddIcon]
   ["@material-ui/icons/Delete" :default DeleteIcon]
   [kee-frame.core :as k]))

;There seems to be a bug where using the :> shortcut for react components causes a weird error ("Cannot convert a Symbol value to a string") so we just create our own shortcut with blackjack and... you know.
(def arc r/adapt-react-class)

(defn add-progression-dlg [is-open on-close on-progression-added]
  (let [progression (r/atom {:title "" :chords ""})]
    (fn [is-open on-close on-progression-added]
      [:> Dialog {:open is-open :on-close on-close :full-width true}
       [:> DialogTitle "Add Progression"]
       [:> TextField {:label "Progression Title" :style {:margin-left "20px" :margin-right "20px"}
                      :on-change #(swap! progression assoc :title (-> % .-target .-value))
                      :value (:title @progression)}]

       [:> TextField {:label "Progression Content (Comma Separated)" :style {:margin-left "20px" :margin-right "20px"}
                      :on-change #(swap! progression assoc :chords (-> % .-target .-value))
                      :value (:chords @progression)}]

       [:> Grid {:container true :direction "row" :justify "flex-end" :align-items "center"}
        [:> Button {:color "primary" :class "rbmargin"
                    :on-click (fn []
                                (on-close)
                                (on-progression-added @progression)
                                (reset! progression {:title "" :chords ""}))}
         "OK"]


        [:> Button {:color "default" :class "rbmargin"
                    :on-click (fn []
                                (on-close)
                                (reset! progression {:title "" :chords ""}))}
         "Cancel"]]])))


(defn progressions []
  (let [add-dlg-open (r/atom false)
        progressions (rf/subscribe [::subs/progressions])]
    (fn []
      [:div {:class "hideoverflow"}
       ; Main list with existing progressions
       [:> Grid {:container true :spacing 3 :justify "center"}
        [:> Grid {:item true :xs "12" :sm "6"}
         [:> Card {:class "margin10"}
          [:> CardContent
           [:> List
            (for [[i, progression] (map-indexed vector @progressions)]
              [(arc ListItem) {:key i}
               [(arc ListItemText) {:primary (:title progression) :secondary (str/join "," (:chords progression))}]
               [(arc Button) {:on-click #(rf/dispatch [::events/delete-progression (:title progression)])} [(arc DeleteIcon)]]])]]]]]


       ; Floating Action Button to add new progression
       [:> Fab {:color :primary :on-click #(reset! add-dlg-open true) :class "floatrightbottom"}
        [:> AddIcon]]

       ; Dialog for adding new Progression
       [add-progression-dlg @add-dlg-open
        #(reset! add-dlg-open false)
        #(rf/dispatch [::events/add-progression %])]])))


(defn main-panel []
  (let []
    [:div
     [:> AppBar {:position "static"}
      [:> Tabs {:value
                (k/switch-route (fn [route] (-> route :data :name))
                                nil 0 :main 0 :progressions 0 :sessions 1 :practice 2)
                :centered true}

       [:> Tab {:label "Progressions" :component :a :href "progressions"}]
       [:> Tab {:label "Sessions" :component :a :href "sessions"}]
       [:> Tab {:label "Practice" :component :a :href "practice"}]]]

     [k/switch-route (fn [route] (-> route :data :name))
      nil [:span "INVALID ROUTE"]
      :main [:span "main"]
      :progressions [progressions]
      :sessions [:span "Sessions"]
      :practice [:span "Practice"]]]))
