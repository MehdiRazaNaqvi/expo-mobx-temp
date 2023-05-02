
import { makeObservable, action, observable } from "mobx"



class myData {
    data = [



    ]

    constructor() {
        makeObservable(this, {


            addToData: action,
            deleteData: action,
            data: observable

        }, { autoBind: true })

    }

    addToData(data) {
        this.data = [...this.data, { ...data, id: Math.random() }]
    }


    deleteData(id) {
        this.data = this.data.filter(v => v.id != id)
    }

    updateData(id) {
        this.data.filter(v => v.id == id)[0].name = "new dummy name"
    }


    deleteAllData() {
        this.data = []
    }


}



export default myData = new myData()