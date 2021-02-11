export const state = () => ({
  data: [
    {
      customer_id: 1,
      name:'Matt Peepee'
    },
    {
      customer_id: 2,
      name: 'Juan won one'
    },
    {
      customer_id:3,
      name:'Jumping Juniper'
    },
  ]
})

export const getters = {
  getCustomerById: (state,getters) => (custId) => {
    return state.data.find(customer => customer.customer_id == custId)
  }
}
