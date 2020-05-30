<template>
  <b-container>
    <b-row class="my-3">
      <b-col sm="2">
        <h2><b>Ustvari nov račun</b></h2>
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
          <b-form-group
            id="fieldset-3"
            label="Ponovite vaše geslo"
            label-for="input-3"
            :invalid-feedback="feedback.password2.invalid"
            :valid-feedback="feedback.password2.valid"
            :state="fieldState.password2"
          >
            <b-form-input
              id="input-3"
              v-model="password2"
              :state="fieldState.password2"
              trim
              type="password"
            ></b-form-input>
          </b-form-group>
          <b-button @click="register" variant="success">Registracija</b-button>
        </b-form>
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
        },
        password2: {
          valid: "",
          invalid: "Gesli se ne ujemata."
        }
      },
      fieldState: {
        email: null,
        password: null,
        password2: null
      },
      email: null,
      password: null,
      password2: null
    };
  },
  methods: {
    register(): void {
      const passExists = this.password != null;
      if (
        this.password === this.password2 &&
        passExists &&
        this.email != null
      ) {
        if ((this.password as any).length >= 8) {
          const data = {
            email: this.email,
            password: this.password
          };
          this.$axios
            .post("auth/registracija/", data)
            .then((res: any) => {
              (this as any).$toast.success("Registracija uspešna.");
              console.log(res.data);
            })
            .catch((err: any) => {
              if (err.response != null) {
                (this as any).$toast.error(err.response.data.message);
              } else {
                (this as any).$toast.error("Napaka pri registraciji.");
              }
            });
        }
      } else {
        console.log("Pogoji niso zagotovljeni.");
      }
    }
  },
  watch: {
    password: function(val: String): void {
      if (val.length < 8) {
        (this.fieldState.password as any) = false;
        this.feedback.password.invalid = "Geslo mora biti dolgo vsaj 8 znakov.";
      } else {
        (this.fieldState.password as any) = true;
      }
    },
    password2: function(val: String): void {
      if (this.password != this.password2) {
        (this.fieldState.password2 as any) = false;
      } else {
        (this.fieldState.password2 as any) = true;
      }
    }
  },
  computed: {}
});
</script>

<style>
</style>