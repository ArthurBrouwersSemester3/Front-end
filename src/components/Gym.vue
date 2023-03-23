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
                required: true
            }
        },
        setup(props) {
            const chosen = ref('');
            
            if (props.myString === 'Eindhoven') {
                data = ref(EindhovenDataMon)
                chosen.value = 'Eindhoven';
            }
            else if (props.myString === 'Breda') {
                data = ref(BredaDataMon)
                chosen.value = 'Breda';
            }
            else if (props.myString === 'Denbosch') {
                data = ref(DenboschDataMon)
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
            });
            watchEffect(() => {
                   
                if (props.myString === 'Eindhoven') {
                    console.log(props.buttonValue)
                    if (props.buttonValue === '0') {
                        console.log('mon')
                        data.value = EindhovenDataMon
                    }
                    else if (props.buttonValue === '1') {
                        console.log('Tue')
                        data.value = EindhovenDataTue
                    }
                    else if (props.buttonValue === '2') {
                        console.log('Wed')
                        data.value = EindhovenDataWed
                    }
                    else if (props.buttonValue === '3') {
                        console.log('Thu')
                        data.value = EindhovenDataThu
                    }
                    else if (props.buttonValue === '4') {
                        console.log('Fri')
                        data.value = EindhovenDataFri
                    }
                    else if (props.buttonValue === '5') {
                        console.log('Sat')
                        data.value = EindhovenDataSat
                    }
                    else if (props.buttonValue === '6') {
                        console.log('Sun')
                        data.value = EindhovenDataSun
                    }
                    chosen.value = 'Eindhoven'
                }

                else if (props.myString === 'Breda') {
                    if (props.buttonValue === '0') {
                        console.log('mon')
                        data.value = BredaDataMon
                    }
                    else if (props.buttonValue === '1') {
                        console.log('Tue')
                        data.value = BredaDataTue
                    }
                    else if (props.buttonValue === '2') {
                        console.log('Wed')
                        data.value = BredaDataWed
                    }
                    else if (props.buttonValue === '3') {
                        console.log('Thu')
                        data.value = BredaDataThu
                    }
                    else if (props.buttonValue === '4') {
                        console.log('Fri')
                        data.value = BredaDataFri
                    }
                    else if (props.buttonValue === '5') {
                        console.log('Sat')
                        data.value = BredaDataSat
                    }
                    else if (props.buttonValue === '6') {
                        console.log('Sun')
                        data.value = BredaDataSun
                    }
                    chosen.value = 'Breda'
                }

                  else if (props.myString === 'Denbosch') {
                    if (props.buttonValue === '0') {
                        console.log('mon')
                        data.value = DenboschDataMon
                    }
                    else if (props.buttonValue === '1') {
                        console.log('Tue')
                        data.value = DenboschDataTue
                    }
                    else if (props.buttonValue === '2') {
                        console.log('Wed')
                        data.value = DenboschDataWed
                    }
                    else if (props.buttonValue === '3') {
                        console.log('Thu')
                        data.value = DenboschDataThu
                    }
                    else if (props.buttonValue === '4') {
                        console.log('Fri')
                        data.value = DenboschDataFri
                    }
                    else if (props.buttonValue === '5') {
                        console.log('Sat')
                        data.value = DenboschDataSat
                    }
                    else if (props.buttonValue === '6') {
                        console.log('Sun')
                        data.value = DenboschDataSun
                    }
                    chosen.value = 'Denbosch'
                }
                console.log(data.value)
            })

            return { chosen, data, direction, margin, axis };
        }
    })
</script>