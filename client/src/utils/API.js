import axios from "axios"; 

export default {

    getRoommies: function() {
        return axios.get("/api/roommies");
    },

    getRoommie: function(id) {
        return axios.get("/api/roommies/" + id);
    }, 

    saveRoomie: function(roommieData) {
        return axios.post("/api/roommies", roommieData);
    }
};