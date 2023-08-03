import {configureStore} from"@reduxjs/toolkit"
import { config } from "process"
import cartSlice from "../Components/cartSlice";

const store=configureStore({
    reducer:{
     cart:cartSlice,   
    }
});

export default store;