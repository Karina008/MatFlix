<template>
  <div class="searchpage-body">
      <Header />
      <center>
      <div  id="list_search" style="color:white; margin-bottom:10px;">
            <h3 style="margin-left:7px; font-weight:bold;"><i class="fas fa-star" style="color:yellow;"></i> <span style="background-color:green;">{{address12}}</span> 검색 결과</h3>
            <div style="display:inline-block; width: 11%; margin:7px;" class="" v-for="sear in searchstore" :key="sear.id">
                <div class=" card" style=" height: 15rem;">
                    <router-link :to="{path:'/detail/', query:{store:sear.pk}}"><img :src="sear.fields.image_url" style="height:100px;"  class="card-img-top" alt="..."></router-link>
                    <div class="card-body" style="padding:0.8rem; padding-left:0.3rem; padding-right:0.2rem">
                        <center>
                        <h5 class="card-title" ><router-link :to="{path:'/detail/', query:{store:sear.pk}}" style="color:black;">{{sear.fields.store_name}}</router-link></h5>
                        <p class="card-text" style="margin:2px;">{{sear.fields.address}}</p>
                        <p class="card-text" style="margin:2px;">{{sear.fields.category}}</p>
                        <p class="card-text" style="margin:2px;">{{sear.fields.tel}}</p>
                        </center>
                        <!-- <a href="#" class="btn btn-primary">Go somewhere</a> -->
                    </div>
                </div>
            </div>
        </div>
      </center>
  </div>
</template>

<script>
import Header from '@/components/Header'
import axios from '@/api.js';
export default {
    components: {Header,},
    beforeCreate: function () {
    if (!this.$session.has("user")) {
      this.$router.push('/')
    }
  },
    created() {
    const params = new URL(document.location).searchParams;
    var addressParam = params.get('local');
    axios.get(`/recommend/search/?local=${params.get('local')}`)
        .then(response => {
          this.searchstore = response.data
          this.address12 = addressParam

        })
        .catch(error => {
          console.log(error)
        })
    },
    data() {
        return {
            searchstore: [],
            address12: [],
    }
  },
}
</script>

<style>
.searchpage-body {
    min-height: 800px;
    background-color: black;
}
.card {
    color:black;
}
.card-title {
    white-space: pre-line;
    font-size: 1.2vw;
    font-weight: bold;
}
.card-text {
    white-space: pre-line;
    font-size: 0.8vw;
}
</style>