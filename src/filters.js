import Vue from "vue";

//filter to lowercase
Vue.filter("lowcase", function(v) {
    return v.toLowerCase();
}),
    //filter to uppercase
    Vue.filter("upcase", function(v) {
        return v.toUpperCase();
    }),
    //shorten Text
    Vue.filter("shortIt", function(value, textlength, suffix) {
        return value.substring(0, textlength) + suffix;
    });
