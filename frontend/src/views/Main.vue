<template>
    <div class="mainpage-body">
        <Header/>
        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
        <div class="carousel-inner">
            <div class="carousel-item active">
                <img style="height:400px;" :src="carouselimage1.image_url" class="d-block w-100 " alt="...">
                <hr style="background-color:red;margin-top:2px; margin-bottom:8px;">
                <div style="margin-left:10px;">
                    <span style="color:white; font-weight:bold;"><i class="fas fa-circle" style="color:orange;"></i> {{carouselimage1.store_name}}</span>
                    <span style="color:white; font-size:0.5rem; ">({{carouselimage1.category}}) </span>
                    <router-link style="color:white; background-color:red; ;font-size:0.3rem;" class="btn" :to="'detail?store=' +carouselimage1.id">상세보기</router-link>
                    <br>
                    <span style="color:white;"><i class="fas fa-circle" style="color:orange;"></i> 평점 : {{carouselimage1.score}}</span>
                    <br>
                    <span style="color:white; font-size:0.9rem; margin-right:10px; "><i class="fas fa-circle" style="color:orange;"></i>  주소 : {{carouselimage1.address}}</span>
                    <span style="color:white; font-size:0.9rem; "><i class="fas fa-circle" style="color:orange;"></i> Tel : {{carouselimage1.tel}}</span>
                </div>
                <hr style="margin-bottom:0px;margin-top:8px; background-color:red;">
            </div>
            <div class="carousel-item">
                <img style="height:400px;" :src="carouselimage2.image_url" class="d-block w-100" alt="...">
                <hr style="background-color:red;margin-top:2px; margin-bottom:8px;">
                <div style="margin-left:10px;">
                    <span style="color:white; font-weight:bold;"><i class="fas fa-circle" style="color:orange;"></i> {{carouselimage2.store_name}}</span>
                    <span style="color:white; font-size:0.5rem; ">({{carouselimage2.category}}) </span>
                    <router-link style="color:white; background-color:red; ;font-size:0.3rem;" class="btn" :to="'detail?store=' +carouselimage2.id">상세보기</router-link>
                    <br>
                    <span style="color:white;"><i class="fas fa-circle" style="color:orange;"></i> 평점 : {{carouselimage2.score}}</span>
                    <br>
                    <span style="color:white; font-size:0.9rem;margin-right:10px; "><i class="fas fa-circle" style="color:orange;"></i>  주소 : {{carouselimage2.address}}</span>
                    <span style="color:white; font-size:0.9rem; "><i class="fas fa-circle" style="color:orange;"></i> Tel : {{carouselimage2.tel}}</span>
                </div>
                <hr style="margin-bottom:0px;margin-top:8px; background-color:red;">
            </div>
            <div class="carousel-item">
                <img style="height:400px;" :src="carouselimage3.image_url" class="d-block w-100" alt="...">
                <hr style="background-color:red;margin-top:2px; margin-bottom:8px;">
                <div style="margin-left:10px;">
                    <span style="color:white; font-weight:bold;"><i class="fas fa-circle" style="color:orange;"></i> {{carouselimage3.store_name}}</span>
                    <span style="color:white; font-size:0.5rem; ">({{carouselimage3.category}}) </span>
                    <router-link style="color:white; background-color:red; ;font-size:0.3rem;" class="btn" :to="'detail?store=' +carouselimage3.id">상세보기</router-link>
                    <br>
                    <span style="color:white;"><i class="fas fa-circle" style="color:orange;"></i> 평점 : {{carouselimage3.score}}</span>
                    <br>
                    <span style="color:white; font-size:0.9rem;margin-right:10px; "><i class="fas fa-circle" style="color:orange;"></i>  주소 : {{carouselimage3.address}}</span>
                    <span style="color:white; font-size:0.9rem; "><i class="fas fa-circle" style="color:orange;"></i> Tel : {{carouselimage3.tel}}</span>
                </div>
                <hr style="margin-bottom:0px;margin-top:8px; background-color:red;">
            </div>
        </div>
        <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
        </a>
        </div>
        <hr style="margin-bottom:3px;">
        <div class="mainlist" id="list_1" style="color:white; margin-bottom:10px;">
            <h3 style="margin-left:7px; font-weight:bold;"><i class="fas fa-star" style="color:yellow;"></i> 전국인기맛집 Top10</h3>
            <horizontal-scroll style="">
            <div style="display:inline-block; width: 11%; margin:7px;" class="" v-for="ko in koreaf" :key="ko.id">
                <div class=" card" style=" height: 15rem;">
                    <router-link :to="'detail?store=' +ko.pk"><img :src="ko.fields.image_url" style="height:100px;"  class="card-img-top" alt="..."></router-link>
                    <div class="card-body" style="padding:0.8rem; padding-left:0.3rem; padding-right:0.2rem">
                        <center>
                        <h5 class="card-title" ><router-link :to="'detail?store=' +ko.pk" style="color:black;">{{ko.fields.store_name}}</router-link></h5>
                        <p class="card-text" style="margin:2px; font-weight:bold; margin-top:1px;"><i class="fas fa-star" style="color:red;"></i> {{ko.fields.score}}점</p>
                        <p class="card-text" style="margin:2px;">{{ko.fields.address}}</p>
                        <p class="card-text" style="margin:2px;">{{ko.fields.category}}</p>
                        <p class="card-text" style="margin:2px;">{{ko.fields.tel}}</p>
                        </center>
                    </div>
                </div>
            </div>
            </horizontal-scroll>
        </div>
        <!-- 00유저가 좋아할만한 맛집 -->
        <div class="mainlist" id="list_2" style="color:white; margin-bottom:10px;">
            <h3 style="margin-left:7px; font-weight:bold;"><i class="fas fa-star" style="color:yellow;"></i> {{this.$session.get("user").id}}님이 좋아할만한 맛집</h3>
            <horizontal-scroll style="">
            <div style="display:inline-block; width: 11%; margin:7px;" class="" v-for="ma in mainlist " :key="ma.id">
                <div class=" card" style=" height: 15rem;">
                    <router-link :to="'detail?store=' +ma.id"><img :src="ma.image_url" style="height:100px;"  class="card-img-top" alt="..."></router-link>
                    <div class="card-body" style="padding:0.8rem; padding-left:0.3rem; padding-right:0.2rem">
                        <center>
                        <h5 class="card-title" ><router-link :to="'detail?store=' +ma.id" style="color:black;">{{ma.store_name}}</router-link></h5>
                        <p class="card-text" style="margin:2px; font-weight:bold; margin-top:1px;"><i class="fas fa-star" style="color:red;"></i> {{ma.score}}점</p>
                        <p class="card-text" style="margin:2px;">{{ma.address}}</p>
                        <p class="card-text" style="margin:2px;">{{ma.category}}</p>
                        <p class="card-text" style="margin:2px;">{{ma.tel}}</p>
                        </center>
                    </div>
                </div>
            </div>
            </horizontal-scroll>
        </div>
        <!-- 내 지역 인기 맛집 -->
        <div class="mainlist" id="list_3" style="color:white; margin-bottom:10px;">
            <h3 style="margin-left:7px; font-weight:bold;"><i class="fas fa-star" style="color:yellow;"></i> {{this.$session.get("user").local}}<span style="font-size:1rem">(내 지역)</span>인기맛집 Top10</h3>
            <horizontal-scroll style="">
            <div style="display:inline-block; width: 11%; margin:7px;" class="" v-for="lo in localflex" :key="lo.id">
                <div class=" card" style=" height: 15rem;">
                    <router-link :to="'detail?store=' +lo.pk"><img :src="lo.fields.image_url" style="height:100px;"  class="card-img-top" alt="..."></router-link>
                    <div class="card-body" style="padding:0.8rem; padding-left:0.3rem; padding-right:0.2rem">
                        <center>
                        <h5 class="card-title" ><router-link :to="'detail?store=' +lo.pk" style="color:black;">{{lo.fields.store_name}}</router-link></h5>
                        <p class="card-text" style="margin:2px; font-weight:bold; margin-top:1px;"><i class="fas fa-star" style="color:red;"></i> {{lo.fields.score}}점</p>
                        <p class="card-text" style="margin:2px;">{{lo.fields.address}}</p>
                        <p class="card-text" style="margin:2px;">{{lo.fields.category}}</p>
                        <p class="card-text" style="margin:2px;">{{lo.fields.tel}}</p>
                        </center>
                    </div>
                </div>
            </div>
            </horizontal-scroll>
        </div>
        <!-- 찜한 목록 -->
        <div class="mainlist" id="list_like" style="color:white; margin-bottom:10px;">
            <h3 style="margin-left:7px; font-weight:bold;"><i class="fas fa-star" style="color:yellow;"></i> 찜한 목록<span v-if="!likeflex.length>0" style="color:red; font-size:1rem;">(하나 이상 찜하기를 해야 목록이 나타납니다.)</span></h3>
            <horizontal-scroll style="">
            <div v-if="likeflex.length>0">
            <div style="display:inline-block; width: 11%; margin:7px;" class="" v-for="li in likeflex" :key="li.id">
                <div class=" card" style=" height: 15rem;">
                    <router-link :to="'detail?store=' +li.id"><img :src="li.image_url" style="height:100px;"  class="card-img-top" alt="..."></router-link>
                    <div class="card-body" style="padding:0.8rem; padding-left:0.3rem; padding-right:0.2rem">
                        <center>
                        <h5 class="card-title" ><router-link :to="'detail?store=' +li.id" style="color:black;">{{li.store_name}}</router-link></h5>
                        <p class="card-text" style="margin:2px; font-weight:bold; margin-top:1px;"><i class="fas fa-star" style="color:red;"></i> {{li.score}}점</p>
                        <p class="card-text" style="margin:2px;">{{li.address}}</p>
                        <p class="card-text" style="margin:2px;">{{li.category}}</p>
                        <p class="card-text" style="margin:2px;">{{li.tel}}</p>
                        </center>
                    </div>
                </div>
            </div>
            </div>
            </horizontal-scroll>
        </div>
        <div class="mainlist" id="list_4" style="color:white; margin-bottom:10px;">
            <h3 style="margin-left:7px; font-weight:bold;"><i class="fas fa-star" style="color:yellow;"></i> 1인 식당 추천</h3>
            <horizontal-scroll style="">
            <!-- <center> -->
            <div style="display:inline-block; width: 11%; margin:7px;" class="" v-for="sel in selfflex" :key="sel.id">
                <div class=" card" style=" height: 15rem;">
                    <router-link :to="'detail?store=' +sel.pk"><img :src="sel.fields.image_url" style="height:100px;"  class="card-img-top" alt="..."></router-link>
                    <div class="card-body" style="padding:0.8rem; padding-left:0.3rem; padding-right:0.2rem">
                        <center>
                        <h5 class="card-title" ><router-link :to="'detail?store=' +sel.pk" style="color:black;">{{sel.fields.store_name}}</router-link></h5>
                        <p class="card-text" style="margin:2px; font-weight:bold; margin-top:1px;"><i class="fas fa-star" style="color:red;"></i> {{sel.fields.score}}점</p>
                        <p class="card-text" style="margin:2px;">{{sel.fields.address}}</p>
                        <p class="card-text" style="margin:2px;">{{sel.fields.category}}</p>
                        <p class="card-text" style="margin:2px;">{{sel.fields.tel}}</p>
                        </center>
                        <!-- <a href="#" class="btn btn-primary">Go somewhere</a> -->
                    </div>
                </div>
            </div>
            <!-- </center> -->
            </horizontal-scroll>
        </div>
        <div class="mainlist" id="list_5" style="color:white; margin-bottom:10px;">
            <h3 style="margin-left:7px; font-weight:bold;"><i class="fas fa-star" style="color:yellow;"></i> 선택한 카테고리({{this.$session.get("user").category1}})</h3>
            <horizontal-scroll style="">
            <!-- <center> -->
            <div style="display:inline-block; width: 11%; margin:7px;" class="" v-for="ca1 in category1list" :key="ca1.id">
                <div class=" card" style=" height: 15rem;">
                    <router-link :to="'detail?store=' +ca1.pk"><img :src="ca1.fields.image_url" style="height:100px;"  class="card-img-top" alt="..."></router-link>
                    <div class="card-body" style="padding:0.8rem; padding-left:0.3rem; padding-right:0.2rem">
                        <center>
                        <h5 class="card-title" ><router-link :to="'detail?store=' +ca1.pk" style="color:black;">{{ca1.fields.store_name}}</router-link></h5>
                        <p class="card-text" style="margin:2px; font-weight:bold; margin-top:1px;"><i class="fas fa-star" style="color:red;"></i> {{ca1.fields.score}}점</p>
                        <p class="card-text" style="margin:2px;">{{ca1.fields.address}}</p>
                        <p class="card-text" style="margin:2px;">{{ca1.fields.category}}</p>
                        <p class="card-text" style="margin:2px;">{{ca1.fields.tel}}</p>
                        </center>
                        <!-- <a href="#" class="btn btn-primary">Go somewhere</a> -->
                    </div>
                </div>
            </div>
            <!-- </center> -->
            </horizontal-scroll>
        </div>
         <div class="mainlist" id="list_6" style="color:white; margin-bottom:10px;">
            <h3 style="margin-left:7px; font-weight:bold;"><i class="fas fa-star" style="color:yellow;"></i> 선택한 카테고리({{this.$session.get("user").category2}})</h3>
            <horizontal-scroll style="">
            <!-- <center> -->
            <div style="display:inline-block; width: 11%; margin:7px;" class="" v-for="ca2 in category2list" :key="ca2.id">
                <div class=" card" style=" height: 15rem;">
                    <router-link :to="'detail?store=' +ca2.pk"><img :src="ca2.fields.image_url" style="height:100px;"  class="card-img-top" alt="..."></router-link>
                    <div class="card-body" style="padding:0.8rem; padding-left:0.3rem; padding-right:0.2rem">
                        <center>
                        <h5 class="card-title" ><router-link :to="'detail?store=' +ca2.pk" style="color:black;">{{ca2.fields.store_name}}</router-link></h5>
                        <p class="card-text" style="margin:2px; font-weight:bold; margin-top:1px;"><i class="fas fa-star" style="color:red;"></i> {{ca2.fields.score}}점</p>
                        <p class="card-text" style="margin:2px;">{{ca2.fields.address}}</p>
                        <p class="card-text" style="margin:2px;">{{ca2.fields.category}}</p>
                        <p class="card-text" style="margin:2px;">{{ca2.fields.tel}}</p>
                        </center>
                        <!-- <a href="#" class="btn btn-primary">Go somewhere</a> -->
                    </div>
                </div>
            </div>
            <!-- </center> -->
            </horizontal-scroll>
        </div>
         <div class="mainlist" id="list_7" style="color:white; margin-bottom:10px;">
            <h3 style="margin-left:7px; font-weight:bold;"><i class="fas fa-star" style="color:yellow;"></i> 선택한 카테고리({{this.$session.get("user").category3}})</h3>
            <horizontal-scroll style="">
            <!-- <center> -->
            <div style="display:inline-block; width: 11%; margin:7px;" class="" v-for="ca3 in category3list" :key="ca3.id">
                <div class=" card" style=" height: 15rem;">
                    <router-link :to="'detail?store=' +ca3.pk"><img :src="ca3.fields.image_url" style="height:100px;"  class="card-img-top" alt="..."></router-link>
                    <div class="card-body" style="padding:0.8rem; padding-left:0.3rem; padding-right:0.2rem">
                        <center>
                        <h5 class="card-title" ><router-link :to="'detail?store=' +ca3.pk" style="color:black;">{{ca3.fields.store_name}}</router-link></h5>
                        <p class="card-text" style="margin:2px; font-weight:bold; margin-top:1px;"><i class="fas fa-star" style="color:red;"></i> {{ca3.fields.score}}점</p>
                        <p class="card-text" style="margin:2px;">{{ca3.fields.address}}</p>
                        <p class="card-text" style="margin:2px;">{{ca3.fields.category}}</p>
                        <p class="card-text" style="margin:2px;">{{ca3.fields.tel}}</p>
                        </center>
                        <!-- <a href="#" class="btn btn-primary">Go somewhere</a> -->
                    </div>
                </div>
            </div>
            <!-- </center> -->
            </horizontal-scroll>
        </div>
        <!-- 유저가 찜한 목록 -->
        <div class="mainfooter">
        </div>
    </div>
