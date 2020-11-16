<template>
  <div class="detailpage-body">
      <Header/>
      <div id="detail_map" style="height:400px;">
        <div id="map" class="map"></div>
      </div>
      <hr style="background-color:red;">
      <div style="margin-left:20px;">
        <button @click="like()" class="btn btn-danger" style=" font-weight:bold;float:right; height:50px;margin-right:30px;">
          <i class="far fa-heart" v-if="!this.likecheck" style="red">찜하기</i>
          <i class="fas fa-heart" v-else>해제</i>
        </button>
        <h3 style="font-weight:bold; ">{{store.store_name}}</h3>
        <p style="font-weight:bold;"><i class="fas fa-star" style="color:yellow;"></i> 평점 : {{store.score}}</p>
        <p>위치 : {{store.address}}</p>
        <p>카테고리 : <span v-for="cate in store.category_list" :key="cate.id" >{{cate}} </span></p>
        <p v-if="bhour.length>0">영업시간 : {{bhour[0].fields.start_time}} ~ {{bhour[0].fields.end_time}}</p>
        <div v-if="menu.length>0">
          <h5 style="font-weight:bold; margin-bottom:15px;"><i class="fas fa-star" style="color:orange;"></i> 메뉴</h5>
          <p style="margin-left:0px; font-size:0.8rem;; display:inline; margin-right:10px;" v-for="me in menu" :key="me.id"><i class="fas fa-circle" style="color:red;"></i>  {{me.menu_name}} : {{me.price.slice(0,-4)}}</p>
        </div>
      </div>
      <hr style="background-color:red;">
      <div style="margin-left:20px;" id="otherstore">
          <p>이 식당을 방문한 사람이 즐겨 찾는 곳</p>
          <div  id="list_1" style="color:white; margin-bottom:10px;">
            <horizontal-scroll style="">
            <div style="display:inline-block; width: 11%; margin:7px;" class="" v-for="rec in recommend" :key="rec.id">
                <div class=" card" style=" height: 15rem;">
                    <router-link :to="'detail?store=' +rec.id"><img :src="rec.image_url" style="height:100px;"  class="card-img-top" alt="..."></router-link>
                    <div class="card-body" style="padding:0.8rem; padding-left:0.3rem; padding-right:0.2rem">
                        <center>
                        <h5 class="card-title" ><router-link :to="'detail?store=' +rec.id" style="color:black;">{{rec.store_name}}</router-link></h5>
                        <p class="card-text" style="margin:2px;">{{rec.address}}</p>
                        <p class="card-text" style="margin:2px;">{{rec.category}}</p>
                        <p class="card-text" style="margin:2px;">{{rec.tel}}</p>
                        </center>
                    </div>
                </div>
            </div>
            </horizontal-scroll>
        </div>
      </div>
      <hr style="background-color:red;">
      <center>
        <div id="chart" class="container">
          <div class="row">
            <div class="col" style="display:inline;">
                <h4 style="display:inline;font-weight:bold;">성별</h4>
                <PieChart style="width:50%; height:300px;"></PieChart>
            </div>
            <div class="col" style="display:inline;">
                <h4 style="display:inline;font-weight:bold;">연령대</h4>
                <BarChart style="width:50%; height:300px;"></BarChart>
            </div>
          </div>
        </div>
      </center>
      <hr style="background-color:red;">
      <div class="d-flex flex-row bd-highlight mb-3 ml-3">
        <div class="py-1 pl-1 bd-highlight">평점<input type="number" min="0" max="10" v-model="review_score" placeholder="0 ~ 10" class="w-75"></div>
        <div class="p-1 col-10 bd-highlight">내용<input type="text" v-model="review_content" class="w-100"></div>
        <div class="mt-4 ml-2 bd-highlight"><button @click="writeReview()" class="btn btn-danger">리뷰 작성</button></div>
      </div>
      <div id="reviewlist" style="margin-left:20px;">
          <h5 style="font-weight:bold">Reviews</h5>
          <div v-for="review in reviews" :key="review.id">
            <span style="font-weight:bold"><i class="fas fa-circle" style="color:green;"></i><span > {{review.gender}}({{now-review.age}})</span> / {{review.score}}점 / {{review.content}} <span style="color:gray; margin-left:20px;font-weight:bold;font-size:0.8rem; ">{{review.reg_time.slice(0,-22)}}</span></span>
          </div>
      </div>
  </div>
</template>

<script>
import Header from '@/components/Header'
import axios from '@/api.js';
import PieChart from '@/components/PieChart'
import BarChart from '@/components/BarChart'
import HorizontalScroll from 'vue-horizontal-scroll'
import 'vue-horizontal-scroll/dist/vue-horizontal-scroll.css'

