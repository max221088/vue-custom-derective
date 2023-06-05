<template >
    <div class="wrapper">
        <div class="slider-container" v-Sliders="{}" >
            <div class="slider-row">
                <div class="slide" v-for="item in products" :key="item.id">
                <img :src=item.avatar>
                </div>
                <!-- <div class="slide" >
                    <img src="../assets/img/slide2.jpg"/>
                </div>
                <div class="slide" >
                    <img src="../assets/img/slide3.jpg"/>
                </div> -->
            </div>
            <a class="arrow next">next</a>
            <a class="arrow prev">prev</a>
            <div class="nav-bar">
                <ul class="nav-butt">
                    <li class="but " v-for="item, index in products" :key="index" :data-position=index+1>{{ index + 1 }}</li>
                    <!-- <li class="but" data-position="2">2</li>
                    <li class="but" data-position="3">3</li> -->
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'SliderComponent',
  props: ['products']
}
</script>