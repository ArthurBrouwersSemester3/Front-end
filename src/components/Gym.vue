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
    import { defineComponent, ref } from 'vue'
    import { Bar, Chart, Grid} from 'vue3-charts'
    import { useAuth0 } from '@auth0/auth0-vue';
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

        //
        setup(props) {
            const chosen = ref('');
            const { getAccessTokenSilently } = useAuth0();
            let myData: [];
            async function getData(gym: any) {
                const token = await getAccessTokenSilently();
                try {
                    const response = await fetch(`/graphdata?gym=${gym}`, {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    });
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