<template>
  <div class="index container">
    <div class="card" v-for="smoothie in smoothies" :key="smoothie.id">
      <div class="card-content">
        <i class="material-icons delete" @click="deleteSmoothie(smoothie.id)">delete</i>
        <h2 class="indigo-text">{{ smoothie.title }}</h2>
        <ul class="ingredients">
          <li v-for="(ingredient, index) in smoothie.ingredients" :key="index">
            <span class="chip">{{ ingredient }}</span>
          </li>
        </ul>
      </div>
      <span class="btn-floating btn-large halfway-fab pink">
        <router-link :to="{ name: 'EditSmoothie', params: { smoothie_slug: smoothie.slug }}" >
          <i class="material-icons edit">edit</i>
        </router-link>
      </span>
    </div>
  </div>
</template>

<script>
import { db } from '@/firebase/init'

export default {
  name: 'Index',
  data () {
    return {
      smoothies: []
    }
  },
  methods: {
    async deleteSmoothie (id) {
      // Delete from firestore nos for data object smoothies
      try {
        await db.collection('smoothies').doc(id).delete()
        this.smoothies = this.smoothies.filter(smoothie => smoothie.id !== id)
      } catch (error) {}
    }
  },
  async created () {
    // fetch data form firestore
    try {
      const snapshot = await db.collection('smoothies').get()
      snapshot.forEach(doc => {
        const smoothie = doc.data()
        smoothie.id = doc.id
        this.smoothies.push(smoothie)
      })
    } catch (error) {}
  }
}
</script>

<style lang="scss">
.index {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 30px;
  margin-top: 60px;

  h2 {
    font-size: 1.8em;
    text-align: center;
    margin-top: 0;
  }

  .ingredients {
    margin: 30px auto;

    li {
      display: inline-block;
    }
  }

  .delete {
    position: absolute;
    top: 4px;
    right: 4px;
    cursor: pointer;
    color: #aaa;
    font-size: 1.4em;
  }
}
</style>