export default {
  components: { Header, PieChart , BarChart , HorizontalScroll },
  beforeCreate: function () {
    if (!this.$session.has("user")) {
      this.$router.push('/')
    }
  },
  data() {
    return {
      store : [],
      reviews : [],
      totalscore: 0,
      now : new Date().getFullYear(),
      comment:"",
      likecheck: 0,
      latitude : 0,
      longitude : 0,
      manchart : {},
      recommend: [],
      bhour: [],
      menu:[],
      review_content: "",
      review_score: "",
    }
  },

  created() {
    const params = new URL(document.location).searchParams;
    // 주소를 통해서 storeid 넘겨받음
    var storeidParam = params.get('store');
    if(storeidParam != null){
      axios.get(`/recommend/mainstore/${params.get('store')}/`)
        .then(response => {
          this.store = response.data
          window.kakao && window.kakao.maps
          ? this.initMap()
          : this.addKakaoMapScript();
        })
        .catch(error => {
          console.log(error)
        })
      axios.get(`/recommend/detailReviewList/?store=${params.get('store')}`)
        .then(response => {
          this.reviews = response.data.results.reverse()
        })
        .catch(error => {
          console.log(error)
        })
      axios.get(`/recommend/genderage/?store=${params.get('store')}`)
        .then(response => {
          this.$session.set("chartdata", response.data)
          if (self.name != 'reload') {
            self.name = 'reload';
            self.location.reload(true);
          } else self.name = ''; 
        })
        .catch(error => {
          console.log(error)
        })
      axios.get(`/recommend/detailrecommendstore/?store=${params.get('store')}`)
      .then(response => {
          this.recommend = response.data
        })
      .catch(error => {
        console.log(error)
      })
      axios.get(`/recommend/bhour/?store=${params.get('store')}`)
      .then(response => {
          this.bhour = response.data
        })
      .catch(error => {
        console.log(error)
      })
      axios.get(`/recommend/menulist/?store=${params.get('store')}`)
      .then(response => {
          this.menu = response.data
        })
      .catch(error => {
        console.log(error)
      })
      let likeTemp = new FormData()
        likeTemp.append('store_id', params.get("store"))
        likeTemp.append('user_id', this.$session.get("user").id)
      axios.post('/recommend/likecheck/', likeTemp)
      .then(({data}) => {
        if (data === 200) {
          this.likecheck = true
        } else {
          this.likecheck = false
        }
      }).catch(err => {
        console.log(err)
      })
    }
  },

  methods: {
    like() {
      let likeStatus = new FormData()
        likeStatus.append('store_id', this.store.id)
        likeStatus.append('user_id', this.$session.get("user").id)
      axios.post('/recommend/like/', likeStatus)
      .then(({data}) => {
        if (data === 200) this.likecheck = false
        else this.likecheck = true
        location.reload()
      }).catch(err => {
        console.log(err)
      })
    },
    
    writeReview() {
      let newReview = new FormData()
        newReview.append('store', this.store.id)
        newReview.append('userid', this.$session.get("user").id)
        newReview.append('score', this.review_score)
        newReview.append('content', this.review_content)
      axios.post('/recommend/reviewcreate/', newReview)
      .then(({data}) => {
        if (data === 200) {
          alert("리뷰가 등록되었습니다.")
          location.reload()
        }
      }).catch(err => {
        console.log(err)
      })
    },

    addKakaoMapScript() {
      const script = document.createElement("script");
      /* global kakao */
      script.onload = () => kakao.maps.load(this.initMap);
      script.src =
        "http://dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=b985742b129972b81ba64ea8ec478231";
      document.head.appendChild(script);
    },
    initMap() {
      var container = document.getElementById("map"); //지도를 담을 영역의 DOM 레퍼런스
      var options = {
        //지도를 생성할 때 필요한 기본 옵션
        center: new kakao.maps.LatLng(this.store.latitude, this.store.longitude), //지도의 중심좌표.
        level: 1 //지도의 레벨(확대, 축소 정도)
      };
      // 지도 생성 및 객체 리턴
      var map = new kakao.maps.Map(container, options); // eslint-disable-line no-unused-vars
      var markerPosition  = new kakao.maps.LatLng(this.store.latitude, this.store.longitude); 

      // 마커를 생성합니다
      var marker = new kakao.maps.Marker({
        position: markerPosition
      });

      // 마커가 지도 위에 표시되도록 설정합니다
      marker.setMap(map);
    },
  },
}
</script>

<style>
.detailpage-body {
    min-height: 800px;
    background-color: black;
    color:white;
}

.map {
  width: 100%;
  height: 400px;
}

input[type="number"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
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