<template>
  <b-container>
    <b-row class="my-3">
      <b-col sm="2">
        <h2><b>Prijava</b></h2>
      </b-col>
      <b-col sm="6">
        <b-form>
          <b-form-group
            id="fieldset-1"
            label="Vaš email naslov"
            label-for="input-1"
            :invalid-feedback="feedback.email.invalid"
            :valid-feedback="feedback.email.valid"
            :state="fieldState.email"
          >
            <b-form-input id="input-1" v-model="email" :state="fieldState.email" trim type="email"></b-form-input>
          </b-form-group>
          <b-form-group
            id="fieldset-2"
            label="Vaše geslo"
            label-for="input-2"
            :invalid-feedback="feedback.password.invalid"
            :valid-feedback="feedback.password.valid"
            :state="fieldState.password"
          >
            <b-form-input
              id="input-2"
              v-model="password"
              :state="fieldState.password"
              trim
              type="password"
            ></b-form-input>
          </b-form-group>
          <b-button @click="login" variant="success">Prijava</b-button>
        </b-form>
      </b-col>
    </b-row>
    <b-row class="my-5">
      <b-col sm="2">
        <h2>Še nimaš računa?</h2>
      </b-col>
      <b-col sm="6">
        <b-button to="/register" variant="warning">Ustvari nov račun</b-button>
      </b-col>
    </b-row>
  </b-container>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  data: function() {
    return {
      feedback: {
        email: {
          valid: "",
          invalid: "Uporabnik s tem email naslovom ne obstaja."
        },
        password: {
          valid: "",
          invalid: "Kombinacija emaila in gesla ni pravilna."
        }
      },
      fieldState: {
        email: null,
        password: null
      },
      email: null,
      password: null
    };
  },
  methods: {
    login(): void {
      (this as any).$auth
        .loginWith("local", {
          data: {
            email: this.email,
            password: this.password
          }
        })
        .then((res: any) => {
          (this as any).$toast.success('Pozdravljeni nazaj!')
          // this.$router.replace("/")
        })
        .catch((err: any) => {
          (this as any).$toast.error('Napaka pri prijavi.')
        });
    }
  }
});
</script>

<style>
</style>