<template>
<div>
<div class="reviews-title">
  <h1><strong>REVIEWS</strong></h1>
</div>


<div class="reviews1-container">
  <div class = "reviews1">
    <div class="section1">
      The print turned out exactly as I expected! It's perfect! Thank you so much
      for working with me through the process!
      -D. Donaldson
    </div>
    <div class="section2">
      Exceptional service. Proofs were clear and easy to read. Shipping was
      fast and exceptionally well done so there was no damage to the prints.
      Highly recommend this seller! - Calla G.
    </div>
    <div class="section3">
      Taylor was very timely in both communicating and sending the proof for any edits.
      The prints came just as promised and on very good quality paper. would order again!
      -Joe F.
    </div>
  </div>
</div>

<div class="reviews2-container">
  <div class="reviews2">
    <div class="section4">
      I ordered two print-outs (one for my home town and one for my spouse's)
      to put in our new office. The shipped quickly and arrived in great condition.
      Communication from the owner was always timely.
      -Hannah A.
    </div>
    <div class="section5">
      It's perfect! Taylor was very accommodating and quick to
      respond and make changes. I bought a frame and I can't wait to give it
      to my friend for their birthday!
      -Marlowe C.
    </div>
  </div>
</div>
</div>
</template>

<style scoped>
.reviews1-container {
  display: flex;
  justify-content: center;
  color: #292829;
  padding: 30px 0;
  height: 270px;
}

.reviews1 {
  Font-Family: 'Roboto Slab', Serif;
  Font-Size: 16px;
  display: flex;
  justify-content: space-between;
  /* border: 1px solid #FF0000; */  /* For debugging */
  width: 1000px;
}

.section1, .section2, .section3 {
  width: 31%;
}

.reviews2-container{
  display: flex;
  justify-content: center;
  color: #292829;
  background-color: #f5f5f5;
  padding: 30px 0;
  height: 270px;
}

.reviews2 {
  display: flex;
  justify-content: space-between;
  Font-Family: 'Roboto Slab', Serif;
  Font-Size: 16px;
  /*border: 1px solid #FF0000; */
  width: 750px;
}

.section4, .section5 {
  width: 46%;
}

.reviews-title h1{
  font-weight: 100;
  display: flex;
  Font-Family: 'Roboto Condensed', Sans-Serif;
  font-weight: 125;
  Font-Size: 40px;
  text-align: center;
  justify-content: center;
  padding: 40px 40px 40px 40px;
  background-color: #92aca6;
  color: #ffffff;
  margin: 0 0 30px 0;
}

</style>
