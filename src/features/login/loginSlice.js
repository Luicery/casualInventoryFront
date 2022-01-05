import {createSlice} from "@reduxjs/toolkit"

export const loginSlice = createSlice({
  name:"login",
  initialState: {
    id: 0,
    email: "",
    address: "",
    name: "",
    phone: 0,
    loggedIn: false
  },
  reducers: {
    companyChange(state, action) {
      const {id, email, address, name, phone} = action.payload;
      const existingCompany = state.find((login) => login.id === id)
      if(existingCompany === true) {
        existingCompany.email = email
        existingCompany.address = address
        existingCompany.name = name
        existingCompany.phone = phone
      }
    }
  }
})

export const {companyChange} = loginSlice.actions
export default loginSlice.reducer;
