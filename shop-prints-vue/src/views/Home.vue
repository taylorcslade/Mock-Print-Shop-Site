<template>
  <div>
    <div class="taylors-prints-container" v-bind:style="image">
      <div class="taylors-prints-title-container">
        <div class="tpt-title-words">
          TAYLOR'S PRINTS
        </div>
      </div>
      <div class="tpt-image-container">
      </div>
    </div>

    <div class="contact">
      <h3><em> Contact Me </em></h3>

      <div class="contact-me-container">
        <div class="contact-me">
          <p>Phone: (700) 000-0000</p>
          <p>Email: hello@taylorsladephotography.com</p>
        </div>
      </div>
    </div>

    <div class="footer-container">
      <div class='footer'>
        <a class='github-link' href='https://github.com/taylorcslade/creative-project.git'>Github Link</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      image: { backgroundImage: "url('/images/homePrint.jpg')" }
    };
  }
};
</script>

<style scoped>
.footer-container {
  background-color: #f8f9fa;
  padding: 30px 10px;
  display: flex;
  justify-content: center;
}

a.github-link:link {
  color: #767577;
}
a.github-link:hover {
  color: #000000;
  text-decoration: none;
}

.taylors-prints-title h1 {
  Font-Family: 'Roboto Condensed', Sans-Serif;
  font-weight: 125;
  Font-Size: 40px;
  display: flex;
  text-align: lefg;
  padding: 20px 20px 10px 0px;
  color: #696969;
}

.taylors-prints-container {
  display: flex;
  justify-content: center;
  padding: 20px 20px 20px 20px;
  height: 600px;
  background-position: center;
  background-size: 1200px;
  background-repeat: no-repeat;
}

.taylors-prints-title-container {
  display: flex;
  justify-content: space-around;
  /*background-color: #f2f3f4;*/
  width: 50%;
  align-items: center;
}

.tpt-image-container {
  display: flex;
  justify-content: space-around;
  width: 50%;
  align-items: center;
}

.tpt-title-words{
  Font-Family: 'Ruda', Sans-Serif;
  Font-Size: 48px;
  color: #ffffff;
  padding: 0px 20px 20px 100px;
}

.contact-me-container{
  display: flex;
  justify-content: center;
  padding: 0 0 50px 0;
}

.contact-me p {
  color: #555353;
  font-size: 22px;
  width: 800px;
  Font-Family: 'Source Sans Pro', Sans-Serif;
  text-align: center;
}

.contact h3{
  font-weight: 100;
  display: flex;
  Font-Family: 'Playfair Display', Serif;
  Font-Size: 35px;
  padding: 50px 20px 50px 20px;
  text-align: center;
  justify-content: center;
}
</style>
