<template>
  <div class='album-item' @click.stop='selectShow'>
    <div class='album-cover'>
      <img :src="album.cover" class='album-img'>
    </div>
    <div class='album-infos'>
      <p class='album-name'>{{album.name}}</p>
      <p class='album-update'>{{album.desc}}</p>
    </div>
  </div>
</template>

<script>
import {mapMutations} from 'vuex'
export default {
  props: {
    album: {}
  },
  mounted () {
  },
  methods: {
    ...mapMutations({
      setShow: 'setShow'
    }),
    selectShow () {
      this.setShow(this.album)
      this.$emit('selectShow', this.album)
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../common/style/index.scss";
.album-item {
  width: 100%;
  height: 100px;
  @include border-bottom-1px(#666);
  display: flex;
  align-content: center;
  overflow: hidden;
  .album-cover {
    display: flex;
    flex: 0 0 66px;
    align-items: center;
    justify-content: center;
    padding-left: 15px;
    .album-img {
      width: 100%;
      height: 66px;
    }
  }
  .album-infos {
    flex: 1;
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding-left: 10px;
    font-size: 14px;
    line-height: 28px;
    .album-name {
      color: #fff;
    }
    .album-update {
      width: 280px;
      color: #888;
      @include no-wrap();
    }
  }
}
</style>
