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
  getCustomer: state => {
    return state.data.filter(customer => customer.customer_id ==1)
  }
}
