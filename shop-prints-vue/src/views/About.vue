<template>
<div>
  <div class="about-me-container" >
    <div class="about-me-words-container" v-bind:style="image">
      <div class="about-me-words">
          <strong>ABOUT ME</strong>
      </div>
    </div>
  </div>

  <div class="about-description-container">
    <div class="hello-container">
      <div class="hello"><em>hello!</em></div>
    </div>
    <div class="description-container">
      <div class="description">
        <h2>My name is Taylor and I am the owner of <strong><em>'Taylor's Prints'.</em></strong>
        This shop is a way for me to combine two of my <em>favorite</em> things to do:
        traveling and photography. </h2>
        <h3>I have travelled to some beautiful places and taking
        pictures is a way for me to remember the beauty of where I once was. All of these
        prints are photos taken by me with love, and adoration for the world around me! I
        hope you enjoy these prints and have a piece of international heaven in your home.</h3>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      image: { backgroundImage: "url('/images/about.jpg')" }
    };
  }
};
</script>

<style scoped>
.about-me-container {
  display:flex;
  justify-content: center;
}

.about-me-words-container {
  height:450px;
  width:1200px;
  display:flex;
  justify-content: space-around;
}

.about-me-words{
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-areas: "none none side";
  Font-Family: 'Ruda', Sans-Serif;
  Font-Size: 45px;
  color: #000000;
}

.about-me-words strong{
  grid-area: side;
  align-self:center;
}

.about-description-container{
  display: flex;
  justify-content: center;
  flex-direction: column;
}

.hello-container{
  display: flex;
  justify-content: center;
}

.hello{
  display: flex;
  justify-content: space-around;
  margin: 30px 0 0 0;
  padding: 22px;
  Font-Family: 'Playfair Display', Serif;
  Font-Size: 40px;
  color: #92aca6;
  width: 1200px;
}

.description-container{
  display: flex;
  justify-content: center;
}

.description{
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  padding: 33px;
  Font-Family: 'Roboto Slab', Serif;
  font-weight: 1;
  color: #000000;
  width: 900px;
}

.description h2 {
  Font-Size: 21px;
}

.description strong {
  Font-Size: 25px;
}

.description h3 {
  Font-Size: 18px;
}

.description h2, .description h3{
  padding: 0 0 30px 0;
  line-height: 1.75;
}
</style>
