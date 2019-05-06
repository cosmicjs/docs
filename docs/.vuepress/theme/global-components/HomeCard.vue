<script>
export default {
  name: 'HomeCard',
  props: {
    title: {
      type: String,
      required: true
    },
    url: {
      type: String
    },
    description: {
      type: String
    }
  }
}
</script>

<template>
	<div class="home-card">
    <p class="home-card-title">
      <a :href="url" >{{ title }}</a>
    </p>
    <slot></slot>
    <a :href="url" class="home-card-btn">Learn more</a>
  </div>
</template>

<style lang="stylus">
@require '../styles/config'

.home-card {
  box-shadow: rgba(0,21,64,.14) 0 2px 6px, rgba(0,21,64,.05) 0 10px 20px;
  border-radius: 20px;
  border: 14px solid #fff;
  background: #fff;
  text-align: center;
  padding: 10px 0;
  margin-bottom: 30px;
}

.home-card-title {
  margin: 0;
  font-size: 1.4rem;
}

.home-card-btn {
  display: inline-block;
  margin-bottom: 0;
  font-weight: 400;
  text-align: center;
  vertical-align: middle;
  touch-action: manipulation;
  cursor: pointer;
  background-image: none;
  border: 1px solid transparent;
  white-space: nowrap;
  padding: 6px 12px;
  font-size: 14px;
  line-height: 1.42857143;
  border-radius: 3px;
  background-color: $accentColor;
  color: #fff;
}
</style>
