<template>
    <div class="wrapper">
        <div class="slider-container">
            <div class="slider-row">
                <div class="slide" style="background-image: url(./img/slide1.jpg);"></div>
                <div class="slide" style="background-image: url(./img/slide2.jpg);"></div>
                <div class="slide" style="background-image: url(./img/slide3.jpg);"></div>
            </div>
            <a class="arrow next">next</a>
            <a class="arrow prev">prev</a>
            <div class="nav-bar">
                <ul class="nav-butt">
                    <li class="but active" data-position="1">1</li>
                    <li class="but" data-position="2">2</li>
                    <li class="but" data-position="3">3</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'SliderComponent',
  props: {
    msg: String
  }
}
</script>