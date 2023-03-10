<template>
    <Bar :data="chartData" />
</template>

<script lang="ts">
    import { Bar } from 'vue-chartjs'
    import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'
    let chosen = ''
    ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

    export default {

        props: {
            myString: {
                type: String,
                required: true
            }
        },
             name: 'BarChart',
            components: { Bar },
        setup(props) {
                chosen = props.myString
                if (chosen === 'Eindhoven') {
                    return {

                        chartData: {
                            labels: ['January', 'February', 'March'],
                            datasets: [
                                {
                                    label: 'Data One',
                                    backgroundColor: '#f87979',
                                    data: [40, 20, 12]
                                }
                            ]
                        }

                    }
                }
                else if (chosen === 'Breda') {
                    return {

                        chartData: {
                            labels: ['January', 'February', 'March'],
                            datasets: [
                                {
                                    label: 'Data One',
                                    backgroundColor: '#f87979',
                                    data: [70, 70, 70]
                                }
                            ]
                        }

                    }
                }
            }
        }
</script>