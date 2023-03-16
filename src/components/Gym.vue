<template>
    <Chart :size="{ width: 500, height: 420 }"
           :data="data"
           :margin="margin"
           :direction="direction"
           :axis="axis">

        <template #layers>
            <Grid strokeDasharray="2,2" />
            <Bar :dataKeys="['name', 'pl']" :barStyle="{ fill: '#90e0ef' }" />
            <Bar :dataKeys="['name', 'avg']" :barStyle="{ fill: '#84a2f4' }" />
        </template>

        <template #widgets>
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
            const chosen = ref('');
            if (props.myString === 'Eindhoven') {
                data = ref(EindhovenData)
                chosen.value = 'Breda';
            }
            else if (props.myString === 'Breda') {
                data = ref(BredaData)
                chosen.value = 'Breda';
            }
            else if (props.myString === 'Denbosch') {
                data = ref(DenboschData)
                chosen.value = 'Denbosch';
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
    //
            return { chosen, data, direction, margin, axis }
        },
    })
</script>