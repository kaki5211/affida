<script>
  export default {
    data () {
      return {
        desserts: [
          {
            name: 'Frozen Yogurt',
            calories: 159,
          },
          {
            name: 'Ice cream sandwich',
            calories: 237,
          },
          {
            name: 'Eclair',
            calories: 262,
          },
          {
            name: 'Cupcake',
            calories: 305,
          },
          {
            name: 'Gingerbread',
            calories: 356,
          },
          {
            name: 'Jelly bean',
            calories: 375,
          },
          {
            name: 'Lollipop',
            calories: 392,
          },
          {
            name: 'Honeycomb',
            calories: 408,
          },
          {
            name: 'Donut',
            calories: 452,
          },
          {
            name: 'KitKat',
            calories: 518,
          },
        ],
      }
    },
  }
</script>


<script setup lang="ts">


</script>










<template>
  <v-table density="compact" class="my-border-vue rounded-sm">
    <!-- <thead>
      <tr>
        <th class="text-left">
          Name
        </th>
        <th class="text-left">
          Calories
        </th>
      </tr>
    </thead> -->


    <tbody class="my-border-color-gray">
      <tr
        v-for="item in desserts"
        :key="item.name"
        class="my-border-color-gray"
      >
        <td class="font-weight-bold text-center">{{ item.name }}：</td>
        <td class="font-weight-bold text-center" width="10">：</td>

        <td class="text-center">{{ item.calories }}</td>
      </tr>
    </tbody>
  </v-table>
</template>




<style scoped>



</style>