import mongoose,{Schema} from "mongooose"

const subcriptionSchema = new Schema({
    subscribers:{
        type:Schema.Types.ObjectId,
        ref:'User'
    },
    channel:{
        type:Schema.Types.ObjectId,
        ref:'User'
    }
},{timestamps:true})

export const Subscription = mongoose.Model("Subscription",subcriptionSchema)

