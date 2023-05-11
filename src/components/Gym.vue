<template>
    <Chart :size="{ width: 500, height: 420 }"
           :data="data"
           :margin="margin"
           :axis="{ 
                primary: {
                    type: 'band',
                    format: (val: string) => {
                        return val
                    },
                    domain: [0, 10]
                },
                secondary: {
                    domain: ['0', '100'],
                    type: 'linear',
                    ticks: 8
                } 
                    }">


        <template #layers>
            <Grid strokeDasharray="2,2" />
            <Bar :dataKeys="['time', 'pl']" :barStyle="{ fill: '#90e0ef' }" />
            <Bar :dataKeys="['time', 'value']" :barStyle="{ fill: '#84a2f4' }" />
        </template>

        <template #widgets>
        </template>

    </Chart>
</template>

<script lang="ts">
    import { defineComponent, ref, watchEffect } from 'vue'
    import { Bar, Chart, Grid} from 'vue3-charts'
    
    export const EindhovenDataMon = [
        { name: '8:00', avg: 80},
        { name: '9:00', avg: 90},
        { name: '10:00', avg: 40},
        { name: '11:00', avg: 10},
        { name: '12:00', avg: 10},
        { name: '13:00', avg: 40},
        { name: '14:00', avg: 90},
        { name: '15:00', avg: 90},
        { name: '16:00', avg: 90},
        { name: '17:00', avg: 90},
        { name: '18:00', avg: 90},
        { name: '19:00', avg: 90},
        { name: '20:00', avg: 90}
    ]
    export const EindhovenDataTue = [
        { name: '8:00', avg: 10 },
        { name: '9:00', avg: 20 },
        { name: '10:00', avg: 30 },
        { name: '11:00', avg: 40 },
        { name: '12:00', avg: 50 },
        { name: '13:00', avg: 60 },
        { name: '14:00', avg: 70 },
        { name: '15:00', avg: 80 },
        { name: '16:00', avg: 90 },
        { name: '17:00', avg: 80 },
        { name: '18:00', avg: 70 },
        { name: '19:00', avg: 60 },
        { name: '20:00', avg: 50 }
    ]
    export const EindhovenDataWed = [
        { name: '8:00', avg: 20 },
        { name: '9:00', avg: 20 },
        { name: '10:00', avg: 20 },
        { name: '11:00', avg: 20 },
        { name: '12:00', avg: 20 },
        { name: '13:00', avg: 20 },
        { name: '14:00', avg: 20 },
        { name: '15:00', avg: 20 },
        { name: '16:00', avg: 20 },
        { name: '17:00', avg: 20 },
        { name: '18:00', avg: 20 },
        { name: '19:00', avg: 20 },
        { name: '20:00', avg: 20 }
    ]
    export const EindhovenDataThu = [
        { name: '8:00', avg: 100 },
        { name: '9:00', avg: 100 },
        { name: '10:00', avg: 90 },
        { name: '11:00', avg: 90 },
        { name: '12:00', avg: 80 },
        { name: '13:00', avg: 80 },
        { name: '14:00', avg: 70 },
        { name: '15:00', avg: 70 },
        { name: '16:00', avg: 60 },
        { name: '17:00', avg: 60 },
        { name: '18:00', avg: 50 },
        { name: '19:00', avg: 50 },
        { name: '20:00', avg: 40 }
    ]
    export const EindhovenDataFri = [
        { name: '8:00', avg: 0 },
        { name: '9:00', avg: 0 },
        { name: '10:00', avg: 3 },
        { name: '11:00', avg: 0 },
        { name: '12:00', avg: 0 },
        { name: '13:00', avg: 0 },
        { name: '14:00', avg: 7 },
        { name: '15:00', avg: 0 },
        { name: '16:00', avg: 0 },
        { name: '17:00', avg: 0 },
        { name: '18:00', avg: 0 },
        { name: '19:00', avg: 6 },
        { name: '20:00', avg: 0 }
    ]
    export const EindhovenDataSat = [
        { name: '8:00', avg: 10 },
        { name: '9:00', avg: 20 },
        { name: '10:00', avg: 30 },
        { name: '11:00', avg: 20 },
        { name: '12:00', avg: 10 },
        { name: '13:00', avg: 20 },
        { name: '14:00', avg: 30 },
        { name: '15:00', avg: 20 },
        { name: '16:00', avg: 10 },
        { name: '17:00', avg: 20 },
        { name: '18:00', avg: 30 },
        { name: '19:00', avg: 20 },
        { name: '20:00', avg: 10 }
    ]
    export const EindhovenDataSun = [
        { name: '8:00', avg: 100 },
        { name: '9:00', avg: 100 },
        { name: '10:00', avg: 100 },
        { name: '11:00', avg: 100 },
        { name: '12:00', avg: 100 },
        { name: '13:00', avg: 100 },
        { name: '14:00', avg: 100 },
        { name: '15:00', avg: 100 },
        { name: '16:00', avg: 100 },
        { name: '17:00', avg: 100 },
        { name: '18:00', avg: 100 },
        { name: '19:00', avg: 100 },
        { name: '20:00', avg: 100 }
    ]
    export const BredaDataMon = [
        { name: '8:00', avg: 80 },
        { name: '9:00', avg: 90 },
        { name: '10:00', avg: 40 },
        { name: '11:00', avg: 10 },
        { name: '12:00', avg: 10 },
        { name: '13:00', avg: 40 },
        { name: '14:00', avg: 90 },
        { name: '15:00', avg: 90 },
        { name: '16:00', avg: 90 },
        { name: '17:00', avg: 90 },
        { name: '18:00', avg: 90 },
        { name: '19:00', avg: 90 },
        { name: '20:00', avg: 90 }
    ]
    export const BredaDataTue = [
        { name: '8:00', avg: 10 },
        { name: '9:00', avg: 20 },
        { name: '10:00', avg: 30 },
        { name: '11:00', avg: 40 },
        { name: '12:00', avg: 50 },
        { name: '13:00', avg: 60 },
        { name: '14:00', avg: 70 },
        { name: '15:00', avg: 80 },
        { name: '16:00', avg: 90 },
        { name: '17:00', avg: 80 },
        { name: '18:00', avg: 70 },
        { name: '19:00', avg: 60 },
        { name: '20:00', avg: 50 }
    ]
    export const BredaDataWed = [
        { name: '8:00', avg: 20 },
        { name: '9:00', avg: 20 },
        { name: '10:00', avg: 20 },
        { name: '11:00', avg: 20 },
        { name: '12:00', avg: 20 },
        { name: '13:00', avg: 20 },
        { name: '14:00', avg: 20 },
        { name: '15:00', avg: 20 },
        { name: '16:00', avg: 20 },
        { name: '17:00', avg: 20 },
        { name: '18:00', avg: 20 },
        { name: '19:00', avg: 20 },
        { name: '20:00', avg: 20 }
    ]
    export const BredaDataThu = [
        { name: '8:00', avg: 100 },
        { name: '9:00', avg: 100 },
        { name: '10:00', avg: 90 },
        { name: '11:00', avg: 90 },
        { name: '12:00', avg: 80 },
        { name: '13:00', avg: 80 },
        { name: '14:00', avg: 70 },
        { name: '15:00', avg: 70 },
        { name: '16:00', avg: 60 },
        { name: '17:00', avg: 60 },
        { name: '18:00', avg: 50 },
        { name: '19:00', avg: 50 },
        { name: '20:00', avg: 40 }
    ]
    export const BredaDataFri = [
        { name: '8:00', avg: 0 },
        { name: '9:00', avg: 0 },
        { name: '10:00', avg: 3 },
        { name: '11:00', avg: 0 },
        { name: '12:00', avg: 0 },
        { name: '13:00', avg: 0 },
        { name: '14:00', avg: 7 },
        { name: '15:00', avg: 0 },
        { name: '16:00', avg: 0 },
        { name: '17:00', avg: 0 },
        { name: '18:00', avg: 0 },
        { name: '19:00', avg: 6 },
        { name: '20:00', avg: 0 }
    ]
    export const BredaDataSat = [
        { name: '8:00', avg: 10 },
        { name: '9:00', avg: 20 },
        { name: '10:00', avg: 30 },
        { name: '11:00', avg: 20 },
        { name: '12:00', avg: 10 },
        { name: '13:00', avg: 20 },
        { name: '14:00', avg: 30 },
        { name: '15:00', avg: 20 },
        { name: '16:00', avg: 10 },
        { name: '17:00', avg: 20 },
        { name: '18:00', avg: 30 },
        { name: '19:00', avg: 20 },
        { name: '20:00', avg: 10 }
    ]
    export const BredaDataSun = [
        { name: '8:00', avg: 100 },
        { name: '9:00', avg: 100 },
        { name: '10:00', avg: 100 },
        { name: '11:00', avg: 100 },
        { name: '12:00', avg: 100 },
        { name: '13:00', avg: 100 },
        { name: '14:00', avg: 100 },
        { name: '15:00', avg: 100 },
        { name: '16:00', avg: 100 },
        { name: '17:00', avg: 100 },
        { name: '18:00', avg: 100 },
        { name: '19:00', avg: 100 },
        { name: '20:00', avg: 100 }
    ]

    export const DenboschDataMon = [
        { name: '8:00', avg: 80 },
        { name: '9:00', avg: 90 },
        { name: '10:00', avg: 40 },
        { name: '11:00', avg: 10 },
        { name: '12:00', avg: 10 },
        { name: '13:00', avg: 40 },
        { name: '14:00', avg: 90 },
        { name: '15:00', avg: 90 },
        { name: '16:00', avg: 90 },
        { name: '17:00', avg: 90 },
        { name: '18:00', avg: 90 },
        { name: '19:00', avg: 90 },
        { name: '20:00', avg: 90 }
    ]
    export const DenboschDataTue = [
        { name: '8:00', avg: 10 },
        { name: '9:00', avg: 20 },
        { name: '10:00', avg: 30 },
        { name: '11:00', avg: 40 },
        { name: '12:00', avg: 50 },
        { name: '13:00', avg: 60 },
        { name: '14:00', avg: 70 },
        { name: '15:00', avg: 80 },
        { name: '16:00', avg: 90 },
        { name: '17:00', avg: 80 },
        { name: '18:00', avg: 70 },
        { name: '19:00', avg: 60 },
        { name: '20:00', avg: 50 }
    ]
    export const DenboschDataWed = [
        { name: '8:00', avg: 20 },
        { name: '9:00', avg: 20 },
        { name: '10:00', avg: 20 },
        { name: '11:00', avg: 20 },
        { name: '12:00', avg: 20 },
        { name: '13:00', avg: 20 },
        { name: '14:00', avg: 20 },
        { name: '15:00', avg: 20 },
        { name: '16:00', avg: 20 },
        { name: '17:00', avg: 20 },
        { name: '18:00', avg: 20 },
        { name: '19:00', avg: 20 },
        { name: '20:00', avg: 20 }
    ]
    export const DenboschDataThu = [
        { name: '8:00', avg: 100 },
        { name: '9:00', avg: 100 },
        { name: '10:00', avg: 90 },
        { name: '11:00', avg: 90 },
        { name: '12:00', avg: 80 },
        { name: '13:00', avg: 80 },
        { name: '14:00', avg: 70 },
        { name: '15:00', avg: 70 },
        { name: '16:00', avg: 60 },
        { name: '17:00', avg: 60 },
        { name: '18:00', avg: 50 },
        { name: '19:00', avg: 50 },
        { name: '20:00', avg: 40 }
    ]
    export const DenboschDataFri = [
        { name: '8:00', avg: 0 },
        { name: '9:00', avg: 0 },
        { name: '10:00', avg: 3 },
        { name: '11:00', avg: 0 },
        { name: '12:00', avg: 0 },
        { name: '13:00', avg: 0 },
        { name: '14:00', avg: 7 },
        { name: '15:00', avg: 0 },
        { name: '16:00', avg: 0 },
        { name: '17:00', avg: 0 },
        { name: '18:00', avg: 0 },
        { name: '19:00', avg: 6 },
        { name: '20:00', avg: 0 }
    ]
    export const DenboschDataSat = [
        { name: '8:00', avg: 10 },
        { name: '9:00', avg: 20 },
        { name: '10:00', avg: 30 },
        { name: '11:00', avg: 20 },
        { name: '12:00', avg: 10 },
        { name: '13:00', avg: 20 },
        { name: '14:00', avg: 30 },
        { name: '15:00', avg: 20 },
        { name: '16:00', avg: 10 },
        { name: '17:00', avg: 20 },
        { name: '18:00', avg: 30 },
        { name: '19:00', avg: 20 },
        { name: '20:00', avg: 10 }
    ]
    export const DenboschDataSun = [
        { name: '8:00', avg: 100 },
        { name: '9:00', avg: 100 },
        { name: '10:00', avg: 100 },
        { name: '11:00', avg: 100 },
        { name: '12:00', avg: 100 },
        { name: '13:00', avg: 100 },
        { name: '14:00', avg: 100 },
        { name: '15:00', avg: 100 },
        { name: '16:00', avg: 100 },
        { name: '17:00', avg: 100 },
        { name: '18:00', avg: 100 },
        { name: '19:00', avg: 100 },
        { name: '20:00', avg: 100 }
    ]
   

    let data = ref()
    let number = 0
    export default defineComponent({
        name: 'LineChart',
        components: { Chart, Grid, Bar},
   
        props: {
            myString: {
                type: String,
                required: true
            },
            buttonValue: {
                type: String,
            }
        },


        setup(props) {
            const chosen = ref('');

            let myData: [];
            async function getData(gym: any) {
                try {
                    const response = await fetch(`http://localhost:8080/graphdata?gym=${gym}`);
                    if (response.ok) {
                        const jsonData = await response.json();
                        return jsonData;
                    } else {
                        console.error('Failed to fetch data from the server');
                    }
                } catch (error) {
                    console.error('Failed to fetch data from the server:', error);
                }
            }

            async function loadData() {
                const fetchedData = await getData(props.myString);
                data.value = fetchedData;
                chosen.value = props.myString;
                console.log(props.myString);
                console.log(data.value);
            }

            loadData();

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
            });

            return { chosen, data, margin, axis };
        }
    })
</script>