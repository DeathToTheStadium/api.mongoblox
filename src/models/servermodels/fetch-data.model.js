class fetch_data{
    constructor(db,collection){
       this.model = db.conn.model(collection)
    }

    find(data){
        var data;
        data = this.model.find
        return data
    }
}

module.exports = fetch_data