</template>

<script>
import Header from '@/components/Header'
import axios from '@/api.js';
import HorizontalScroll from 'vue-horizontal-scroll'
import 'vue-horizontal-scroll/dist/vue-horizontal-scroll.css'
// import $ from "jquery";
export default {
    components: {Header, HorizontalScroll},
    beforeCreate: function () {
    if (!this.$session.has("user")) {
      this.$router.push('/')
    }
  },
    created(){
        axios.get("/recommend/mainstore/")
            .then(({data}) => {
                this.stores = data.results;
                
                // console.log(this.$session.get("user"))
                // console.log(this.stores.results)
            })
            .catch((error) => {
                console.dir(error);
            });
        axios.get("/recommend/koreaflex/")
            .then(({data}) => {
                this.koreaf = data;
                
                // console.log(this.stores.results)
            })
            .catch((error) => {
                console.dir(error);
            });
        axios.get("/recommend/selfflex/")
            .then(({data}) => {
                this.selfflex = data;
                
                // console.log(this.stores.results)
            })
            .catch((error) => {
                console.dir(error);
            });
        axios.get("recommend/randomimage/")
            .then(({data}) => {
                this.carouselimage1 = data[0];
                this.carouselimage2 = data[1];
                this.carouselimage3 = data[2];
                
                // console.log(this.stores.results)
            })
            .catch((error) => {
                console.dir(error);
            });
        axios.get(`recommend/category1/?category1=${this.$session.get("user").category1}`)
            .then(({data}) => {
                this.category1list = data;
                
                // console.log(this.$session.get("user").gender)
                // console.log(this.stores.results)
            })
            .catch((error) => {
                console.dir(error);
            });
        axios.get(`recommend/category2/?category2=${this.$session.get("user").category2}`)
            .then(({data}) => {
                this.category2list = data;
                
                // console.log(this.$session.get("user").gender)
                // console.log(this.stores.results)
            })
            .catch((error) => {
                console.dir(error);
            });
        axios.get(`recommend/category3/?category3=${this.$session.get("user").category3}`)
            .then(({data}) => {
                this.category3list = data;
                
                // console.log(this.$session.get("user").gender)
                // console.log(this.stores.results)
            })
            .catch((error) => {
                console.dir(error);
            });
        // mainrecommendstore
        axios.get(`recommend/mainrecommendstore/?local=${this.$session.get("user").local}&age=${this.now + 1 - this.$session.get("user").age}&gender=${this.$session.get("user").gender}`)
            .then(({data}) => {
                this.mainlist = data;
                
                // console.log(this.$session.get("user").gender)
                // console.log(this.stores.results)
            })
            .catch((error) => {
                console.dir(error);
            });
        // localflex
        axios.get(`recommend/localflex/?local=${this.$session.get("user").local}`)
            .then(({data}) => {
                this.localflex = data;
                
            })
            .catch((error) => {
                console.dir(error);
            });
        //likeflex
        axios.get(`recommend/likeflex/?userid=${this.$session.get("user").id}`)
            .then(({data}) => {
                this.likeflex = data;
            
            })
            .catch((error) => {
                console.dir(error);
            });
    },
    data() {
        return {
            stores: [],
            koreaf: [],
            selfflex: [],
            carouselimage1: {},
            carouselimage2: {},
            carouselimage3: {},
            category1list: [],
            category2list: [],
            category3list: [],
            mainlist: [],
            localflex: [],
            now : new Date().getFullYear(),
            likeflex: [],
        }
    },
    
    methods: {
        
    }
    
}
</script>

<style>
.mainpage-body {
    min-height: 800px;
    background-color: black;
}
.mainfooter {
    height: 30px;
    background-color: black;
}
.card {
    color:black;
}
.card-title {
    white-space: pre-line;
    font-size: 1.2vw;
    font-weight: bold;
    margin-bottom: 2px;
}
.card-text {
    white-space: pre-line;
    font-size: 0.8vw;
}
._horizontal-scroll::-webkit-scrollbar {
    height: 10px;
  }
._horizontal-scroll::-webkit-scrollbar-thumb {
    background-color: #2f3542;
    border-radius: 10px;
  }
._horizontal-scroll::-webkit-scrollbar-track {
    background-color: grey;
    border-radius: 10px;
    box-shadow: inset 0px 0px 5px white;
  }
</style>