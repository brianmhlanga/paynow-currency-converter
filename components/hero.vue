<template>
<div class="hero heroheight">
  <div class="hero-left">
    <span class="tagline mb-20">A Smarter Way To Do Business</span>
    <h1 class="TagLine">Invoicing Solutions</h1>
    <p class="Hero-paragraph">Empowering Businesses with Seamless Invoicing, Customer Management, and Point of Sale Solutions. Seamlessly connect your data, teams, and customers on one Customer-driven platform that grows with your business.</p>
    <button class="Hero-button">Get Started Now</button>

  </div>

  <div class="hero-right">
    <img src="/images/banner1.png" class="bannerimage" alt="Hero Image">
  </div>
</div>

</template>
<style>
.heroheight {
    padding: 0;
    border: 1px solid var(--surface-border);
    border-top: 0 none;
    margin-top: 85px;
}
span.tagline {
    background-color: #0052ff;
    padding: 10px;
    color: white;
    font-size: 15px;
    border-radius: 21px;
    width: 250px;
}

.hero {
    display: flex;
    height: 100vh;
    background-color: #fcfbfe;
}

.hero-left {
  flex: 1;
  padding: 0px 0px 60px 0; /* Remove padding on the left */
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 80px;
}

.TagLine {
  font-size: 3em;
  margin-bottom: 15px;
}

.Heading-tag {
  color: #fd8d14;
}

.Hero-paragraph {
  font-size: 1em;
  margin-bottom: 20px;
  color: #777;
  max-width: 400px;
}

.Hero-button {
    font-size: 1em;
    /* font-weight: bold; */
    padding: 10px 15px;
    border: none;
    width: 200px;
    height: 53px;
    background-color: #4c4b4b;
    color: #ffffff;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
    align-self: start;
}
.Hero-button:hover {
    background-color: #f2f3f7;
    border: 1px solid #231f20;
    color: #313131;
}
.avatar-section {
  display: flex;
  align-items: center;
  margin-top: 20px;
}

.avatar-group {
  display: flex;
  gap: -20px;
}

.avatar-group img {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  transition: transform 0.3s;
  margin-left: -5px;
}

.avatar-text {
  margin-left: 20px;
  font-size: 1em;
  color: #777;
}

.avatar-num{
 color: #fd8d14;
   font-size: 1em;
  font-weight:bold;
}

.hero-right {
  flex: 1;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.hero-right img {
    width: auto;
    height: 500px;
    border-radius: 20px;
}
/* Responsive styles for smaller devices */
@media only screen and (max-width: 768px) {
  .hero {
    flex-direction: column;
  }

  .hero-left {
    margin-top: 5rem;
    text-align: center;
     margin-left: 0px;
  }

  .hero-right img {
    display: none;
  }

  .Hero-paragraph {
    text-align: center;
    max-width: 100%;
    margin-top: 20px;
  }

  .Hero-button {
    width: 100%;
    margin-top: 20px;
  }

  .avatar-section {
    justify-content: center;
    flex-direction: column;
    gap: 20px;
  }

  .avatar-text {
    text-align: center;
  }
  
  .avatar-num{
 color: #fd8d14;
   font-size: 1em;
  font-weight:bold;
    
}

}
</style>