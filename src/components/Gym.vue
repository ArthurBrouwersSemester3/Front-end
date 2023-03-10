<template>
    <div>{{ myString }}</div>
    <Chart :size="{ width: 500, height: 420 }"
           :data="data"
           :margin="margin"
           :direction="direction"
           :axis="axis">

        <template #layers>
            <Grid strokeDasharray="2,2" />
            <Line :dataKeys="['name', 'avg']" />
        </template>

        <template #widgets>
            <Tooltip borderColor="#48CAE4"
                     :config="{
          name: { hide: true },
          pl: { color: '#0077b6' },
          avg: { label: 'averange', color: 'red' },
        }" />
        </template>

    </Chart>
</template>

<script lang="ts">
    import { defineComponent, ref } from 'vue'
    import { Chart, Grid, Line } from 'vue3-charts'

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
        components: { Chart, Grid, Line },

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
            else if (chosen === 'Den Bosch') {
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
                    domain: ['dataMin', 'dataMax + 10'],
                    type: 'linear',
                    ticks: 8
                }
            })

            return { data, direction, margin, axis }
        },
    })
</script>