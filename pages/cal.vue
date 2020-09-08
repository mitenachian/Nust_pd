<template>
<div>
	<v-calendar  :available-dates='{
    start: new Date(),
    end: new Date(2020, 8, 31)
  }'/>
	<v-date-picker v-model="date" :available-dates='{
    start: new Date(),
    end: new Date(2020, 8, 31)
  }'/>
  <v-date-picker
  mode='range'
  v-model='range'
  />
</div>
</template>
<script>
export default {
  data() {
    return {
	  date: new Date(),
	  range: {
        start: new Date(2018, 0, 16), // Jan 16th, 2018
        end: new Date(2018, 0, 19)    // Jan 19th, 2018
      }
      }
   }
}
</script>