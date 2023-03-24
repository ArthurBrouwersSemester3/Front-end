<script setup>
    import Gymgraph from '../components/Gym.vue' 
</script>


<template>
    <main>
        <h1>{{myString}}</h1> 
        <p>{{errormessage}} {{buttonValue}}</p>
        <button @click="onPrevious">Previous</button> <button @click="onNext">Next</button>
        <gymgraph :my-string="myString" :button-value="buttonValue"></gymgraph>
    </main>
</template>


<script>
    let daynumber = 0
    export default {
        
        components: {
            Gymgraph
        },
        props: {
            myString: {
                type: String,
                required: true
            }
        },
      data() {
          return {
              buttonValue: String,
              required: true,
              errormessage: String
          }

        },
        mounted() {
            this.buttonValue = ""
            this.errormessage = ""
            console.log(1)
        },
        methods: {
            handleButtonClick(value) {
                
                this.buttonValue = value;
            },
            onPrevious() {
                if (daynumber === 0) {
                    this.errormessage = "u can not go previous when it is monday"
                }
                else {
                    daynumber--,
                    console.log(daynumber)
                    this.handleButtonClick(daynumber.toString());
                }
            
                if(daynumber === 5)
                {
                   this.errormessage = ""
                }
            },
            onNext() {
                if (daynumber === 6) {
                    this.errormessage = "u can not go next when it is sunday"
                }
                else {
                    daynumber++,
                    console.log(daynumber)
                    this.handleButtonClick(daynumber.toString());
                }
                if (daynumber === 1) {
                    this.errormessage = ""
                }
              
            }
        }
    }

</script>
