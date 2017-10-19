
new Vue({
  el: '#app',
  data () {
    return {
      City: {},
      list: []
    }
  },
  mounted () {
    axios.get('http://api.openweathermap.org/data/2.5/forecast?id=5597711&appid=fa664a4bbf11a81e556d4817c09d136c&units=imperial')
    .then(response => {
      this.City = response.data
      this.list = this.City.list
      console.log(this.list)
    })
    .catch(error => {
      console.log(error)
    })
  }
})
