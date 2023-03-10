<template>
    <Chart :size="{ width: 500, height: 420 }"
           :data="data"
           :margin="margin"
           :direction="direction"
           :axis="axis">

        <template #layers>
            <Grid strokeDasharray="2,2" />
            <Bar :dataKeys="['name', 'pl']" :barStyle="{ fill: '#90e0ef' }" />
            <Bar :dataKeys="['name', 'avg']" :barStyle="{ fill: '#0096c7' }" />
            <Bar :dataKeys="['name', 'inc']" :barStyle="{ fill: '#48cae4' }" />
            <Marker :value="1000" label="Avg." color="#e76f51" strokeWidth="2" strokeDasharray="6 6" />
        </template>

        <template #widgets>
            <Tooltip borderColor="#48CAE4"
                     :config="{
          pl: { color: '#90e0ef' },
          avg: { color: '#0096c7' },
          inc: { color: '#48cae4' }
        }" />
        </template>

    </Chart>
</template>

<script lang="ts">
    import { defineComponent, ref } from 'vue'
    import { Bar, Chart, Grid} from 'vue3-charts'

    export const EindhovenData = [
        { name: 'Mon', avg: 80},
        { name: 'Tue', avg: 90},
        { name: 'Wed', avg: 40},
        { name: 'Thu', avg: 10},
        { name: 'fri', avg: 10},
        { name: 'Sat', avg: 40},
        { name: 'Sun', avg: 90}
    ]
    export const BredaData = [
        { name: 'Mon', avg: 10 },
        { name: 'Tue', avg: 10 },
        { name: 'Wed', avg: 10 },
        { name: 'Thu', avg: 10 },
        { name: 'fri', avg: 10 },
        { name: 'Sat', avg: 10 },
        { name: 'Sun', avg: 10 }
    ]
    export const DenboschData = [
        { name: 'Mon', avg: 10 },
        { name: 'Tue', avg: 20 },
        { name: 'Wed', avg: 30 },
        { name: 'Thu', avg: 40 },
        { name: 'fri', avg: 50 },
        { name: 'Sat', avg: 60 },
        { name: 'Sun', avg: 70 }
    ]
    let chosen = ''

    let data = ref()
    export default defineComponent({
        name: 'LineChart',
        components: { Chart, Grid, Bar},

        props: {
            myString: {
                type: String,
                required: true
            }
        },
        setup(props) {
            chosen = props.myString
            console.log(chosen)
            if (chosen === 'Eindhoven') {
                data = ref(EindhovenData)
            }
            else if (chosen === 'Breda') {
                data = ref(BredaData)
            }
            else if (chosen === 'Denbosch') {
                data = ref(DenboschData)
            }
            const direction = ref('horizontal')
            const margin = ref({
                left: 0,
                top: 20,
                right: 20,
                bottom: 0
            })

            const axis = ref({
                primary: {
                    type: 'band',
                    format: (val: string) => {
                        return val
                    }
                },
                secondary: {
                    domain: ['0', '100'],
                    type: 'linear',
                    ticks: 8
                }
            })

            return { data, direction, margin, axis }
        },
    })
</script>