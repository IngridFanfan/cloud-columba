

<template>
  <div>
            <div class="form-group" v-bind:class="{ 'has-error': $v.firstName.$error }">
              <label >First name</label>
              <input class="form-control" v-model.trim="firstName" @input="$v.firstName.$touch()">
               <span class="help-block" v-if="$v.firstName.$error && !$v.firstName.required">First name is required</span>
            </div>
            <div class="form-group" v-bind:class="{ 'has-error': $v.lastName.$error }">
              <label>Last name</label>
              <input class="form-control" v-model.trim="lastName" @input="$v.lastName.$touch()">
               <span class="help-block" v-if="$v.lastName.$error && !$v.lastName.required">Last name is required</span>
            </div>

            <div class="form-group" v-bind:class="{ 'has-error': $v.email.$error }">
              <label>Email</label>
              <input class="form-control" v-model.trim="email" @input="$v.email.$touch()">
              <span class="help-block" v-if="$v.email.$error && !$v.email.required">Email is required</span>
              <span class="help-block" v-if="$v.email.$error && !$v.email.email">This is not a valid email!</span>
            </div>
          </div>
</template>

<script>


export default {
  name: 'firstStep',
  components:{

  },
  data () {
            return {

            }

        },
        methods: {

        }
}
</script>

<style scoped>


</style>
